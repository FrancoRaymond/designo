import React,{ useEffect} from 'react'
import { Link } from 'react-router-dom';
import { useAppContext } from '../App';
import logo from '../assets/images/logo/logo-dark.png'
import menu from '../assets/images/svg/icon-hamburger.svg'
import close from '../assets/images/svg/icon-close.svg'
import { motion } from 'framer-motion';

const Navbar = () => {
  const { size, setIsMenuOpen, isMenuOpen } = useAppContext();

  const menuVariants = {
    hidden: { x: "100%" },
    visible: { x: 0 }, 
  };

  const closeMenu = () => {
    setIsMenuOpen(false)
  }
  useEffect(() => {
    isMenuOpen ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'auto'
  }, [isMenuOpen])

  return (
    <div className='w-full bg-white z-50 flex justify-between items-center py-3 px-2 sm:px-5 md:px-10 lg:px-24 fixed top-0'>
      <Link onClick={closeMenu} to="/" className="text-2xl font-bold"><img src={logo} alt="" className='h-5'/></Link>
      {size < 640 ? (
      <motion.nav initial="hidden"
        animate={isMenuOpen ? "visible" : "hidden"}
        variants={menuVariants}
        transition={{ duration: 0.5, ease: "easeInOut" }} 
        className={`${size < 640 ? isMenuOpen ? 'activeMenu absolute block top-12 h-screen left-0 right-0 mx-auto w-full' : 'hidden' : ''}`}
      >
        <ul className={`flex gap-8 ${size < 640 ? 'flex-col items-start px-2 h-fit w-full text-white' : 'flex-row text-black'}`}>
          <li><Link onClick={closeMenu} to="/about">OUR COMPANY</Link></li> 
          <li><Link onClick={closeMenu} to="/locations">LOCATIONS</Link></li>
          <li><Link onClick={closeMenu} to="/contacts">CONTACTS</Link></li>
        </ul>
      </motion.nav>
      ) : (
        <nav className={`${size < 640 ? isMenuOpen ? 'activeMenu absolute block top-14 h-screen left-0 right-0 mx-auto w-full' : 'hidden' : ''}`}>
          <ul className={`flex gap-8 ${size < 640 ? 'flex-col items-center h-fit w-full' : 'flex-row'}`}>
            <li><Link onClick={closeMenu} to="/about">OUR COMPANY</Link></li>
            <li><Link onClick={closeMenu} to="/locations">LOCATIONS</Link></li>
            <li><Link onClick={closeMenu} to="/contacts">CONTACTS</Link></li>
          </ul>
        </nav>
      )}
      <div className={`flex gap-5 ${size > 640 ? 'hidden' : ''}`}>
        <img src={menu} alt="menu" onClick={() => setIsMenuOpen(true)} className={`${isMenuOpen ? 'hidden' : ''} size-6 cursor-pointer ${size > 640 ? 'hidden' : ''}`}/>
        <img src={close} alt="close" onClick={() => setIsMenuOpen(false)} className={`${isMenuOpen ? '' : 'hidden'} size-6 cursor-pointer ${size > 640 ? 'hidden' : ''}`}/>
      </div>
    </div>
  )
}

export default Navbar;
