"use client";
import HeadingTitle from "@/components/common/title/headingTitle";
import Image from "next/image";
import { AiOutlineGlobal } from "react-icons/ai";
import { PiHandshake } from "react-icons/pi";
import { TbApps } from "react-icons/tb";
import faq_banner from "../../../../public/faq/faq_banner.png";
import FaqAccordion from "./faqAccordion";

export default function page() {
  return (
    <>
      <div className="mx-auto">
        <div>
          <Image className="mx-auto w-full" src={faq_banner} alt="faq_banner" />
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto px-2 -mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Global Service */}
          <div className="flex items-center bg-indigo-100 rounded-[20px] shadow-lg p-6 border-b-2 border-transparent hover:border-indigo-500 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl animate-slide-in">
            <AiOutlineGlobal className="text-8xl text-indigo-500 hover:text-blue-700 transition-all duration-300" />
            <div className="ml-4">
              <h1 className="font-semibold">Global Service</h1>
              <p className="text-base">
                Proven track record of successful projects in multiple
                countries.
              </p>
            </div>
          </div>

          {/* Customized Solutions */}
          <div className="flex items-center bg-green-100 rounded-[20px] shadow-lg p-6 border-b-2 border-transparent hover:border-green-500 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl animate-slide-in">
            <TbApps className="text-8xl text-green-500 hover:text-green-700 transition-all duration-300" />
            <div className="ml-4">
              <h1 className="font-semibold">Customized Solutions</h1>
              <p className="text-base">
                We provide customized solutions to meet individual needs.
              </p>
            </div>
          </div>

          {/* Customer Satisfaction */}
          <div className="flex items-center bg-red-100 rounded-[20px] shadow-lg p-6 border-b-2 border-transparent hover:border-red-500 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl animate-slide-in">
            <PiHandshake className="text-8xl text-red-500 hover:text-red-700 transition-all duration-300" />
            <div className="ml-4">
              <h1 className="font-semibold">Customer Satisfaction</h1>
              <p className="text-base">
                We strive to provide excellent service & support.
              </p>
            </div>
          </div>
        </div>

        <div className="pt-10 md:pt-20">
          <HeadingTitle
            heading={
              <>
                Which are the most asked <br />
                <span className="text-[#6B7280] italic">questions ?</span>
              </>
            }
          />
        </div>

        <div className="pb-7 md:pb-9 lg:pb-14">
          <FaqAccordion />
        </div>
      </div>
    </>
  );
}
