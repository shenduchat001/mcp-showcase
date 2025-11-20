import React, { useState, useEffect, useMemo } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Paper, 
  Grid, 
  Card, 
  CardContent, 
  CardActions, 
  Button, 
  Chip, 
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Tabs,
  Tab,
  IconButton,
  Alert,
  Stack,
  ThemeProvider,
  createTheme,
  CssBaseline,
  Snackbar,
  Tooltip
} from '@mui/material';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import TerminalIcon from '@mui/icons-material/Terminal';
import VerifiedIcon from '@mui/icons-material/Verified';
import LinkIcon from '@mui/icons-material/Link';
import GitHubIcon from '@mui/icons-material/GitHub';
import BoltIcon from '@mui/icons-material/Bolt';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { MCP_DATA, MCPTool } from './mcpData';

// --- Theme Configuration ---
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#00f2ff' }, // Neon Cyan
    secondary: { main: '#bf00ff' }, // Neon Purple
    background: {
      default: '#050505',
      paper: '#0a0a0a',
    },
    text: {
      primary: '#ffffff',
      secondary: '#a0a0a0',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h3: { fontWeight: 800, letterSpacing: '-0.03em' },
    h6: { fontWeight: 600 },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          background: 'rgba(20, 20, 20, 0.4)',
          backdropFilter: 'blur(16px)',
          border: '1px solid rgba(255, 255, 255, 0.05)',
          borderRadius: '16px',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: { borderRadius: '8px', fontWeight: 600 },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: { borderRadius: '10px', textTransform: 'none', fontWeight: 600, letterSpacing: '0.5px' },
      },
    },
  },
});

const CATEGORIES = ['All', 'Core', 'DevTools', 'Database', 'Cloud', 'AI', 'SaaS', 'Social', 'Design', 'Web3', 'Science', 'Other'];
const PLATFORMS = ['Claude Desktop', 'Gemini CLI', 'CodeX CLI', 'Cursor Editor', 'VSCode'];

// --- Animations ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { staggerChildren: 0.05 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: 'spring', stiffness: 100 }
  }
};

