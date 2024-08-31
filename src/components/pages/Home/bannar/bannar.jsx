/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import clutch from "../../../../../public/company/clutch-logo-2D745B01F0-seeklogo.com 1.svg";
import google from "../../../../../public/company/Current-Google-logo-2015-2023-600x203 1.svg";
import whatsapp from "../../../../../public/company/logos_whatsapp-icon.svg";
import trustpilot from "../../../../../public/company/trustpilot 1.svg";

export default function Bannar() {
  return (
    <div className="max-w-screen-xl mx-auto text-charleston">
      <div className="text-center mt-8 md:mt-14 lg:mt-28 space-y-8 px-2">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold">
          Empowering <br /> Entrepreneurs <br /> Through Technology
        </h1>
        <p className="text-base">
          We're geared up to empower you with cutting-edge solutions, from
          software development to <br /> cloud services, AI, and machine
          learning, with 100% project delivery success.
        </p>
        <div>
          <button className="px-5 py-2 text-base rounded-lg raleway bg-primry hover:bg-blue text-white cursor-pointer font-medium">
            <a>Get a Quotation</a>
          </button>
          <button className="px-5 py-2 text-base rounded-lg raleway bg-[#252432] hover:bg-blue text-white cursor-pointer ms-1 mt-10 md:mt-0 md:ms-5 font-medium">
            View Portfolio
          </button>
        </div>
        <div className="flex flex-col md:flex-row justify-between py-10 md:py-14">
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-start space-y-5 md:space-y-0 md:space-x-10">
            <div className="text-center md:text-left pt-1">
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
            <div className="text-center md:text-left pt-2">
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
            <div className="text-center md:text-left">
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
          <div className="mt-5 md:mt-0">
            <Image
              src={whatsapp}
              alt="whatsapp"
              className="mx-auto md:mx-0 w-14"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
