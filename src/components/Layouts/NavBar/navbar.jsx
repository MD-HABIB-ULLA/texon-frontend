"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import logo from "../../../../public/logo/Texon Logo 55-01 1.svg";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isItem1SubmenuOpen, setIsItem1SubmenuOpen] = useState(false);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const toggleItem1Submenu = () => setIsItem1SubmenuOpen(!isItem1SubmenuOpen);

  return (
    <div className="navbar">
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
                  <a>Item 1</a>
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
                  <ul className="p-2">
                    <li>
                      <a>Submenu 1</a>
                    </li>
                    <li>
                      <a>Submenu 2</a>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <a>Item 2</a>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          )}
        </div>
        <Link href={"/"}>
          <Image src={logo} className="object-contain w-auto" alt="logo" />
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex bg-white bg-opacity-60 border-2 border-white text-[#8987A1] rounded-lg">
        <ul className="menu menu-horizontal px-1">
          <li>
            <details>
              <summary>Services</summary>
              <div
                className="absolute left-0 bg-white mt-3 rounded"
                style={{ width: "870px" }}
              >
                <div className="p-4">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </div>
              </div>
            </details>
          </li>
          <li>
            <details>
              <summary>Products</summary>
              <div
                className="absolute left-0 bg-white mt-3 rounded"
                style={{ width: "870px" }}
              >
                <div className="p-4">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </div>
              </div>
            </details>
          </li>
          <li>
            <a>Case Studies</a>
          </li>
          <li>
            <details>
              <summary>About</summary>
              <div
                className="absolute left-0 bg-white mt-3 rounded"
                style={{ width: "670px" }}
              >
                <ul className="p-4">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </div>
            </details>
          </li>
          <li>
            <a>Contact</a>
          </li>
        </ul>
      </div>

      <div className="navbar-end">
        <a className="px-6 py-3 rounded-lg bg-primary text-white">
          Free Consultancy
        </a>
      </div>
    </div>
  );
};

export default Navbar;
