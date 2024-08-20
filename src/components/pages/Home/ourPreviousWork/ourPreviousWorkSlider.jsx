"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import iPadMockup from "../../../../../public/work/iPadMockup.webp";

import "./styles.css";

// import required modules
import Image from "next/image";
import { Pagination } from "swiper/modules";
export const OurPreviousWorkSlider = () => {
  return (
    <div className="text-white lg:pb-20 md:pb-10 pb-5">
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide>
          <div>
            <div className="flex  items-center justify-center">
              <div className="w-1/3 py-20">
                <div className="flex justify-between items-center text-xl border-b pb-2 mb-7">
                  <h1>2024</h1>
                  <h3>UI /UX Product</h3>
                </div>
                <h1 className="text-4xl font-semibold mb-7">oppzo.io</h1>
                <p className="">
                  Sed sollicitudin, sem id imperdiet semper, enim ante tempor
                  sapien, a commodo nisl dolor at elit. Aliquam suscipit egestas
                  velit at elementum. Nulla sit amet ligula at dolor rhoncus
                  rhoncus. Aenean molestie est tortor. Mauris dictum magna sit
                  amet velit ornare.
                </p>
              </div>
              <div className="w-[350px]">
                <Image src={iPadMockup} alt="iPadMockup" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className="flex  items-center justify-center">
              <div className="w-1/3 py-20">
                <div className="flex justify-between items-center text-xl border-b pb-2 mb-7">
                  <h1>2024</h1>
                  <h3>UI /UX Product</h3>
                </div>
                <h1 className="text-4xl font-semibold mb-7">oppzo.io</h1>
                <p className="">
                  Sed sollicitudin, sem id imperdiet semper, enim ante tempor
                  sapien, a commodo nisl dolor at elit. Aliquam suscipit egestas
                  velit at elementum. Nulla sit amet ligula at dolor rhoncus
                  rhoncus. Aenean molestie est tortor. Mauris dictum magna sit
                  amet velit ornare.
                </p>
              </div>
              <div className="w-[350px]">
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
