import React from 'react'

export default function Left() {
  return (
    <div className="flex flex-col w-1/2 pr-10 text-center items-center">
      <div className="mb-4">
          <img src="profile.jpg" alt="Profile" className="w-[470px] h-[660px] object-cover rounded-3xl shadow-md border p-2"/>
      </div>
      <div className="flex flex-col gap-7">
        <p className="text-xl font-semibold pt-10">My background in Computer Science</p>
        <p className='text-[1.1rem] text-[#f2f2f296]'>I have a strong foundation in computer science, and 
                    I've recently earned a degree in Computer Science from a prestigious university.
                    h blah blahblah blah blah blah blah blah blah blah blah blah blahblah</p>
          <p className='text-[1.1rem] text-[#f2f2f296]'>I have a strong foundation in computer science, and 
                    I've recently earned a degree in Computer Science from a prestigious university.
                    blah blahblah blah 
                     blah blah blah blah blah blah blah blah blahblah</p>
      </div>
    </div>
  )
}
