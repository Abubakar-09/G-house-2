'use client';
import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Page = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") {
      router.push('/'); // Navigate only after the component has rendered
    }
  }, [status, router]);

  const handleLogin = () => {
    signIn('github');
  };

  if (status === "authenticated") {
    return null; // Avoid rendering the page content if already authenticated
  }

  return (
    <div className="h-screen flex flex-col items-center py-32 gap-5">
      <button 
        onClick={handleLogin} 
        className="bg-white text-black py-3 w-[30vw] max-md:w-[60vw] rounded-lg"
      >
        GitHub Sign In
      </button>
    </div>
  );
};

export default Page;
