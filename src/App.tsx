import React from 'react';
import './App.css';
import { Nav } from './nav';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';

import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { HomePage } from './HomePage';
import { Work } from './Work';
import { Projects } from './Projects';
const theme = createTheme({
  typography: {
    fontFamily: 'Comfortaa',
  },
  palette: {
    primary: {
      main: 'rgb(30 41 59)',
      contrastText: '#fff',
    },
    secondary: {
      main: '#fff',
      contrastText: 'rgb(30 41 59)',
    }
  },
  components: {
    MuiPaper: {
      variants: [
        {
          props: {variant:'elevation'},
          style: {
            backgroundColor: '#e2e8f0'
          },
        },
      ]
    },
  }
});
 // bg-gradient-to-b from-slate-100 to-slate-400
const App:React.FC<{}> = () => {
  const items = ['home', 'work', 'projects'];
  const [selected, setSelected] = React.useState<string>('home');
  return (
    <>
      <Router basename='/'>
        <ThemeProvider theme={theme}>
          <div className="min-h-screen bg-gradient-to-b from-slate-200 to-slate-400">
            <div className="p-10">
              <Nav 
                highlighted={selected} 
                items={items} 
                changeHighlight={(item) => {
                  setSelected(item);
                }}
              />
            </div>
            <Routes>
              <Route path="/home" element={<HomePage/>} />
              <Route path="/work" element={<Work/>} />
              <Route path="/projects" element={<Projects/>} />
              <Route path="*" element={<Navigate to="/home" />}/>
            </Routes>
          </div>
        </ThemeProvider> 
      </Router>
    </>
  );
};

export default App;
