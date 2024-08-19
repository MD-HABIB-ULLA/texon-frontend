"use client";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import "./previousWorkSlider.css";

import Image from "next/image";
import previousWork from "../../../../../public/work/iPadMockup.webp";

export default function PreviousWorkSide() {
  return (
    <div>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
          <div className="flex flex-col sm:flex-row items-center h-auto sm:h-[400px] gap-4 sm:gap-0 justify-center sm:justify-between p-2 sm:p-6 w-[350px] sm:w-[800px] rounded-3xl sm:rounded-[40px] bg-primry text-white">
            <div>
              <div className="border-b border-white text-xl font-normal pb-[15px] flex items-center justify-between">
                <p>2024</p>
                <p>UI /UX Product</p>
              </div>
              <div>
                <h3 className="text-5xl font-bold pb-[15px] pt-[22px]">
                  oppzo.io
                </h3>
                <p className="max-w-[317px] text-base font-normal">
                  Opzo specializes in developing comprehensive business
                  management software solutions, spanning CRM, e-commerce,
                  billing, accounting, manufacturing, warehouse, and project
                  management, empowering businesses with efficient and
                  integrated tools for streamlined operations
                </p>
              </div>
            </div>
            <div>
              <Image src={previousWork} alt="previousWork" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col sm:flex-row items-center h-auto sm:h-[400px] gap-4 sm:gap-0 justify-center sm:justify-between p-2 sm:p-6 w-[350px] sm:w-[800px] rounded-3xl sm:rounded-[40px] bg-primry text-white">
            <div>
              <div className="border-b border-white text-xl font-normal pb-[15px] flex items-center justify-between">
                <p>2024</p>
                <p>UI /UX Product</p>
              </div>
              <div>
                <h3 className="text-5xl font-bold pb-[15px] pt-[22px]">
                  oppzo.io
                </h3>
                <p className="max-w-[317px] text-base font-normal">
                  Opzo specializes in developing comprehensive business
                  management software solutions, spanning CRM, e-commerce,
                  billing, accounting, manufacturing, warehouse, and project
                  management, empowering businesses with efficient and
                  integrated tools for streamlined operations
                </p>
              </div>
            </div>
            <div>
              <Image src={previousWork} alt="previousWork" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col sm:flex-row items-center h-auto sm:h-[400px] gap-4 sm:gap-0 justify-center sm:justify-between p-2 sm:p-6 w-[350px] sm:w-[800px] rounded-3xl sm:rounded-[40px] bg-primry text-white">
            <div>
              <div className="border-b border-white text-xl font-normal pb-[15px] flex items-center justify-between">
                <p>2024</p>
                <p>UI /UX Product</p>
              </div>
              <div>
                <h3 className="text-5xl font-bold pb-[15px] pt-[22px]">
                  oppzo.io
                </h3>
                <p className="max-w-[317px] text-base font-normal">
                  Opzo specializes in developing comprehensive business
                  management software solutions, spanning CRM, e-commerce,
                  billing, accounting, manufacturing, warehouse, and project
                  management, empowering businesses with efficient and
                  integrated tools for streamlined operations
                </p>
              </div>
            </div>
            <div>
              <Image src={previousWork} alt="previousWork" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col sm:flex-row items-center h-auto sm:h-[400px] gap-4 sm:gap-0 justify-center sm:justify-between p-2 sm:p-6 w-[350px] sm:w-[800px] rounded-3xl sm:rounded-[40px] bg-primry text-white">
            <div>
              <div className="border-b border-white text-xl font-normal pb-[15px] flex items-center justify-between">
                <p>2024</p>
                <p>UI /UX Product</p>
              </div>
              <div>
                <h3 className="text-5xl font-bold pb-[15px] pt-[22px]">
                  oppzo.io
                </h3>
                <p className="max-w-[317px] text-base font-normal">
                  Opzo specializes in developing comprehensive business
                  management software solutions, spanning CRM, e-commerce,
                  billing, accounting, manufacturing, warehouse, and project
                  management, empowering businesses with efficient and
                  integrated tools for streamlined operations
                </p>
              </div>
            </div>
            <div>
              <Image src={previousWork} alt="previousWork" />
            </div>
          </div>
        </SwiperSlide>

        <div className="slider-controler">
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
}
