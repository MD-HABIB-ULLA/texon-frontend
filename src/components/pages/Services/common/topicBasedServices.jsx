"use client";

import React from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import HeadingTitle from "@/components/common/title/headingTitle";

import web_services from "../../../../../public/services/web_dev 1.svg";
import web_banner from "../../../../../public/services/Group 27352.png";
import Image from "next/image";
import { FaChevronRight } from "react-icons/fa";

const TopicBasedServices = ({ services, topic, cards }) => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 py-16 space-y-16">
      <section className="text-center">
        <HeadingTitle
          heading={`${topic} Services`}
          subHeading={
            " At Texon imited, we understand that a great website is essential for any business looking to succeed online. That's why we offer a wide range of website development services to help businesses of all sizes create the perfect online presence."
          }
        ></HeadingTitle>
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800"></h1>
        <p className="text-lg md:text-xl text-black max-w-3xl mx-auto"></p>
      </section>

      <section
        className="flex flex-col md:flex-row items-center md:items-start gap-12  p-5
      "
      >
        <div className="md:w-1/2 ">
          <div className=" w-full   ">
            <Image
              src={web_services}
              alt="web_services"
              className="w-full aspect-square h-auto max-w-md mx-auto "
            />
          </div>
        </div>
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
            Our Services Include:
          </h2>
          <p className="text-lg text-gray-600">
            We have provided over 50+ custom-based service solutions with 100%
            customer satisfaction.
          </p>
          <ul className="space-y-4">
            {services.map((service, index) => (
              <li key={index} className="flex items-start space-x-3">
                <IoMdCheckmarkCircleOutline className="text-2xl text-green-500 flex-shrink-0 mt-1" />
                <span className="text-gray-700">{service}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="relative flex justify-center  w-full lg:my-32 md:my-20 ">
        <div className=" w-full h-[300px]">
          {" "}
          {/* Set height dynamically */}
          <Image
            src={web_banner}
            alt="Services Banner"
            fill
            className="object-contain"
          />
        </div>

        <div className="absolute h-full w-full flex items-center justify-center text-white ">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Everybody wants to be Texon.
            <br />
            But no one can't be!
          </h2>
        </div>
      </div>

      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <HeadingTitle
            heading={"Our Services"}
            subHeading={
              " We offer a comprehensive range of web development and design services to help your business succeed online."
            }
          />
        </div>
        <section className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {cards.map((card, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 flex flex-col sm:flex-row"
              >
                {/* Text Section */}
                <div className="p-4 sm:w-3/5 flex flex-col justify-between">
                  <div className="bg-blue/10 p-3 mb-4 rounded-md">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                      {card.title}
                    </h3>
                  </div>
                  <p className="text-sm sm:text-base text-gray-600 mb-6">
                    {card.description}
                  </p>
                  <button className="bg-primry text-white py-2 px-4 rounded-lg transition-colors duration-300 hover:bg-blue-700 flex items-center justify-center group">
                    <span className="text-sm sm:text-base">Learn more</span>
                    <FaChevronRight className="ml-2 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>

                {/* Image Section */}
                <div className="relative w-full sm:w-2/5 h-48 sm:h-auto rounded-r-lg  overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <card.icon className="w-6 h-6 mb-2" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </section>
    </div>
  );
};

export default TopicBasedServices;
