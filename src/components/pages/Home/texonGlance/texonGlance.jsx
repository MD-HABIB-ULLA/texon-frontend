import Image from "next/image";
import { FaPlayCircle } from "react-icons/fa";
import texon_logo from "../../../../../public/about/Texon Logo.svg";

export default function TexonGlance() {
  return (
    <div className="max-w-screen-xl mx-auto px-2 py-8">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-8 md:space-y-0 md:space-x-10">
        <div className="space-y-6 md:max-w-md mt-5 md:mt-10 text-center md:text-start">
          <h1 className="text-4xl md:text-5xl font-semibold leading-snug">
            Texon <br /> at a Glance
          </h1>
          <p>
            You and We are on the same team. Our sole purpose is to help you
            thrive in your business with automated software/app. And to achieve
            that, we prioritize prompt communication.
          </p>
          <button className="py-2 px-5 rounded-lg raleway bg-primry hover:bg-blue text-white cursor-pointer font-medium">
            View Portfolio
          </button>
        </div>
        <div className="w-full md:w-auto bg-primry px-10 py-8 rounded-xl border-4 border-charleston shadow-lg">
          <div className="relative cursor-pointer max-w-full h-72 flex items-center justify-center">
            <Image
              src={texon_logo}
              alt="Texon Logo"
              className="w-full h-auto object-contain"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <FaPlayCircle className="w-16 h-16 md:w-24 md:h-24 text-white opacity-80 hover:opacity-100 transition-opacity duration-200" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
