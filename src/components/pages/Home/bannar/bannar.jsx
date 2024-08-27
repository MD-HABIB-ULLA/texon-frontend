/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import clutch from "../../../../../public/company/clutch-logo-2D745B01F0-seeklogo.com 1.svg";
import google from "../../../../../public/company/Current-Google-logo-2015-2023-600x203 1.svg";
import trustpilot from "../../../../../public/company/trustpilot 1.svg";

export default function Bannar() {
  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="text-center mt-5 md:10 lg:mt-16 space-y-5 px-2">
        <h1 className="text-4xl md:text-5xl lg:text-5xl font-semibold text-black">
          Empowering <br /> Entrepreneurs <br /> Through Technology
        </h1>
        <p>
          We're geared up to empower you with cutting-edge solutions, from
          software development to <br /> cloud services, AI, and machine
          learning, with 100% project delivery success.
        </p>
        <div>
          <button className="py-2 px-5 rounded-lg raleway bg-primry hover:bg-blue text-white cursor-pointer font-medium">
            Let’s Talk
          </button>
          <button className="py-2 px-5 rounded-lg raleway bg-[#252432] hover:bg-blue text-white cursor-pointer ms-5 font-medium">
            View Portfolio
          </button>
        </div>
        <div className="flex items-center justify-center md:justify-start lg:justify-start pt-5 lg:mt-0 md:mt-0 pb-5 md:pb-10 lg:pb-20">
          <div>
            <Image src={google} alt="google"></Image>
            <div className="flex items-center">
              <p className="font-bold text-xl">4.8</p>
              <span className="text-yellow flex items-center ms-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </span>
            </div>
          </div>
          <div className="ms-10">
            <Image className="" src={clutch} alt="clutch"></Image>
            <div className="flex items-center">
              <p className="font-bold text-xl">4.8</p>
              <span className="text-yellow flex items-center ms-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </span>
            </div>
          </div>
          <div className="ms-10">
            <Image src={trustpilot} alt="trustpilot"></Image>
            <div className="flex items-center">
              <p className="font-bold text-xl">4.8</p>
              <span className="text-yellow flex items-center ms-2">
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
  );
}
