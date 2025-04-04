import React from 'react'
import ScrollTop from '../components/ScrollTop'
import { countries } from '../assets/data/locations'
import { useAppContext } from '../App'
import CtaBox from '../components/CtaBox'

const Locations = () => {
  const { size } = useAppContext()
  return (
    <div className='pt-14 sm:pt-20 pb-48 flex flex-col gap-7 sm:px-5 md:px-10 lg:px-24'>
      <ScrollTop />
      {
        countries.map(country => (
          <div key={country.phone} className='location sm:gap-5 flex flex-col sm:grid sm:grid-cols-3'>
            <img src={ size < 640 ? country.images.mobile : country.images.desktop} alt="" className='sm:rounded-lg'/>
            <div className='locationTextArea w-full flex flex-col justify-center sm:rounded-lg sm:px-6 lg:px-16 sm:col-span-2'>
              { size > 640 ? <h1 className='text-[var(--accent-color)] text-2xl font-semibold'>{country.name}</h1> : null }
              <div className='text-center flex flex-col gap-6 md:gap-[20%] py-4 sm:text-left sm:flex-row items-center w-full'>
                <div className='flex flex-col'>
                  <h2 className='font-semibold'>{country.officeName}</h2>
                  <span className='text-gray-700'>{country.addressOne}</span>
                  <span className='text-gray-700'>{country.addressTwo}</span>
                </div>
                <div className='flex flex-col'>
                  <h2 className='font-semibold'>Contact</h2>
                  <span className='text-gray-700'>{country.phone}</span>
                  <span className='text-gray-700'>{country.email}</span>
                </div>
              </div>
            </div> 
          </div>
        ))
      } 
      <CtaBox />
    </div>
  )
}

export default Locations
