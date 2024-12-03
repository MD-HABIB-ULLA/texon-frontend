/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import clutch from "../../../../../public/company/clutch-logo-2D745B01F0-seeklogo.com 1.svg";
import google from "../../../../../public/company/Current-Google-logo-2015-2023-600x203 1.svg";
import trustpilot from "../../../../../public/company/trustpilot 1.svg";

export default function Bannar() {
  return (
    <div className="max-w-screen-xl mx-auto text-charleston">
      <div className="text-center space-y-2 mt-8 md:mt-14 lg:mt-28 md:space-y-8 px-2">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[80px] font-semibold">
          Empowering <br /> Entrepreneurs <br /> Through Technology
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-[20px]">
          We're geared up to empower you with cutting-edge solutions, from
          software development to <br /> cloud services, AI, and machine
          learning, with 100% project delivery success.
        </p>
        <div>
          <button className="px-5 py-2 text-base sm:text-lg md:text-xl rounded-lg raleway bg-primry hover:bg-blue text-white cursor-pointer font-medium mt-5 md:mt-0">
            <a>Get a Quotation</a>
          </button>
          <button className="px-5 py-2 text-base sm:text-lg md:text-xl rounded-lg raleway bg-[#252432] hover:bg-blue text-white cursor-pointer ms-1 mt-7 md:mt-0 md:ms-5 font-medium">
            View Portfolio
          </button>
        </div>

        <div className="py-7 md:py-14 px-1">
          <div className="flex flex-wrap justify-center md:justify-start gap-4 w-full md:w-1/2">
            <div className="flex-1 w-full sm:w-1/2 md:w-1/3 text-center md:text-left pt-1">
              <Image src={google} alt="google" className="mx-auto md:mx-0" />
              <div className="flex items-center justify-center md:justify-start mt-2">
                <p className="font-bold text-xl">4.8</p>
                <span className="text-yellow flex items-center ml-2">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </span>
              </div>
            </div>
            <div className="flex-1 w-full sm:w-1/2 md:w-1/3 text-center md:text-left pt-2">
              <Image src={clutch} alt="clutch" className="mx-auto md:mx-0" />
              <div className="flex items-center justify-center md:justify-start pt-3">
                <p className="font-bold text-xl">4.8</p>
                <span className="text-yellow flex items-center ml-2">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </span>
              </div>
            </div>
            <div className="flex-1 w-full sm:w-1/2 md:w-1/3 text-center md:text-left">
              <Image
                src={trustpilot}
                alt="trustpilot"
                className="mx-auto md:mx-0"
              />
              <div className="flex items-center justify-center md:justify-start mt-2">
                <p className="font-bold text-xl">4.8</p>
                <span className="text-yellow flex items-center ml-2">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
