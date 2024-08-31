// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import gest1 from "../../../../../public/images/Mehedi.svg";
import "./styles.css";

// import required modules
import Image from "next/image";
import { Pagination } from "swiper/modules";
export const ClientsSlide = () => {
  return (
    <div className="">
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide>
          <div className="py-8">
            <div className="flex justify-center">
              <h1 className="lg:text-3xl md:text-2xl text-xl text-center border-b my-5 py-5 inline font-primary">
                What Our Clients Say About Us
              </h1>
            </div>
            <div className="max-w-4xl mx-auto">
              <p>
                The Texon Limited team did an excellent job delivering a custom
                software solution that fit our specific needs. Their technical
                expertise and attention to detail made the project a success. We
                were impressed with their ability to deliver the project on time
                and within budget.
              </p>
            </div>
            <div className="w-20 mx-auto py-5">
              <Image src={gest1} alt="gest1" />
            </div>
            <div>
              <p className="py-5">
                Mehedi Shamim -{" "}
                <span className="font-medium">Apex Property</span>
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" py-8">
            <div className="flex justify-center">
              <h1 className="lg:text-3xl md:text-2xl text-xl text-center border-b my-5 py-5 inline font-primary">
                Reviews
              </h1>
            </div>
            <div className="max-w-4xl mx-auto">
              <p>
                The Texon Limited team did an excellent job delivering a custom
                software solution that fit our specific needs. Their technical
                expertise and attention to detail made the project a success. We
                were impressed with their ability to deliver the project on time
                and within budget.
              </p>
            </div>
            <div className="w-20 mx-auto py-5">
              <Image src={gest1} alt="gest1" />
            </div>
            <div>
              <p className="py-5">
                Mehedi Shamim -{" "}
                <span className="font-medium">Apex Property</span>
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ClientsSlide;
