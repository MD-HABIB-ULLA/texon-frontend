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
export const ClientsSlide = () => {
  return (
    <div className="bg-white rounded-xl">
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide>
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
            <div className="flex-shrink-0">
              <Image
                className=" shadow-md w-full"
                src={clients_image}
                alt="Client Image"
              />
            </div>
            <div className="text-start space-y-4">
              <h3 className="text-sm text-gray-500">May 8, 2020</h3>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
                Mehedi Shamim
              </h1>
              <h4 className="text-lg md:text-xl text-gray-600">
                Head of Brand, Marketing, and Strategy at{" "}
                <span className="font-medium">Apex Property</span>
              </h4>
              <p className="mt-2 text-gray-700">
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
