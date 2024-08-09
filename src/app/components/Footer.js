import Link from 'next/link';
import React from 'react'
import { FaFacebookF, FaInstagram , FaWhatsapp , FaTwitter  } from "react-icons/fa";

export default function Footer() {
  return (
    <div className='w-[85%] sm:w-[70%] mx-auto mt-32'>
      <div className='sm:flex items-center justify-between my-10'>

        <div className='w-2/3'>
          <Link href='/' className='font-semibold text-lg sm:text-2xl py-2 px-4 bg-[#f3f5e4] rounded-xl w-fit'>CobalTen</Link>
          <div className='flex gap-8 text-xl text-gray-800 py-10'>
            <FaFacebookF/>
            <FaInstagram/>
            <FaWhatsapp/>
            <FaTwitter/>

          </div>
        </div>
        <div className='flex sm:w-1/3'>
          <div className='w-1/2 space-y-5'>
            <p className='font-bold'>Shop</p>
            <p>Chair</p>
            <p>Table</p>
            <p>Bed</p>
          </div>
          <div className='w-1/2 space-y-5'>
            <p className='font-bold'>Help</p>
            <p>Contact</p>
            <p>Payment</p>
            <p>FAQ</p>
          </div>
        </div>
      </div>
      <hr/>
      <div className='my-5 flex justify-center sm:text-sm text-xs'>
        <div>
      ©copyright 2024 made by <span className='bg-orange-500 text-white'>KIBRIA</span>

        </div>
        
      </div>
    </div>
  )
}
