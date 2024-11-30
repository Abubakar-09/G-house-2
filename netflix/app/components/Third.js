import React from 'react'
import Image from 'next/image'

const Third = () => {
    return (
        <>
            <div className='md:w-[80vw] w-[90vw] max-md:flex-col-reverse py-32 xl:h-[60vh] max-md:py-12 text-white m-auto max-md:h-auto h-screen flex max-md:gap-7 gap-5 justify-between items-center'>
                <div className='relative md:w-[40vw] md:h-[60vh] w-[80vw] h-[40vh]'>
                    <Image src={'/mobile.jpg'} className='absolute z-10 top-0' fill={true} />
                </div>
                <div className='flex flex-col max-md:gap-7 gap-5 px-3'>
                    <h2 className='font-extrabold text-3xl md:text-5xl'>Download Your Shows to <br /> Watch Offline.</h2>
                    <p className='text-base md:text-lg'>Save Your Favourite easily and always have something to Watch.</p>
                </div>
            </div>
        </>
    )
}

export default Third