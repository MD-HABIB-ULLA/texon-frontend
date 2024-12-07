"use client";

import React from "react";
import { MdQrCode2 } from "react-icons/md";
import { FaShoppingCart, FaPalette, FaChevronRight } from "react-icons/fa";
import { TbLayoutDashboard } from "react-icons/tb";
import { PiPipeWrenchFill } from "react-icons/pi";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import HeadingTitle from "@/components/common/title/headingTitle";

import web_services from "../../../../../public/services/web_dev 1.svg";
import Image from "next/image";

const WebServices = () => {
  const services = [
    "Multivendor Ecommerce eco systems Development",
    "Single Vendor Ecommerce Development",
    "B2C or B2B Website Development",
    "Business Management Software",
    "Cloud service",
    "UI/UX Design",
    "API Integrations & Web consultancy",
  ];

  const cards = [
    {
      title: "Custom Website Development",
      description:
        "We create custom websites that are designed to reflect your brand and appeal to your target audience.",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=600",
      icon: MdQrCode2,
    },
    {
      title: "E-commerce Website Development",
      description:
        "We develop e-commerce websites that are easy to use, secure, and optimized for conversion.",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=600",
      icon: FaShoppingCart,
    },
    {
      title: "Content Management Systems",
      description:
        "We build websites that are powered by a CMS, making it easy for you to update your site and content.",
      image:
        "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&q=80&w=600",
      icon: TbLayoutDashboard,
    },
    {
      title: "UI/UX Design",
      description:
        "Our UI/UX design services include creating wireframes, prototypes, and visual designs for your website.",
      image:
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=600",
      icon: FaPalette,
    },
    {
      title: "Website Maintenance",
      description:
        "We offer ongoing website maintenance services to keep your site running smoothly and securely.",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=600",
      icon: PiPipeWrenchFill,
    },
  ];

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-16 space-y-16">
      <section className="text-center">
        <HeadingTitle
          heading={"Web Development Services"}
          subHeading={
            " At Texon imited, we understand that a great website is essential for any business looking to succeed online. That's why we offer a wide range of website development services to help businesses of all sizes create the perfect online presence."
          }
        ></HeadingTitle>
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800"></h1>
        <p className="text-lg md:text-xl text-black max-w-3xl mx-auto"></p>
      </section>

      <section className="flex flex-col md:flex-row items-center md:items-start gap-12">
        <div className="md:w-1/2">
          <div className=" rounded-3xl aspect-square flex items-center justify-start">
            <Image
              src={web_services}
              alt="web_services"
              className="w-full h-auto max-w-md mx-auto"
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

      <section className="bg-primry text-white py-12 rounded-2xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          Everybody wants to be <span className="font-extrabold">Texon.</span>
        </h2>
        <p className="text-xl md:text-2xl">But no one can't be!</p>
      </section>

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

export default WebServices;
