import Footer from "@/components/Layouts/Footer/Footer";
import Navbar from "@/components/Layouts/NavBar/navbar";
import ProductBannar from "@/components/pages/Products/productBannar/productBannar";
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
    <html
      lang="en"
      data-theme="light"
      className="overflow-y-scroll scrollbar-thin scrollbar-thumb-primry scrollbar-track-gray"
    >
      <body
        className={`${spaceGrotesk.className} ${raleway.variable} ${inter.variable}`}
      >
        <div className="bg-[#F5F8FF] heroBg">
          <div className="">
            <Navbar />
            <ProductBannar />
          </div>
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
