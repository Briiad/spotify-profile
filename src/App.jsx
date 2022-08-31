import { React, useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { accessToken, logout, getCurrentUserProfile } from '../services/spotify'
import { catchErrors } from '../services/catchErr'

// import animation
import {tapHoverBtn, transition} from '../components/framer'

function App() {
  
  const [token, setToken] = useState(null)
  const [profile, setProfile] = useState(null)

  useEffect(() => {
    setToken(accessToken)

    const fetchData = async () => {
      const { data } = await getCurrentUserProfile()
      setProfile(data)
    }
    catchErrors(fetchData())
  }, [])

  console.log(profile)

  return (
    <>
      <AnimatePresence exitBeforeEnter={true}>
        <div className=' bg-secondary font-monts' >
          {!token ? (
            <div className='w-full h-screen flex justify-center items-center shadow-xl'>
              <motion.a href="http://localhost:3001/login" className='text-white font-bold text-lg 2xl:text-3xl' variants={transition} initial="hidden" animate="visible" exit="exit">
                <motion.button className='bg-primary p-10 2xl:p-16 rounded-full outline-none tracking-widest' variants={tapHoverBtn} whileHover="hover" whileTap="tap">
                    LOG IN WITH SPOTIFY
                </motion.button>
              </motion.a>
            </div>
            
            ) : (
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
      </AnimatePresence>
    </>
  )
}

export default App
