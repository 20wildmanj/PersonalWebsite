import React from 'react';
import './App.css';
import { Nav } from './nav';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { HomePage } from './HomePage';
import { Work } from './Work';
const theme = createTheme({
  typography: {
    fontFamily: 'Comfortaa',
  },
  palette: {
    primary: {
      main: '#ffffff'
    },
  },
});
 // bg-gradient-to-b from-slate-100 to-slate-400
const App = () => (
  <>
    <Router>
      <ThemeProvider theme={theme}>
        <div className="min-h-screen bg-gradient-to-b from-slate-500 to-slate-800">
          <div className="p-10">
            <Nav highlighted="home"/>
          </div>
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/work" element={<Work/>} />
          </Routes>
        </div>
      </ThemeProvider> 
    </Router>
  </>
);

export default App;
