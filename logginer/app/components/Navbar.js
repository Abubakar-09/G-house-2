'use client'
import React from 'react'
import {useRouter} from 'next/navigation'
import { useSession, signIn, signOut } from "next-auth/react"

const Navbar = () => {
    const { data: session } = useSession()
    const Router = useRouter()

    const handleClick = () => {
        Router.push('/login')
    }


    if(session){
        return (
            <>
                <div className='bg-slate-800 text-white flex justify-between px-10 py-2 items-center'>
                    <div className='text-xl font-extrabold'>Loginer</div>
                    <div>
                        <img src={`${session.user.image}`} onClick={()=>signOut()} className='w-[2vw] rounded-full max-md:w-[10vw]' alt="user_Image" />
                    </div>
                </div>
            </>
        )
    }

    return (
        <>
            <div className='bg-slate-800 text-white flex justify-between px-10 py-2 items-center'>
                <div className='text-xl font-extrabold'>Loginer</div>
                <div>
                    <button onClick={() => handleClick()} className='bg-blue-600 px-2 py-2 rounded-lg hover:bg-purple-900 hover:scale-x-125 hover:font-extrabold'>Sign In</button>
                </div>
            </div>
        </>
    )
}

export default Navbar