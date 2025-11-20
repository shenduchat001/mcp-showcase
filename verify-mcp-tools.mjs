#!/usr/bin/env node
/**
 * MCP Tools Verification Script
 * Verifies GitHub links and npm package names for MCP tools
 */

import https from 'https';
import { readFileSync } from 'fs';

const MCP_DATA_FILE = './src/mcpData.ts';

// Read the data file
const content = readFileSync(MCP_DATA_FILE, 'utf-8');

// Extract tools (simplified regex)
const tools = [];
const toolRegex = /{\s*id:\s*['"]([^'"]+)['"][\s\S]*?name:\s*['"]([^'"]+)['"][\s\S]*?vendor:\s*['"]([^'"]+)['"][\s\S]*?command:\s*['"]([^'"]+)['"][\s\S]*?args:\s*\[([^\]]+)\][\s\S]*?homepage:\s*['"]([^'"]+)['"]/g;

let match;
while ((match = toolRegex.exec(content)) !== null) {
  const argsStr = match[5];
  const args = argsStr
    .split(',')
    .map(a => a.trim().replace(/['"]/g, ''))
    .filter(a => a && a !== 'undefined');
  
  tools.push({
    id: match[1],
    name: match[2],
    vendor: match[3],
    command: match[4],
    args: args,
    homepage: match[6]
  });
}

console.log(`Found ${tools.length} tools to verify\n`);

// Check GitHub URL
async function checkGitHub(url) {
  return new Promise((resolve) => {
    if (!url || !url.includes('github.com')) {
      resolve({ valid: false, error: 'Not a GitHub URL' });
      return;
    }
    
    // Extract repo path
    const match = url.match(/github\.com\/([^\/]+\/[^\/]+)/);
    if (!match) {
      resolve({ valid: false, error: 'Invalid GitHub URL format' });
      return;
    }
    
    const repoPath = match[1].replace(/\/tree\/.*$/, ''); // Remove /tree/... part
    const apiUrl = `https://api.github.com/repos/${repoPath}`;
    
    https.get(apiUrl, {
      headers: {
        'User-Agent': 'MCP-Verifier'
      }
    }, (res) => {
      let data = '';
      res.on('data', (chunk) => { data += chunk; });
      res.on('end', () => {
        if (res.statusCode === 200) {
          try {
            const repo = JSON.parse(data);
            resolve({ valid: true, repo: repoPath, fullName: repo.full_name });
          } catch {
            resolve({ valid: true, repo: repoPath });
          }
        } else if (res.statusCode === 404) {
          resolve({ valid: false, error: 'Repository not found (404)' });
        } else {
          resolve({ valid: false, error: `HTTP ${res.statusCode}` });
        }
      });
    }).on('error', (err) => {
      resolve({ valid: false, error: err.message });
    });
  });
}

// Check npm package
async function checkNpm(packageName) {
  return new Promise((resolve) => {
    if (!packageName || !packageName.startsWith('@')) {
      resolve({ valid: null }); // Skip non-npm packages
      return;
    }
    
    const apiUrl = `https://registry.npmjs.org/${packageName}`;
    
    https.get(apiUrl, (res) => {
      if (res.statusCode === 200) {
        resolve({ valid: true });
      } else if (res.statusCode === 404) {
        resolve({ valid: false, error: 'Package not found on npm' });
      } else {
        resolve({ valid: false, error: `HTTP ${res.statusCode}` });
      }
    }).on('error', () => {
      resolve({ valid: null }); // Network error, skip
    });
  });
}

// Verify tools
async function verifyTools() {
  const results = {
    valid: [],
    invalid: [],
    warnings: []
  };
  
  console.log('Verifying tools...\n');
  
  for (let i = 0; i < Math.min(tools.length, 50); i++) { // Limit to first 50 for testing
    const tool = tools[i];
    console.log(`[${i + 1}/${Math.min(tools.length, 50)}] Checking ${tool.id}...`);
    
    // Check GitHub
    const ghResult = await checkGitHub(tool.homepage);
    
    // Check npm package if applicable
    const npmPackage = tool.args.find(a => a.startsWith('@'));
    let npmResult = { valid: null };
    if (npmPackage) {
      npmResult = await checkNpm(npmPackage);
    }
    
    if (!ghResult.valid) {
      results.invalid.push({
        ...tool,
        githubError: ghResult.error,
        npmError: npmResult.error
      });
      console.log(`  ✗ GitHub: ${ghResult.error}`);
      if (npmResult.error) {
        console.log(`  ✗ npm: ${npmResult.error}`);
      }
    } else {
      if (npmPackage && npmResult.valid === false) {
        results.warnings.push({
          ...tool,
          githubValid: true,
          npmError: npmResult.error
        });
        console.log(`  ⚠ GitHub OK, but npm package ${npmPackage} not found`);
      } else {
        results.valid.push({ ...tool, ...ghResult });
        console.log(`  ✓ Valid`);
      }
    }
    
    // Rate limiting
    await new Promise(resolve => setTimeout(resolve, 300));
  }
  
  console.log(`\n=== Summary ===`);
  console.log(`Valid: ${results.valid.length}`);
  console.log(`Invalid: ${results.invalid.length}`);
  console.log(`Warnings: ${results.warnings.length}`);
  
  if (results.invalid.length > 0) {
    console.log(`\n=== Invalid Links ===`);
    results.invalid.forEach(t => {
      console.log(`\n${t.id} (${t.name})`);
      console.log(`  Homepage: ${t.homepage}`);
      console.log(`  Error: ${t.githubError}`);
      if (t.npmError) {
        console.log(`  npm Error: ${t.npmError}`);
      }
    });
  }
  
  if (results.warnings.length > 0) {
    console.log(`\n=== Warnings ===`);
    results.warnings.forEach(t => {
      console.log(`\n${t.id} (${t.name})`);
      console.log(`  GitHub: OK`);
      console.log(`  npm: ${t.npmError}`);
    });
  }
}

verifyTools().catch(console.error);