export default function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedPlatform, setSelectedPlatform] = useState(0); 
  const [selectedTool, setSelectedTool] = useState<MCPTool | null>(null);
  const [toastOpen, setToastOpen] = useState(false);
  const { scrollY } = useScroll();
  
  const heroY = useTransform(scrollY, [0, 500], [0, 200]);
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setToastOpen(true);
  };

  const filteredTools = useMemo(() => {
    return MCP_DATA.filter(tool => {
      const matchesSearch = tool.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            tool.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || tool.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const featuredTools = MCP_DATA.filter(t => ['filesystem', 'github', 'postgres', 'brave-search'].includes(t.id));

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      
      {/* Animated Background Gradient */}
      <Box sx={{ 
        position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: -1,
        background: 'radial-gradient(circle at 50% 0%, #1a0b2e 0%, #000000 100%)',
        pointerEvents: 'none'
      }}>
         <Box sx={{
            position: 'absolute', top: '-20%', left: '-10%', width: '50%', height: '50%',
            background: 'radial-gradient(circle, rgba(0, 242, 255, 0.08) 0%, transparent 70%)',
            filter: 'blur(60px)', animation: 'pulse 10s infinite alternate'
         }} />
         <Box sx={{
            position: 'absolute', bottom: '-10%', right: '-10%', width: '60%', height: '60%',
            background: 'radial-gradient(circle, rgba(191, 0, 255, 0.08) 0%, transparent 70%)',
            filter: 'blur(80px)', animation: 'pulse 15s infinite alternate-reverse'
         }} />
      </Box>

      <Container maxWidth="xl" sx={{ py: 6, minHeight: '100vh' }}>
        
        {/* Hero Section */}
        <motion.div style={{ y: heroY, opacity: heroOpacity }}>
          <Box sx={{ mb: 12, textAlign: 'center', position: 'relative', pt: 8 }}>
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
              <Typography variant="h1" component="h1" sx={{ 
                fontWeight: 900, fontSize: { xs: '3rem', md: '5rem' }, 
                background: 'linear-gradient(135deg, #fff 0%, #a5f3fc 100%)', 
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                mb: 2, letterSpacing: '-0.04em'
              }}>
                MCP Directory
              </Typography>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.8 }}>
              <Typography variant="h5" color="text.secondary" sx={{ maxWidth: '700px', mx: 'auto', mb: 6, lineHeight: 1.6 }}>
                Discover <Box component="span" sx={{ color: 'primary.main', fontWeight: 'bold' }}>{MCP_DATA.length}+</Box> production-ready tools to supercharge your AI agents.
                <br/>
                The missing link for Claude, Gemini, and Cursor.
              </Typography>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5 }}>
              <Stack direction="row" spacing={2} justifyContent="center">
                <Button 
                  variant="contained" 
                  size="large"
                  sx={{ 
                    px: 4, py: 1.5, fontSize: '1.1rem', 
                    background: 'linear-gradient(90deg, #00f2ff 0%, #00a8ff 100%)',
                    color: '#000',
                    boxShadow: '0 0 20px rgba(0, 242, 255, 0.3)'
                  }}
                  onClick={() => document.getElementById('directory')?.scrollIntoView({ behavior: 'smooth' })}
                  endIcon={<KeyboardArrowDownIcon />}
                >
                  Explore Tools
                </Button>
                <Button 
                  variant="outlined" 
                  size="large"
                  startIcon={<GitHubIcon />} 
                  href="https://github.com/modelcontextprotocol" 
                  target="_blank"
                  sx={{ px: 3, borderColor: 'rgba(255,255,255,0.2)', color: '#fff' }}
                >
                  Official Repo
                </Button>
              </Stack>
            </motion.div>
          </Box>
        </motion.div>

        {/* Featured Section (Static for stability, but stylized) */}
        <Box sx={{ mb: 8 }}>
          <Typography variant="overline" sx={{ color: 'primary.main', letterSpacing: '0.2em', fontWeight: 'bold', mb: 2, display: 'block' }}>
            RECOMMENDED STARTERS
          </Typography>
          <Grid container spacing={3}>
            {featuredTools.map((tool, i) => (
              <Grid item xs={12} md={3} key={tool.id}>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  transition={{ delay: 0.6 + (i * 0.1) }}
                  whileHover={{ y: -5 }}
                >
                  <Card sx={{ 
                    height: '100%', 
                    background: 'linear-gradient(180deg, rgba(0, 242, 255, 0.05) 0%, rgba(0,0,0,0) 100%)',
                    border: '1px solid rgba(0, 242, 255, 0.15) !important' 
                  }}>
                    <CardContent>
                      <BoltIcon sx={{ color: 'primary.main', mb: 1 }} />
                      <Typography variant="h6" gutterBottom>{tool.name}</Typography>
                      <Typography variant="body2" color="text.secondary">{tool.description}</Typography>
                    </CardContent>
                    <CardActions>
                       <Button size="small" sx={{ color: 'primary.main' }} onClick={() => setSelectedTool(tool)}>Quick Install</Button>
                    </CardActions>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Controls & Directory */}
        <div id="directory">
           <Paper sx={{ p: 3, mb: 4, borderRadius: 4, border: '1px solid rgba(255,255,255,0.08)', background: 'rgba(10,10,10,0.8)' }}>
            <Grid container spacing={3} alignItems="center">
              <Grid item xs={12} md={4}>
                <TextField
                  fullWidth
                  variant="outlined"
                  placeholder="Search tools..."
                  InputProps={{ startAdornment: <SearchIcon sx={{ mr: 1, color: 'text.secondary' }} /> }}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  sx={{ 
                    '& .MuiOutlinedInput-root': { borderRadius: 3, bgcolor: 'rgba(255,255,255,0.03)' },
                    '& fieldset': { borderColor: 'rgba(255,255,255,0.1)' }
                  }}
                />
              </Grid>
              <Grid item xs={12} md={8}>
                <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', justifyContent: { xs: 'flex-start', md: 'flex-end' } }}>
                  {CATEGORIES.map(cat => (
                    <Chip 
                      key={cat} 
                      label={cat} 
                      clickable 
                      color={selectedCategory === cat ? "primary" : "default"} 
                      onClick={() => setSelectedCategory(cat)}
                      variant={selectedCategory === cat ? "filled" : "outlined"}
                      sx={{ 
                        border: selectedCategory === cat ? 'none' : '1px solid rgba(255,255,255,0.1)',
                        bgcolor: selectedCategory === cat ? 'primary.main' : 'transparent',
                        color: selectedCategory === cat ? '#000' : '#fff',
                        transition: 'all 0.2s'
                      }}
                    />
                  ))}
                </Box>
              </Grid>
            </Grid>
            
            <Box sx={{ mt: 3, pt: 3, borderTop: '1px solid rgba(255,255,255,0.05)' }}>
               <Stack direction="row" spacing={3} alignItems="center">
                 <Typography variant="subtitle2" color="text.secondary" sx={{ minWidth: '120px', fontWeight: 'bold' }}>INSTALL FOR:</Typography>
                 <Tabs 
                   value={selectedPlatform} 
                   onChange={(_, v) => setSelectedPlatform(v)} 
                   indicatorColor="primary" 
                   textColor="primary"
                   sx={{ '& .MuiTab-root': { minWidth: 'auto', px: 2, color: '#666' }, '& .Mui-selected': { color: '#fff !important' } }}
                 >
                   {PLATFORMS.map(p => <Tab key={p} label={p} />)}
                 </Tabs>
               </Stack>
            </Box>
          </Paper>
        </div>

        {/* Results Count */}
        {filteredTools.length > 0 && (
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            Showing {filteredTools.length} of {MCP_DATA.length} tools
          </Typography>
        )}

        {/* Animated Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          // Reset animation when filtering changes
          key={selectedCategory + searchTerm} 
        >
          {filteredTools.length === 0 ? (
            <Box sx={{ textAlign: 'center', py: 8 }}>
              <Typography variant="h5" gutterBottom>
                No tools found
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                Try adjusting your search or filters
              </Typography>
              <Button 
                variant="outlined" 
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('All');
                }}
              >
                Clear filters
              </Button>
            </Box>
          ) : (
          <Grid container spacing={3}>
            <AnimatePresence mode='popLayout'>
              {filteredTools.map(tool => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={tool.id}>
                  <motion.div variants={itemVariants} layout>
                    <Card 
                      component={motion.div}
                      whileHover={{ y: -8, boxShadow: '0 10px 40px -10px rgba(0,242,255,0.15)', border: '1px solid rgba(0,242,255,0.3)' }}
                      sx={{ height: '100%', display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'visible' }}
                    >
                      <CardContent sx={{ flexGrow: 1 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', mb: 2 }}>
                          <Typography variant="h6" component="div" fontWeight="bold" sx={{ fontSize: '1.1rem' }}>
                            {tool.name}
                          </Typography>
                          {tool.vendor === 'Official' && (
                            <Tooltip title="Official Implementation">
                              <VerifiedIcon sx={{ color: '#00f2ff', fontSize: '1.2rem' }} />
                            </Tooltip>
                          )}
                        </Box>
                        <Chip 
                          label={tool.category} 
                          size="small" 
                          sx={{ 
                            mb: 2, height: '22px', fontSize: '0.7rem', 
                            bgcolor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#aaa' 
                          }} 
                        />
                        <Typography variant="body2" color="text.secondary" sx={{ mb: 2, lineHeight: 1.6, fontSize: '0.875rem' }}>
                          {tool.description}
                        </Typography>
                      </CardContent>
                      <CardActions sx={{ p: 2, pt: 0, justifyContent: 'space-between' }}>
                        <Button 
                          size="small" 
                          onClick={() => setSelectedTool(tool)} 
                          variant="contained"
                          aria-label={`Install ${tool.name} for ${PLATFORMS[selectedPlatform]}`}
                          sx={{ 
                            bgcolor: 'rgba(255,255,255,0.08)', 
                            color: '#fff',
                            '&:hover': { bgcolor: 'primary.main', color: '#000' },
                            minWidth: '100px'
                          }}
                        >
                          Install
                        </Button>
                        {tool.homepage && (
                          <IconButton size="small" href={tool.homepage} target="_blank" sx={{ color: '#666', '&:hover': { color: '#fff' } }}>
                            <LinkIcon fontSize="small" />
                          </IconButton>
                        )}
                      </CardActions>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </AnimatePresence>
          </Grid>
          )}
        </motion.div>

        {/* Detail Dialog (unchanged logic, just styling) */}
        <Dialog 
          open={!!selectedTool} 
          onClose={() => setSelectedTool(null)} 
          maxWidth="md" 
          fullWidth
          PaperProps={{
            component: motion.div,
            initial: { scale: 0.9, opacity: 0 },
            animate: { scale: 1, opacity: 1 },
            sx: { borderRadius: 4, background: '#111', border: '1px solid #333' }
          }}
        >
          {selectedTool && (
            <>
              <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #222', p: 3 }}>
                <Box>
                  <Typography variant="h5" fontWeight="bold">{selectedTool.name}</Typography>
                  <Stack direction="row" spacing={1} sx={{ mt: 0.5 }}>
                     <Chip label={selectedTool.vendor} size="small" color={selectedTool.vendor === 'Official' ? 'primary' : 'default'} variant="outlined" />
                     <Chip label={selectedTool.category} size="small" variant="outlined" />
                  </Stack>
                </Box>
                <IconButton onClick={() => setSelectedTool(null)}><CloseIcon /></IconButton>
              </DialogTitle>
              <DialogContent sx={{ mt: 2, p: 3 }}>
                <Box sx={{ mb: 4 }}>
                   <Alert 
                    severity="info" 
                    icon={<TerminalIcon fontSize="inherit" />} 
                    sx={{ 
                      mb: 3, borderRadius: 2, 
                      bgcolor: 'rgba(0, 242, 255, 0.05)', 
                      color: '#fff', 
                      border: '1px solid rgba(0, 242, 255, 0.2)',
                      '& .MuiAlert-icon': { color: '#00f2ff' }
                    }}
                   >
                      Installing for <strong>{PLATFORMS[selectedPlatform]}</strong>
                   </Alert>
                   
                   {selectedPlatform === 3 ? (
                     <CursorConfigGuide tool={selectedTool} onCopy={handleCopy} />
                   ) : selectedPlatform === 4 ? (
                     <VSCodeConfigGuide tool={selectedTool} onCopy={handleCopy} />
                   ) : (
                     <JsonConfigGuide tool={selectedTool} platformIndex={selectedPlatform} onCopy={handleCopy} />
                   )}
                </Box>

                <Box>
                  <Typography variant="h6" gutterBottom sx={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px', color: '#666', mb: 2 }}>
                    Configuration Variables
                  </Typography>
                  {selectedTool.env ? (
                    <Stack spacing={1.5}>
                      {Object.entries(selectedTool.env).map(([key, val]) => (
                        <Box key={key} sx={{ bgcolor: '#000', p: 2, borderRadius: 2, border: '1px solid #222', fontFamily: 'monospace', fontSize: '0.85rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <Box>
                             <span style={{color: '#ff79c6'}}>{key}</span>
                          </Box>
                          <span style={{color: '#50fa7b', opacity: 0.5 }}>YOUR_KEY_HERE</span>
                        </Box>
                      ))}
                    </Stack>
                  ) : (
                    <Typography variant="body2" color="text.secondary" sx={{ fontStyle: 'italic' }}>No API keys required for this tool.</Typography>
                  )}
                </Box>
              </DialogContent>
            </>
          )}
        </Dialog>
        
        <Snackbar
          open={toastOpen}
          autoHideDuration={2000}
          onClose={() => setToastOpen(false)}
          message="Copied to clipboard"
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
          ContentProps={{
             sx: { bgcolor: '#00f2ff', color: '#000', fontWeight: 'bold' }
          }}
        />
      </Container>
    </ThemeProvider>
  );
}

// --- Helper Components ---

function CursorConfigGuide({ tool, onCopy }: { tool: MCPTool, onCopy: (t: string) => void }) {
  const commandString = `${tool.command} ${tool.args.join(' ')}`;
  
  return (
    <Stack spacing={2}>
      <Paper variant="outlined" sx={{ p: 2.5, bgcolor: 'rgba(255,255,255,0.02)', borderRadius: 2, border: '1px solid #333' }}>
        <Typography variant="subtitle2" color="primary" gutterBottom>1. Open Settings</Typography>
        <Typography variant="body2" color="text.secondary">
          Navigate to <strong>Cursor Settings</strong> &gt; <strong>Features</strong> &gt; <strong>MCP</strong>.
        </Typography>
      </Paper>
      <Paper variant="outlined" sx={{ p: 2.5, bgcolor: 'rgba(255,255,255,0.02)', borderRadius: 2, border: '1px solid #333' }}>
        <Typography variant="subtitle2" color="primary" gutterBottom>2. Add New Server</Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          Click <strong>"Add new MCP server"</strong> and use these details:
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={3}><Typography variant="body2" color="#666">Name</Typography></Grid>
            <Grid item xs={9}><Typography variant="body2" fontFamily="monospace" sx={{ color: '#fff' }}>{tool.id}</Typography></Grid>
            
            <Grid item xs={3}><Typography variant="body2" color="#666">Type</Typography></Grid>
            <Grid item xs={9}><Typography variant="body2" fontFamily="monospace" sx={{ color: '#fff' }}>stdio</Typography></Grid>
            
            <Grid item xs={12}>
               <Typography variant="body2" color="#666" gutterBottom sx={{ mt: 1 }}>Command</Typography>
               <Paper 
                  onClick={() => onCopy(commandString)}
                  sx={{ 
                    p: 2, cursor: 'pointer', bgcolor: '#000', border: '1px solid #444', 
                    fontFamily: 'monospace', fontSize: '0.85rem', color: '#a5d6ff',
                    transition: 'border-color 0.2s',
                    '&:hover': { borderColor: 'primary.main' },
                    position: 'relative'
                  }}
               >
                  {commandString}
                  <ContentCopyIcon sx={{ position: 'absolute', right: 10, top: 10, fontSize: 16, opacity: 0.5 }} />
               </Paper>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Stack>
  );
}

function VSCodeConfigGuide({ tool, onCopy }: { tool: MCPTool, onCopy: (t: string) => void }) {
  const configObj = {
    "mcp.servers": {
      [tool.id]: {
        command: tool.command,
        args: tool.args,
        env: tool.env || undefined
      }
    }
  };
  const content = JSON.stringify(configObj, null, 2);

  return (
    <Stack spacing={2}>
      <Paper variant="outlined" sx={{ p: 2.5, bgcolor: 'rgba(255,255,255,0.02)', borderRadius: 2, border: '1px solid #333' }}>
        <Typography variant="subtitle2" color="primary" gutterBottom>1. Install MCP Extension</Typography>
        <Typography variant="body2" color="text.secondary">
          Install the <strong>MCP</strong> extension from the VSCode marketplace.
        </Typography>
      </Paper>
      <Paper variant="outlined" sx={{ p: 2.5, bgcolor: 'rgba(255,255,255,0.02)', borderRadius: 2, border: '1px solid #333' }}>
        <Typography variant="subtitle2" color="primary" gutterBottom>2. Add to Settings</Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          Add this configuration to your <strong>settings.json</strong>:
        </Typography>
        <Paper 
          onClick={() => onCopy(content)}
          sx={{ 
            mt: 2, p: 2, cursor: 'pointer', bgcolor: '#000', border: '1px solid #444', 
            fontFamily: 'monospace', fontSize: '0.85rem', color: '#a5d6ff',
            transition: 'border-color 0.2s',
            '&:hover': { borderColor: 'primary.main' },
            position: 'relative'
          }}
        >
          {content}
          <ContentCopyIcon sx={{ position: 'absolute', right: 10, top: 10, fontSize: 16, opacity: 0.5 }} />
        </Paper>
      </Paper>
    </Stack>
  );
}

function JsonConfigGuide({ tool, platformIndex, onCopy }: { tool: MCPTool, platformIndex: number, onCopy: (t: string) => void }) {
  const getConfigFile = () => {
    if (platformIndex === 0) return 'claude_desktop_config.json';
    if (platformIndex === 1) return 'gemini_cli_settings.json';
    if (platformIndex === 2) return 'codex_cli_config.toml';
    return 'openai_mcp_config.json';
  };

  const getConfigContent = () => {
    // Gemini CLI uses settings.json format
    if (platformIndex === 1) {
      const configObj = {
        mcpServers: {
          [tool.id]: {
            command: tool.command,
            args: tool.args,
            env: tool.env || undefined
          }
        }
      };
      return JSON.stringify(configObj, null, 2);
    }
    
    // CodeX CLI uses TOML format
    if (platformIndex === 2) {
      const argsStr = tool.args.map(a => `"${a}"`).join(', ');
      const envStr = tool.env ? Object.entries(tool.env).map(([k, v]) => `  ${k} = "${v}"`).join('\n') : '';
      return `[mcp_servers.${tool.id}]
command = "${tool.command}"
args = [${argsStr}]
${envStr ? `env = {\n${envStr}\n}` : ''}`;
    }
    
    // Default JSON format (Claude Desktop, OpenAI)
    const configObj = {
      mcpServers: {
        [tool.id]: {
          command: tool.command,
          args: tool.args,
          env: tool.env || undefined
        }
      }
    };
    return JSON.stringify(configObj, null, 2);
  };

  const content = getConfigContent();

  return (
    <Paper variant="outlined" sx={{ bgcolor: '#000', p: 0, position: 'relative', border: '1px solid #333', borderRadius: 2, overflow: 'hidden' }}>
      <Box sx={{ p: 1.5, borderBottom: '1px solid #333', bgcolor: '#111', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="caption" sx={{ color: '#888', fontFamily: 'monospace' }}>
          {getConfigFile()}
        </Typography>
        <Button 
          size="small" 
          startIcon={<ContentCopyIcon />}
          onClick={() => onCopy(content)}
          sx={{ height: '28px', fontSize: '0.75rem', color: 'primary.main' }}
        >
          Copy JSON
        </Button>
      </Box>
      <Box sx={{ p: 2.5, overflowX: 'auto' }}>
        <pre style={{ margin: 0, color: '#d4d4d4', fontFamily: 'Consolas, Monaco, monospace', fontSize: '0.85rem', lineHeight: 1.5 }}>
          {content}
        </pre>
      </Box>
      {platformIndex === 2 && (
        <Box sx={{ p: 2, bgcolor: 'rgba(255,255,255,0.02)', borderTop: '1px solid #333' }}>
          <Typography variant="caption" color="text.secondary">
            Note: CodeX CLI uses TOML format. Save this to <code>~/.codex/config.toml</code>
          </Typography>
        </Box>
      )}
    </Paper>
  );
}
