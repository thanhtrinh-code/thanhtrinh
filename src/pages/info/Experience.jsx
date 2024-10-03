import React from 'react'

export default function Experience() {
  return (
    <div className="w-full flex items-start sm:items-center pl-4 pr-3 sm:pr-0 sm:pl-0 bg-inherit flex-col">
      <div className="sm:w-[72%]">
            <p className='text-sm font-bold text-[#9a9a9ad2] tracking-widest mb-8 sm:mb-16'>
                <span style={{
                    boxShadow: "0px 0px 53px 18px rgba(234,242,240,0.42)"
                    ,
                    borderRadius: 20,
                    marginRight: "1rem",

                    color:'white'}}>⚪️</span>
                NON-TECHNICAL EXPERIENCE
            </p>
      </div>
      <div className='sm:w-[72%] text-white flex mb-14 flex-col sm:flex-row'>
          <div className='w-full sm:w-1/2 font-bold text-4xl'>
            Hong Kong Market
          </div>
          <div className='w-full sm:w-1/2'>
              <p className='text-white text-3xl mb-2'>
                Cashier
              </p>
              <p className='text-gray-400 text-xl mb-8'>
                2020-2023
              </p>
              <p className='text-gray-400 text-xl'>
                I responsible for greeting customers, processing payments, and providing exceptional customer service. I also assist with inventory management and maintaining a clean and organized workspace.
              </p>
          </div>
      </div>
      <div className='sm:w-[72%] text-white flex mb-14 flex-col sm:flex-row'>
          <div className='w-full sm:w-1/2 font-bold text-4xl'>
            Thomas Jefferson High School
          </div>
          <div className='w-full sm:w-1/2'>
              <p className='text-white text-3xl mb-2'>
                Math Tutor
              </p>
              <p className='text-gray-400 text-xl mb-8'>
                2022-2023
              </p>
              <p className='text-gray-400 text-xl'>
                I provided one-on-one tutoring sessions to students of high school level student. I helped students build their confidence and skills and explain clearly over solution.
              </p>
          </div>
      </div>

    </div>
  )
}
