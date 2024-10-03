import React from 'react'

export default function Mobile() {
  return (
    <div className="flex flex-col w-full pr-10 text-center items-center px-4">
        <div className="mb-4">
            <img src="profile.jpg" alt="Profile" className="w-[470px] h-[600px]  object-cover rounded-3xl shadow-md border p-2"/>
        </div>
        <div className='mt-10 mb-12 '>
            <p className="text-xl font-semibold">This is my story - alongside places I've lived throughout my live</p>
        </div>
        <div>
            <img src="vietnam.jpg" alt="Vietnam" className="w-[470px] h-[600px] object-cover rounded-3xl shadow-md border p-2"/>
        </div>
        <div className="flex flex-col gap-7 mb-10">
            <p className="text-xl font-semibold pt-10">My background in Computer Science</p>
            <p className='text-[1.1rem] text-[#f2f2f296]'>The unexpected change to remote learning during my sophomore year due to the COVID-19 pandemic presented an opportunity for me.
          During this time, I found myself with newfound free time, I decided to explore coding.</p>
            <p className='text-[1.1rem] text-[#f2f2f296]'>
            Starting with basic programming languages of HTML and CSS,  I built basic web application.
          Through hours of self-study, I discovered an interest in building things with code.
            </p>
        </div>
        <div className="mb-4">
            <img src="auburn.jpg" alt="Auburn" className="w-[470px] h-[600px] object-cover rounded-3xl shadow-md border p-2"/>
        </div>
        <div className="flex flex-col gap-7 mb-10">
            <p className="text-xl font-semibold pt-10">Beyond coding applications</p>

            <p className='text-[1.1rem] text-[#f2f2f296]'>I view coding as fundamental skill that equips me with the ability to harness the power of technology. Every industry can be beneficial from having employee that I know how to code</p>

            <p className='text-[1.1rem] text-[#f2f2f296]'>
            Coding is also a powerful tool that enables me to bring my ideas to life and creating things that can make an impact on world
            </p>
        </div>
        <div>
            <img src="UW.jpg" alt="UW" className="w-[470px] h-[600px] object-cover rounded-3xl shadow-md border p-2"/>
        </div>
        <div className="flex flex-col gap-7 text-center">
                    <p className="text-xl font-semibold pt-10">In my spare time, </p>

                    <p className='text-[1.1rem] text-[#f2f2f296]'>
                        You can find me in a library working on my side project or reading comic book.
                    </p>

                    <p className='text-[1.1rem] text-[#f2f2f296]'>
                    I also like martial arts and have been training in Jiu-jitsu for about a year. While I'm not aiming to become a professional fighter, I enjoy the physical and mental challenges it presents.
                    </p>
                    <p className="text-2xl font-semibold">Thanks for stopping by! </p>
        </div>
  </div>
  )
}
