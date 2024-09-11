"use client";
import Image from "next/image";
import Link from "next/link";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineLocalPhone, MdOutlineMailOutline } from "react-icons/md";
import { RxDoubleArrowUp } from "react-icons/rx";
import ScrollToTop from "react-scroll-to-top";
import logo from "../../../../public/logo/Texon Logo 55-01 1.svg";

const Footer = () => {
  return (
    <>
      <div style={{ height: "150vh", padding: "20px" }}>
        <ScrollToTop
          smooth
          top={50}
          className="flex justify-center items-center"
          style={{
            borderRadius: "0px",
            backgroundColor: "#252432",
            color: "#FFFFFF",
          }} // Inline style to remove rounding
          component={<RxDoubleArrowUp size={20} />}
        />
      </div>

      <footer className="bg-white mt-5 text-charleston">
        <div className="py-10 px-2 max-w-screen-xl mx-auto">
          <div className="md:grid md:grid-cols-2 lg:grid-cols-5 gap-5">
            <div className="mb-6 lg:mb-0">
              <Image src={logo} className="w-36" alt="logo" />
              <p className="mt-4">
                Texon Limited is a software development company that empowers
                entrepreneurs' ideas into businesses with Gen-Z technology.
              </p>
            </div>

            <div className="mb-6 lg:mb-0 text-base">
              <h3 className="text-primry font-semibold mb-4">Top Services</h3>
              <ul>
                <li className="mb-2">
                  <Link href="/" className="hover:text-primry">
                    Web Development
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="/" className="hover:text-primry">
                    Mobile App Dev
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="/" className="hover:text-primry">
                    Business Software
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="/" className="hover:text-primry">
                    AI & Automation
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="/" className="hover:text-primry">
                    AWS Services
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="/" className="hover:text-primry">
                    IT Infrastructure
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="/" className="hover:text-primry">
                    UI/UX Consulting
                  </Link>
                </li>
              </ul>
            </div>

            <div className="mb-6 lg:mb-0 text-base">
              <h3 className="text-primry font-semibold mb-4">Top Products</h3>
              <ul>
                <li className="mb-2">
                  <Link href="/" className="hover:text-primry">
                    Ecommerce Site & App
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="/" className="hover:text-primry">
                    EduTech & Accounting
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="/" className="hover:text-primry">
                    ERP Software
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="/" className="hover:text-primry">
                    POS Software
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="/" className="hover:text-primry">
                    Pharmacy Software
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="/" className="hover:text-primry">
                    Fashion & Footer
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="/" className="hover:text-primry">
                    Export Import Business
                  </Link>
                </li>
              </ul>
            </div>

            <div className="mb-6 lg:mb-0 text-base">
              <h3 className="font-semibold mb-4 text-primry">Pages</h3>
              <ul>
                <li className="mb-2">
                  <Link href="/" className="hover:text-primry">
                    About
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="/" className="hover:text-primry">
                    Career
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="/" className="hover:text-primry">
                    Team
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="/" className="hover:text-primry">
                    Blogs
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="/" className="hover:text-primry">
                    Case Studies
                  </Link>
                </li>
              </ul>
            </div>

            <div className="text-balance">
              <h3 className="text-primry font-semibold mb-4">Contact</h3>
              <address className="not-italic flex items-center">
                <IoLocationOutline className="text-primry text-xl" />
                <span className="ms-2">
                  Begum Rokeya Sarani, <br /> East Shewrapara, Mirpur, <br />{" "}
                  Dhaka 1216
                </span>
              </address>
              <p className="mt-4 flex items-center">
                <MdOutlineLocalPhone className="text-xl text-blue" />
                <span className="ms-2">
                  <a className="block hover:underline hover:cursor-pointer hover:underline-offset-4 hover:decoration-blue">
                    +88 01409 003646
                  </a>
                  <a className="block hover:underline hover:cursor-pointer hover:underline-offset-4 hover:decoration-blue">
                    +88 01751 763310
                  </a>
                </span>
              </p>
              <p className="flex items-center mt-4 hover:underline hover:cursor-pointer hover:underline-offset-4 hover:decoration-blue">
                <MdOutlineMailOutline className=" text-xl text-primry" />
                <a className="ms-2">texonltd@gmail.com</a>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-blue py-4">
          <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center justify-between px-2">
            <div className="text-center lg:text-left mb-4 lg:mb-0 flex items-center justify-center lg:justify-start space-x-2">
              <p>
                © 2023 Texon Limited —
                <a
                  href="https://twitter.com/texonlimited"
                  className="hover:underline hover:cursor-pointer hover:underline-offset-4 hover:decoration-blue ml-1"
                >
                  @texonlimited
                </a>
              </p>
            </div>
            <nav className="text-center lg:text-right hidden lg:block">
              <ul className="flex lg:flex-row lg:space-x-4">
                <li>
                  <Link href="/" className="hover:text-primry">
                    News
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:text-primry">
                    Ebook
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:text-primry">
                    Career
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
