"use client";
import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export default function ManagementSoftwareChooseAccordion() {
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
            Enterprise Resource Planning (ERP) Software?
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
              Our team of developers will work with you to design and develop
              ERP software that fits your business needs. We can help you
              integrate and manage your business processes, such as inventory,
              supply chain management, financials, human resources, and customer
              relationship management, in a single system.
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
            Education Management Software?
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
              We specialize in developing education management software that can
              help schools and universities manage their academic and
              administrative processes. Our software can help you with student
              enrollment, course registration, grading, attendance tracking, and
              more.
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
            Point of Sale (PoS) System?
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
              Our services are available to provide you with developing a custom
              PoS system that can help you manage your sales, inventory, and
              customer data. Our software can help you with barcode scanning,
              payment processing, stock management, and more.
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
            Inventory Management Software?
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
              Let us lend our expertise to support you in designing and
              developing an inventory management software that fits your
              business needs. We can help you track your inventory levels,
              manage your suppliers and orders, and automate your
              inventory-related processes.
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
            Accounting and Finance Software?
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
              exceeds your customers' expectations
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
            Customer Relationship Management (CRM) Software?
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
              Our team is equipped to assist you with developing custom CRM
              software to help you manage your customer interactions and improve
              your customer relationships. Our software can help you track your
              customer data, manage your sales pipeline, and automate your
              marketing campaigns.
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
            Human Resource Management (HRM) Software?
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
              We can help you develop HRM software to manage your employee data,
              payroll, benefits, and more. Our software can help you automate
              your HR processes and improve employee engagement and retention.
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
            Project Management Software
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
              We have the capacity to aid you in developing project management
              software that can help you track your project progress, manage
              your tasks and resources, and collaborate with your team members.
              Our software can help you streamline your project management
              processes and improve your project outcomes.
            </p>
            <p className="pb-4">
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
