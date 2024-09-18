"use client";
import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export default function AiAutomationChooseAccordion() {
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
            Machine Learning Solutions?
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
              Our team of machine learning experts can help you develop and
              deploy custom machine learning models that fit your business
              needs. We have hands-on experience with TensorFlow, Keras, and
              PyTorch, which are commonly used to develop and deploy machine
              learning models.
            </p>
            <div className="mt-4">
              We can help you with natural language processing, image
              recognition, predictive analytics, and more.
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
            Robotic Process Automation (RPA)?
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
              We can help you automate repetitive and time-consuming tasks using
              RPA. Our RPA solutions can help you reduce errors, improve
              accuracy, and save time and money.
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
            Natural Language Processing (NLP)?
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
              We have the capacity to aid you with developing NLP solutions that
              can help you automate your customer service, analyze customer
              feedback, and extract insights from unstructured data. We are
              using natural language processing libraries such as NLTK, SpaCy,
              and Stanford CoreNLP to develop NLP solutions.
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
            Image Recognition?
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
              Our team's image and video processing libraries, such as OpenCV
              and TensorFlow's Object Detection API, are used to develop
              computer vision solutions that can help you identify objects,
              faces, and patterns. Our solutions can be used for a variety of
              applications, such as security, retail, and healthcare.
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
            Chatbots and Virtual Assistants?
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
              We specialize in developing chatbots and virtual assistants that
              can help you improve your customer service, automate your sales
              processes, and reduce your customer support costs. With our
              expertise in NLP, RPA, and IoT, we can help you develop innovative
              solutions tailored to your unique needs.
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
            Predictive Analytics?
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
              Our services are available to help you use predictive analytics to
              analyze data and make informed decisions about your business. Our
              solutions can help you forecast trends, identify patterns, and
              make proactive decisions.
            </p>
            <p className="py-4">
              We understand that every business is unique, which is why we
              create custom solutions that fit your specific needs. Whether
              you're looking to automate your processes, improve your customer
              service, or make data-driven decisions, our team of experts can
              help you achieve your goals.
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
