// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import clients_image from "../../../../../public/images/client.svg";
import "./styles.css";

// import required modules
import Image from "next/image";
import { Pagination } from "swiper/modules";
import { FaPlayCircle } from "react-icons/fa";
export const ClientsSlide = () => {
  return (
    <div className="bg-white rounded-xl text-charleston">
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide>
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
            <div className="relative  flex-shrink-0 py-2 md:py-0">
              <Image
                className=" shadow-md w-full bg-cover rounded-xl md:rounded-none"
                src={clients_image}
                alt="Client Image"
              />
              <FaPlayCircle className="absolute inset-0 m-auto  text-6xl text-white opacity-80" />
            </div>
            <div className="text-start space-y-4 px-2 md:px-2 py-5 md:py-0">
              <h3 className="text-sm text-gray-500">May 8, 2020</h3>
              <h1 className="text-2xl md:text-3xl font-bold">Mehedi Shamim</h1>
              <h4 className="text-lg md:text-xl">
                Head of Brand, Marketing, and Strategy at{" "}
                <span className="font-medium">Apex Property</span>
              </h4>
              <p className="mt-2">
                The Texon Limited team did an excellent job delivering a custom
                software solution that fit our specific needs. Their technical
                expertise and attention to detail made the project a success. We
                were impressed with their ability to deliver the project on time
                and within budget.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
            <div className="relative  flex-shrink-0 py-2 md:py-0">
              <Image
                className=" shadow-md w-full bg-cover rounded-xl md:rounded-none"
                src={clients_image}
                alt="Client Image"
              />
              <FaPlayCircle className="absolute inset-0 m-auto  text-6xl text-white opacity-80" />
            </div>
            <div className="text-start space-y-4 px-2 md:px-2 py-5 md:py-0">
              <h3 className="text-sm text-gray-500">May 8, 2020</h3>
              <h1 className="text-2xl md:text-3xl font-bold">Mehedi Shamim</h1>
              <h4 className="text-lg md:text-xl">
                Head of Brand, Marketing, and Strategy at{" "}
                <span className="font-medium">Apex Property</span>
              </h4>
              <p className="mt-2">
                The Texon Limited team did an excellent job delivering a custom
                software solution that fit our specific needs. Their technical
                expertise and attention to detail made the project a success. We
                were impressed with their ability to deliver the project on time
                and within budget.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ClientsSlide;
