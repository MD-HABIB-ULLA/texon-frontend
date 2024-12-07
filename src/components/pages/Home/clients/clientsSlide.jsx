// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";

// import clients_image from "../../../../../public/images/client.svg";
// import "./styles.css";

// // import required modules
// import Image from "next/image";
// import { Pagination } from "swiper/modules";
// import { FaPlayCircle } from "react-icons/fa";
// export const ClientsSlide = () => {
//   return (
//     <div className="bg-white rounded-xl text-charleston">
//       <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
//         <SwiperSlide>
//           <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
//             <div className="relative  flex-shrink-0 py-2 md:py-0">
//               <Image
//                 className=" shadow-md w-full bg-cover rounded-xl md:rounded-none"
//                 src={clients_image}
//                 alt="Client Image"
//               />
//               <FaPlayCircle className="absolute inset-0 m-auto  text-6xl text-white opacity-80" />
//             </div>
//             <div className="text-start space-y-4 px-2 md:px-2 py-5 md:py-0">
//               <h3 className="text-sm text-gray-500">May 8, 2020</h3>
//               <h1 className="text-2xl md:text-3xl font-bold">Mehedi Shamim</h1>
//               <h4 className="text-lg md:text-xl">
//                 Head of Brand, Marketing, and Strategy at{" "}
//                 <span className="font-medium">Apex Property</span>
//               </h4>
//               <p className="mt-2">
//                 The Texon Limited team did an excellent job delivering a custom
//                 software solution that fit our specific needs. Their technical
//                 expertise and attention to detail made the project a success. We
//                 were impressed with their ability to deliver the project on time
//                 and within budget.
//               </p>
//             </div>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//           <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
//             <div className="relative  flex-shrink-0 py-2 md:py-0">
//               <Image
//                 className=" shadow-md w-full bg-cover rounded-xl md:rounded-none"
//                 src={clients_image}
//                 alt="Client Image"
//               />
//               <FaPlayCircle className="absolute inset-0 m-auto  text-6xl text-white opacity-80" />
//             </div>
//             <div className="text-start space-y-4 px-2 md:px-2 py-5 md:py-0">
//               <h3 className="text-sm text-gray-500">May 8, 2020</h3>
//               <h1 className="text-2xl md:text-3xl font-bold">Mehedi Shamim</h1>
//               <h4 className="text-lg md:text-xl">
//                 Head of Brand, Marketing, and Strategy at{" "}
//                 <span className="font-medium">Apex Property</span>
//               </h4>
//               <p className="mt-2">
//                 The Texon Limited team did an excellent job delivering a custom
//                 software solution that fit our specific needs. Their technical
//                 expertise and attention to detail made the project a success. We
//                 were impressed with their ability to deliver the project on time
//                 and within budget.
//               </p>
//             </div>
//           </div>
//         </SwiperSlide>
//       </Swiper>
//     </div>
//   );
// };

// export default ClientsSlide;
"use client";

import "@splidejs/react-splide/css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import clients_image from "../../../../../public/images/client.svg";
import Image from "next/image";
import { FaPlayCircle } from "react-icons/fa";

const images = [
  clients_image,
  clients_image,
  clients_image,
  clients_image,
  clients_image,
];

export function ClientsSlide() {
  return (
    <div className="w-full mx-auto ">
      <Splide
        options={{
          type: "loop",
          perPage: 1,
          focus: "center",
          padding: { left: "10%", right: "10%" },
          gap: "1rem",
          arrows: true,
          pagination: true, // Enable dots for pagination
          breakpoints: {
            640: {
              padding: { left: "5%", right: "5%" },
            },
          },
        }}
        aria-label="Image Slider"
        renderControls={(splide) => (
          <>
            <div className="splide__arrows flex justify-center mt-4">
              <button
                className="splide__arrow splide__arrow--prev absolute  bg-gray-800 text-white px-4 py-2 rounded-full mx-2 hover:bg-gray-600"
                onClick={() => splide.go("<")}
              >
                Prev
              </button>
              <button
                className="splide__arrow splide__arrow--next bg-gray-800 text-white px-4 py-2 rounded-full mx-2 hover:bg-gray-600"
                onClick={() => splide.go(">")}
              >
                Next
              </button>
            </div>
            <div className="splide__pagination mt-4 flex justify-center">
              {Array.from({ length: splide.length }).map((_, i) => (
                <button
                  key={i}
                  className={`splide__pagination__dot w-3 h-3 mx-1 rounded-full ${
                    splide.index === i ? "bg-black" : "bg-gray hover:bg-black"
                  }`}
                  onClick={() => splide.go(i)}
                />
              ))}
            </div>
          </>
        )}
      >
        {images.map((image, index) => (
          <SplideSlide key={index}>
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8 md:p-0 p-2 bg-white rounded-3xl overflow-hidden">
              <div className="relative flex-shrink-0 w-full md:w-auto md:py-0">
                <Image
                  className="shadow-md w-full h-56 md:h-auto bg-cover rounded-2xl md:rounded-none object-cover object-center"
                  src={image}
                  alt="Client Image"
                />
                <FaPlayCircle className="absolute inset-0 m-auto text-6xl text-white opacity-80" />
              </div>
              <div className="text-start space-y-4 px-2 md:px-2 py-5 md:py-0">
                <h3 className="text-sm text-gray-500">May 8, 2020</h3>
                <h1 className="text-2xl md:text-3xl font-bold">
                  Mehedi Shamim
                </h1>
                <h4 className="text-lg md:text-xl">
                  Head of Brand, Marketing, and Strategy at{" "}
                  <span className="font-medium">Apex Property</span>
                </h4>
                <p className="mt-2">
                  The Texon Limited team did an excellent job delivering a
                  custom software solution that fit our specific needs. Their
                  technical expertise and attention to detail made the project a
                  success. We were impressed with their ability to deliver the
                  project on time and within budget.
                </p>
              </div>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
}
