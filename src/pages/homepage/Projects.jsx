import React from 'react'
import ProjectCard from './ProjectCard'

export default function Projects() {
  return (
    <>
        <div className='hidden sm:flex w-full h-screen bg-black  justify-center items-center'>
            <ProjectCard url="smart-flash" pic="smart-flash.jpg" title="Smart-Flash" description="An AI generated flashcard application."
            hoverColor='from-cyan-600 to-gray-600'
            />
        </div>
        <div className='hidden sm:flex w-full h-screen bg-black justify-center items-center'>
            <ProjectCard url="uw-professor-ai" pic="UwProfessorAi.jpeg" title="Uw Professor Ai" description="A chatbot professor assistant"
            hoverColor='from-purple-900 to-gray-900'
            />
        </div>
        <div className='hidden sm:flex w-full h-screen bg-black  justify-center items-center'>
            <ProjectCard url="stock-point" pic="inventory-management-system.jpeg" title="StockPoint" description="Keep track of what in inventory"
            hoverColor='from-emerald-800 to-stone-800'
            />
        </div>
        <div className='hidden sm:block bg-black pb-40'>
        </div>

        {/**Mobile*/}
        <div className="w-full sm:hidden bg-black flex flex-col gap-5 py-5 px-1">
            <ProjectCard url="smart-flash" pic="smart-flash.jpg" title="Smart-Flash" description="An AI generated flashcard application."
            color='bg-cyan-500'
            />
            <ProjectCard url="uw-professor-ai" pic="UwProfessorAi.jpeg" title="Uw Professor Ai" description="A chatbot professor assistant"
            color='bg-purple-800'
            />
            <ProjectCard url="stock-point" pic="inventory-management-system.jpeg" title="StockPoint" description="Keep track of what in inventory"
            color='bg-teal-800'
            />
        </div>
        <div className='block sm:hidden bg-black pb-20'>
        </div>
    </>
  )
}
