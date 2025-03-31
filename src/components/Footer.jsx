import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/images/logo/logo-light.png'
import facebook from '../assets/images/svg/icon-facebook.svg'
import youtube from '../assets/images/svg/icon-youtube.svg'
import twitter from '../assets/images/svg/icon-twitter.svg'
import pinterest from '../assets/images/svg/icon-pinterest.svg'
import instagram from '../assets/images/svg/icon-instagram.svg'


const Footer = () => {
  return (
    <div className='bg-[var(--grayish-black)] pt-32 pb-16 flex flex-col gap-6 items-center px-2 sm:px-5 md:px-10 lg:px-24'>
        <div className='flex flex-col sm:flex-row sm:justify-between sm:border-b sm:border-gray-400 sm:items-center w-full sm:pb-6 mt-12'>
            <img src={logo} alt="" className='w-44 mx-auto sm:mx-0'/>
            <div className=' flex flex-col gap-3 items-center text-white  py-6 mt-6 sm:mt-0 sm:py-0 sm:w-fit border-t border-gray-400 w-full sm:border-t-0 sm:flex-row sm:gap-5'>
                <Link to="/">OUR COMPANY</Link>
                <Link to="/locations">LOCATIONS</Link>
                <Link to="/contacts">CONTACTS</Link>
            </div>
        </div>
        <div className='w-full md:flex md:justify-between'>
            <div className='text-gray-400 flex flex-col gap-10 sm:flex-row sm:mx-auto md:mx-0 lg:gap-36 sm:items-center sm:justify-around'>
                <div className='flex flex-col text-center'>
                    <span className='font-semibold'>Designo Central Office</span>
                    <span>3886 Wellington Street</span>
                    <span>Toronto, Ontario M9C 3J5</span>
                </div>
                <div className='flex flex-col text-center'>
                    <span className='font-semibold'>Contact Us (Central Office)</span>
                    <span>P : +1 253-863-8967</span>
                    <span>M : contact@designo.co</span>
                </div>
            </div>
            <div className='flex gap-4 mt-12 mx-auto md:mx-0 w-fit md:mb-0'>
                <img src={facebook} alt="" className='h-6'/>
                <img src={youtube} alt="" className='h-6'/>
                <img src={twitter} alt="" className='h-6'/>
                <img src={pinterest} alt="" className='h-6'/>
                <img src={instagram} alt="" className='h-6'/>
            </div>  
        </div>
    </div>
  )
}

export default Footer;
