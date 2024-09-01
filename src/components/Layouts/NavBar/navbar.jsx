"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { IoIosArrowDown, IoIosClose } from "react-icons/io";
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

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      handleCloseModal();
    }
  };

  useEffect(() => {
    if (isModalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isModalOpen]);

  const getModalContent = () => {
    switch (modalContent) {
      case "Services":
        return (
          <>
            <h2 className="text-xl mb-4">Our Services</h2>
            <p>
              We offer a range of services including web development, SEO
              optimization, and digital marketing.
            </p>
            <ul className="list-disc ml-4">
              <li>Web Development</li>
              <li>SEO Optimization</li>
              <li>Digital Marketing</li>
            </ul>
          </>
        );
      case "Products":
        return (
          <>
            <h2 className="text-xl mb-4">Our Products</h2>
            <p>
              Explore our range of high-quality products designed to meet your
              needs.
            </p>
            <ul className="list-disc ml-4">
              <li>Product 1</li>
              <li>Product 2</li>
              <li>Product 3</li>
            </ul>
          </>
        );
      case "About":
        return (
          <>
            <h2 className="text-xl mb-4">About Us</h2>
            <p>
              Learn more about our company and what drives us to deliver
              exceptional services and products.
            </p>
            <p>
              Our mission is to provide top-notch solutions and to exceed our
              customers' expectations.
            </p>
          </>
        );
      default:
        return <p>No content available.</p>;
    }
  };

  return (
    <div>
      <div className="navbar max-w-screen-xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <a href="">
            <Image src={logo} className="object-contain w-auto" alt="logo" />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex bg-white bg-opacity-60 border-2 border-white text-[#8987A1] rounded-lg">
          <ul className="menu menu-horizontal px-1 flex items-center">
            <li>
              <a
                onClick={() => handleOpenModal("Services")}
                className="flex items-center"
              >
                Services
                <IoIosArrowDown className="h-4 w-4 ml-2" />
              </a>
            </li>
            <li>
              <a
                onClick={() => handleOpenModal("Products")}
                className="flex items-center"
              >
                Products
                <IoIosArrowDown className="h-4 w-4 ml-2" />
              </a>
            </li>
            <li>
              <a
                onClick={() => handleOpenModal("About")}
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
          <a className="px-5 py-2 text-base rounded-lg bg-primry text-white">
            Free Consultancy
          </a>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex justify-center mt-16 p-1">
          <div
            ref={modalRef}
            className="relative bg-white rounded p-4 max-w-screen-lg w-full max-h-[600px]"
          >
            <IoIosClose
              onClick={handleCloseModal}
              className="absolute top-4 right-4 h-6 w-6 cursor-pointer"
            />
            {getModalContent()}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
