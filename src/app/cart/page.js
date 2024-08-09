'use client'
import Image from 'next/image'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add, clear, decrease, remove } from '../features/cartSlice'
import Link from 'next/link'
import { AiOutlineDelete } from "react-icons/ai";
import { FaArrowLeftLong } from "react-icons/fa6";



export default function page() {
    const data = useSelector((state) => state.cart)

    const dispatch = useDispatch();

    const handleadd = (item) =>{
        dispatch(add(item))
    }
    const handleRemove = (item) =>{
        dispatch(remove(item))
    }
    const handledecrease = (item) =>{
        dispatch(decrease(item))
    }
    const handleClear = () =>{
        dispatch(clear())
    }
  return (
    <div className='w-[90%] sm:w-[48%] mx-auto min-h-[50vh]'>
        
        <div>
            <p className='text-3xl font-bold text-center my-20'>Your Cart</p>
            {
                (data.cartItems.length === 0) ? (
                    <div className='text-center font-bold grid items-center justify-center'>
                        <p className='text-4xl mb-20'>Your Cart is Empty</p>
                        <Image src='/empty-cart.png' alt='' width={300} height={300}/>
                        <Link href='./' className='bg-[#f3f5e4] py-2 px-5 rounded-lg text-2xl flex items-center gap-3 justify-center'><FaArrowLeftLong size={25}/> Order Now</Link>
                    </div>
                ) : (

            <div className='space-y-7'>
                {data.cartItems.map((a)=>{return(
                    <div key={a.id} className='shadow-md bg-[#f3f5e4]/60 py-5 px-5 rounded-lg'>

                    
                    <div  className='flex items-center justify-around  '>
                        <Image className='sm:scale-125 ' src={a.image} alt='' width={100} height={100} />
                        <p className='sm:block hidden'>{a.name}</p>
                        <p className='sm:block hidden'>{a.price * a.count}tk</p>
                        <div className='space-y-3'>
                        <div className='sm:hidden'>

                        <p>{a.name}</p>
                        <p>{a.price * a.count}tk</p>
                        </div>
                        <div className='flex gap-4'>

                    <div className='flex w-fit bg-white   rounded-lg shadow-sm'>
                            <button className='py-2 px-3' onClick={()=>handledecrease(a)}>-</button>
                            <p className='py-2 w-9 text-center  border-x border-[#f3f5e4]'>{a.count}</p>
                            <button className='py-2 px-3' onClick={()=>handleadd(a)}>+</button>
                        </div>
                        <button onClick={()=>handleRemove(a)} className='mx-5'><AiOutlineDelete size={20}/></button>
                    </div>
                        </div>
                        
                    </div>
                    
                    </div>
                    
                )})}
                <div className='sm:flex justify-between py-5'>
                <button className='border bg-[#f3f5e4]/60 px-6 py-3  rounded-xl h-fit' onClick={()=>{handleClear()}}>Clear Cart</button>
                <div className='space-y-3 pt-5 sm:pt-0'>
                    <p className='text-xl font-bold'>Subtotal : 5000tk</p>
                    <p>Taxas and shipping calculated at checkout</p>
                    <button className='w-full py-3 rounded-xl bg-[#f3f5e4] '>Check out</button>
                    <div className=''>
                        <Link className='flex items-center gap-3' href='/'><FaArrowLeftLong size={18}/> Continue Shopping</Link>
                    </div>
                </div>
                </div>
            </div>
                )
                                        
                
            }
        </div>
    </div>
  )
}
