import Image from "next/image";
import { GoDotFill } from "react-icons/go";
import webImage from "../../../../../public/images/web-image.svg";

export default function CustomWebSection() {
  return (
    <div className="max-w-screen-xl mx-auto py-10 bg-gray-100">
      <div className="px-2 flex flex-col md:flex-row items-center w-full mx-auto justify-between">
        <div className="w-full md:w-2/4 flex flex-col justify-center items-start space-y-5">
          <h3 className="font-bold text-xl">Fast Growing Company</h3>
          <h1 className="font-bold lg:text-4xl text-2xl">
            Dynamic Website Development
          </h1>
          <p>
            With a custom web application, you will be able to transform your
            business idea to reality. We have provided over 50+ custom based web
            application solutions with 100% customer satisfaction.
          </p>
          <div className="space-y-2">
            <p className="flex items-center">
              <GoDotFill />{" "}
              <span className="ms-3">Multivendor Ecommerce eco systems</span>
            </p>
            <p className="flex items-center">
              <GoDotFill />{" "}
              <span className="ms-3">Single Vendor Ecommerce Development</span>
            </p>
            <p className="flex items-center">
              <GoDotFill />{" "}
              <span className="ms-3">B2C or B2B Website Development</span>
            </p>
            <p className="flex items-center">
              <GoDotFill />{" "}
              <span className="ms-3">AWS and Other Cloud service</span>
            </p>
            <p className="flex items-center">
              <GoDotFill />{" "}
              <span className="ms-3">API Integrations & Web consultancy</span>
            </p>
          </div>
        </div>
        <div className="w-full md:w-2/4 flex justify-center items-center">
          <div className="w-full lg:w-3/4">
            <Image src={webImage} alt="webImage" />
          </div>
        </div>
      </div>
    </div>
  );
}
