import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
// Anterior
import 'react-notifications/lib/notifications.css';
import { BrowserRouter, HashRouter, createBrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')!).render(
   <BrowserRouter>
    {/* <HashRouter basename="/shekels-app"> */}
        <App />
    {/* </HashRouter>, */}
   </BrowserRouter>, 
)
