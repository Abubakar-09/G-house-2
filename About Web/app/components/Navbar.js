'use client'
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useSession, signIn, signOut } from "next-auth/react"

export default function Navbar() {
    const { data: session } = useSession();
    const [dropdown, setdropdown] = useState(false)

    const Router = useRouter()
    if (session) {
        return (<>
            <nav className='flex w-full justify-between py-3 items-center'>
                <div onClick={() => { Router.push('/') }} className='font-extrabold cursor-pointer text-2xl max-md:text-base'>
                    Patreon
                </div>
                <div className='relative'>
                    <img src={`${session.user.image}`} onClick={() => setdropdown(!dropdown)} alt="user_image" className='w-[3vw] max-md:w-[8vw] rounded-full hover:broder hover:border-2 hover:border-white' />
                    {dropdown && (<>
                        <ul className='bg-white text-black absolute max-md:right-0 text-sm px-2 py-4 rounded-lg flex flex-col gap-2'>
                            <li onClick={()=>{Router.push('/dashboard'); setdropdown(!dropdown)}} className='cursor-pointer'>Dashboard</li>
                            <li onClick={()=>{Router.push(`${session.user.email}`); setdropdown(!dropdown)}} className='cursor-pointer'>Your Page</li>
                            <li onClick={()=>{signOut(); Router.push('/')}} className='cursor-pointer'>Sign Out</li>
                        </ul>
                    </>)}
                </div>
            </nav>
        </>)
    }
    return (
        <>
            <nav className='flex w-full justify-between py-3 items-center'>
                <div onClick={() => { Router.push('/') }} className='font-extrabold cursor-pointer text-2xl max-md:text-base'>
                    Patreon
                </div>
                <div>
                    <button onClick={() => { Router.push('/login') }} className='bg-blue-700 max-md:text-[10px] font-semibold px-2 text-sm py-2 rounded-lg cursor-pointer'>Login In/Sign Up</button>
                </div>
            </nav>
        </>
    );
}
