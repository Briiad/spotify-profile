import { React, useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import { accessToken } from '../services/spotify'

// import pages
import {Profile, Login} from './pages'

function App() {
  
  const [token, setToken] = useState(null)

  useEffect(() => {
    setToken(accessToken)
  }, [])

  return (
    <>
      <AnimatePresence exitBeforeEnter={true}>
        <div className=' w-full h-full font-monts' >
          {!token ? (
              <Login /> ) : ( <Profile />
          )}
        </div>
      </AnimatePresence>
    </>
  )
}

export default App
