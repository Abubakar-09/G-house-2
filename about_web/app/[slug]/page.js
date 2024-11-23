'use client';
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

const Page = () => {
  const Params = useParams();
  const [Data, setData] = useState({
    name: '',
    email: '',
    pic: '',
    about: '',
    linkdin: '',
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch('/show', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email: Params.slug.replace('%40', '@') }),
        });

        if (response.ok) {
          const userData = await response.json();
          //console.log('Fetched User Data:', userData);

          setData({
            name: userData.name || 'Anonymous',
            email: userData.email || '',
            pic: userData.pic || 'https://dummyimage.com/720x600',
            about: userData.about || 'No details available.',
            linkdin: userData.linkdin || '#',
          });

          setLoading(false);
        } else {
          console.error('Failed to fetch user data:', await response.text());
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, [Params]);

  useEffect(() => {
    //console.log('Updated Data state:', Data);
  }, [Data]);

  if (loading) {
    return <div className="text-white text-center">Loading...</div>;
  }

  return (
    <>
      <section className="body-font overflow-hidden">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <img
            className="w-[13vw] max-md:w-[28vw] mb-10 object-cover object-center rounded-full"
            alt={Data.name}
            src={Data.pic}
          />
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">{Data.name}</h1>
            <p className="leading-relaxed mb-8">{Data.about}</p>
            <div className="flex justify-center">
              <a
                href={Data.linkdin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex text-white w-[40vw] max-md:w-[80vw] text-center bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
