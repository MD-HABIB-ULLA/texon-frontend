import Image from "next/image";
import { FaPlayCircle } from "react-icons/fa";
import texon_logo from "../../../../../public/about/Texon Logo.svg";
export default function TexonGlance() {
  return (
    <div className="max-w-screen-xl mx-auto px-4 md:px-8 lg:px-12">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-6 md:space-y-0 md:space-x-10">
        <div className="space-y-6 md:max-w-md">
          <h1 className="text-3xl md:text-4xl font-semibold">
            Texon <br /> at a Glance
          </h1>
          <p className="text-gray-600">
            You and We are on the same team. Our sole purpose is to help you
            thrive in your business with automated software/app. And to achieve
            that, we prioritize prompt communication.
          </p>
          <button className="py-2 px-5 rounded-lg bg-primary hover:bg-blue-600 text-white cursor-pointer font-medium transition-all duration-300">
            View Portfolio
          </button>
        </div>
        <div className="w-full md:w-auto bg-primry px-20 rounded-xl border-4">
          <div className="relative cursor-pointer max-w-screen-xl h-[350px] flex items-center justify-center">
            <Image
              src={texon_logo}
              alt="Texon Logo"
              className="w-full h-auto object-contain"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <FaPlayCircle className="w-24 h-24 text-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
