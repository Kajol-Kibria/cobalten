import Image from 'next/image'
import React from 'react'

export default function Subscribe() {
  return (
    <div className='w-[85%] sm:w-[70%] mx-auto sm:my-10'>
        <div className='grid justify-center relative text-center'>
         <Image className='rounded-3xl sm:h-[500px] h-[300px] w-[100vw] object-cover' src='/pexels-isabellequinn-1421178.jpg' alt='' width={900} height={900}/>
        
        <div className='absolute  sm:px-28  h-full content-center rounded-l-xl sm:backdrop-blur-sm'>
          <div className='text-2xl text-white font-semibold'>Subscribe and get</div>
          <div className='sm:text-6xl text-5xl text-[#7b8627] font-semibold'>10% OFF</div>
          <div className=' mb-10 text-xs sm:text-lg sm:bg-transparent text-white bg-orange-500/60'>Get 10% discount for all products</div>
          <div className='flex items-center justify-center'>
            <input placeholder='Your Email' type='email' className='sm:w-[350px] w-[50%] h-[48px] rounded-l-2xl pl-6 outline-none'/>
            <button type='submit' className='h-[48px] bg-[#abb175] text-white rounded-r-2xl px-6 active:scale-90 transition-all duration-200'>Subscribe</button>
          </div>
        </div>
        </div>
    </div>
  )
}
