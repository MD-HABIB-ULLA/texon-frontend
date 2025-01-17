"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { GoArrowLeft } from "react-icons/go";
import { HiMenuAlt1, HiMinus, HiPlus } from "react-icons/hi"; // Importing the menu icon
import { IoIosArrowDown, IoIosArrowRoundForward } from "react-icons/io";
import ai from "../../../../public/icon/ai.svg";
import app from "../../../../public/icon/app-development.svg";
import aws from "../../../../public/icon/aws.svg";
import development from "../../../../public/icon/development.svg";
import management from "../../../../public/icon/management.svg";
import quick_stock from "../../../../public/icon/QUICK STOCK icon-01 1.svg";
import software_development from "../../../../public/icon/software_development.svg";
import web from "../../../../public/icon/web.svg";
import logo from "../../../../public/logo/Texon Logo 55-01 1.svg";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const modalRef = useRef(null);
  const pathName = usePathname();
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
    const handleScroll = () => {
      if (window.scrollY >= -100) {
        setIsModalOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsModalOpen(false);
  }, [pathName]);

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
    const modalWidth =
      modalContent === "About" ? "max-w-screen-md" : "max-w-screen-lg";
    switch (modalContent) {
      case "Services":
        return (
          <div className=" h-full  ">
            <div className="grid grid-cols-3 h-full">
              <div
                className="text-black h-full p-6"
                style={{
                  background:
                    "linear-gradient(to bottom right, #fdeef6, white)",
                }}
              >
                <h1 className="text-2xl font-medium underline">
                  <Link href="/services">Services</Link>
                </h1>
                <div className="text-xl space-y-5 pt-5">
                  <div className="flex items-center">
                    <Image
                      src={software_development}
                      width={20}
                      alt="software_development"
                    />
                    <Link
                      className="ms-2"
                      href="/services/software-development"
                    >
                      Software Development
                    </Link>
                    {/* <p className="ms-2">Software Development</p> */}
                  </div>
                  <div className="flex items-center">
                    <Image src={web} width={20} alt="web" />

                    <Link className="ms-2" href="/services/web-development">
                      Web Development
                    </Link>
                  </div>
                  <div className="flex items-center">
                    <Image src={app} width={20} alt="app" />

                    <Link className="ms-2" href="/services/mobile-application">
                      Mobile App Develop
                    </Link>
                  </div>
                  <div className="flex items-center">
                    <Image src={management} width={20} alt="management" />

                    <Link className="ms-2" href="/services/management-software">
                      Management Software
                    </Link>
                  </div>
                  <div className="flex items-center">
                    <Image src={ai} width={18} alt="ai" />

                    <Link className="ms-2" href="/services/ai-and-automation">
                      Ai & Automation
                    </Link>
                  </div>
                  <div className="flex items-center">
                    <Image src={aws} width={20} alt="aws" />

                    <Link className="ms-2" href="/services/cloud-computing">
                      AWS Services
                    </Link>
                  </div>
                  <div className="flex items-center">
                    <Image src={development} width={18} alt="development" />

                    <Link className="ms-2" href="/services/itInfrastructure">
                      IT Infrastructure
                    </Link>
                  </div>
                </div>
              </div>
              <div className=" text-black p-6">
                <h1 className="text-2xl font-medium underline">
                  <Link href="/#technologies">Technologies</Link>
                </h1>
                <div className="space-y-5 pt-5 text-xl">
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
              <div className=" p-6">
                <h1 className="text-2xl font-medium underline">
                  Collaboration Models
                </h1>
                <div className="space-y-5 pt-5 text-xl text-[#76758B]">
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
            <h2 className="text-xl font-medium underline">
              <Link href="/products">Products</Link>
            </h2>
            <div className="grid grid-cols-3 gap-5 mt-5">
              <div>
                <div className="flex items-center">
                  <Image src={quick_stock} width={40} alt="quick_stock" />
                  <div className="ms-2">
                    <div className="flex items-center">
                      <h1 className="font-medium text-base">
                        Ecommerce Site & APP
                      </h1>
                      <IoIosArrowRoundForward className="text-xl ms-1" />
                    </div>
                    <p className="text-sm">Inventory Management Software</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-center">
                  <Image src={quick_stock} width={40} alt="quick_stock" />
                  <div className="ms-2">
                    <div className="flex items-center">
                      <h1 className="font-medium text-base">
                        EduTech & Accounting
                      </h1>
                      <IoIosArrowRoundForward className="text-xl ms-1" />
                    </div>
                    <p className="text-sm">Inventory Management Software</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-center">
                  <Image src={quick_stock} width={40} alt="quick_stock" />
                  <div className="ms-2">
                    <div className="flex items-center">
                      <h1 className="font-medium text-base">ERP Software</h1>
                      <IoIosArrowRoundForward className="text-xl ms-1" />
                    </div>
                    <p className="text-sm">Inventory Management Software</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-center">
                  <Image src={quick_stock} width={40} alt="quick_stock" />
                  <div className="ms-2">
                    <div className="flex items-center">
                      <h1 className="font-medium text-base">POS Software</h1>
                      <IoIosArrowRoundForward className="text-xl ms-1" />
                    </div>
                    <p className="text-sm">Inventory Management Software</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-center">
                  <Image src={quick_stock} width={40} alt="quick_stock" />
                  <div className="ms-2">
                    <div className="flex items-center">
                      <h1 className="font-medium text-base">
                        Pharmacy Software
                      </h1>
                      <IoIosArrowRoundForward className="text-xl ms-1" />
                    </div>
                    <p className="text-sm">Inventory Management Software</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-center">
                  <Image src={quick_stock} width={40} alt="quick_stock" />
                  <div className="ms-2">
                    <div className="flex items-center">
                      <h1 className="font-medium text-base">
                        Fashion & Footware
                      </h1>
                      <IoIosArrowRoundForward className="text-xl ms-1" />
                    </div>
                    <p className="text-sm">Inventory Management Software</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-center">
                  <Image src={quick_stock} width={40} alt="quick_stock" />
                  <div className="ms-2">
                    <div className="flex items-center">
                      <h1 className="font-medium text-base">
                        Export Import Business
                      </h1>
                      <IoIosArrowRoundForward className="text-xl ms-1" />
                    </div>
                    <p className="text-sm">Inventory Management Software</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-center">
                  <Image src={quick_stock} width={40} alt="quick_stock" />
                  <div className="ms-2">
                    <div className="flex items-center">
                      <h1 className="font-medium text-base">Book Publisher</h1>
                      <IoIosArrowRoundForward className="text-xl ms-1" />
                    </div>
                    <p className="text-sm">Inventory Management Software</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-center">
                  <Image src={quick_stock} width={40} alt="quick_stock" />
                  <div className="ms-2">
                    <div className="flex items-center">
                      <h1 className="font-medium text-base">
                        Dealership Business
                      </h1>
                      <IoIosArrowRoundForward className="text-xl ms-1" />
                    </div>
                    <p className="text-sm">Inventory Management Software</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-center">
                  <Image src={quick_stock} width={40} alt="quick_stock" />
                  <div className="ms-2">
                    <div className="flex items-center">
                      <h1 className="font-medium text-base">
                        Dealership Business
                      </h1>
                      <IoIosArrowRoundForward className="text-xl ms-1" />
                    </div>
                    <p className="text-sm">Inventory Management Software</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-center">
                  <Image src={quick_stock} width={40} alt="quick_stock" />
                  <div className="ms-2">
                    <div className="flex items-center">
                      <h1 className="font-medium text-base">
                        <Link href="https://texonltd.com/products/plumber-web">
                          Plumber Web
                        </Link>
                      </h1>
                      <IoIosArrowRoundForward className="text-xl ms-1" />
                    </div>
                    <p className="text-sm">Inventory Management Software</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-center">
                  <Image src={quick_stock} width={40} alt="quick_stock" />
                  <div className="ms-2">
                    <div className="flex items-center">
                      <h1 className="font-medium text-base">
                        <Link href="https://texonltd.com/products/texonmart">
                          Texon Mart
                        </Link>
                      </h1>
                      <IoIosArrowRoundForward className="text-xl ms-1" />
                    </div>
                    <p className="text-sm">Inventory Management Software</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-center">
                  <Image src={quick_stock} width={40} alt="quick_stock" />
                  <div className="ms-2">
                    <div className="flex items-center">
                      <h1 className="font-medium text-base">
                        {" "}
                        <Link href="https://texonltd.com/products/texon-inventory-software">
                          Quick Stock
                        </Link>{" "}
                      </h1>
                      <IoIosArrowRoundForward className="text-xl ms-1" />
                    </div>
                    <p className="text-sm">Inventory Management Software</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-5">
              <p className="px-4 py-2 w-fit rounded-lg bg-primry hover:bg-blue cursor-pointer text-white">
                <Link href="/products">See all Products</Link>
              </p>
            </div>
          </div>
        );
      case "About":
        return (
          <div className="p-8">
            <h2 className="text-xl font-medium underline">
              <Link href="/about">About</Link>
            </h2>
            <div className="grid grid-cols-2 gap-5 mt-7">
              <div>
                <div className="flex items-center">
                  <Image src={quick_stock} width={40} alt="quick_stock" />
                  <div className="ms-2">
                    <div className="flex items-center">
                      <h1 className="font-medium text-base">
                        <Link href="/about">About us</Link>
                      </h1>
                      <IoIosArrowRoundForward className="text-xl ms-1" />
                    </div>
                    <p className="text-sm">Our mission and values</p>
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
                      <h1 className="font-medium text-base">
                        <Link href="/advisor">Advisor</Link>
                      </h1>
                      <IoIosArrowRoundForward className="text-xl ms-1" />
                    </div>
                    <p className="text-sm">Our mission and values</p>
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
                      <h1 className="font-medium text-base">
                        <Link href="/blogs">Blogs</Link>
                      </h1>
                      <IoIosArrowRoundForward className="text-xl ms-1" />
                    </div>
                    <p className="text-sm">Our mission and values</p>
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
                      <h1 className="font-medium text-base">
                        <Link href="/faq">FAQ</Link>
                      </h1>
                      <IoIosArrowRoundForward className="text-xl ms-1" />
                    </div>
                    <p className="text-sm">Our mission and values</p>
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
                <Link href="/about">About Texon</Link>
              </p>
            </div>
          </div>
        );
      default:
        return <p>No content available.</p>;
    }
  };
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isAboutsOpen, setIsAboutssOpen] = useState(false);
  return (
    <div>
      <div className="navbar max-w-screen-xl mx-auto pt-2 ">
        <div className="navbar-start">
          {/* Drawer for small screens */}
          <div className="drawer lg:hidden">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              {/* Page content here */}
              <label htmlFor="my-drawer" className="drawer-button">
                <HiMenuAlt1 className="w-6 md:w-8 h-6 md:h-8 cursor-pointer" />{" "}
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
                    <GoArrowLeft className="w-6 h-6" /> {/* Close icon */}
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
                  <button
                    onClick={() => setIsProductsOpen(!isProductsOpen)}
                    className="flex items-center justify-between w-full text-left"
                  >
                    Products
                    {isProductsOpen ? (
                      <HiMinus className="ml-2" />
                    ) : (
                      <HiPlus className="ml-2" />
                    )}
                  </button>
                  {isProductsOpen && (
                    <ul>
                      {/* Sidebar content here */}
                      <li>
                        <a>QuickStock</a>
                      </li>
                      <li>
                        <a>QuickStock</a>
                      </li>
                      <li>
                        <a>QuickStock</a>
                      </li>
                      <li>
                        <a>QuickStock</a>
                      </li>
                    </ul>
                  )}
                </li>
                <li>
                  <button
                    onClick={() => setIsAboutssOpen(!isAboutsOpen)}
                    className="flex items-center justify-between w-full text-left"
                  >
                    About
                    {isAboutsOpen ? (
                      <HiMinus className="ml-2" />
                    ) : (
                      <HiPlus className="ml-2" />
                    )}
                  </button>
                  {isAboutsOpen && (
                    <ul>
                      {/* Sidebar content here */}
                      <li>
                        <a>About us</a>
                      </li>
                      <li>
                        <a>Advisor</a>
                      </li>
                      <li>
                        <a>Blogs</a>
                      </li>
                      <li>
                        <a>FAQ</a>
                      </li>
                    </ul>
                  )}
                </li>
                <li>
                  <a href="#">Case Studies</a>
                </li>
                <li>
                  <a href="#"></a>
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

        <div className="navbar-center hidden lg:flex text-[18px] px-4 py-4 bg-[#f8f0fd] border-2 border-white text-[#8987A1] rounded-[20px] h-[68px]">
          <div className="flex px-1 items-center space-x-6 h-full">
            <div
              onMouseEnter={() => handleOpenModal("Services")}
              className={`flex items-center cursor-pointer ${
                ["services", "webdevelopment"].some((segment) =>
                  pathName.includes(segment)
                )
                  ? "text-black font-bold"
                  : ""
              }`}
            >
              <span className={``}>Services</span>
              <IoIosArrowDown className="h-4 w-4 ml-2" />
            </div>
            <div
              onMouseEnter={() => handleOpenModal("Products")}
              className={`flex items-center cursor-pointer ${
                ['product'].some((segment) =>
                  pathName.includes(segment)
                )
                  ? "text-black font-bold"
                  : ""
              }`}
            >
              <span>Products</span>
              <IoIosArrowDown className="h-4 w-4 ml-2" />
            </div>
            <div
              onMouseEnter={() => handleOpenModal("About")}className={`flex items-center cursor-pointer ${
                ["about"].some((segment) =>
                  pathName.includes(segment)
                )
                  ? "text-black font-bold"
                  : ""
              }`}
            >
              <span>About</span>
              <IoIosArrowDown className="h-4 w-4 ml-2" />
            </div>
            <div className="cursor-pointer">
              <Link href="/casestudies" className={`flex items-center cursor-pointer ${
                ['casestudies'].some((segment) =>
                  pathName.includes(segment)
                )
                  ? "text-black font-bold"
                  : ""
              }`}>
                <span>Case Studies</span>
              </Link>
              {/* No modal functionality for Case Studies */}
            </div>
            <div>
              <Link href="/contact" className={`flex items-center cursor-pointer ${
                ["contact"].some((segment) =>
                  pathName.includes(segment)
                )
                  ? "text-black font-bold"
                  : ""
              }`}>
                Contact
              </Link>
            </div>
          </div>
        </div>

        <div className="navbar-end">
          <Link
            href="/free_consultancy"
            className="px-4 py-2 text-sm rounded-lg bg-primry text-white sm:px-5 sm:py-3 sm:text-base md:px-5 md:py-2 md:text-lg lg:px-5 lg:py-2"
          >
            Free Consultancy
          </Link>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="hidden lg:block">
          <div className="fixed inset-0  flex justify-center mt-16 p-1 z-40 ">
            <div
              ref={modalRef}
              //   className="relative bg-white rounded max-w-screen-lg w-full max-h-[450px]"
              className={`relative bg-white mt-5 rounded-[20px] overflow-hidden ${
                modalContent === "About" ? "max-w-screen-md" : "max-w-screen-lg"
              } w-full max-h-[450px]`}
            >
              {getModalContent()}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
