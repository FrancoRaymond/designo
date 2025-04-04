import React from 'react'
import ScrollTop from '../components/ScrollTop'
import { webdesigns } from '../assets/data/webdesigns'
import { motion } from 'framer-motion'
import AppDesign from '../components/home/AppDesign'
import GraphicDesign from '../components/home/GraphicDesign'
import CtaBox from '../components/CtaBox'

const WebDesignPage = () => {
  return (
    <div >
      <ScrollTop />
      <div className=' bg-center overflow-hidden md:pt-20 md:px-10 lg:px-24'>
          <div className='hero md:bg-center flex py-28 flex-col gap-6 items-center md:px-10 text-center h-full px-2 md:rounded-lg'>
            <h1 className='text-white text-4xl lg:text-5xl lg:max-w-96 mt-5 md:mt-0'>Web design</h1>
            <p className='text-gray-200 max-w-[400px] w-full'>We build websites that serve as powerful marketing tools and bring memorable brand experiences.</p>
          </div>
      </div>
      <div className='px-2 sm:px-5 md:px-10 lg:px-24 pt-10 pb-48'>
        <div className='grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 py-10'>
          {
            webdesigns.map(design => (
              <motion.div 
                key={design.name}
                initial={{ opacity: 0, y: 50 }} 
                whileInView={{ opacity: 1, y: 0 }}  
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className='flex flex-col gap-4 overflow-hidden bg-[var(--secondary-accent)] pb-6 text-center rounded-lg'
              >
                <img src={design.image} alt="" />
                <h2 className='text-lg text-[var(--accent-color)]'>{design.name}</h2>
                <p className='px-5'>{design.discription}</p>
              </motion.div>
            ))
          }
        </div>
        <div className='flex flex-col gap-6 py-10 sm:flex-row md:gap-10'>
          <AppDesign />
          <GraphicDesign />
        </div>
        <CtaBox />
      </div>  
    </div>
  )
}

export default WebDesignPage
