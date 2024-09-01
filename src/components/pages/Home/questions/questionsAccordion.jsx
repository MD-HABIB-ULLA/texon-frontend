import { useState } from "react";
import {
  IoArrowDownCircleOutline,
  IoArrowUpCircleOutline,
} from "react-icons/io5";

export default function QuestionsAccordion() {
  const [openIdx, setOpenIndex] = useState(null); // Default to null for no open item

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
            What is UX design?
            {openIdx === 0 ? (
              <IoArrowUpCircleOutline className="w-10" />
            ) : (
              <IoArrowDownCircleOutline className="w-10" />
            )}
          </div>
          <div
            className={`collapse-content transition-max-height duration-300 ease-in-out ${
              openIdx === 0 ? "max-h-40" : "max-h-0"
            }`}
          >
            <p>
              UX design stands for User Experience design. It is the process of
              designing digital or physical products that are easy to use,
              intuitive, and enjoyable for the user.
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
            What are the key principles of UX design?
            {openIdx === 1 ? (
              <IoArrowUpCircleOutline className="w-10" />
            ) : (
              <IoArrowDownCircleOutline className="w-10" />
            )}
          </div>
          <div
            className={`collapse-content transition-max-height duration-300 ease-in-out ${
              openIdx === 1 ? "max-h-40" : "max-h-0"
            }`}
          >
            <p>
              The key principles of UX design are user-centric design,
              consistency, usability, accessibility, feedback, clarity, and
              flexibility.
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
            What is the difference between UX and UI design?
            {openIdx === 2 ? (
              <IoArrowUpCircleOutline className="w-10" />
            ) : (
              <IoArrowDownCircleOutline className="w-10" />
            )}
          </div>
          <div
            className={`collapse-content transition-max-height duration-300 ease-in-out ${
              openIdx === 2 ? "max-h-40" : "max-h-0"
            }`}
          >
            <p>
              UX design focuses on the overall experience of the user, while UI
              design concentrates on the visual and interactive aspects of the
              product's interface.
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
            What is a wireframe?
            {openIdx === 3 ? (
              <IoArrowUpCircleOutline className="w-10" />
            ) : (
              <IoArrowDownCircleOutline className="w-10" />
            )}
          </div>
          <div
            className={`collapse-content transition-max-height duration-300 ease-in-out ${
              openIdx === 3 ? "max-h-40" : "max-h-0"
            }`}
          >
            <p>
              A wireframe is a simple visual guide that outlines the structure
              and layout of a webpage or app, focusing on element placement
              without detailed design.
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
            What is user testing?
            {openIdx === 4 ? (
              <IoArrowUpCircleOutline className="w-10" />
            ) : (
              <IoArrowDownCircleOutline className="w-10" />
            )}
          </div>
          <div
            className={`collapse-content transition-max-height duration-300 ease-in-out ${
              openIdx === 4 ? "max-h-40" : "max-h-0"
            }`}
          >
            <p>
              User testing is the process of evaluating a product by observing
              real users as they interact with it to identify usability issues
              and gather feedback for improvements.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
