"use client";
import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export default function CloudComputingAccordion() {
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
            Expertise?
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
            <p className="">
              Our team of experienced cloud developers has a deep understanding
              of the latest cloud technologies and methodologies, ensuring that
              your cloud environment is efficient, secure, and cost-effective.
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
            Scalability?
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
              Our cloud applications are built to scale, ensuring that your
              business can grow without worrying about infrastructure
              limitations.
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
            Reliability?
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
              We utilize industry-leading tools and services to ensure that your
              cloud environment is highly available and resilient, with minimal
              downtime.
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
            Cost-efficiency?
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
              We design our cloud applications and AWS services to minimize
              costs without sacrificing performance or security, ensuring that
              you get the most out of your cloud investment.
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
            Support?
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
              We provide ongoing support and maintenance for your cloud
              environment, ensuring that it remains up-to-date and secure, and
              that any issues are resolved quickly and efficiently.
            </p>
            <p>
              So if you're looking for a partner to help you create the perfect
              website, look no further.{" "}
              <b className="text-primry">Contact us</b> today to learn more
              about our services and how we can help your business succeed
              online.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
