import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {HashRouter as Router} from "react-router-dom";
import { AppProvider } from './context/AppStore';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <Router>

    <AppProvider>
    <App />
    </AppProvider>
    </Router>

  </React.StrictMode>,
)
