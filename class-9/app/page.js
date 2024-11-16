import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col max-md:gap-5 md:gap-5 md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <div className="text-5xl max-md:text-3xl">
              <span className="font-extrabold">Governor Sindh</span>
              <br />
              Kamran Khan Tessori
            </div>
            <div className="font-extrabold text-2xl max-md:text-xl">
              Certified Cloud Applied Generative AI Engineer (GenEng)
            </div>
            <div className="font-bold text-xl max-md:text-base">
              Earn up to $5,000 / month
              <br />
              Now admissions are open in Hyderabad
            </div>
            <div className="flex justify-center gap-4 items-center max-md:flex-col">
              <button className="inline-flex text-white max-md:w-[80vw] max-md:justify-center bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg font-extrabold">Apply Now</button>
              <div className="text-sm">
                <span className="font-extrabold text-base">562,143</span>
                <br />
                Accepted Applications
              </div>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img className="object-cover object-center rounded" alt="hero" src="/background.jpg" />
          </div>
        </div>
      </section>
    </>
  );
}
