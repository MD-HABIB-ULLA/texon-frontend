import Image from "next/image";
import { GoDotFill } from "react-icons/go";
import mobileImage from "../../../../../public/images/mobile-image.svg";

export default function MobileApps() {
  return (
    <div className="max-w-screen-xl mx-auto py-10 bg-gray-100">
      <div className="px-4 md:px-8 flex flex-col-reverse md:flex-row items-center w-full mx-auto justify-between">
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-start mb-6 md:mb-0">
          <div className="w-full max-w-xs md:max-w-md lg:max-w-lg">
            <Image
              src={mobileImage}
              alt="Mobile Apps Development"
              layout="responsive"
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-start space-y-5 md:ps-5">
          <h3 className="font-bold text-xl md:text-2xl lg:text-3xl">
            Fast Growing Company
          </h3>
          <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl">
            Mobile Apps Development
          </h1>
          <p className="text-base md:text-lg lg:text-xl">
            We have a proven track record of offering high-impact, result-driven
            and engaging mobile application development services.
          </p>
          <div className="space-y-2">
            <p className="flex items-center">
              <GoDotFill />{" "}
              <span className="ms-3">Native Android App Development</span>
            </p>
            <p className="flex items-center">
              <GoDotFill />{" "}
              <span className="ms-3">Native iOS App Development</span>
            </p>
            <p className="flex items-center">
              <GoDotFill />{" "}
              <span className="ms-3">Cross-Platform App Development</span>
            </p>
            <p className="flex items-center">
              <GoDotFill />{" "}
              <span className="ms-3">Hybride App Development</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
