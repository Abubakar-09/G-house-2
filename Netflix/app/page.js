'use client'
import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Second from "./components/Second";
import Third from "./components/Third";
import Fourth from "./components/Fourth";
import Fiveth from "./components/Fiveth";
import Faq from "./components/Faq";

export default function Home() {
  return (
    <>
      <HeroSection />
      <div className="h-2 bg-slate-800 w-screen"></div>
      <Second />
      <div className="h-2 bg-slate-800 w-screen"></div>
      <Third />
      <div className="h-2 bg-slate-800 w-screen"></div>
      <Fourth />
      <div className="h-2 bg-slate-800 w-screen"></div>
      <Fiveth />
      <div className="h-2 bg-slate-800 w-screen"></div>
      <Faq />
      <div className="h-2 bg-slate-800 w-screen"></div>
    </>
  );
}
