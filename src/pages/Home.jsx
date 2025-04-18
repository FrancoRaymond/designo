import React from 'react'
import Hero from '../components/home/Hero'
import WebDesign from '../components/home/WebDesign'
import AppDesign from '../components/home/AppDesign'
import GraphicDesign from '../components/home/GraphicDesign'
import Personalities from '../components/home/Personalities'
import ScrollTop from '../components/ScrollTop'

const Home = () => {
  return (
    <div className='min-h-screen'>
      <ScrollTop />
      <Hero />
      <div className='bg-white px-2 sm:px-5 md:px-10 lg:px-24 pt-20 pb-10 grid grid-cols-1 md:grid-cols-2 gap-6'>
        <WebDesign />
        <AppDesign />
        <GraphicDesign />
      </div>
      <Personalities /> 
    </div>
  )
}

export default Home;
