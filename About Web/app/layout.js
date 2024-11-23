// import localFont from "next/font/local";`
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SessionWrapper from "./components/SessionWrapper";

export const metadata = {
  title: "About Web - By Abubakarchohan",
  description: "tell others about yourself - By created by AbubakarChohan",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="relative h-full w-full bg-slate-950 text-white ">
          <div className="max-md:w-[90vw] w-[80vw] m-auto">
            <SessionWrapper>
              <Navbar />
              {children}
              <Footer />
            </SessionWrapper>
          </div>
        </div>
      </body>
    </html>
  );
}
