import React from 'react'

export default function Left() {
  return (
    <div className="flex flex-col w-1/2 pr-10 items-center">
      <div className="mb-4">
          <img src="profile.jpg" alt="Profile" className="w-[470px] h-[660px] object-cover rounded-3xl shadow-md border p-2"/>
      </div>
      <div className="flex flex-col gap-7">
        <p className="text-xl font-semibold pt-10">My background in Computer Science</p>
        <p className='text-[1.1rem] text-[#f2f2f296]'>
          The unexpected change to remote learning during my sophomore year due to the COVID-19 pandemic presented an opportunity for me.
          During this time, I found myself with newfound free time, I decided to explore coding.
        </p>
          <p className='text-[1.1rem] text-[#f2f2f296]'>Starting with basic programming languages of HTML and CSS,  I built basic web application.
          Through hours of self-study, I discovered an interest in building things with code.</p>
      </div>
    </div>
  )
}
