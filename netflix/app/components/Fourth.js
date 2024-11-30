import React from 'react'
import Image from 'next/image'

const Fourth = () => {
  return (
    <>
      <div className='md:w-[80vw] w-[90vw] max-md:flex-col xl:h-[60vh] max-md:py-12 text-white m-auto max-md:h-auto h-screen flex gap-5 justify-between items-center'>
        <div className='flex flex-col gap-5 px-3'>
          <h2 className='font-extrabold text-4xl md:text-6xl'>Watch EveryWhere</h2>
          <p className='text-base md:text-lg'>Stream unlimited movies and tv Shows on your phone, Tablet, Laptop, and TV.</p>
        </div>
        <div className='relative md:w-[40vw] md:h-[60vh] w-[70vw] h-[40vh]'>
          <Image src={'/tv.png'} className='absolute z-10 top-0' fill={true} />
          <video src="/video.m4v" className='absolute top-[21%] w-[74%] left-[13%] h-[51%]' loop muted autoPlay></video>
        </div>
      </div>
    </>
  )
}

export default Fourth