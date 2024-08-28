// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import client from "../../../../../public/images/client.svg";
import "./styles.css";

// Import required modules
import Image from "next/image";
import { FreeMode, Pagination } from "swiper/modules";

export default function ClientsSlide() {
  return (
    <>
      <Swiper
        slidesPerView={1.33} // Show slides with approximately 75% width
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="flex justify-center">
            <Image src={client} alt="client" width={100} height={5} />
            <div className="ml-4 text-left space-y-3 py-5">
              <h4 className="text-sm text-[#525252]">May 8, 2020</h4>
              <h1 className="text-3xl font-bold">Mehedi Shamim</h1>
              <h3 className="text-base font-medium">
                Head of Brand, Marketing, and Strategy <br /> at Apex Property
              </h3>
              <p className="">
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
          <div className="flex justify-center">
            <Image src={client} alt="client" width={100} height={5} />
            <div className="ml-4 text-left space-y-3 py-5">
              <h4 className="text-sm text-[#525252]">May 8, 2020</h4>
              <h1 className="text-3xl font-bold">Mehedi Shamim</h1>
              <h3 className="text-base font-medium">
                Head of Brand, Marketing, and Strategy <br /> at Apex Property
              </h3>
              <p className="">
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
          <div className="flex justify-center">
            <Image src={client} alt="client" width={100} height={5} />
            <div className="ml-4 text-left space-y-3 py-5">
              <h4 className="text-sm text-[#525252]">May 8, 2020</h4>
              <h1 className="text-3xl font-bold">Mehedi Shamim</h1>
              <h3 className="text-base font-medium">
                Head of Brand, Marketing, and Strategy <br /> at Apex Property
              </h3>
              <p className="">
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
    </>
  );
}
