import localFont from "next/font/local";
import "./globals.css";
import { Navigation } from "./components/Navigation";
import GsapScrollTrigger from "./components/GsapScrollTrigger";
import Footer from "./components/Footer";
import LenisScroll from "./components/LenisScroll";

const myFont = localFont({ src: "../../public/SaansTRIAL-Regular.ttf" });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <LenisScroll>
        <body data-scroll-container className={myFont.className}>
          <GsapScrollTrigger />
          <Navigation />
          <main className="w-full h-full pt-20">{children}</main>
          <Footer />
        </body>
      </LenisScroll>
    </html>
  );
}
