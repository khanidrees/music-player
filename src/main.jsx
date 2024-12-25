import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'

// Importing Sass with Bootstrap CSS
import './App.scss';

createRoot(document.getElementById('root')).render(
    <App />
)
