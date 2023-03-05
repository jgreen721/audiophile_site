import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {BrowserRouter as Router} from "react-router-dom";
import { AppProvider } from './context/AppStore';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppProvider>
    <Router>
    <App />
    </Router>
    </AppProvider>
  </React.StrictMode>,
)
