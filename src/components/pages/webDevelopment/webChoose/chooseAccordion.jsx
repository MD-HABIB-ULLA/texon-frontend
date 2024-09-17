"use client";
import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export default function ChooseAccordion() {
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
            Technological Expertise?
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
              Our team has expertise in HTML5, CSS3, JavaScript, React, Angular,
              Vue.js, and other front-end technologies. Also, we have experience
              in back-end technologies such as Node.js, Ruby on Rails, Django,
              Laravel, and others to develop robust web applications.
            </p>
            <div className="mt-4">
              Last but not least, our team is experienced in various content
              management systems, such as WordPress, Drupal, and Joomla, to
              create dynamic and user-friendly websites that are easy to manage
              and update.
            </div>
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
            Global Reach?
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
              Our web development services are available to clients all over the
              world. We have clients in the USA, Canada, North Korea, the UK,
              and Cyprus, and we are proud to have built long-lasting
              relationships with them.
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
            Experience?
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
              We understand that each client is unique, and we take the time to
              understand your business needs and goals. We create customized web
              development solutions that align with your business objectives and
              help you achieve your goals.
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
            Responsive Design?
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
              We build responsive websites that look great on any device, from
              desktops to smartphones. This ensures that your website is
              accessible to all users, regardless of their device preference.
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
            Website Maintenance?
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
              We offer ongoing website maintenance services to keep your site
              running smoothly and securely.
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
            SEO-Friendly?
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
              We build websites that are optimized for search engines, with
              clean and semantic code that helps search engines understand your
              content and rank your website higher in search results.
            </p>
          </div>
        </div>

        <div
          className={`collapse join-item bg-white overflow-hidden transition-all duration-300 ${
            openIdx === 6 ? "collapse-open" : ""
          }`}
        >
          <div
            className="collapse-title text-xl flex justify-between items-center font-semibold lg:font-medium md:font-medium cursor-pointer"
            onClick={() => handleToggle(6)}
          >
            Continuous Support?
            {openIdx === 6 ? (
              <IoIosArrowUp className="w-10" />
            ) : (
              <IoIosArrowDown className="w-10" />
            )}
          </div>
          <div
            className={`collapse-content transition-max-height duration-300 ease-in-out ${
              openIdx === 6 ? "max-h-40" : "max-h-0"
            }`}
          >
            <p>
              User testing is the process of evaluating a product by observing
              real users as they interact with it to identify usability issues
              and gather feedback for improvements.
            </p>
            <p className="my-4">
              We believe that a great website should be easy to use, visually
              appealing, and effective at driving business results. That's why
              we take a customer-centric approach to website development, and
              work closely with our clients to deliver solutions that meet their
              specific needs.
            </p>
            <p>
              So if you're looking for a partner to help you create the perfect
              website, look no further. <b className="text-primry">Contact us</b> today to learn more
              about our services and how we can help your business succeed
              online.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
