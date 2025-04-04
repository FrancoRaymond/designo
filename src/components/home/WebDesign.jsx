import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import arrow from '../../assets/images/svg/icon-right-arrow.svg'

const WebDesign = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }} 
      whileInView={{ opacity: 1, y: 0 }}  
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className='webDesign w-full bg-center relative overflow-clip rounded-lg md:row-span-2'
    >
      <div className='serviceOverlay py-28 w-full h-full flex flex-col gap-3 justify-center items-center transition duration-500'>
        <h2 className='text-xl font-semibold text-white'>WEB DESIGN</h2>
        <Link to='/WebDesignPage'>
          <button className='flex gap-3 items-center text-white text-sm cursor-pointer'>VIEW PROJECTS <img src={arrow} alt="" /></button>
        </Link>
      </div>  
    </motion.div>
  )
}

export default WebDesign
