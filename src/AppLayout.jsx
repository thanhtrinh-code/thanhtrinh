"use cloent"
import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './pages/NavBar'
import Footer from './Footer'
import { FaRocketchat } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import ChatBot from './chatbot/ChatBot'
import { LuArrowUpRight } from "react-icons/lu";

export default function AppLayout() {
  const [openChat, setOpenChat] = useState(false);
  const [openInfo, setOpenInfo] = useState(false);

  return (
    <div className='w-screen h-screen bg-black'>
        <NavBar setOpenInfo={setOpenInfo} openInfo={openInfo}/>
        {openInfo && (
          <div className='z-50 fixed w-40 h-[10rem] pl-1 py-2 top-[4.8rem] right-3 bg-gray-700 bg-opacity-70 rounded-2xl shadow-lg'>
          <div className='py-2 px-3'>
            <a href='https://github.com/thanhtrinh-code' className='flex gap-9 items-center font-serif text-lg text-white'>
              Github
              <LuArrowUpRight size={20} />
            </a>
          </div>
          <div className='py-2 px-3 my-1'>
            <a href='https://www.linkedin.com/in/thanhduytrinh/' className='flex gap-5 items-center font-serif text-lg text-white'>
              Linkedin
              <LuArrowUpRight size={23} />
            </a>
          </div>
          <div className='py-2 px-3'>
            <a href='/thanh_trinh_2027.pdf' className='flex gap-7 items-center font-serif text-lg text-white'>
              Resume
              <LuArrowUpRight size={23} />
            </a>
          </div>
        </div>
        )}
        <Outlet/>
        <div className='w-full border-[0.6px] border-neutral-600'>
        </div>
        {/* {!openChat ? <FaRocketchat onClick={() => setOpenChat(open => !open)} size={60} className='text-white bottom-8 right-5 sm:bottom-10 sm:right-10 fixed bg-red-300 rounded-full p-3 sm:p-3'/> 
        : <FaXmark onClick={() => setOpenChat(open => !open)} size={60} className='text-white bottom-8 right-5 sm:bottom-10 sm:right-10 fixed bg-red-300 rounded-full p-3 sm:p-3'/> } */}
        
        {openChat && <ChatBot/>}
        <Footer/>
    </div>
  )
}
/**
 
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
 */