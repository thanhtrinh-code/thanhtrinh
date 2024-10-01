import React from 'react'

export default function Experience() {
  return (
    <div className="w-full flex items-center bg-inherit flex-col">
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
      <div className='sm:w-[72%] text-white flex'>
          <div className='w-1/2'>
            Hong Kong Market
          </div>
          <div className='w-1/2'>
              <p>
                Cashier
              </p>
              <p>
                2001 - 2005
              </p>
              <p>
                My main responsibilities included managing the daily sales, handling customer complaints, and maintaining the store's cleanliness.
              </p>
          </div>
      </div>
      <div className='sm:w-[72%] text-white flex'>
          <div className='w-1/2'>
            Thomas Jefferson High School
          </div>
          <div className='w-1/2'>
              <p>
                Tutor
              </p>
              <p>
                2001 - 2005
              </p>
              <p>
                My main responsibilities included managing the daily sales, handling customer complaints, and maintaining the store's cleanliness.
              </p>
          </div>
      </div>

    </div>
  )
}
