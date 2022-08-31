import React, {useEffect} from 'react'
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'tailwindcss/tailwind.css'
import '../styles/global.css'

// scroll to top
function ScrollToTop() {
  const {pathname} = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.Fragment>
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </Router>
  </React.Fragment>
)
