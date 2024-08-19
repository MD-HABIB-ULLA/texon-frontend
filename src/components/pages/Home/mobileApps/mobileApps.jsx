import Image from "next/image";
import { GoDotFill } from "react-icons/go";
import mobileImage from "../../../../../public/images/mobile-image.svg";

export default function MobileApps() {
  return (
    <div className="max-w-screen-xl mx-auto py-10 bg-gray-100">
      <div className="px-2 flex flex-col-reverse md:flex-row items-center w-full mx-auto justify-between">
        <div className="w-full md:w-2/4 flex justify-start items-center">
          <div className="w-full lg:w-3/4">
            <Image src={mobileImage} alt="mobileImage" />
          </div>
        </div>
        <div className="w-full md:w-2/4 flex flex-col justify-center items-start space-y-5 md:ps-5">
          <h3 className="font-bold text-xl">Fast Growing Company</h3>
          <h1 className="font-bold lg:text-4xl text-2xl">
            Mobile Apps Development
          </h1>
          <p>
            we have a proven track record of offering high-impact, result driven
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
