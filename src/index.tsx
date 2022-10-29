import React from 'react';
import { ThemeProvider } from './provider/ThemeProvider';
import ReactDOM from 'react-dom/client';
import App from './App';
import {store} from './store/store'
import { BrowserRouter as Router } from 'react-router-dom';
import './styles/index.scss'
import { Provider } from 'react-redux';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
                  <Provider store={store}>
                    <Router>
                      <ThemeProvider>
                        <App />
                      </ThemeProvider>
                    </Router>
                  </Provider>  

             </React.StrictMode>
);
