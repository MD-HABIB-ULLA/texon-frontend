"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import ai from "../../../../public/icon/ai.svg";
import app from "../../../../public/icon/app-development.svg";
import aws from "../../../../public/icon/aws.svg";
import development from "../../../../public/icon/development.svg";
import management from "../../../../public/icon/management.svg";
import quick_stock from "../../../../public/icon/QUICK STOCK icon-01 1.svg";
import web from "../../../../public/icon/web.svg";
import logo from "../../../../public/logo/Texon Logo 55-01 1.svg";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isItem1SubmenuOpen, setIsItem1SubmenuOpen] = useState(false);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const toggleItem1Submenu = () => setIsItem1SubmenuOpen(!isItem1SubmenuOpen);

  return (
    <div className="navbar mx-auto max-w-screen-xl">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden"
            onClick={toggleDropdown}
          >
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
          {isDropdownOpen && (
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-white z-[1] mt-3 w-screen p-2 shadow"
            >
              <li
                onMouseEnter={() => setIsItem1SubmenuOpen(true)}
                onMouseLeave={() => setIsItem1SubmenuOpen(false)}
              >
                <div className="flex justify-between items-center">
                  <a>Services</a>
                  <button onClick={toggleItem1Submenu}>
                    {isItem1SubmenuOpen ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </button>
                </div>
                {isItem1SubmenuOpen && (
                  <div className="p-2 block">
                    <div className="flex items-center pb-2">
                      <Image src={development} width={20} alt="development" />
                      <p className="ms-2">Software Development</p>
                    </div>
                    <div className="flex items-center pb-2">
                      <Image src={web} width={20} alt="web" />
                      <p className="ms-2">Web Development</p>
                    </div>
                    <div className="flex items-center pb-2">
                      <Image src={app} width={20} alt="app" />
                      <p className="ms-2">Mobile App Develop</p>
                    </div>
                    <div className="flex items-center pb-2">
                      <Image src={management} width={20} alt="management" />
                      <p className="ms-2">Management Software</p>
                    </div>
                    <div className="flex items-center pb-2">
                      <Image src={ai} width={20} alt="ai" />
                      <p className="ms-2">Ai & Automation</p>
                    </div>
                    <div className="flex items-center pb-2">
                      <Image src={aws} width={20} alt="aws" />
                      <p className="ms-2">AWS Services</p>
                    </div>
                    <div className="flex items-center pb-2">
                      <Image src={development} width={20} alt="development" />
                      <p className="ms-2">IT Infrastructure</p>
                    </div>
                  </div>
                )}
              </li>
              <li>
                <a>Products</a>
              </li>
              <li>
                <a>Case Studies</a>
              </li>
              <li>
                <a>About</a>
              </li>
              <li>
                <a>Contact</a>
              </li>
            </ul>
          )}
        </div>
        <div className="hidden lg:flex">
          <Link href={"/"}>
            <Image src={logo} className="object-contain w-auto" alt="logo" />
          </Link>
        </div>
      </div>

      <div className="navbar-center hidden lg:flex bg-white bg-opacity-60 border-2 border-white text-[#8987A1] rounded-lg">
        <ul className="menu menu-horizontal px-1">
          <li className="relative group">
            <a>
              <summary>
                <Link href="/services">Services</Link>
              </summary>
              <div
                className="absolute left-0 bg-white top-full rounded group-hover:block hidden"
                style={{ width: "870px" }}
              >
                <div className="grid grid-cols-3">
                  <div className="px-5 py-2 bg-custom-gradient text-black">
                    <h1 className="text-xl font-medium underline">
                      <Link href="/services">Services</Link>
                    </h1>
                    <div className="space-y-3 py-3">
                      <div className="flex items-center">
                        <Image src={development} width={20} alt="development" />
                        <p className="ms-2">Software Development</p>
                      </div>
                      <div className="flex items-center">
                        <Image src={web} width={20} alt="web" />
                        <p className="ms-2">Web Development</p>
                      </div>
                      <div className="flex items-center">
                        <Image src={app} width={20} alt="app" />
                        <p className="ms-2">Mobile App Develop</p>
                      </div>
                      <div className="flex items-center">
                        <Image src={management} width={20} alt="management" />
                        <p className="ms-2">Management Software</p>
                      </div>
                      <div className="flex items-center">
                        <Image src={ai} width={18} alt="ai" />
                        <p className="ms-2">Ai & Automation</p>
                      </div>
                      <div className="flex items-center">
                        <Image src={aws} width={20} alt="aws" />
                        <p className="ms-2">AWS Services</p>
                      </div>
                      <div className="flex items-center">
                        <Image src={development} width={18} alt="development" />
                        <p className="ms-2">IT Infrastructure</p>
                      </div>
                    </div>
                  </div>
                  <div className="px-5 py-2 text-black">
                    <h1 className="text-xl font-medium underline">
                      <Link href="/#technologies">Technologies</Link>
                    </h1>
                    <div className="space-y-3 py-3">
                      <div>
                        <p>JavaScript</p>
                      </div>
                      <div>
                        <p>C++</p>
                      </div>
                      <div>
                        <p>.Net</p>
                      </div>
                      <div>
                        <p>Python</p>
                      </div>
                      <div>
                        <p>Java</p>
                      </div>
                      <div>
                        <p>PHP</p>
                      </div>
                      <div>
                        <p>Flutter</p>
                      </div>
                    </div>
                  </div>
                  <div className="px-5 py-2">
                    <h1 className="text-xl text-black font-medium underline">
                      Collaboration Models
                    </h1>
                    <div className="space-y-3 py-3">
                      <div>
                        <p>Hire Developers</p>
                      </div>
                      <div>
                        <p>Tech consultancy</p>
                      </div>
                      <div>
                        <p>Team Augmentation</p>
                      </div>
                      <hr className="py-4" />
                    </div>
                    <div className="">
                      <p className="pb-5 text-black">
                        Want to accelerate your business
                      </p>
                      <p className="px-5 py-2 text-base w-fit rounded-lg bg-primry hover:bg-blue cursor-pointer text-white">
                        Hire The Best Team
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </li>
          <li className="relative group">
            <a>
              <summary>
                <Link href="/products">Products</Link>
              </summary>
              <div
                className="absolute left-0 bg-white top-full rounded group-hover:block hidden"
                style={{ width: "870px" }}
              >
                <div className="px-5 py-2">
                  <h1 className="text-xl text-black font-medium border-b w-fit">
                    <Link href="/products">Products</Link>
                  </h1>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="mt-3 text-black">
                      <div className="flex items-center">
                        <Image src={quick_stock} width={40} alt="quick_stock" />
                        <div className="ms-2">
                          <div className="flex items-center">
                            <h1 className="font-medium text-base">
                              QuickStock
                            </h1>
                            <IoIosArrowRoundForward className="text-xl ms-1" />
                          </div>
                          <p className="text-sm font-medium">
                            Inventory Management Software
                          </p>
                        </div>
                      </div>
                      <p className="mt-1">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Cursus nibh mauris
                      </p>
                    </div>
                    <div className="mt-3 text-black">
                      <div className="flex items-center">
                        <Image src={quick_stock} width={40} alt="quick_stock" />
                        <div className="ms-2">
                          <div className="flex items-center">
                            <h1 className="font-medium text-base">
                              QuickStock
                            </h1>
                            <IoIosArrowRoundForward className="text-xl ms-1" />
                          </div>
                          <p className="text-sm font-medium">
                            Inventory Management Software
                          </p>
                        </div>
                      </div>
                      <p className="mt-1">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Cursus nibh mauris
                      </p>
                    </div>
                    <div className="mt-3 text-black">
                      <div className="flex items-center">
                        <Image src={quick_stock} width={40} alt="quick_stock" />
                        <div className="ms-2">
                          <div className="flex items-center">
                            <h1 className="font-medium text-base">
                              QuickStock
                            </h1>
                            <IoIosArrowRoundForward className="text-xl ms-1" />
                          </div>
                          <p className="text-sm font-medium">
                            Inventory Management Software
                          </p>
                        </div>
                      </div>
                      <p className="mt-1">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Cursus nibh mauris
                      </p>
                    </div>
                    <div className="mt-3 text-black">
                      <div className="flex items-center">
                        <Image src={quick_stock} width={40} alt="quick_stock" />
                        <div className="ms-2">
                          <div className="flex items-center">
                            <h1 className="font-medium text-base">
                              QuickStock
                            </h1>
                            <IoIosArrowRoundForward className="text-xl ms-1" />
                          </div>
                          <p className="text-sm font-medium">
                            Inventory Management Software
                          </p>
                        </div>
                      </div>
                      <p className="mt-1">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Cursus nibh mauris
                      </p>
                    </div>
                    <div className="mt-3 text-black">
                      <div className="flex items-center">
                        <Image src={quick_stock} width={40} alt="quick_stock" />
                        <div className="ms-2">
                          <div className="flex items-center">
                            <h1 className="font-medium text-base">
                              QuickStock
                            </h1>
                            <IoIosArrowRoundForward className="text-xl ms-1" />
                          </div>
                          <p className="text-sm font-medium">
                            Inventory Management Software
                          </p>
                        </div>
                      </div>
                      <p className="mt-1">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Cursus nibh mauris
                      </p>
                    </div>
                    <div className="mt-3 text-black">
                      <div className="flex items-center">
                        <Image src={quick_stock} width={40} alt="quick_stock" />
                        <div className="ms-2">
                          <div className="flex items-center">
                            <h1 className="font-medium text-base">
                              QuickStock
                            </h1>
                            <IoIosArrowRoundForward className="text-xl ms-1" />
                          </div>
                          <p className="text-sm font-medium">
                            Inventory Management Software
                          </p>
                        </div>
                      </div>
                      <p className="mt-1">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Cursus nibh mauris
                      </p>
                    </div>
                  </div>
                  <div className="pt-4 pb-3">
                    <p className="px-5 py-2 w-fit rounded-lg bg-primry hover:bg-blue cursor-pointer text-white">
                      <Link href="/products">See all Products</Link>
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </li>
          <li>
            <Link href="/#casestudies">Case Studies</Link>
          </li>
          <li>
            <a>
              <summary>
                <Link href={"about"}>About</Link>
              </summary>
              <div
                className="absolute left-0 bg-white mt-3 rounded"
                style={{ width: "670px" }}
              >
                {/* <p>comming soon</p> */}
              </div>
            </a>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>

      <div className="navbar-end hidden lg:flex">
        <a className="px-5 py-2 text-base rounded-lg bg-primry text-white">
          Free Consultancy
        </a>
      </div>
      <div className="navbar-end lg:hidden">
        <Link href={"/"}>
          <Image src={logo} className="object-contain w-auto" alt="logo" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
