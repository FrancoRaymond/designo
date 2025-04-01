import React from 'react'
import ScrollTop from '../components/ScrollTop'
import { appdesigns } from '../assets/data/appdesigns'
import WebDesign from '../components/home/WebDesign'
import GraphicDesign from '../components/home/GraphicDesign'
import CtaBox from '../components/CtaBox'

const AppDesignPage = () => {
  return (
    <div >
      <ScrollTop />
      <div className=' bg-center overflow-hidden md:pt-20 md:px-10 lg:px-24'>
          <div className='hero md:bg-center flex py-28 flex-col gap-6 items-center md:px-10 text-center h-full px-2 md:rounded-lg'>
            <h1 className='text-white text-4xl lg:text-5xl lg:max-w-96 mt-5 md:mt-0'>App design</h1>
            <p className='text-gray-200 max-w-[400px] w-full'>Our mobile designs bring intuitive digital solutions to your customers right at their fingertips.</p>
          </div>
      </div>
      <div className='px-2 sm:px-5 md:px-10 lg:px-24 pt-10 pb-40'>
        <div className='grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 py-10'>
          {
            appdesigns.map(design => (
              <div key={design.name} className='flex flex-col gap-4 overflow-hidden bg-[var(--secondary-accent)] pb-4 text-center rounded-lg'>
                <img src={design.image} alt="" />
                <h2 className='text-lg text-[var(--accent-color)]'>{design.name}</h2>
                <p className='px-5'>{design.discription}</p>
              </div>
            ))
          }
        </div>
        <div className='flex flex-col gap-6 py-10 sm:flex-row md:gap-10'>
          <WebDesign />
          <GraphicDesign />
        </div>
        <CtaBox />
      </div>  
    </div>
  )
}

export default AppDesignPage;
