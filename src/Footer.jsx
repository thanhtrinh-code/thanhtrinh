import React from 'react'
import { FiArrowUpRight } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="w-full bg-inherit text-white h-[26rem] flex sm:justify-center">
        <div className='hidden sm:w-[76%] h-full sm:flex flex-row  items-center'>
        <div className='w-1/2 flex flex-col py-8 px-4'>
            <img src="/logo.jpg" alt='Logo' className='w-20 h-28 mb-28'/>
            <div className='text-gray-300'>
            <h5 className='text-lg font-semibold text-white uppercase mb-2'>
      ®         2024 Thanh Trinh. All Rights Reserved
            </h5>
            <p className='text-base font-light text-gray-400'>
                Made with passion and pho with nine cooked beef
            </p>
        </div>
        </div>
        <div className='flex flex-row w-1/2 justify-between py-8 px-28'>
  {/* Main Section */}
  <div className='flex flex-col space-y-2'>
    <h6 className='text-base font-semibold text-gray-400 uppercase mb-3'>
      Main
    </h6>
    <a href='/' className='text-gray-300 text-xl hover:text-white transition-colors duration-300'>
      Projects
    </a>
    <a href='/info' className='text-gray-30 text-xl hover:text-white transition-colors duration-300'>
      Info
    </a>
  </div>

  {/* Contact Section */}
  <div className='flex flex-col space-y-2'>
    <h6 className='text-base font-semibold text-gray-400 uppercase mb-3'>
      Contact
    </h6>
    <a href='https://www.linkedin.com/in/thanhduytrinh/' className='flex items-center text-xl gap-2 text-gray-300 hover:text-white transition-colors duration-300'>
      LinkedIn
      <FiArrowUpRight size={20} />
    </a>
    <a href='https://github.com/thanhtrinh-code' className='flex items-center text-xl gap-2 text-gray-300 hover:text-white transition-colors duration-300'>
      Github
      <FiArrowUpRight size={20} />
    </a>
    <a href='/thanh_trinh_2027.pdf' className='flex items-center gap-2 text-xl text-gray-300 hover:text-white transition-colors duration-300'>
      Resume
      <FiArrowUpRight size={20} />
    </a>
  </div>
</div>
        </div>

        <div className='w-full h-full sm:hidden flex flex-col justify-center bg-inherit'>
          <div className='flex flex-row w-full p-5 gap-24'>
            <div className='flex flex-col gap-4'>
              <h6 className='text-lg font-semibold text-gray-500'>Main</h6>
                <a href='/' className='text-white text-xl'>
                  Projects
                </a>
                <a href='/info' className='text-white text-xl'>
                  Info
                </a>
            </div>
            <div className='flex flex-col gap-4'>
              <h6 className='text-lg text-gray-500 font-semibold'>Contact</h6>
                <a href='https://linkedin.com/thanhduytrinh' className='text-white flex items-center text-xl'>
                  LinkedIn
                  <span className='ml-1'><FiArrowUpRight /></span>
                </a>
                <a href='https://github.com/thanhtrinh-code' className='text-white flex items-center text-xl'>
                  Github
                  <span className='ml-1'><FiArrowUpRight /></span>
                </a>
                <a href='/resume.pdf' className='text-white flex items-center text-xl'>
                  Resume
                  <span className='ml-1'><FiArrowUpRight /></span>
                </a>
            </div>
          </div>

          <div className='p-5'>
            <p className='text-base text-white'>
              © 2024 Thanh Trinh. All Rights Reserved
            </p>
            <p className='text-sm text-gray-400'>
              Made with passion and pho with nine cooked beef
            </p>
          </div>
        </div>
    </footer>
  )
}
