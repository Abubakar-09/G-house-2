"use client";

import { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';
import { Router } from "next/router";

export default function Home() {
  const router = useRouter();
  const [Data, setData] = useState({
    name: '',
    email: '',
    skills: '',
    number: '',
    experience: '',
    address: ''
  })

  const handleForm = (e) => {
    e.preventDefault(); // Prevents default form submission

    const formData = new FormData(e.target);
    const formValues = Array.from(formData.entries()).map(([key, value]) => value);

    let string ='';
    formValues.map(e=>{
      string = string + '/' + e
    })
    console.log(string);
    

    // Redirect to the new URL
    router.push(string);
    localStorage.setItem("dataedit", 'false');
  };

  const handleChange = (e)=>{
    setData({...Data, [e.target.name]:[e.target.value]})
  }

  useEffect(() => {
    if(localStorage.getItem("data")){
    if(localStorage.getItem("dataedit")=='false'){
      let string = ''
      const storedData = JSON.parse(localStorage.getItem('data')) || {};
      storedData.map(e=>{string = string + '/' + e})
      // console.log(`dataedit is false ${string}`);
      
      router.push(`${string}`)
    }
      const storedData = JSON.parse(localStorage.getItem('data')) || {};
      setData({
        name: storedData[0] || '',
        email: storedData[1] || '',
        skills: storedData[4] || '',
        number: storedData[3] || '',
        experience: storedData[5] || '',
        address: storedData[2] || ''
      });
    }
  }, [])
  

  return (
    <>
      <div className={`w-[85vw] max-md:w-screen m-auto min-h-screen flex-col flex items-center my-10 static`}>
        
          <div className="w-[85vw] max-md:w-screen m-auto min-h-[60vh] flex-col flex items-center my-10 static">
            <div className="my-2 w-full max-md:text-3xl max-md:font-bold flex justify-center text-2xl">Form</div>
            <form onSubmit={handleForm} className="flex flex-col gap-3 items-center justify-center w-full">
              <input value={Data.name} onChange={(e)=>{handleChange(e)}} className="border border-black w-[40%] max-md:w-[80vw] rounded-full py-2 placeholder-black text-sm px-2" placeholder="Please Enter Your Name" type="text" name="name" />
              <input value={Data.email} onChange={(e)=>{handleChange(e)}} className="border border-black w-[40%] max-md:w-[80vw] rounded-full py-2 placeholder-black text-sm px-2" placeholder="Please Enter Your Email" type="text" name="email" />
              <input value={Data.address} onChange={(e)=>{handleChange(e)}} className="border border-black w-[40%] max-md:w-[80vw] rounded-full py-2 placeholder-black text-sm px-2" placeholder="Please Enter Your Address" type="text" name="address" />
              <input value={Data.number} onChange={(e)=>{handleChange(e)}} className="border border-black w-[40%] max-md:w-[80vw] rounded-full py-2 placeholder-black text-sm px-2" placeholder="Please Enter Your Number" type="text" name="number" />
              <p className="max-md:w-[80vw] max-md:text-sm">Separate Your Skills with a Comma - 6 Max</p>
              <input value={Data.skills} onChange={(e)=>{handleChange(e)}} className="border border-black w-[40%] max-md:w-[80vw] rounded-full py-2 placeholder-black text-sm px-2" placeholder="Please Enter Your Skills" type="text" name="skills" />
              <input value={Data.experience} onChange={(e)=>{handleChange(e)}} className="border border-black w-[40%] max-md:w-[80vw] rounded-full py-2 placeholder-black text-sm px-2" placeholder="Please Enter Your Experience" type="text" name="experience" />
              <button type="submit" className="hover:scale-x-125 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  See PortFolio/Submit 
                </span>
              </button>
            </form>
          </div>


      </div>
    </>
  );
}
