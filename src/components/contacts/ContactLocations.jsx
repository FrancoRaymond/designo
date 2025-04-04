import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import australia from '../../assets/images/svg/illustration-australia.svg'
import uk from '../../assets/images/svg/illustration-united-kingdom.svg'
import canada from '../../assets/images/svg/illustration-canada.svg'

const ContactLocations = () => {
  return (
    <div className='contactLocationMain flex flex-col gap-10 items-center text-center my-20 py-5 md:flex-row md:justify-around px-2 sm:px-5 md:px-10 lg:px-24'>
        <motion.div 
            initial={{ opacity: 0, y: 50 }} 
            whileInView={{ opacity: 1, y: 0 }}  
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <div className='contactLocation mb-3 w-fit md:mx-auto'>
                <img src={canada} alt="" />
            </div>
            <h2>CANADA</h2>
            <Link to='/locations'>
                <button className='bg-[var(--accent-color)] text-white cursor-pointer w-fit px-3 py-2 rounded-md mt-5 hover:bg-black transition duration-300 hover:text-white shadow hover:shadow-white'>SEE LOCATION</button>
            </Link>
        </motion.div>
        <motion.div
            initial={{ opacity: 0, y: 50 }} 
            whileInView={{ opacity: 1, y: 0 }}  
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }} 
        >
            <div className='contactLocation mb-3 w-fit md:mx-auto'>
                <img src={australia} alt="" />
            </div>  
            <h2>AUSTRALIA</h2>
            <Link to='/locations'>
                <button className='bg-[var(--accent-color)] hover:bg-black transition duration-300 hover:text-white shadow hover:shadow-white text-white cursor-pointer w-fit px-3 py-2 rounded-md mt-5'>SEE LOCATION</button>
            </Link>
        </motion.div>
        <motion.div
            initial={{ opacity: 0, y: 50 }} 
            whileInView={{ opacity: 1, y: 0 }}  
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <div className='contactLocation mb-3 w-fit md:mx-auto'>
                <img src={uk} alt="" />
            </div>
            <h2>UNITED KINGDOM</h2>
            <Link to='/locations'>
                <button className='bg-[var(--accent-color)] hover:bg-black transition duration-300 hover:text-white shadow hover:shadow-white text-white cursor-pointer w-fit px-3 py-2 rounded-md mt-5'>SEE LOCATION</button>
            </Link>
        </motion.div>
    </div>
  )
}

export default ContactLocations;
