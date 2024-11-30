import React from 'react'

const HeroSection = () => {
  return (
    <>
      <div className='flex justify-center w-screen md:h-screen max-md:h-[90vh] 2xl:h-[60vh] bg-[url("/bg.jpg")] bg-cover bg-center items-center'>
        <div className='w-screen md:h-screen max-md:h-[90vh] 2xl:h-[60vh] bg-black bg-opacity-85 text-white'>
          <div className='md:w-[80vw] w-[90vw] flex justify-center text-center flex-col  md:h-screen max-md:h-[90vh] 2xl:h-[60vh] m-auto'>
            <div className='flex flex-col gap-2 py-6'>
              <h1 className='md:text-4xl text-3xl font-extrabold'>Enjoy big movies, hit series and more for PKR149.</h1>
              <p className='md:text-lg text-base'>join today. cancel anytime.</p>
            </div>
            <div className='flex flex-col gap-2'>
              <p className='md:text-lg text-base'>Ready to wash?Enter your email to create or restart your membership</p>
              <div className='flex max-md:flex-col gap-2 items-center justify-center'>
                <input type="text" className='px-2 placeholder:text-slate-700 text-black md:w-[30vw] py-2 rounded-lg' placeholder='Email Address' />
                <button className='px-2 bg-red-600 py-2 rounded-lg'>Get Started</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HeroSection