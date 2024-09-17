import Image from "next/image";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import web_services from "../../../../../public/services/web_dev 1.svg";

const WebServices = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 my-12 md:mt-20 md:mb-24">
      <div className="text-center mb-12">
        <h1 className="text-lg md:text-2xl lg:text-2xl font-semibold leading-relaxed">
          At Texon Limited, we understand that a great website is essential for
          any business looking to succeed online. That's why we offer a wide
          range of website development services to help businesses of all sizes
          create the perfect online presence.
        </h1>
      </div>

      <div className="flex flex-col md:flex-row items-center md:justify-between">
        <div className="flex-shrink-0 mb-8 md:mb-0 md:w-1/2 bg-white rounded">
          <Image
            src={web_services}
            alt="web_services"
            className="w-full h-auto max-w-md mx-auto"
          />
        </div>
        <div className="md:w-1/2 md:pl-8">
          <h2 className="text-2xl lg:text-3xl font-medium mb-4">
            Our Services Include:
          </h2>
          <p className="text-lg mb-6">
            We have provided over 50+ custom-based service solutions with 100%
            customer satisfaction.
          </p>
          <div className="space-y-5">
            {[
              "Multivendor Ecommerce eco systems Development",
              "Single Vendor Ecommerce Development",
              "B2C or B2B Website Development",
              "Business Management Software",
              "Cloud service",
              "UI/UX Design",
              "API Integrations & Web consultancy",
            ].map((service, index) => (
              <div key={index} className="flex items-start space-x-3">
                <IoMdCheckmarkCircleOutline className="text-xl text-primry" />
                <p className="text-base md:text-lg">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebServices;
