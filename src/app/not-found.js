import Link from 'next/link'
import React from 'react'

export default function notfound() {
  return (
    <div className='w-[70%] sm:w-[48%] mx-auto min-h-[60vh]'>
        <section >
	<div className='text-center '>
		
		<div class="four_zero_four_bg">
			<h1 className='sm:text-8xl text-4xl rotate-180'>404</h1>
		
		
		</div>
		
		<div className='sm:text-2xl text-lg'>
		<h3>
		Look like you're lost
		</h3>
		
		<p className='mb-10'>the page you are looking for not avaible!</p>
		
		<Link className='bg-[#abb175] text-white py-2 px-6 text-lg rounded-lg ' href="/" >Go to Home</Link>
	</div>
		
	</div>
</section>
        
    </div>
  )
}
