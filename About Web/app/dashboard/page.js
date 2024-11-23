'use client';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';

const Page = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  const [form, setForm] = useState({
    about: '',
    linkdin: '',
  });

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login');
    }
  }, [status, router]);

  useEffect(() => {
    if (session) {
      const fetchUserData = async () => {
        try {
          const response = await fetch('/show', {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: session.user.email }),
          });

          if (response.ok) {
            const userData = await response.json();
            setForm({
              about: userData.about || '',
              linkdin: userData.linkdin || '',
            });
          } else {
            console.error('Failed to fetch user data:', await response.text());
          }
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      };

      fetchUserData();
    }
  }, [session]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleForm = async (e) => {
    e.preventDefault();

    const data = {
      name: session.user.name,
      pic: session.user.image,
      email: session.user.email,
      about: form.about,
      linkdin: form.linkdin,
    };

    try {
      const response = await fetch('/manage', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        router.push('/dashboard');
      } else {
        console.error('Failed to update:', await response.text());
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (!session) {
    return null;
  }

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <form onSubmit={handleForm} className="flex flex-col md:w-[50%] w-[90%] justify-center items-center gap-3">
        <input
          value={form.about}
          onChange={handleChange}
          className="w-full text-black px-2 py-2 rounded-lg placeholder:px-2"
          placeholder="Please Enter About Yourself"
          type="text"
          name="about"
        />
        <input
          value={form.linkdin}
          onChange={handleChange}
          className="w-full text-black px-2 py-2 rounded-lg placeholder:px-2"
          placeholder="Please Enter Your LinkedIn Link"
          type="text"
          name="linkdin"
        />
        <button
          className="w-full py-2 rounded-lg bg-violet-800 font-extrabold hover:scale-y-125"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Page;
