'use client'
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from "next/navigation"


const page = () => {
  const { data: session } = useSession();
  const Router  = useRouter();

  const HandleLogin = ()=>{
    signIn('github');
  }
  
    if(session){
      Router.push('/')
    }
    return (
      <>
        <div className='h-screen flex flex-col items-center py-32 gap-5'>
          <button onClick={() => HandleLogin()} className='bg-white text-black py-3 w-[30vw] max-md:w-[60vw] rounded-lg'>
            Github Sign In
          </button>
        </div>
      </>
    )
}

export default page