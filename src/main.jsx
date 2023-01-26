import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import CatContext from './context/CatContext'
import './index.css'

createRoot(document.getElementById('root')).render(
  <CatContext>
    <App />
  </CatContext>
)
