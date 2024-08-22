import Image from "next/image";
import web_services from "../../../../../public/services/web_dev 1.svg";

export default function WebDevelopmentService() {
  return (
    <div className="max-w-screen-xl mx-auto py-5 md:py-10 lg:py-20">
      <div className="px-2">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/2 lg:pr-8 mb-6 lg:mb-0 mt-10">
            <h3 className="text-4xl md:text-5xl lg:text-5xl font-semibold">
              Web Development <br />
              Service
            </h3>
            <p className="text-gray-700 mt-4">
              At Texon Limited, we understand that a great website is essential
              for any business looking to succeed online. That's why we offer a
              wide range of website development services to help businesses of
              all sizes create the perfect online presence.
            </p>
          </div>
          <div className="lg:w-1/2 flex justify-center items-center">
            <Image
              src={web_services}
              alt="web_services"
              width={400} // Adjust as needed
              height={250} // Adjust as needed
              className="object-contain bg-white rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
