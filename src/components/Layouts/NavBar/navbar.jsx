import Image from "next/image";
import Link from "next/link";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import erp from "../../../../public/icon/erp.svg";
import stock from "../../../../public/icon/quick-stock.svg";
import edu from "../../../../public/icon/tech.svg";
import texonmart from "../../../../public/icon/texon-mart.svg";
import pos from "../../../../public/icon/vector.svg";
import logo from "../../../../public/logo/Texon Logo 55-01 1.svg";

export default function Navbar() {
  const navLinks = (
    <>
      <li className="group relative">
        <Link href={"/services"} className="flex items-center">
          Services
          <MdKeyboardArrowDown className="ml-1 group-hover:hidden" />
          <MdKeyboardArrowUp className="ml-1 hidden group-hover:inline-block" />
        </Link>
        <ul className="absolute hidden group-hover:block text-white mt-9 bg-primry rounded-lg lg:group-hover:block md:group-hover:block sm:hidden z-10 lg:w-96 md:w-96  w-60">
          <li className="p-2">
            <Link href={"/products/software"}>
              <div className="flex items-center">
                <Image src={stock} alt="stock"></Image>
                <div className="ms-5">
                  <h2 className="font-semibold">Web Development</h2>
                  <p className="hidden md:block lg:block">
                    Inventory Management Software
                  </p>
                </div>
              </div>
            </Link>
          </li>
          <li className="p-2">
            <Link href={"/products/software"}>
              <div className="flex items-center">
                <Image src={texonmart} alt="stock"></Image>
                <div className="ms-6">
                  <h2 className="font-semibold">Mobile App Develop</h2>
                  <p className="hidden lg:block">
                    Multivendor ecommerce website
                  </p>
                </div>
              </div>
            </Link>
          </li>
          <li className="p-2">
            <Link href={"/products/software"}>
              <div className="flex items-center">
                <Image src={erp} alt="stock"></Image>
                <div className="ms-7">
                  <h2 className="font-semibold">AI & Automation</h2>
                </div>
              </div>
            </Link>
          </li>
          <li className="p-2">
            <Link href={"/products/software"}>
              <div className="flex items-center">
                <Image src={pos} className="ms-2" alt="stock"></Image>
                <div className="ms-9">
                  <h2 className="font-semibold">AWS Services</h2>
                </div>
              </div>
            </Link>
          </li>
          <li className="p-2">
            <Link href={"/products/software"}>
              <div className="flex items-center">
                <Image src={edu} className="ms-1" alt="stock"></Image>
                <div className="ms-8">
                  <h2 className="font-bold">IT Infrastructure</h2>
                  <p className="hidden lg:block">
                    Education & accounting Software
                  </p>
                </div>
              </div>
            </Link>
          </li>
        </ul>
      </li>
      <li className="group relative">
        <Link href={"/products"} className="flex items-center">
          Products
          <MdKeyboardArrowDown className="ml-1 group-hover:hidden" />
          <MdKeyboardArrowUp className="ml-1 hidden group-hover:inline-block" />
        </Link>
        <ul className="absolute hidden group-hover:block text-white mt-9 bg-primry rounded-lg lg:group-hover:block md:group-hover:block sm:hidden z-10 lg:w-96 md:w-96  w-60">
          <li className="p-2">
            <Link href={"/products/software"}>
              <div className="flex items-center">
                <Image src={stock} alt="stock"></Image>
                <div className="ms-5">
                  <h2 className="font-semibold">QuickStock</h2>
                  <p className="hidden md:block lg:block">
                    Inventory Management Software
                  </p>
                </div>
              </div>
            </Link>
          </li>
          <li className="p-2">
            <Link href={"/products/software"}>
              <div className="flex items-center">
                <Image src={texonmart} alt="stock"></Image>
                <div className="ms-6">
                  <h2 className="font-semibold">TexonMart</h2>
                  <p className="hidden lg:block">
                    Multivendor ecommerce website
                  </p>
                </div>
              </div>
            </Link>
          </li>
          <li className="p-2">
            <Link href={"/products/software"}>
              <div className="flex items-center">
                <Image src={erp} alt="stock"></Image>
                <div className="ms-7">
                  <h2 className="font-semibold">ERP Software</h2>
                </div>
              </div>
            </Link>
          </li>
          <li className="p-2">
            <Link href={"/products/software"}>
              <div className="flex items-center">
                <Image src={pos} className="ms-2" alt="stock"></Image>
                <div className="ms-9">
                  <h2 className="font-semibold">POS Software</h2>
                </div>
              </div>
            </Link>
          </li>
          <li className="p-2">
            <Link href={"/products/software"}>
              <div className="flex items-center">
                <Image src={edu} className="ms-1" alt="stock"></Image>
                <div className="ms-8">
                  <h2 className="font-bold">EduTech & Accounting</h2>
                  <p className="hidden lg:block">
                    Education & accounting Software
                  </p>
                </div>
              </div>
            </Link>
          </li>
        </ul>
      </li>
      <li className="group relative">
        <Link href={"/casestudies"} className="flex items-center">
          Case Studies
          <MdKeyboardArrowDown className="ml-1 group-hover:hidden" />
          <MdKeyboardArrowUp className="ml-1 hidden group-hover:inline-block" />
        </Link>
        <ul className="absolute hidden group-hover:block text-white mt-9 bg-primry rounded-lg lg:group-hover:block md:group-hover:block sm:hidden z-10 lg:w-96 md:w-96  w-60">
          <li className="p-2">
            <Link href={"/products/software"}>
              <div className="flex items-center">
                <Image src={stock} alt="stock"></Image>
                <div className="ms-5">
                  <h2 className="font-semibold">QuickStock</h2>
                  <p className="hidden md:block lg:block">
                    Inventory Management Software
                  </p>
                </div>
              </div>
            </Link>
          </li>
          <li className="p-2">
            <Link href={"/products/software"}>
              <div className="flex items-center">
                <Image src={texonmart} alt="stock"></Image>
                <div className="ms-6">
                  <h2 className="font-semibold">TexonMart</h2>
                  <p className="hidden lg:block">
                    Multivendor ecommerce website
                  </p>
                </div>
              </div>
            </Link>
          </li>
          <li className="p-2">
            <Link href={"/products/software"}>
              <div className="flex items-center">
                <Image src={erp} alt="stock"></Image>
                <div className="ms-7">
                  <h2 className="font-semibold">ERP Software</h2>
                </div>
              </div>
            </Link>
          </li>
          <li className="p-2">
            <Link href={"/products/software"}>
              <div className="flex items-center">
                <Image src={pos} className="ms-2" alt="stock"></Image>
                <div className="ms-9">
                  <h2 className="font-semibold">POS Software</h2>
                </div>
              </div>
            </Link>
          </li>
          <li className="p-2">
            <Link href={"/products/software"}>
              <div className="flex items-center">
                <Image src={edu} className="ms-1" alt="stock"></Image>
                <div className="ms-8">
                  <h2 className="font-bold">EduTech & Accounting</h2>
                  <p className="hidden lg:block">
                    Education & accounting Software
                  </p>
                </div>
              </div>
            </Link>
          </li>
        </ul>
      </li>
      <li>
        <Link href={"/about"}>About</Link>
      </li>
      <li>
        <Link href={"/contact"}>Contact</Link>
      </li>
    </>
  );

  return (
    <div
      className="navbar max-w-screen-xl mx-auto
    "
    >
      <div className="navbar-start lg:flex lg:items-center">
        <div className="dropdown lg:hidden">
          <div tabIndex={0} role="button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-primry text-white rounded-box z-[1] mt-3 w-52 p-2"
          >
            {navLinks}
          </ul>
        </div>
        <Link href={"/"} className="hidden lg:block">
          <Image className="w-32 sm:w-40 lg:w-52" src={logo} alt="logo" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 bg-white bg-opacity-60 border-2 border-white text-[#8987A1] rounded-lg">
          {navLinks}
        </ul>
      </div>
      <div className="navbar-end">
        <a className="hidden lg:block font-semibold py-2 px-5 rounded-lg raleway bg-primry hover:bg-blue text-white cursor-pointer">
          Free Consultancy
        </a>
        <div className="navbar-end lg:hidden">
          <Link href={"/"}>
            <Image className="w-32 sm:w-40 lg:w-52" src={logo} alt="logo" />
          </Link>
        </div>
      </div>
    </div>
  );
}
