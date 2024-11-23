'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useSession, signOut } from 'next-auth/react';

export default function Navbar() {
  const { data: session } = useSession();
  const [dropdown, setDropdown] = useState(false);

  const router = useRouter();

  const handleNavigation = (path) => {
    setDropdown(false);
    router.push(path);
  };

  if (session) {
    return (
      <nav className="flex w-full justify-between py-3 items-center">
        <div 
          onClick={() => handleNavigation('/')} 
          className="font-extrabold cursor-pointer text-2xl max-md:text-base"
        >
          Patreon
        </div>
        <div className="relative">
          <img 
            src={session.user.image} 
            alt="user_image"
            onClick={() => setDropdown(!dropdown)}
            className="w-[3vw] max-md:w-[8vw] rounded-full hover:border hover:border-2 hover:border-white"
          />
          {dropdown && (
            <ul className="bg-white text-black absolute max-md:right-0 text-sm px-2 py-4 rounded-lg flex flex-col gap-2">
              <li onClick={() => handleNavigation('/dashboard')} className="cursor-pointer">Dashboard</li>
              <li onClick={() => handleNavigation(`/${session.user.email}`)} className="cursor-pointer">Your Page</li>
              <li 
                onClick={() => {
                  signOut();
                  handleNavigation('/');
                }} 
                className="cursor-pointer"
              >
                Sign Out
              </li>
            </ul>
          )}
        </div>
      </nav>
    );
  }

  return (
    <nav className="flex w-full justify-between py-3 items-center">
      <div 
        onClick={() => router.push('/')} 
        className="font-extrabold cursor-pointer text-2xl max-md:text-base"
      >
        Patreon
      </div>
      <div>
        <button 
          onClick={() => router.push('/login')} 
          className="bg-blue-700 max-md:text-[10px] font-semibold px-2 text-sm py-2 rounded-lg cursor-pointer"
        >
          Log In/Sign Up
        </button>
      </div>
    </nav>
  );
}
