import { createTheme } from '@mui/material/styles';


// Centralized MUI theme configuration
export const getTheme = (mode: 'light' | 'dark') =>
createTheme({
palette: {
mode,
primary: { main: '#6366f1' }, // Indigo primary brand color
secondary: { main: '#f59e0b' }, // Amber accent color
success: { main: '#10b981' }, // Success actions
background: {
default: mode === 'light' ? '#f9fafb' : '#0f172a',
paper: mode === 'light' ? '#ffffff' : '#020617',
},
},
typography: {
fontFamily: 'Inter, sans-serif', // Modern SaaS font
h1: { fontWeight: 800 },
h2: { fontWeight: 700 },
},
shape: { borderRadius: 16 }, // Rounded modern UI
shadows: [
'none',
'0 10px 30px rgba(0,0,0,0.15)', // Glassmorphism shadow
],
});