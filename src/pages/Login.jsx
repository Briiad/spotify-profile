import React from 'react'
import { motion } from 'framer-motion'

// import animation
import {tapHoverBtn, transition} from '../components/framer'

const Login = () => {
  return (
    <div className='w-full h-screen flex justify-center items-center shadow-xl'>
      <motion.a href="https://proftify.vercel.app/login" className='text-white font-bold text-lg 2xl:text-3xl' variants={transition} initial="hidden" animate="visible" exit="exit">
          <motion.button className='bg-primary p-10 2xl:p-16 rounded-full outline-none tracking-widest' variants={tapHoverBtn} whileHover="hover" whileTap="tap">
            LOG IN WITH SPOTIFY
          </motion.button>
      </motion.a>
    </div>
  )
}

export default Login