"use client";

import { useEffect, useRef, useState } from "react";
import { IoIosArrowDown, IoIosClose } from "react-icons/io"; // Import ArrowDown and Close icons from react-icons

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
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 flex items-center">
            <li>
              <a
                onClick={() => handleOpenModal("Services Content")}
                className="flex items-center"
              >
                Services
                <IoIosArrowDown className="h-4 w-4 ml-2" />
              </a>
            </li>
            <li>
              <a
                onClick={() => handleOpenModal("Products Content")}
                className="flex items-center"
              >
                Products
                <IoIosArrowDown className="h-4 w-4 ml-2" />
              </a>
            </li>
            <li>
              <a
                onClick={() => handleOpenModal("About Content")}
                className="flex items-center"
              >
                About
                <IoIosArrowDown className="h-4 w-4 ml-2" />
              </a>
            </li>
            <li>
              <a>Case Studies</a>{" "}
              {/* No modal functionality for Case Studies */}
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex justify-center mt-16 p-1">
          <div
            ref={modalRef}
            className="relative bg-primry rounded p-4 max-w-screen-lg w-full max-h-[600px]"
          >
            <IoIosClose
              onClick={handleCloseModal}
              className="absolute top-4 right-4 h-6 w-6 cursor-pointer"
            />
            <h2 className="text-xl mb-4">Modal Title</h2>
            <p>{modalContent}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
