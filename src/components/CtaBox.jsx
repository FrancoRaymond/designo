import React from 'react'

const CtaBox = () => {
  return (
    <div className='relative bg-[var(--accent-color)] w-[90%] py-10 mt-10 px-3 flex flex-col sm:flex-row sm:justify-between sm:px-10 md:px-16 sm:text-left gap-5 items-center text-center sm:w-full -mb-64 mx-auto rounded-lg'>
        <div className='max-w-[350px]'>
            <h2 className='text-white text-2xl font-semibold sm:max-w-[250px]'>Lets talk about your project</h2>
            <p className='text-gray-100 mt-3'>Ready to take it to the next level? Contact us today and find out how our expertise can help your business grow.</p>
        </div>
        <button className='bg-white text-black w-fit px-3 py-2 rounded-md'>GET IN TOUCH</button>
    </div>
  )
}

export default CtaBox
