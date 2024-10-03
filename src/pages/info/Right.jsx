import React from 'react'

export default function Right() {
  return (
    <div className="flex flex-col w-1/2 pl-10 items-center">
                <div className='mt-10 mb-12 w-[28rem]'>
                  <p className="text-xl font-semibold">This is my story - alongside places I've lived throughout my live</p>
                </div>
                <div>
                  <img src="vietnam.jpg" alt="Vietnam" className="w-[470px] h-[700px] object-cover rounded-3xl shadow-md border p-2"/>
                </div>
            </div>
  )
}
