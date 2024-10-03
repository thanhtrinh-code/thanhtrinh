import React from 'react'
import Typewriter from 'typewriter-effect';
import {motion} from 'framer-motion';
import { FaArrowDown } from "react-icons/fa";

export default function Hero() {
  return (
    <div className='w-full pt-14 h-2/3 sm:h-full bg-inherit text-white flex justify-center items-center'>
      <motion.div 
       initial={{ y: 100, opacity: 0 }}  // Start below and invisible
       animate={{ y: 0, opacity: 1 }}   // Move up and fade in
       transition={{ type: "spring", stiffness: 50, damping: 10, duration: 10 }}
    className="hidden sm:block relative bg-cover bg-center bg-no-repeat w-full h-[95%] mt-5 rounded-full"
    style={{ backgroundImage: "url('/macscreen.png')", boxShadow: '0px 0px 53px 11px rgba(234, 242, 240, 0.42)' }}
  >
    <div className="absolute inset-0 flex justify-center items-center">
    <div className="bg-black shadow-gray-800 bg-opacity-60 p-8 rounded-lg max-w-xl text-center shadow-lg">
      <h4 className="text-gray-300 text-2xl font-light">Hello, my name is</h4>
      <h1 className="glow-text text-7xl font-extrabold text-white mt-2">Thanh Trinh</h1>
  
      <div className="text-2xl font-semibold text-blue-400 my-4">
    <Typewriter
      options={{
        strings: ['Software Engineer', 'Fullstack Developer'],
        autoStart: true,
        loop: true,
      }}
    />
      </div>

      <p className="text-gray-400 text-lg leading-relaxed">
        I build products that solve problems and create value.
      </p>
      </div>
      </div>
      <div className="w-full h-full flex items-end justify-center pb-5">
        <motion.div
        animate={{
            y: [0, -20, 0]
        }}
        transition={{
            duration: 1,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'easeInOut'
        }}
        >
          <FaArrowDown size={70} className="text-gray-400"/>
        </motion.div>
      </div>
      </motion.div>

      {/**Mobile section */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}  // Start below and invisible
        animate={{ y: 0, opacity: 1 }}   // Move up and fade in
        transition={{ type: "spring", stiffness: 50, damping: 10, duration: 10 }}
        className='w-full h-full bg-inherit flex sm:hidden justify-center items-center flex-col'
        >
          <div className='w-[95%] h-[30rem] bg-black rounded-[10rem] flex flex-col items-center text-white justify-center'
          style={{
            boxShadow: '0px 0px 53px 11px rgba(234, 242, 240, 0.42)'
          }}
          >
          <p className='text-gray-300 text-2xl font-light'>
            Hello, my name is
          </p>
          <p className='glow-text text-5xl font-extrabold text-white mt-2'>
            Thanh Trinh
          </p>
          <div className="text-2xl font-semibold text-blue-400 my-4">
    <Typewriter
      options={{
        strings: ['Software Engineer', 'Fullstack Developer'],
        autoStart: true,
        loop: true,
      }}
    />
      </div>
          <p className="text-white font-serif text-2xl leading-relaxed w-[90%] pl-12">
            I build products that solve problems and create value.
          </p>
          </div>
      </motion.div>
    </div>
  )
}
