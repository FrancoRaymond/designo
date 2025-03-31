import React from 'react'
import arrow from '../../assets/images/svg/icon-right-arrow.svg'

const WebDesign = () => {
  return (
    <div className='webDesign w-full bg-center relative overflow-clip rounded-lg md:row-span-2'>
        <div className='serviceOverlay py-28 w-full h-full flex flex-col gap-3 justify-center items-center transition duration-500'>
            <h2 className='text-xl font-semibold text-white'>WEB DESIGN</h2>
            <button className='flex gap-3 items-center text-white text-sm cursor-pointer'>VIEW PROJECTS <img src={arrow} alt="" /></button>
        </div>
      
    </div>
  )
}

export default WebDesign
