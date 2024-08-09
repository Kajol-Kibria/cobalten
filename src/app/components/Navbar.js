'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { HiOutlineUserCircle } from "react-icons/hi2";
import { IoCartOutline  } from "react-icons/io5";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { usePathname } from 'next/navigation';
import { IoMdClose } from "react-icons/io";
import {SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { useSelector } from 'react-redux';


export default function Navbar() {
    const data = useSelector((state)=> state.cart)
    const [menu, setMenu] = useState(false);
    const path = usePathname();
    const [print, setPrint] = useState(false);
    useEffect(()=>{setPrint(true)},[])
    const navarray = [
        {
            name : 'Home',
            link : '/'
        },
        {
            name : 'Books',
            link : '/books'
        },
        {
            name : 'Contact',
            link : '/contact'
        },
        {
            name : 'Products',
            link : '/products'
        }]
  return (
    <div className='w-[85%] sm:w-[70%] mx-auto h-[10vh] content-center'>
        <div className='flex items-center justify-between'>
            <div>
                <Link href='/'>
                <p className='font-semibold text-lg sm:text-2xl py-2 px-4 bg-[#f3f5e4] rounded-xl'>CobalTen</p>
                </Link>
            </div>
            <div className='hidden sm:block'>

            <div className='flex gap-12 font-semibold '>
                {navarray.map(({name, link})=>{
                    return(
                    <div key={name} className={`${path === link && 'underline underline-offset-8 text-black'}`}>
                        <Link href={link}>{name}</Link>
                    </div>
                    )
                })}
            </div>
            </div>
            <div className='flex sm:gap-5 gap-2'>
                <Link href='/cart'>
                <div className='flex items-center'>
                    <IoCartOutline size={27}/>
                    <div className=' bg-[#abb175] text-white text-sm font-semibold w-5 h-5  rounded-full text-center '>{print && data.cartItems.length}</div>
                </div>
                </Link>
                <div className='cursor-pointer'>
                    
                    <SignedOut>
              <SignInButton>
              <HiOutlineUserCircle size={27}/>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <UserButton/>
            </SignedIn>
                </div>
                <div onClick={()=>{setMenu(!menu)}} className='block sm:hidden z-50'>
                    <HiOutlineMenuAlt1 className={`${menu?'hidden':'block'}`} size={27}/>
                    <IoMdClose className={`${menu?'block':'hidden'} fixed right-6`} size={27}/>
                </div>
                <div onClick={()=>{setMenu(!menu)}} className={`fixed z-40 right-0 left-0 bottom-0 top-0 bg-orange-50 py-20 text-gray-700 ${menu?'block':'hidden'}`}>
                    {navarray.map(({name, link})=>{
                        return(
                            <div key={name} className={`w-[80%] mx-auto text-center font-semibold border-b border-gray-600/20 py-6  ${path === link && 'underline underline-offset-8 text-black'}`}>
                                <Link href={link}>{name}</Link>
                            </div>
                        )
                    })}
                </div>
                
                
            </div>
        </div>

    </div>
  )
}
