import React from 'react';
import { ThemeProvider } from './provider/ThemeProvider';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import './styles/index.scss'


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
      <ThemeProvider><App /></ThemeProvider>
    </Router>
  </React.StrictMode>
);
