import React from 'react'

export default function Left2() {
  return (
    <div className="flex flex-col w-1/2 pr-10 items-center">
    <div className="mb-4">
        <img src="auburn.jpg" alt="Auburn" className="w-[470px] h-[660px] object-cover rounded-3xl shadow-md border p-2"/>
    </div>
<div className="flex flex-col gap-7">
     <p className="text-xl font-semibold pt-10">In my spare time,</p>

     <p className='text-[1.1rem] text-[#f2f2f296]'>
      You can find me in a library working on my side project or reading comic book.
     </p>

    <p className='text-[1.1rem] text-[#f2f2f296]'>
    I also like martial arts and have been training in Jiu-jitsu for about a year. While I'm not aiming to become a professional fighter, I enjoy the physical and mental challenges it presents.
    </p>
    <p className="text-2xl font-semibold pt-10">Thanks for stopping by!</p>

</div>
</div>
  )
}
