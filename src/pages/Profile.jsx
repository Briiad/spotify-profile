import React, {useState, useEffect} from 'react'
import { motion } from 'framer-motion'
import { catchErrors } from '../../services/catchErr'
import { getCurrentUserProfile, logout, getCurrentUserPlaylist, getTopArtists } from '../../services/spotify'

import { ArtistsGrid } from '../components'

// import animation
import {tapHoverBtn, transition} from '../components/framer'

const Profile = () => {

  const [profile, setProfile] = useState(null)
  const [playlist, setPlaylist] = useState(null)
  const [artist, setArtist] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const userProfile = await getCurrentUserProfile()
      setProfile(userProfile.data)

      const userPlaylist = await getCurrentUserPlaylist()
      setPlaylist(userPlaylist.data)

      const topArtist = await getTopArtists()
      setArtist(topArtist.data)
    }
    catchErrors(fetchData())
  }, [])

  console.log(artist)
  return (
    <>
      <motion.button 
        variants={tapHoverBtn} whileHover="hover" whileTap="tap"
        className='absolute top-4 right-4 bg-primary px-6 py-2 rounded-full text-white font-semibold text-sm' 
        onClick={logout}>
        Log out
      </motion.button>
      {profile && (
        <header className='container h-96 mx-auto px-10 mb-8'>
          <div className='h-full grid grid-cols-12 gap-12 place-items-center content-center'>
            <div className='col-span-2 border rotate-45'>
              {profile.images.length && profile.images[0].url && (
                <img src={profile.images[0].url} alt="Avatar" className='rounded-full w-48 h-48 object-cover object-top p-4 -rotate-45'/>
              )}
            </div>
            
            <div className='grid grid-rows-6 gap-2 col-span-10 justify-self-start text-white'>
              <p className='text-sm row-span-1'>PROFILE</p>
              <h1 className='text-9xl font-bold row-span-4 justify-self-center'>{profile.display_name}</h1>
              <p className='text-sm opacity-50 row-span-1'>
                {playlist && (
                  <span>
                    {playlist.total} Playlist{playlist.total !== 1 ? 's' : ''}
                  </span>
                )}
                <span> • </span> 
                <span>
                  {profile.followers.total} Follower{profile.followers.total !== 1 ? 's' : ''}
                </span>
              </p>
            </div>
          </div>
        </header>
      )}

      {artist && (
        <div className='container h-full mx-auto px-10 mb-8'>
          <ArtistsGrid artists={artist.items.slice(0, 5)} />
        </div>
      )}
    </>
  )
}

export default Profile