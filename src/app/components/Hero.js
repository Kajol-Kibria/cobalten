import Image from 'next/image'
import React from 'react'

export default function Hero() {
  return (
    <div className='w-[85%] sm:w-[70%] mx-auto min-h-[60vh] sm:my-16 content-center'>
        <div className='flex'>
            
        <div className='sm:w-1/2 sm:space-y-6 space-y-4'>
            <p className='sm:text-5xl text-4xl font-semibold'>Good Living</p>
            <div className='sm:text-5xl text-4xl font-semibold'>Better <span className='text-[#abb175]'>Life</span></div>
            <p>Find your way to the good living with our furniture.</p>
            <div className='my-6 flex items-center'>
            <input placeholder='search' className='border border-[#abb175] focus:placeholder-transparent sm:w-[350px] w-[50%] h-[48px] rounded-l-2xl pl-6 outline-none'/>
            <button type='submit' className=' h-[48px] border border-[#abb175] bg-[#abb175] text-white rounded-r-2xl px-6 active:scale-90 transition-all duration-200'>Search</button>
          </div>
            <div className='flex items-center justify-between text-center sm:w-[80%]'>
              <div >
                <p className='text-xl font-semibold'>478</p>
                <p className='text-gray-700 text-sm'>Products</p>
              </div>
              <div >
                <p className='text-xl font-semibold'>106</p>
                <p className='text-gray-700 text-sm'>Crafters</p>
              </div>
              <div >
                <p className='text-xl font-semibold'>5k</p>
                <p className='text-gray-700 text-sm'>Relations</p>
              </div>
              
            </div>
        </div>
        <div className='sm:w-1/2 sm:block hidden'>
            <Image src='/hero1.webp' alt='' width={900} height={900}/>
        </div>
        </div>
    </div>
  )
}
