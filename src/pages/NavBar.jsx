import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { GrDocumentText } from "react-icons/gr";
import { motion } from "framer-motion";

import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import Mobible from "../Mobible";

export default function NavBar() {
    const location = useLocation();
    const currentUrl = location.pathname;
    const [openMenu, setOpenMenu] = useState(false); 
    const handleToggleMenu = () => setOpenMenu(openMenu => !openMenu);

  return (
    <nav className='flex justify-between sm:justify-around items-center p-4 bg-inherit text-white '>
      <div className="font-thin sm:text-left">
        <h5 className='text-xl font-medium'>Thanh Trinh</h5>
        <p className='text-sm text-gray-400'>Software Engineer</p>
      </div>
      <Mobible currentUrl={currentUrl} handleToggleMenu={handleToggleMenu}/>
    <div className='hidden sm:block relative ml-28'>
  <div className='flex p-2 border border-solid border-gray-500 rounded-full bg-black ml-32'>
    <motion.div
      className='h-0.5 top-0 hidden sm:block absolute bg-white rounded-full shadow-yellow-50'
      animate={{ x: !currentUrl.includes("info") ? 0 : '80px ' }} // Use '100%' for responsive positioning
      transition={{ type: 'spring', stiffness: 300 }}
      style={{
        width: '20px', 
        zIndex: 1,
        left: 'calc(54%)', // Center the indicator by adjusting the left position
      }} 
    />
    <Link to="/">
    <motion.button
      className={`mr-1 px-5 py-1.5 rounded-full
        ${currentUrl === '/' ?  'bg-[#7e807ec9]' : 'bg-inherit'}
      text-white hover:bg-gray-600 transition duration-300 relative z-10 text-sm`}
    >
      Projects
    </motion.button>
    </Link>
    <Link to="/info">
    <motion.button
      className={`px-6 py-1.5 rounded-full 
      ${currentUrl === '/info'?  'bg-[#7e807ec9]' : 'bg-inherit'}
      text-white hover:bg-gray-700 transition duration-300 relative z-10 text-sm`}
    >
      Info
    </motion.button>
    </Link>
  </div>
        </div>
        <div className='hidden sm:flex  space-x-1'>
            <a href="https://github.com/thanhtrinh-code">
                <div className='flex items-center p-3 rounded-full px-4 hover:bg-[#9598958b] hover:cursor-pointer'>
                    <FaGithub size={20} className='mr-1' />
                <span>Github</span>
                </div>
            </a>
            <a href="https://www.linkedin.com/in/thanhduytrinh/">
            <div className='flex items-center p-3 rounded-full hover:bg-[#9598958b]'>
            <FaLinkedin size={20} className='mr-1' />
            <span>LinkedIn</span>
            </div>
            </a>
            <a href="/thanh_trinh_2027.pdf">
            <div className='flex items-center p-3 rounded-full hover:bg-[#9598958b]'>
            <GrDocumentText size={20} className='mr-1' />
            <span>Resume</span>
            </div>
            </a>
        </div>  
    </nav>
  )
}
