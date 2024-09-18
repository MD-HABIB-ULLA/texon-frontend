import Footer from "@/components/Layouts/Footer/Footer";
import Navbar from "@/components/Layouts/NavBar/navbar";
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
  title: "aiandautomation | Texon Limited",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className="overflow-y-scroll scrollbar-thin scrollbar-thumb-primry scrollbar-track-gray"
    >
      <body
        className={`${spaceGrotesk.className} ${raleway.variable} ${inter.variable}`}
      >
        <div className="bg-[#F5F8FF]">
          <div>
            <Navbar />
          </div>
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
