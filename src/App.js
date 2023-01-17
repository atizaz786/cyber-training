import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import './App.css';
import Training from './pages/training';

const theme = createTheme({
  overrides: {
    MuiRadio: {
      root: {
        color: 'white',
      },
      colorSecondary: {
        '&$checked': {
          color: 'white',
        },
      },
    },
  },
  palette: {
    primary: {
      main: '#0077be',
      contrastText: "#ffffff",
    },
    secondary: {
      main: '#f50057',
      contrastText: "#ffffff",
    },
    text: {
      secondary:"#fff"
    }
  },
});

function App() {
  return (
    <Router>
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <Training />
   
</ThemeProvider>
</Router>
    
  );
}

export default App;




