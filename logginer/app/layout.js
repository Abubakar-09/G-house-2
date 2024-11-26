import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./globals.css";
import SessionWrapper from "./components/SessionWrapper";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SessionWrapper>
          <Navbar />
          {children}
          <Footer />
        </SessionWrapper>
      </body>
    </html>
  );
}