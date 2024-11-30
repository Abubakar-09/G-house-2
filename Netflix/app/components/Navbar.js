import React from 'react'
import Image from 'next/image'

const Navbar = () => {
  return (
    <>
      <div className='flex md:w-[80vw] w-[90vw] m-auto py-3 justify-between h-12 bg-transparent absolute top-0'>
        <div className='md:w-[40vw] h-full max-md:w-[40vw] flex flex-start relative'>
          <Image src='/logo.svg' fill={true} alt='logo' />
        </div>
        <div className='flex gap-2 items-center'>
          <button className='bg-red-500 md:p-2 p-1 font-bold text-white text-[10px] md:text-sm rounded-lg'>English <span className='font-extrabold'>↓</span></button>
          <button className='bg-red-500 md:p-2 p-1 font-bold text-white text-[10px] md:text-sm rounded-lg'>Sign In</button>
        </div>
      </div>
    </>
  )
}

export default Navbar