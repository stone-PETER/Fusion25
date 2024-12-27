import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import About from'./pages/About/About.jsx'
import Footer from './pages/Footer/Footer.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <About/>
    <Footer/>
  </StrictMode>,
)
