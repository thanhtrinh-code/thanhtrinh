import React from 'react'

export default function InfoTittle() {
  return (
    <div className='w-full flex justify-center sm:mt-36 pl-[1.1rem] mt-14 mb-24'>
        <div className="sm:w-[72%]">
            <p className='text-sm font-bold text-[#9a9a9ad2] tracking-widest mb-8 sm:mb-16'>
                <span style={{
                    boxShadow: "0px 0px 53px 54px rgba(234,242,240,0.42)"
                    ,
                    borderRadius: 20,
                    marginRight: "1rem",
                    color:'white'}}>⚪️</span>
                ABOUT ME
            </p>
        <h4 className='text-3xl sm:text-6xl text-white font-serif font-semibold w-full leading-[1.2]'>
            I am passionate about creating helpful products that can <span className='italic glow-text'>solve problems</span>
        </h4>
        </div>
    </div>
  )
}
