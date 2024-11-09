"use client";

import { useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react';

const Page = ({ params }) => {
  const [information, setInformation] = useState([]);
  const [dataAvailable, setdataAvailable] = useState(false)
  const [Skills, setSkills] = useState([])
  const [Url, setUrl] = useState()
  const router = useRouter();


  useEffect(() => {
    const fetchParams = async () => {
      try {
        const resolvedParams = await params; // Await the params promise resolution
        const decodedData = resolvedParams.data.map(e =>
          decodeURIComponent(e.replace(/\+/g, ' '))
        );

        setInformation([...information, ...decodedData]);
      } catch (error) {
        console.error("Error resolving params:", error);
      }
      if (information) {
        setdataAvailable(true);
      } else {
        setdataAvailable(false);
      }

    };
    fetchParams();
    setUrl(window.location.href)
    console.log(Url);

  }, [params]);

  useEffect(() => {
    if (information.length > 0) {
      const skillsString = information[4];
      const splitSkills = skillsString ? skillsString.split(",") : [];
      setSkills(splitSkills);
    }
    
  }, [information]);

  const handleEdit = () => {
    localStorage.setItem('data', JSON.stringify(information));
    localStorage.setItem('dataedit', true);
    router.push('/');
  }

  return (
    <>
      <>
        <div className={`w-[85vw] max-md:w-screen m-auto min-h-screen flex-col flex items-center my-10 static`}>

          <div className="flex flex-col items-center w-full gap-1">
            {/* Profile Header */}
            <h1 className="text-3xl font-extrabold max-md:text-xl max-md:font-bold">{dataAvailable ? `${information[0]}` : `Abu Bakar Chohan`}</h1>
            <div className="text-sm flex gap-2 max-md:flex-col max-md:text-[12px] max-md:w-screen max-md:items-center">
              <p>{dataAvailable ? `${information[3]}` : `09213*****0213`}</p>
              <p className='max-md:hidden'>|</p>
              <p>{dataAvailable ? `${information[2]}` : `test Address`}</p>
              <p className='max-md:hidden'>|</p>
              <p>{dataAvailable ? `${information[1]}` : `test@Gmail.com`}</p>
            </div>

            {/* Experience Section */}
            <div className="flex flex-col w-full gap-1 my-10">
              <div>
                <h1 className="text-3xl font-extrabold max-md:text-xl max-md:font-bold">Experience:</h1>
                <div className="w-full h-[1px] bg-black"></div>
              </div>
              <div className="text-sm max-md:text-[12px]">
                {dataAvailable ? `${information[5]}` : `Your Experience Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque soluta quia dicta.`}
              </div>
            </div>

            {/* Skills Section */}
            <div className="flex flex-col w-full gap-1 my-10">
              <div>
                <h1 className="text-3xl font-extrabold max-md:text-xl max-md:font-bold">Skills:</h1>
                <div className="w-full h-[1px] bg-black"></div>
              </div>
              <div className="text-sm max-md:text-[12px]">
                <ul>
                  {dataAvailable ? (
                    Skills.map((skill, index) => (
                      <li key={index}>{skill}</li>
                    ))
                  ) : (
                    <>
                      <li>Web Developer</li>
                      <li>Web Developer2</li>
                      <li>Web Developer3</li>
                    </>
                  )}
                </ul>
              </div>
            </div>

            {/* Share Button */}
            <div className="w-full">
              <button
                type="button"
                className="text-white fixed  right-10 bottom-10 max-md:bottom-1  max-md:flex max-md:justify-center max-md:items-center  max-md:right-1 bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-full text-sm px-5 py-3 text-center me-2 mb-2"
                onClick={() => navigator.share({
                  title: 'Portfolio Website',
                  text: `${information[0]} Portfolio Link`,
                  url: `${Url}`
                })}
              >
                <i className="material-icons">share</i>
              </button>
            </div>

            {/* Edit Button */}
            <div className="w-full">
              <button
                type="button"
                className="text-white max-md:bottom-[60px]  max-md:flex max-md:justify-center max-md:items-center  max-md:right-1 fixed right-10 bottom-[103px] bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-full text-sm px-5 py-3 text-center me-2 mb-2"
                onClick={() => { handleEdit() }}
              >
                <i className="material-icons">edit</i>
              </button>
            </div>

          </div>

        </div>
      </>
    </>
  );
};

export default Page;
