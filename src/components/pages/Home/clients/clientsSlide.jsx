"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./styles.css";

// Import required modules
import Image from "next/image";
import { ImQuotesLeft } from "react-icons/im";
import { FreeMode, Pagination } from "swiper/modules";
import mehedi from "../../../../../public/images/Mehedi.svg";
import Sulayman from "../../../../../public/images/Sulayman.svg";
import Young from "../../../../../public/images/Young.svg";

export default function ClientsSlide() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },

          768: {
            slidesPerView: 2,
          },

          1024: {
            slidesPerView: 3,
          },
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="slide-content bg-white p-5 rounded w-full">
            <div className="w-20 h-20 mx-auto">
              <Image
                src={Sulayman}
                className="rounded-full"
                alt="Sulayman"
                layout="responsive"
              />
            </div>
            <h2 className="slide-title">Sulayman Mohammad</h2>
            <h3>Managing Director, Birajman Foundation.</h3>
            <ImQuotesLeft className="text-primary my-2" />
            <p className="slide-paragraph">
              Texon Limited has many clients across the country and they are
              already working globally. I must say that Texon limited has a
              strong management and qualified resource. They developed a desktop
              POS software for our fashion brand bworldy fashion. We are still
              using the system very well.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content bg-white p-5 rounded w-full">
            <div className="w-20 h-20 mx-auto">
              <Image
                src={mehedi}
                className="rounded-full"
                alt="Mehedi"
                layout="responsive"
              />
            </div>
            <h2 className="slide-title">Mehedi Shamim</h2>
            <h3>Head of Brand, Marketing, and Strategy at Apex Property</h3>
            <ImQuotesLeft className="text-primary my-2" />
            <p className="slide-paragraph">
              The Texon Limited team did an excellent job delivering a custom
              software solution that fit our specific needs. Their technical
              expertise and attention to detail made the project a success. We
              were impressed with their ability to deliver the project on time
              and within budget.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content bg-white p-5 rounded w-full">
            <div className="w-20 h-20 mx-auto">
              <Image
                src={Young}
                className="rounded-full"
                alt="Young Hun"
                layout="responsive"
              />
            </div>
            <h2 className="slide-title">Mr. Young Hun</h2>
            <h3>CTO at Sicunet(Korea)</h3>
            <ImQuotesLeft className="text-primary my-2" />
            <p className="slide-paragraph">
              The software developed by Texon has transformed the way our
              business operates. The team was extremely professional and
              delivered a high-quality solution that exceeded our expectations.
              We highly recommend them to anyone looking for a reliable and
              talented software development partner.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content bg-white p-5 rounded w-full">
            <div className="w-20 h-20 mx-auto">
              <Image
                src={Sulayman}
                className="rounded-full"
                alt="Sulayman"
                layout="responsive"
              />
            </div>
            <h2 className="slide-title">Sulayman Mohammad</h2>
            <h3>Managing Director, Birajman Foundation.</h3>
            <ImQuotesLeft className="text-primary my-2" />
            <p className="slide-paragraph">
              Texon Limited has many clients across the country and they are
              already working globally. I must say that Texon limited has a
              strong management and qualified resource. They developed a desktop
              POS software for our fashion brand bworldy fashion. We are still
              using the system very well.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
