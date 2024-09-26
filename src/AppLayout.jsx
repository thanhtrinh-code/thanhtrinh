import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './pages/NavBar'
import Footer from './Footer'

export default function AppLayout() {
  return (
    <div className='w-screen h-screen bg-black'>
        <NavBar/>
        <Outlet/>
        <div className='w-full border-[0.6px] border-neutral-600'>

        </div>
        <Footer/>
    </div>
  )
}
