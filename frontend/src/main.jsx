import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import Nav from './compoents/Nav.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Nav />
    <App />
  </BrowserRouter>

)
