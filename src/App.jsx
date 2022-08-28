import { useState, useEffect } from 'react'

import { accessToken, logout } from '../services/spotify'

function App() {
  
  const [token, setToken] = useState(null)

  useEffect(() => {
    setToken(accessToken)
  }, [])

  return (
    <>
      <div>
        {!token ? (<a href="http://localhost:3001/login">Login to Spotify</a>) : (
          <>
            <h1>Logged in!</h1>
            <button onClick={logout}>Log out</button>
          </>
        )}
      </div>
    </>
  )
}

export default App
