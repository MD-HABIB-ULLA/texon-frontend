"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import iPadMockup from "../../../../../public/work/iPadMockup.webp";

import "./ourPreviousWorkSlider.css";

// import required modules
import Image from "next/image";
import { Pagination } from "swiper/modules";
export const OurPreviousWorkSlider = () => {
  return (
    <div className="text-white">
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide>
          <div>
            <div className="flex  items-center justify-center">
              <div className="w-1/3 py-20">
                <div className="flex justify-between items-center text-xl border-b pb-2 mb-6 mr-5">
                  <h1>2024</h1>
                  <h3>UI /UX Product</h3>
                </div>
                <h1 className="text-4xl font-semibold mb-7">oppzo.io</h1>
                <p className="text-sm mb-8">
                  Opzo specializes in developing comprehensive business
                  management software solutions, spanning CRM, e-commerce,
                  billing, accounting, manufacturing, warehouse, and project
                  management, empowering businesses with efficient and
                  integrated tools for streamlined operations
                </p>
              </div>
              <div className="w-[290px] mr-5">
                <Image src={iPadMockup} alt="iPadMockup" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className="flex  items-center justify-center">
              <div className="w-1/3 py-20">
                <div className="flex justify-between items-center text-xl border-b pb-2 mb-6 mr-5">
                  <h1>2024</h1>
                  <h3>UI /UX Product</h3>
                </div>
                <h1 className="text-4xl font-semibold mb-7">oppzo.io</h1>
                <p className="text-sm mb-8">
                  Opzo specializes in developing comprehensive business
                  management software solutions, spanning CRM, e-commerce,
                  billing, accounting, manufacturing, warehouse, and project
                  management, empowering businesses with efficient and
                  integrated tools for streamlined operations
                </p>
              </div>
              <div className="w-[290px] mr-5">
                <Image src={iPadMockup} alt="iPadMockup" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className="flex  items-center justify-center">
              <div className="w-1/3 py-20">
                <div className="flex justify-between items-center text-xl border-b pb-2 mb-6 mr-5">
                  <h1>2024</h1>
                  <h3>UI /UX Product</h3>
                </div>
                <h1 className="text-4xl font-semibold mb-7">oppzo.io</h1>
                <p className="text-sm mb-8">
                  Opzo specializes in developing comprehensive business
                  management software solutions, spanning CRM, e-commerce,
                  billing, accounting, manufacturing, warehouse, and project
                  management, empowering businesses with efficient and
                  integrated tools for streamlined operations
                </p>
              </div>
              <div className="w-[290px] mr-5">
                <Image src={iPadMockup} alt="iPadMockup" />
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default OurPreviousWorkSlider;
