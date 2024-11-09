import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata = {
  title: "PortFolio Website",
  description: "Created by Abubakar Chohan",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
        </style>
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"></link>
      </head>
      <body>
      <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
