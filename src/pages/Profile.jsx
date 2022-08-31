import React, {useState, useEffect} from 'react'
import { motion } from 'framer-motion'
import { catchErrors } from '../../services/catchErr'
import { getCurrentUserProfile, logout } from '../../services/spotify'

// import animation
import {tapHoverBtn, transition} from '../../components/framer'

const Profile = () => {

  const [profile, setProfile] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getCurrentUserProfile()
      setProfile(data)
    }
    catchErrors(fetchData())
  }, [])

  return (
    <>
      <motion.button 
        variants={tapHoverBtn} whileHover="hover" whileTap="tap"
        className='absolute top-4 right-4 bg-primary px-6 py-2 rounded-full text-white font-semibold text-sm' 
        onClick={logout}>
        Log out
      </motion.button>
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
  )
}

export default Profile