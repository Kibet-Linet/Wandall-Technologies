import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom' // ✅ import here
import App from './App.jsx'
import './index.css'
import ScrollToTop from './components/ScrollToTop';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter> 
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
