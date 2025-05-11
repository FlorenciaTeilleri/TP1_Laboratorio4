import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './css/style.css'
import './css/buscador.css'
import './css/formulario-canciones.css'
import './css/lista-canciones.css'
import './css/modal-video.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
