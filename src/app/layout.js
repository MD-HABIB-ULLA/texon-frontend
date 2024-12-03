import Footer from "@/components/Layouts/Footer/Footer";
import Bannar from "@/components/pages/Home/bannar/bannar";
import { Inter, Raleway, Space_Grotesk } from "next/font/google";
import Navbar from "../components/Layouts/NavBar/navbar";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
});
const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
});

export const metadata = {
  title: "Home | Texon Limited",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="light"
      className="overflow-y-scroll scrollbar-thin scrollbar-thumb-primry scrollbar-track-gray"
    >
      <body
        className={`${spaceGrotesk.className} ${raleway.variable} ${inter.variable}`}
      >
        <div>
          <div className="bg-[#F5F8FF] heroBg">
            <div className="">
              <Navbar />
              <Bannar />
            </div>
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}


