import Footer from "@/components/Layouts/Footer/Footer";
import Navbar from "@/components/Layouts/NavBar/navbar";
import AboutBannar from "@/components/pages/About/aboutBannar/aboutBannar";
import { Inter, Raleway, Space_Grotesk } from "next/font/google";

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
  title: "Product List | Texon Limited",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.className} ${raleway.variable} ${inter.variable}`}
      >
        <div className="bg-[#F5F8FF]">
          <div className="heroBg">
            <Navbar />
            <AboutBannar />
          </div>
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
