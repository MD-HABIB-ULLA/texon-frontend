import Footer from "@/components/Layouts/Footer/Footer";
import Navbar from "@/components/Layouts/NavBar/navbar";
import ServicesBanner from "@/components/pages/Services/servicesBanner/servicesBanner";
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
  title: "Home | Texon Limited",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.className} ${raleway.variable} ${inter.variable}`}
      >
        <div>
          <div className="bg-[#F5F8FF]">
            <div className="heroBg">
              <Navbar />
              <ServicesBanner />
            </div>
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
