'use client'
import {React, useEffect} from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/navigation'


const page = () => {
  const { data: session } = useSession()
  const Router =useRouter()
  if(session) {
      setTimeout(() => {
        Router.push("/")
      }, 2000);
    return null
  }
  return (
    <>
      <div className='w-screen h-screen flex justify-center items-center flex-col gap-2'>
        <button onClick={() => signIn('google')} className='bg-blue-500 px-2 py-2 rounded-lg text-white font-bold md:w-[30vw] w-[80vw]'>Google Login</button>
      </div>
    </>
  )
}

export default page