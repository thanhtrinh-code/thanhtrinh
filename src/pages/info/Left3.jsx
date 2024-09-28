import React from 'react'

export default function Left3() {
  return (
    <div className="flex flex-col w-full pr-10 text-center items-center px-4">
        <div className="mb-4">
            <img src="profile.jpg" alt="Profile" className="w-[470px] h-[600px]  object-cover rounded-3xl shadow-md border p-2"/>
        </div>
        <div className='mt-10 mb-12 '>
            <p className="text-xl font-semibold">This is my story</p>
        </div>
        <div>
            <img src="vietnam.jpg" alt="Vietnam" className="w-[470px] h-[600px] object-cover rounded-3xl shadow-md border p-2"/>
        </div>
        <div className="flex flex-col gap-7 mb-10">
            <p className="text-xl font-semibold pt-10">My background in Computer Science</p>
            <p className='text-[1.1rem] text-[#f2f2f296]'>I have a strong foundation in computer science, and 
                  I've recently earned a degree in Computer Science from a prestigious university.
                  h blah blahblah blah blah blah blah blah blah blah blah blah blahblah</p>
            <p className='text-[1.1rem] text-[#f2f2f296]'>I have a strong foundation in computer science, and 
                  I've recently earned a degree in Computer Science from a prestigious university.
                  blah blahblah blah 
                   blah blah blah blah blah blah blah blah blahblah</p>
        </div>
        <div className="mb-4">
            <img src="auburn.jpg" alt="Auburn" className="w-[470px] h-[600px] object-cover rounded-3xl shadow-md border p-2"/>
        </div>
        <div className="flex flex-col gap-7 mb-10">
            <p className="text-xl font-semibold pt-10">My background in Computer Science</p>

            <p className='text-[1.1rem] text-[#f2f2f296]'>I have a strong foundation in computer science, and 
                I've recently earned a degree in Computer Science from a prestigious university.
                h blah blahblah blah blah blah blah blah blah blah blah blah blahblah</p>

            <p className='text-[1.1rem] text-[#f2f2f296]'>I have a strong foundation in computer science, and 
                    I've recently earned a degree in Computer Science from a prestigious university.
                    blah blahblah blah 
                    blah blah blah blah blah blah blah blah blahblah</p>
        </div>
        <div>
            <img src="UW.jpg" alt="UW" className="w-[470px] h-[600px] object-cover rounded-3xl shadow-md border p-2"/>
        </div>
        <div className="flex flex-col gap-7 text-center mb-16">
                    <p className="text-xl font-semibold pt-10">But I wanted more</p>

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
