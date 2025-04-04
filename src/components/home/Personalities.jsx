import React from 'react'
import { motion } from 'framer-motion'
import { items } from '../../assets/data/designPersonalities.js'
import CtaBox from '../CtaBox.jsx'

const Personalities = () => {
  return (
    <div className=' mappedItems overflow-x-clip relative flex flex-col pt-10 pb-44 gap-12 px-2 sm:px-5 md:px-10 lg:px-24 '>
        <div className=' grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-5'>
            {
                items.map(item => (
                    <motion.div 
                        key={item.heading}
                        initial={{ opacity: 0, y: 50 }} 
                        whileInView={{ opacity: 1, y: 0 }}  
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.8, ease: "easeOut" }} 
                        className='flex flex-col gap-3 sm:gap-5 items-center sm:flex-row md:flex-col text-center sm:text-left md:text-center'
                    >
                        <img src={item.icon} alt="" className='w-1/2'/>
                        <div>           
                            <h2>{item.heading}</h2>
                            <p className='text-gray-700'>{item.discription}</p>
                        </div>
                    </motion.div>
                ))
            }
        </div>
        <CtaBox />
    </div>
  )
}

export default Personalities;
