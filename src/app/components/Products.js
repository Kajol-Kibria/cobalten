'use client'
import React from 'react'
import details from '../details'
import Image from 'next/image'
import Link from 'next/link'
import { useDispatch } from 'react-redux'
import { add } from '../features/cartSlice'


export default function Products() {
   
    const dispatch = useDispatch();
    const handleadd = (item) =>{
        dispatch(add(item))
    }
  return (
    <div className='w-[70%] sm:w-[48%] mx-auto'>
        <p className='text-2xl font-semibold text-center'>All Products</p>
        <div className=' grid grid-cols-1  sm:grid-cols-4 items-center justify-between gap-6 py-20'>

        {details.map((item)=>{
            return(
                <div key={item.id} className=' bg-[#f4f5eb]/80 group grid items-center justify-center text-center rounded-lg py-6'>
                    <div>
                        <Link href={`./details/${item.id}`}>
                        <Image className='group-hover:scale-150 sm:scale-100 scale-[1.4]  group-hover:-translate-y-4 transition-all duration-500 drop-shadow-[0px_50px_35px_#0007] object-cover' src={item.image} alt='' width={150} height={150}/>
                        <p className='font-bold my-4'>{item.name}</p>
                        </Link>
                        <p className='font-semibold'>{item.price} tk</p>
                        <button onClick={()=>handleadd(item)} className='py-1 my-2 px-4 bg-[#404835] text-sm text-white rounded-xl'>Add to cart</button>
                    </div>
                </div>
            )
        })}
        </div>
    </div>
  )
}
