
import Footer from "@/components/Layouts/Footer/Footer";
import Bannar from "@/components/pages/Home/bannar/bannar";
import { Inter, Raleway, Space_Grotesk } from "next/font/google";
import Navbar from "../components/Layouts/NavBar/navbar";
import "./globals.css";
import ProgressBarProvider from "@/provider/ProgressBarProvider";


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
        <div className="relative overflow-hidden">
          {/* Background color layer */}
          <div className="absolute inset-0 bg-[#F5F8FF] -z-20 w-full h-full"></div>

          {/* Background image layer */}
          <div className="absolute inset-0 heroBg -z-10 h-[200vh]"></div>

          {/* Content layer */}
          <div className="relative z-10">
            <ProgressBarProvider>
              <div>
                <div className="pt-3">
                  <Navbar />
                </div>
                <div>{children}</div>
                <Footer />
              </div>
            </ProgressBarProvider>
          </div>
        </div>
      </body>
    </html>
  );

}


