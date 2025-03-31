import React from 'react'
import australia from '../../assets/images/svg/illustration-australia.svg'
import uk from '../../assets/images/svg/illustration-united-kingdom.svg'
import canada from '../../assets/images/svg/illustration-canada.svg'

const ContactLocations = () => {
  return (
    <div className='contactLocationMain relative flex flex-col gap-10 items-center text-center py-20 md:flex-row md:justify-evenly px-2 sm:px-5 md:px-10 lg:px-24'>
        <div className=''>
            <div className='contactLocation mb-3 w-fit md:mx-auto'>
                <img src={canada} alt="" />
            </div>
            <h2>CANADA</h2>
            <button className='bg-[var(--accent-color)] text-white cursor-pointer w-fit px-3 py-2 rounded-md mt-5'>SEE LOCATION</button>
        </div>
        <div className=''>
            <div className='contactLocation mb-3 w-fit md:mx-auto'>
                <img src={australia} alt="" />
            </div>  
            <h2>AUSTRALIA</h2>
            <button className='bg-[var(--accent-color)] text-white cursor-pointer w-fit px-3 py-2 rounded-md mt-5'>SEE LOCATION</button>
        </div>
        <div className=''>
            <div className='contactLocation mb-3 w-fit md:mx-auto'>
                <img src={uk} alt="" />
            </div>
            <h2>UNITED KINGDOM</h2>
            <button className='bg-[var(--accent-color)] text-white cursor-pointer w-fit px-3 py-2 rounded-md mt-5'>SEE LOCATION</button>
        </div>
    </div>
  )
}

export default ContactLocations
