"use client";
import { useState } from "react";
import {
  IoArrowDownCircleOutline,
  IoArrowUpCircleOutline,
} from "react-icons/io5";

export default function WebServicesAccordion() {
  const [openIdx, setOpenIndex] = useState(0);

  const handleToggle = (idx) => {
    setOpenIndex(openIdx === idx ? -1 : idx);
  };

  return (
    <div className="md:px-8 lg:px-10">
      <div className="join join-vertical w-full gap-3 sm:gap-4 md:gap-5 lg:gap-6">
        {/* Technological Expertise */}
        <div className="collapse join-item bg-[#F5F8FF]">
          <input
            type="radio"
            name="my-accordion-4"
            checked={openIdx === 0}
            onChange={() => handleToggle(0)}
          />
          <div
            className="collapse-title text-xl flex justify-between items-center font-semibold lg:font-medium md:font-medium"
            onClick={() => handleToggle(0)}
          >
            Technological Expertise:
            {openIdx === 0 ? (
              <IoArrowUpCircleOutline className="w-10" />
            ) : (
              <IoArrowDownCircleOutline className="w-10" />
            )}
          </div>
          <div className="collapse-content">
            <p>
              Our team has expertise in HTML5, CSS3, JavaScript, React, Angular,
              Vue.js, and other front-end technologies. Also, we have experience
              in back-end technologies such as Node.js, Ruby on Rails, Django,
              Laravel, and others to develop robust web applications.
            </p>
            <p className="pt-5">
              Last but not least, our team is experienced in various content
              management systems, such as WordPress, Drupal, and Joomla, to
              create dynamic and user-friendly websites that are easy to manage
              and update.
            </p>
          </div>
        </div>

        {/* Global Reach */}
        <div className="collapse join-item bg-[#F5F8FF]">
          <input
            type="radio"
            name="my-accordion-4"
            checked={openIdx === 1}
            onChange={() => handleToggle(1)}
          />
          <div
            className="collapse-title text-xl flex justify-between items-center font-semibold lg:font-medium md:font-medium"
            onClick={() => handleToggle(1)}
          >
            Global Reach
            {openIdx === 1 ? (
              <IoArrowUpCircleOutline className="w-10" />
            ) : (
              <IoArrowDownCircleOutline className="w-10" />
            )}
          </div>
          <div className="collapse-content">
            <p>
              Highlights your ability to serve clients across the world,
              breaking geographical barriers.
            </p>
          </div>
        </div>

        {/* Experience */}
        <div className="collapse join-item bg-[#F5F8FF]">
          <input
            type="radio"
            name="my-accordion-4"
            checked={openIdx === 2}
            onChange={() => handleToggle(2)}
          />
          <div
            className="collapse-title text-xl flex justify-between items-center font-semibold lg:font-medium md:font-medium"
            onClick={() => handleToggle(2)}
          >
            Experience
            {openIdx === 2 ? (
              <IoArrowUpCircleOutline className="w-10" />
            ) : (
              <IoArrowDownCircleOutline className="w-10" />
            )}
          </div>
          <div className="collapse-content">
            <p>
              Emphasizes the depth of experience your team has, indicating
              reliability and trustworthiness.
            </p>
          </div>
        </div>

        {/* Responsive Design */}
        <div className="collapse join-item bg-[#F5F8FF]">
          <input
            type="radio"
            name="my-accordion-4"
            checked={openIdx === 3}
            onChange={() => handleToggle(3)}
          />
          <div
            className="collapse-title text-xl flex justify-between items-center font-semibold lg:font-medium md:font-medium"
            onClick={() => handleToggle(3)}
          >
            Responsive Design
            {openIdx === 3 ? (
              <IoArrowUpCircleOutline className="w-10" />
            ) : (
              <IoArrowDownCircleOutline className="w-10" />
            )}
          </div>
          <div className="collapse-content">
            <p>
              Ensures that websites or applications are accessible and
              user-friendly across all devices, from desktops to mobile phones.
            </p>
          </div>
        </div>

        {/* Website Maintenance */}
        <div className="collapse join-item bg-[#F5F8FF]">
          <input
            type="radio"
            name="my-accordion-4"
            checked={openIdx === 4}
            onChange={() => handleToggle(4)}
          />
          <div
            className="collapse-title text-xl flex justify-between items-center font-semibold lg:font-medium md:font-medium"
            onClick={() => handleToggle(4)}
          >
            Website Maintenance
            {openIdx === 4 ? (
              <IoArrowUpCircleOutline className="w-10" />
            ) : (
              <IoArrowDownCircleOutline className="w-10" />
            )}
          </div>
          <div className="collapse-content">
            <p>
              Shows your commitment to keeping websites up-to-date, secure, and
              performing well over time.
            </p>
          </div>
        </div>

        {/* SEO-Friendly */}
        <div className="collapse join-item bg-[#F5F8FF]">
          <input
            type="radio"
            name="my-accordion-4"
            checked={openIdx === 5}
            onChange={() => handleToggle(5)}
          />
          <div
            className="collapse-title text-xl flex justify-between items-center font-semibold lg:font-medium md:font-medium"
            onClick={() => handleToggle(5)}
          >
            SEO-Friendly
            {openIdx === 5 ? (
              <IoArrowUpCircleOutline className="w-10" />
            ) : (
              <IoArrowDownCircleOutline className="w-10" />
            )}
          </div>
          <div className="collapse-content">
            <p>
              Indicates that your services include optimizing websites for
              search engines, improving visibility and ranking.
            </p>
          </div>
        </div>

        {/* Continuous Support */}
        <div className="collapse join-item bg-[#F5F8FF]">
          <input
            type="radio"
            name="my-accordion-4"
            checked={openIdx === 6}
            onChange={() => handleToggle(6)}
          />
          <div
            className="collapse-title text-xl flex justify-between items-center font-semibold lg:font-medium md:font-medium"
            onClick={() => handleToggle(6)}
          >
            Continuous Support
            {openIdx === 6 ? (
              <IoArrowUpCircleOutline className="w-10" />
            ) : (
              <IoArrowDownCircleOutline className="w-10" />
            )}
          </div>
          <div className="collapse-content">
            <p>
              Reassures clients that they will receive ongoing assistance and
              maintenance even after project completion.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
