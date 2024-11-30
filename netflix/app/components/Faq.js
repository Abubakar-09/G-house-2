import React from 'react'

const Faq = () => {
  return (
    <>
        <div className='w-[80vw] m-auto text-white gap-6 max-md:py-32 max-md:w-[90vw] h-screen max-md:h-auto flex flex-col justify-center items-center'>
            <h2 className='font-extrabold max-md:text-3xl text-4xl'>Frequently Asked Questions</h2>
            <div className='w-full flex justify-between bg-slate-700 rounded-lg p-3'>
                <p>What's is Netflix?</p>
                <p>+</p>
            </div>
            <div className='w-full flex justify-between bg-slate-700 rounded-lg p-3'>
                <p>How much does Netflix Cost?</p>
                <p>+</p>
            </div>
            <div className='w-full flex justify-between bg-slate-700 rounded-lg p-3'>
                <p>What can I watch on Netflix?</p>
                <p>+</p>
            </div>
            <div className='w-full flex justify-between bg-slate-700 rounded-lg p-3'>
                <p>Where can I Watch?</p>
                <p>+</p>
            </div>
        </div>
    </>
  )
}

export default Faq