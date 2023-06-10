import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Home.jsx'
import './index.css'
import setupLocatorUI from "@locator/runtime";
import { BrowserRouter } from 'react-router-dom/dist/index.js';

if (  import.meta.env.NODE_ENV === "development") {
  setupLocatorUI();
}
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
)
