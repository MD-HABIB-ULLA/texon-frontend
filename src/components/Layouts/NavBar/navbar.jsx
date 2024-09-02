"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { HiMenuAlt1, HiMinus, HiPlus, HiX } from "react-icons/hi"; // Importing the menu icon
import {
  IoIosArrowDown,
  IoIosArrowRoundForward,
  IoIosClose,
} from "react-icons/io";
import ai from "../../../../public/icon/ai.svg";
import app from "../../../../public/icon/app-development.svg";
import aws from "../../../../public/icon/aws.svg";
import development from "../../../../public/icon/development.svg";
import management from "../../../../public/icon/management.svg";
import quick_stock from "../../../../public/icon/QUICK STOCK icon-01 1.svg";
import software_development from "../../../../public/icon/software_development.svg";
import web from "../../../../public/icon/web.svg";
import logo from "../../../../public/logo/Texon Logo 55-01 1.svg";

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const modalRef = useRef(null);

  const handleOpenModal = (content) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setModalContent("");
  };

  const handleMouseLeave = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.relatedTarget)) {
      handleCloseModal();
    }
  };

  useEffect(() => {
    const modalNode = modalRef.current;
    if (isModalOpen && modalNode) {
      modalNode.addEventListener("mouseleave", handleMouseLeave);
    }
    return () => {
      if (modalNode) {
        modalNode.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, [isModalOpen]);

  const getModalContent = () => {
    switch (modalContent) {
      case "Services":
        return (
          <div className="p-8">
            <div className="grid grid-cols-3">
              <div className=" text-black">
                <h1 className="text-xl font-medium underline">
                  <Link href="/services">Services</Link>
                </h1>
                <div className="space-y-5 pt-5">
                  <div className="flex items-center">
                    <Image
                      src={software_development}
                      width={20}
                      alt="software_development"
                    />
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
              <div className=" text-black">
                <h1 className="text-xl font-medium underline">
                  <Link href="/#technologies">Technologies</Link>
                </h1>
                <div className="space-y-5 pt-5">
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
              <div className="">
                <h1 className="text-xl font-medium underline">
                  Collaboration Models
                </h1>
                <div className="space-y-5 pt-5 text-[#76758B]">
                  <div>
                    <p>Hire Developers</p>
                  </div>
                  <div>
                    <p>Tech consultancy</p>
                  </div>
                  <div className="pb-10">
                    <p>Team Augmentation</p>
                  </div>
                  <hr className="" />
                </div>
                <div className="pt-10">
                  <p className="pb-5 text-black text-base font-medium">
                    Want to accelerate your business
                  </p>
                  <p className="px-5 py-2 text-base w-fit rounded-lg bg-primry hover:bg-blue cursor-pointer text-white">
                    Hire The Best Team
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      case "Products":
        return (
          <div className="p-8">
            <h2 className="text-xl font-medium underline">Products</h2>
            <div className="grid grid-cols-3 gap-5 mt-7">
              <div>
                <div className="flex items-center">
                  <Image src={quick_stock} width={40} alt="quick_stock" />
                  <div className="ms-2">
                    <div className="flex items-center">
                      <h1 className="font-medium text-base">QuickStock</h1>
                      <IoIosArrowRoundForward className="text-xl ms-1" />
                    </div>
                    <p className="text-sm">Inventory Management Software</p>
                  </div>
                </div>
                <p className="mt-1 text-[#525252] text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Cursus nibh mauris, nec turpis orci lectus maecenas.
                </p>
              </div>
              <div>
                <div className="flex items-center">
                  <Image src={quick_stock} width={40} alt="quick_stock" />
                  <div className="ms-2">
                    <div className="flex items-center">
                      <h1 className="font-medium text-base">QuickStock</h1>
                      <IoIosArrowRoundForward className="text-xl ms-1" />
                    </div>
                    <p className="text-sm">Inventory Management Software</p>
                  </div>
                </div>
                <p className="mt-1 text-[#525252] text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Cursus nibh mauris, nec turpis orci lectus maecenas.
                </p>
              </div>
              <div>
                <div className="flex items-center">
                  <Image src={quick_stock} width={40} alt="quick_stock" />
                  <div className="ms-2">
                    <div className="flex items-center">
                      <h1 className="font-medium text-base">QuickStock</h1>
                      <IoIosArrowRoundForward className="text-xl ms-1" />
                    </div>
                    <p className="text-sm">Inventory Management Software</p>
                  </div>
                </div>
                <p className="mt-1 text-[#525252] text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Cursus nibh mauris, nec turpis orci lectus maecenas.
                </p>
              </div>
              <div>
                <div className="flex items-center">
                  <Image src={quick_stock} width={40} alt="quick_stock" />
                  <div className="ms-2">
                    <div className="flex items-center">
                      <h1 className="font-medium text-base">QuickStock</h1>
                      <IoIosArrowRoundForward className="text-xl ms-1" />
                    </div>
                    <p className="text-sm">Inventory Management Software</p>
                  </div>
                </div>
                <p className="mt-1 text-[#525252] text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Cursus nibh mauris, nec turpis orci lectus maecenas.
                </p>
              </div>
              <div>
                <div className="flex items-center">
                  <Image src={quick_stock} width={40} alt="quick_stock" />
                  <div className="ms-2">
                    <div className="flex items-center">
                      <h1 className="font-medium text-base">QuickStock</h1>
                      <IoIosArrowRoundForward className="text-xl ms-1" />
                    </div>
                    <p className="text-sm">Inventory Management Software</p>
                  </div>
                </div>
                <p className="mt-1 text-[#525252] text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Cursus nibh mauris, nec turpis orci lectus maecenas.
                </p>
              </div>
              <div>
                <div className="flex items-center">
                  <Image src={quick_stock} width={40} alt="quick_stock" />
                  <div className="ms-2">
                    <div className="flex items-center">
                      <h1 className="font-medium text-base">QuickStock</h1>
                      <IoIosArrowRoundForward className="text-xl ms-1" />
                    </div>
                    <p className="text-sm">Inventory Management Software</p>
                  </div>
                </div>
                <p className="mt-1 text-[#525252] text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Cursus nibh mauris, nec turpis orci lectus maecenas.
                </p>
              </div>
            </div>
            <div className="pt-10">
              <p className="px-4 py-2 w-fit rounded-lg bg-primry hover:bg-blue cursor-pointer text-white">
                <Link href="/products">See all Products</Link>
              </p>
            </div>
          </div>
        );
      case "About":
        return (
          <div className="p-8">
            <h2 className="text-xl font-medium underline">About Texon</h2>
            <p className="pt-4">
              Learn more about our company and what drives us to deliver
              exceptional services and products.
            </p>
          </div>
        );
      default:
        return <p>No content available.</p>;
    }
  };
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  return (
    <div>
      <div className="navbar max-w-screen-xl mx-auto">
        <div className="navbar-start">
          {/* Drawer for small screens */}
          <div className="drawer lg:hidden">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              {/* Page content here */}
              <label htmlFor="my-drawer" className="drawer-button">
                <HiMenuAlt1 className="w-6 md:w-8 h-6 md:h-8" />{" "}
                {/* Menu icon */}
              </label>
            </div>
            <div className="drawer-side z-10">
              <label
                htmlFor="my-drawer"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <ul className="menu min-h-full text-base w-80 md:w-96 bg-white p-4 text-base-content">
                {/* Sidebar content here */}
                <li className="flex justify-end mb-4">
                  <label
                    htmlFor="my-drawer"
                    className="btn btn-square btn-sm bg-white hover:bg-white cursor-pointer rounded-none border-none shadow-none"
                  >
                    <HiX className="w-6 h-6" /> {/* Close icon */}
                  </label>
                </li>
                <li>
                  <button
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    className="flex items-center justify-between w-full text-left"
                  >
                    Services
                    {isServicesOpen ? (
                      <HiMinus className="ml-2" />
                    ) : (
                      <HiPlus className="ml-2" />
                    )}
                  </button>
                  {isServicesOpen && (
                    <ul>
                      {/* Sidebar content here */}
                      <li>
                        <a>Software Development</a>
                      </li>
                      <li>
                        <a>Web Development</a>
                      </li>
                      <li>
                        <a>Mobile App Develop</a>
                      </li>
                      <li>
                        <a>Management Software</a>
                      </li>
                      <li>
                        <a>Ai & Automation</a>
                      </li>
                      <li>
                        <a>AWS Services</a>
                      </li>
                      <li>
                        <a>IT Infrastructure</a>
                      </li>
                    </ul>
                  )}
                </li>
                <li>
                  <a href="#">Products</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Case Studies</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Logo for larger screens */}
          <div className="hidden lg:flex">
            <Link href={"/"}>
              <Image src={logo} className="object-contain w-auto" alt="logo" />
            </Link>
          </div>
        </div>

        <div className="navbar-center hidden lg:flex bg-white bg-opacity-60 border-2 border-white text-[#8987A1] rounded-lg">
          <ul className="menu menu-horizontal px-1 flex items-center">
            <li>
              <a
                onMouseEnter={() => handleOpenModal("Services")}
                className="flex items-center"
              >
                Services
                <IoIosArrowDown className="h-4 w-4 ml-2" />
              </a>
            </li>
            <li>
              <a
                onMouseEnter={() => handleOpenModal("Products")}
                className="flex items-center"
              >
                Products
                <IoIosArrowDown className="h-4 w-4 ml-2" />
              </a>
            </li>
            <li>
              <a
                onMouseEnter={() => handleOpenModal("About")}
                className="flex items-center"
              >
                About
                <IoIosArrowDown className="h-4 w-4 ml-2" />
              </a>
            </li>
            <li>
              <a>Case Studies</a>
              {/* No modal functionality for Case Studies */}
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="px-4 py-2 text-sm rounded-lg bg-primry text-white sm:px-5 sm:py-3 sm:text-base md:px-5 md:py-2 md:text-lg lg:px-5 lg:py-2">
            Free Consultancy
          </a>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="hidden lg:block">
          <div className="fixed inset-0 flex justify-center mt-16 p-1 z-40 ">
            <div
              ref={modalRef}
              className="relative bg-white rounded max-w-screen-lg w-full max-h-[450px]"
            >
              <IoIosClose
                onClick={handleCloseModal}
                className="absolute top-8 right-8 h-6 w-6 cursor-pointer"
              />
              {getModalContent()}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
