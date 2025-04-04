import React from 'react'
import { useAppContext } from '../App';
import { motion } from 'framer-motion';
import ScollTop from '../components/ScrollTop'
import ContactLocations from '../components/contacts/ContactLocations';
import CtaBox from '../components/CtaBox';
import aboutImgMobile from '../assets/images/about/mobile/image-about-hero.jpg'
import aboutImgTablet from '../assets/images/about/tablet/image-about-hero.jpg'
import aboutImgDesktop from '../assets/images/about/desktop/image-about-hero.jpg'

import talentImgMobile from '../assets/images/about/mobile/image-world-class-talent.jpg'
import talentImgTablet from '../assets/images/about/tablet/image-world-class-talent.jpg'
import talentImgDesktop from '../assets/images/about/desktop/image-world-class-talent.jpg'

import realImgMobile from '../assets/images/about/mobile/image-real-deal.jpg'
import realImgTablet from '../assets/images/about/tablet/image-real-deal.jpg'
import realImgDesktop from '../assets/images/about/desktop/image-real-deal.jpg'


const About = () => {
    const { size } = useAppContext()
  return (
    <div className={`sm:px-5 md:px-10 lg:px-24 pt-7 mb-48`}>
        <ScollTop />
        <motion.div 
            initial={{ opacity: 0, y: 50 }} 
            whileInView={{ opacity: 1, y: 0 }}  
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`bg-[var(--accent-color)] flex flex-col-reverse sm:rounded-lg sm:overflow-clip mt-7 sm:mt-14  ${size > 699 ? 'grid grid-cols-5 pt-0 mb-24 mt-0 rounde-lg overflow-clip' : ''} items-center`}
        >
            <div className={`py-10 text-center ${size > 699 ? 'col-span-3 text-left h-fit py-0 px-5 md:px-10 lg:px-24' : ''}`}>
                <h1 className='text-2xl px-3 text-white font-semibold md:text-4xl md:mx-0 md:px-0'>About us</h1>
                <p className='px-3 text-gray-100 mt-7 md:max-w-[450px] sm:mx-auto md:mx-0 md:px-0'>Founded in 2010, we are a creative agency that produces lasting results for our clients. We've partnered with many startups, corporations, and nonprofits alike designs that make real impact. We're always looking foward to creating brands, products, and digital experiences that connect with our clients' audience.</p>      
            </div>
            <img src={ aboutImgMobile } alt="" className={size > 500 ? 'hidden' : 'w-full'}/>
            <img src={ aboutImgTablet } alt="" className={size > 500 && size < 700 ? '' : 'hidden'}/>
            <img src={ aboutImgDesktop } alt="" className={size > 699 ? 'my-0 col-span-2 object-cover' : 'hidden'}/>
        </motion.div>

        <motion.div
            initial={{ opacity: 0, y: 50 }} 
            whileInView={{ opacity: 1, y: 0 }}  
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`bg-[var(--secondary-accent)] flex flex-col sm:rounded-lg sm:overflow-clip ${size > 699 ? 'grid grid-cols-5 mt-10 rounde-lg overflow-clip' : ''} items-center`}
        >
            <img src={ talentImgMobile } alt="" className={size > 500 ? 'hidden' : 'w-full'}/>
            <img src={ talentImgTablet } alt="" className={size > 500 && size < 700 ? '' : 'hidden'}/>
            <img src={ talentImgDesktop } alt="" className={size > 699 ? 'my-0 col-span-2 object-cover' : 'hidden'}/>
            <div className={`py-10 text-center ${size > 699 ? 'col-span-3 h-fit py-0 text-left px-5 md:px-10 lg:px-24' : ''}`}>
                <h1 className='text-[var(--accent-color)] px-3 text-2xl font-semibold md:text-4xl md:mx-0 md:px-0'>World-class talent</h1>
                <p className='text-gray-700 px-3  mt-7  md:max-w-[450px] sm:mx-auto md:mx-0 md:px-0'> We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of platforms.<br/> <br/> Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important. We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality outcomes that encapsulates their brand’s story and mission. .</p>      
            </div>
        </motion.div>

        <ContactLocations />

        <motion.div
            initial={{ opacity: 0, y: 50 }} 
            whileInView={{ opacity: 1, y: 0 }}  
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`bg-[var(--secondary-accent)] mb-20  flex flex-col-reverse sm:rounded-lg sm:overflow-clip ${size > 699 ? 'grid grid-cols-5 mb-24 pt-0 mt-0 rounde-lg overflow-clip' : ''} items-center`}
        >
            <div className={` py-10 text-center ${size > 699 ? 'col-span-3 text-left h-fit py-0 px-5 md:px-10 lg:px-24' : ''}`}>
                <h1 className='text-[var(--accent-color)] px-3 text-2xl font-semibold md:text-4xl md:mx-0 md:px-0'>The real deal</h1>
                <p className='text-gray-700 mt-7 px-3 md:max-w-[450px] sm:mx-auto md:mx-0 md:px-0'>As strategic partners in our clients’ businesses, we are ready to take on any challenge as our own. Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every opportunity. We make design and technology more accessible and give you tools to measure success.<br/> <br/> We are visual storytellers in appealing and captivating ways. By combining business and marketing strategies, we inspire audiences to take action and drive real results.</p>      
            </div>
            <img src={ realImgMobile } alt="" className={size > 500 ? 'hidden' : 'w-full'}/>
            <img src={ realImgTablet } alt="" className={size > 500 && size < 700 ? '' : 'hidden'}/>
            <img src={ realImgDesktop } alt="" className={size > 699 ? 'my-0 col-span-2 object-cover' : 'hidden'}/>
        </motion.div>
        
        <CtaBox />
    </div>
  )
}

export default About;

