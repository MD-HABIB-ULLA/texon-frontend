import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export default function FaqAccordion() {
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
            What is Texon Limited?
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
            <p>
              Texon Limited is a software development company in Bangladesh that
              offers end-to-end software and hardware solutions to various
              industries and clients worldwide.
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
            What kind of services do you provide?
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
              We provide full-stack software development services for websites,
              mobile apps, e-commerce, machine learning, artificial
              intelligence, and more. We can help you with UI/UX consulting,
              product engineering, quality assurance and testing, and custom
              software development.
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
            What are the benefits of working with Texon Limited?
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
              Some of the benefits are: Access to a team of talented and
              experienced developers, designers, testers, and project managers.
              Work with a company that has a proven track record of delivering
              successful projects worldwide. Enjoy competitive pricing and
              flexible payment options. Collaborate with a company that values
              your feedback and satisfaction.
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
            How can I contact you for more information or a quote?
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
              You can contact us by filling out the form on our website or by
              sending us an email at info@texonltd.com. You can also call us at
              +880 1409 003646 or visit our office at ….. Road, Dhaka 1212.
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
            What are the technologies and tools that you use?
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
              We use a variety of technologies and tools to develop our software
              and hardware solutions. Some of them are: Web development: HTML,
              CSS, Django, JavaScript, React, Angular, Vue, Node.js, PHP,
              Laravel, Python, WordPress, Shopify, Magento, etc. Mobile
              development: Android, iOS, Flutter, React Native, etc. E-commerce
              development: WooCommerce, Shopify, Magento, etc. Hardware
              development: Arduino, Raspberry Pi, ESP32/8266, etc
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
            How do you manage your projects?
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
              We manage our projects using agile methodologies and tools that
              ensure efficiency, quality, and collaboration. We follow the best
              practices of software development and use tools such as Jira,
              GitHub, Slack, Zoom, and Google Drive. We also provide you with
              regular updates and reports on your project.
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
            How do you ensure the security and privacy of my data?
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
              We use encryption, authentication, authorization, backup, and
              firewall techniques to protect your data from unauthorized access
              or loss. We also comply with the relevant laws and regulations
              regarding data protection and privacy. We do not share or sell
              your data to any third party without your consent.
            </p>
          </div>
        </div>
        <div
          className={`collapse join-item bg-white overflow-hidden transition-all duration-300 ${
            openIdx === 7 ? "collapse-open" : ""
          }`}
        >
          <div
            className="collapse-title text-xl flex justify-between items-center font-semibold lg:font-medium md:font-medium cursor-pointer"
            onClick={() => handleToggle(7)}
          >
            How do you ensure the quality of your products and services?
            {openIdx === 7 ? (
              <IoIosArrowUp className="w-10" />
            ) : (
              <IoIosArrowDown className="w-10" />
            )}
          </div>
          <div
            className={`collapse-content transition-max-height duration-300 ease-in-out ${
              openIdx === 7 ? "max-h-40" : "max-h-0"
            }`}
          >
            <p>
              We ensure the quality of our products and services by following
              the best practices of software development, such as code review,
              testing, debugging, documentation, and deployment.
            </p>
          </div>
        </div>
        <div
          className={`collapse join-item bg-white overflow-hidden transition-all duration-300 ${
            openIdx === 8 ? "collapse-open" : ""
          }`}
        >
          <div
            className="collapse-title text-xl flex justify-between items-center font-semibold lg:font-medium md:font-medium cursor-pointer"
            onClick={() => handleToggle(8)}
          >
            What are your payment terms and methods?
            {openIdx === 8 ? (
              <IoIosArrowUp className="w-10" />
            ) : (
              <IoIosArrowDown className="w-10" />
            )}
          </div>
          <div
            className={`collapse-content transition-max-height duration-300 ease-in-out ${
              openIdx === 8 ? "max-h-40" : "max-h-0"
            }`}
          >
            <p>
              Our payment terms and methods are flexible and negotiable
              depending on your project scope and budget. We usually charge on
              an hourly or fixed-price basis. We accept payments via bank
              transfer, PayPal, Payoneer, etc. We usually require a deposit
              before starting the project and the rest of the payment upon
              completion or delivery of the project.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
