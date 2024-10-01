"use cloent"
import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './pages/NavBar'
import Footer from './Footer'
import { FaRocketchat } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import ChatBot from './chatbot/ChatBot'

export default function AppLayout() {
  const [openChat, setOpenChat] = useState(false);
  return (
    <div className='w-screen h-screen bg-black'>
        <NavBar/>
        <Outlet/>
        <div className='w-full border-[0.6px] border-neutral-600'>
        </div>
        {!openChat ? <FaRocketchat onClick={() => setOpenChat(open => !open)} size={60} className='text-white bottom-8 right-5 sm:bottom-10 sm:right-10 fixed bg-red-300 rounded-full p-3 sm:p-3'/> 
        : <FaXmark onClick={() => setOpenChat(open => !open)} size={60} className='text-white bottom-8 right-5 sm:bottom-10 sm:right-10 fixed bg-red-300 rounded-full p-3 sm:p-3'/> }
        
        {openChat && <ChatBot/>}
        <Footer/>
    </div>
  )
}
