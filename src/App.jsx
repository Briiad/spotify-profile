import { useState, useEffect } from 'react'

import { accessToken, logout, getCurrentUserProfile } from '../services/spotify'

function App() {
  
  const [token, setToken] = useState(null)
  const [profile, setProfile] = useState(null)

  useEffect(() => {
    setToken(accessToken)

    const fetchData = async () => {
      try {
        const { data } = await getCurrentUserProfile()
        setProfile(data)
      } catch (e) {
        console.error(e)
      }
    }
    fetchData()
  }, [])

  console.log(profile)

  return (
    <>
      <div>
        {!token ? (<a href="http://localhost:3001/login">Login to Spotify</a>) : (
          <>
            <button onClick={logout}>Log out</button>
            {profile && (
              <div>
                <h1>{profile.display_name}</h1>
                <p>{profile.followers.total} Followers</p>
                {profile.images.length && profile.images[0].url && (
                  <img src={profile.images[0].url} alt="Avatar"/>
                )}
              </div>
            )}
          </>
        )}
      </div>
    </>
  )
}

export default App
