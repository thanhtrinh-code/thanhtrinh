import React from 'react'
import InfoTittle from './InfoTittle'
import Information from './Information'
import Experience from './Experience'

export default function InfoPage() {
  return (
    <>
        <InfoTittle/>
        <Information/>
        <div className='w-full flex justify-center bg-inherit pt-36 pb-20'>
          <div className='w-[72%] border-[0.6px] border-neutral-600'>
          </div>
        </div>
        <Experience/>
        
    </>
  )
}
