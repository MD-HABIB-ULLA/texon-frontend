"use client";
import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export default function MobileApplicationAccordion() {
  const [openIdx, setOpenIndex] = useState(0); // Set initial state to 0 for the first toggle

  const handleToggle = (idx) => {
    setOpenIndex(openIdx === idx ? null : idx);
  };

  return (
    <div className="pb-5">
      <div className="join join-vertical w-full gap-3 sm:gap-4 md:gap-5 lg:gap-6">
        <div
          className={`collapse join-item bg-white overflow-hidden transition-all duration-300 ${
            openIdx === 0 ? "collapse-open" : ""
          }`}
        >
          <div
            className="collapse-title text-xl flex justify-between items-center font-semibold lg:font-medium md:font-medium cursor-pointer"
            onClick={() => handleToggle(0)}
          >
            Experience?
            {openIdx === 0 ? (
              <IoIosArrowUp className="w-10" />
            ) : (
              <IoIosArrowDown className="w-10" />
            )}
          </div>
          <div
            className={`collapse-content transition-max-height duration-300 ease-in-out ${
              openIdx === 0 ? "max-h-40" : "max-h-0"
            }`}
          >
            <p className="pr-4">
              With over 100 mobile app and website development projects
              completed for clients globally. We have extensive experience in
              developing apps for a range of industries, including healthcare,
              finance, retail, and more. Our team has the knowledge and
              expertise to create a mobile application that meets your specific
              needs.
            </p>
          </div>
        </div>

        <div
          className={`collapse join-item bg-white overflow-hidden transition-all duration-300 ${
            openIdx === 1 ? "collapse-open" : ""
          }`}
        >
          <div
            className="collapse-title text-xl flex justify-between items-center font-semibold lg:font-medium md:font-medium cursor-pointer"
            onClick={() => handleToggle(1)}
          >
            Global Presence?
            {openIdx === 1 ? (
              <IoIosArrowUp className="w-10" />
            ) : (
              <IoIosArrowDown className="w-10" />
            )}
          </div>
          <div
            className={`collapse-content transition-max-height duration-300 ease-in-out ${
              openIdx === 1 ? "max-h-40" : "max-h-0"
            }`}
          >
            <p>
              We have clients from all over the world, including the USA,
              Canada, North Korea, the UK, and Cyprus. Our global presence has
              given us exposure to different markets, cultures, and business
              practices, which we bring to the table when working with you.
            </p>
          </div>
        </div>

        <div
          className={`collapse join-item bg-white overflow-hidden transition-all duration-300 ${
            openIdx === 2 ? "collapse-open" : ""
          }`}
        >
          <div
            className="collapse-title text-xl flex justify-between items-center font-semibold lg:font-medium md:font-medium cursor-pointer"
            onClick={() => handleToggle(2)}
          >
            Technological Expertise?
            {openIdx === 2 ? (
              <IoIosArrowUp className="w-10" />
            ) : (
              <IoIosArrowDown className="w-10" />
            )}
          </div>
          <div
            className={`collapse-content transition-max-height duration-300 ease-in-out ${
              openIdx === 2 ? "max-h-40" : "max-h-0"
            }`}
          >
            <p>
              Our team of developers has expertise in the latest app development
              tools and technologies, including Swift, Kotlin, Java, React
              Native, Flutter, and Xamarin. We keep up with the latest
              advancements in the mobile app development industry to ensure that
              we provide our clients with the best possible solutions.
            </p>
          </div>
        </div>

        <div
          className={`collapse join-item bg-white overflow-hidden transition-all duration-300 ${
            openIdx === 3 ? "collapse-open" : ""
          }`}
        >
          <div
            className="collapse-title text-xl flex justify-between items-center font-semibold lg:font-medium md:font-medium cursor-pointer"
            onClick={() => handleToggle(3)}
          >
            Customer-centric Approach?
            {openIdx === 3 ? (
              <IoIosArrowUp className="w-10" />
            ) : (
              <IoIosArrowDown className="w-10" />
            )}
          </div>
          <div
            className={`collapse-content transition-max-height duration-300 ease-in-out ${
              openIdx === 3 ? "max-h-40" : "max-h-0"
            }`}
          >
            <p>
              We put our clients first and prioritize their needs when
              developing mobile applications. We take the time to understand
              your business requirements, goals, and target audience to create
              an app that aligns with your vision.
            </p>
          </div>
        </div>

        <div
          className={`collapse join-item bg-white overflow-hidden transition-all duration-300 ${
            openIdx === 4 ? "collapse-open" : ""
          }`}
        >
          <div
            className="collapse-title text-xl flex justify-between items-center font-semibold lg:font-medium md:font-medium cursor-pointer"
            onClick={() => handleToggle(4)}
          >
            Quality Assurance?
            {openIdx === 4 ? (
              <IoIosArrowUp className="w-10" />
            ) : (
              <IoIosArrowDown className="w-10" />
            )}
          </div>
          <div
            className={`collapse-content transition-max-height duration-300 ease-in-out ${
              openIdx === 4 ? "max-h-40" : "max-h-0"
            }`}
          >
            <p>
              We use a rigorous testing and quality assurance process to ensure
              that your app is bug-free, secure, and user-friendly. We strive to
              deliver a mobile application that meets your expectations and
              exceeds your customers' expectations.
            </p>
          </div>
        </div>

        <div
          className={`collapse join-item bg-white overflow-hidden transition-all duration-300 ${
            openIdx === 5 ? "collapse-open" : ""
          }`}
        >
          <div
            className="collapse-title text-xl flex justify-between items-center font-semibold lg:font-medium md:font-medium cursor-pointer"
            onClick={() => handleToggle(5)}
          >
            Continuous Support?
            {openIdx === 5 ? (
              <IoIosArrowUp className="w-10" />
            ) : (
              <IoIosArrowDown className="w-10" />
            )}
          </div>
          <div
            className={`collapse-content transition-max-height duration-300 ease-in-out ${
              openIdx === 5 ? "max-h-40" : "max-h-0"
            }`}
          >
            <p>
              We provide ongoing support and maintenance for your mobile app,
              ensuring that it stays up-to-date and secure. We also provide
              training to help you manage your app and make updates as needed.
            </p>
            <p className="py-4">
              A great app should help businesses achieve their goals and make
              life easier for their customers. That's why we take a
              customer-centric approach to app development, and work closely
              with our clients to deliver solutions that meet their specific
              needs.
            </p>
            <p>
              So if you're looking for a partner to help you create the perfect
              website, look no further. <b className="text-blue">Contact us</b>{" "}
              today to learn more about our services and how we can help your
              business succeed online.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
