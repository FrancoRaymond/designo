import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import phones from '../../assets/images/home/image-hero-phone.png'

const Hero = () => {

  return (
    <div className=' bg-center overflow-hidden md:pt-20 md:px-10 lg:px-24'>
      <div className='hero md:bg-center flex pt-28 md:pt-0 flex-col gap-6 items-center md:items-center md:px-10 md:justify-between h-full px-2 md:rounded-lg md:flex-row '>
        <motion.div 
          initial={{ opacity: 0, y: 50 }} 
          whileInView={{ opacity: 1, y: 0 }}  
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className='flex  flex-col gap-6 overflow-clip text-center md:text-left sm:max-w-[400px] md:max-w-3/5 md:py-16'
        >
          <h1 className='text-white text-4xl lg:text-5xl lg:max-w-96 mt-5 md:mt-0'>Award-winning custom designs and digital branding solutions</h1>
          <p className='text-gray-200'>With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services.</p>
          <Link to="/about">
            <button className='bg-white text-black w-fit px-3 py-2 rounded-md mx-auto md:mx-0 hover:bg-black transition duration-300 hover:text-white shadow hover:shadow-white cursor-pointer'>LEARN MORE</button>
          </Link>
        </motion.div>
          <img src={phones} alt="" className='-mb-[67%] w-full md:-mb-28 lg:-mb-40 md:scale-110'/>
      </div>
    </div>
  )
}

export default Hero;