import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'tailwindcss/tailwind.css'
import '../styles/global.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
    </Routes>
  </Router>
)
