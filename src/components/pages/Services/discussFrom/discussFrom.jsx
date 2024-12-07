"use client";
import Image from "next/image";
import { useState } from "react";
import { FiCheck } from "react-icons/fi";
import discussImage from "../../../../../public/images/product development.svg";
export default function DiscussForm() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div className="max-w-screen-xl mx-auto bg-primry my-20 rounded-[20px]">
      <div className="px-2 md:px-8 flex flex-col md:flex-row">
        {/* Text Section */}
        <div className="text-white p-2 md:p-5 md:w-1/2">
          <p className="text-lg mb-2 font-medium">Got a project in mind?</p>
          <h1 className="text-2xl md:text-3xl lg:text-[52px] font-semibold lg:font-bold leading-normal pb-4">
            Let’s Discuss in Detail
          </h1>
          <Image
            src={discussImage}
            alt="Discuss project image"
            className="w-full"
          />
        </div>

        {/* Form Section */}
        <form className="card-body md:w-1/2 p-2 md:p-4 lg:mt-10">
          {/* Full Name Input */}
          <div className="form-control mb-6">
            <label htmlFor="name" className="block mb-2 text-white">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-3 py-2 border  border-gray rounded-[10px] focus:outline-none focus:ring-1 focus:border-yellow"
              placeholder="Your name here"
            />
          </div>

          {/* Email and Phone Number Inputs */}
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="form-control flex-1">
              <label htmlFor="phone" className="block mb-2 text-white">
                Company Name
              </label>
              <input
                type="text"
                id="company"
                name="company"
                className="w-full px-3 py-2 border border-gray rounded-[10px] focus:outline-none focus:ring-1 focus:border-yellow"
                placeholder="Ex. Texon ltd"
              />
            </div>
            <div className="form-control flex-1">
              <label htmlFor="email" className="block mb-2 text-white">
                Email*
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-3 py-2 border border-gray rounded-[10px] focus:outline-none focus:ring-1 focus:border-yellow"
                placeholder="you@example.com"
              />
            </div>
          </div>

          {/* Service Required and Project Budget Dropdowns */}
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="form-control flex-1">
              <label className="block mb-2 text-white">Service Required*</label>
              <select className="w-full px-3 py-2 border border-gray rounded-[10px] focus:outline-none focus:ring-1 focus:border-yellow">
                <option value="" disabled selected>
                  Select Your Service
                </option>
                <option value="employee">Employee</option>
                <option value="hr">HR</option>
                <option value="client">Client</option>
                <option value="admin">Admin</option>
              </select>
            </div>

            <div className="form-control flex-1">
              <label className="block mb-2 text-white">Project Budget*</label>
              <select className="w-full px-3 py-2 border border-gray rounded-[10px] focus:outline-none focus:ring-1 focus:border-yellow">
                <option value="" disabled selected>
                  Select Your Range
                </option>
                <option value="50000">50,000</option>
                <option value="70000">70,000</option>
                <option value="80000">80,000</option>
                <option value="90000">90,000</option>
              </select>
            </div>
          </div>

          {/* Message Input */}
          <div className="form-control mb-6">
            <label htmlFor="message" className="block mb-2 text-white">
              Project details*
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full px-3 py-2 border border-gray rounded-[10px] h-24 focus:outline-none focus:ring-1 focus:border-yellow"
              placeholder="Tell us more about your idea"
            />
          </div>

          {/* Terms Checkbox */}
          <div className="flex items-center">
            <div
              className={`w-5 h-5 mr-2 border-2 border-white bg-transparent flex justify-center items-center cursor-pointer transition-all duration-300 ease-in-out ${
                isChecked ? "border-white" : ""
              }`}
              onClick={handleCheckboxChange}
            >
              {isChecked && <FiCheck className="text-white text-lg" />}
            </div>
            <label htmlFor="terms" className="text-white text-base">
              I agree to the terms of Service and Privacy Policy.
            </label>
          </div>

          {/* Submit Button */}
          <div className="form-control lg:mb-0 md:mb-5 mb-5">
            <button className="btn bg-black text-white text-lg font-normal w-full md:w-auto border-none hover:bg-yellow">
              Send Inquiry
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
