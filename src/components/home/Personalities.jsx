import React from 'react'
import { items } from '../../assets/data/designPersonalities.js'

const Personalities = () => {
  return (
    <div className=' mappedItems overflow-x-clip relative flex flex-col pt-10 pb-44 gap-12 px-2 sm:px-5 md:px-10 lg:px-24 '>
        <div className=' grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-5'>
            {
                items.map(item => (
                    <div key={item.heading} className='flex flex-col gap-3 sm:gap-5 items-center sm:flex-row md:flex-col text-center sm:text-left md:text-center'>
                        <img src={item.icon} alt="" className='w-1/2'/>
                        <div>           
                            <h2>{item.heading}</h2>
                            <p className='text-gray-700'>{item.discription}</p>
                        </div>
                    </div>
                ))
            }
        </div>
        <div className='relative bg-[var(--accent-color)] py-10 mt-10 px-3 flex flex-col sm:flex-row sm:justify-between sm:px-10 md:px-16 sm:text-left gap-5 items-center text-center w-full -mb-64 mx-auto rounded-lg'>
            <div className='max-w-[350px]'>
                <h2 className='text-white text-2xl font-semibold sm:max-w-[250px]'>Lets talk about your project</h2>
                <p className='text-gray-100 mt-3'>Ready to take it to the next level? Contact us today and find out how our expertise can help your business grow.</p>
            </div>
            <button className='bg-white text-black w-fit px-3 py-2 rounded-md'>GET IN TOUCH</button>
        </div>
    </div>
  )
}

export default Personalities;
