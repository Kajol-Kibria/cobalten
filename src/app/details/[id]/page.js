'use client'
import details from '@/app/details'
import { add } from '@/app/features/cartSlice';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { useDispatch } from 'react-redux';

export default function Page({params}) {
  const dispatch = useDispatch();
  const handleadd = (item) =>{
    dispatch(add(item))
  }
  const Id = params.id
  
  const item = details.filter(value => {return value.id == Id})[0];
  const similar = details.filter(value => {return value.id != Id});
  console.log(similar);
  return (
    <div className='w-[85%] sm:w-[48%] mx-auto '>
      <div className='sm:flex items-center justify-center py-16'>

      <div className='sm:w-1/2 relative flex items-center justify-center'>
        <div className='-z-40 sm:w-72 sm:h-72 w-56 h-56 absolute shape bg-[#f3f5e4]'></div>
        <Image className='' src={item.image} alt='' width={500} height={500}/>
      </div>
      <div className='sm:w-1/2'>
        <p className='sm:text-5xl text-3xl font-bold'>{item.name}</p>
        <p className='font-bold text-2xl my-5'>{item.price} tk</p>
        <button onClick={()=>handleadd(item)} className='py-2 my-2 px-6 bg-[#404835] text-md text-white rounded-xl'>Add to cart</button>
        <p className='text-md mt-5 text-gray-700'>{item.name} {item.description}</p>
      </div>
      </div>
      <div>
        <p className='text-center font-bold text-3xl'>Similar products</p>
        <div className='grid grid-cols-1  sm:grid-cols-4 items-center justify-between gap-6 py-20 w-[70%] mx-auto sm:w-[100%]'>

        {similar.map((a)=>{
          return(
            <div key={a.id} className=' bg-[#f4f5eb]/80 group grid items-center justify-center text-center rounded-lg py-6'>
            <div>
                <Link href={`./${a.id}`}>
                <Image className='group-hover:scale-150 sm:scale-100 scale-[1.4] group-hover:-translate-y-4 transition-all duration-500 drop-shadow-[0px_50px_35px_#0007] object-cover' src={a.image} alt='' width={150} height={150}/>
                <p className='font-bold my-4'>{a.name}</p>
                </Link>
                <p className='font-semibold'>{a.price} tk</p>
                <button onClick={()=>handleadd(a)} className='py-1 my-2 px-4 bg-[#404835] text-sm text-white rounded-xl'>Add to cart</button>
            </div>
        </div>
        )})}
        </div>
      </div>
     
    </div>
  )
}
