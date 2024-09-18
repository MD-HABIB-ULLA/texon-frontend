import Image from "next/image";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { MdKeyboardArrowRight } from "react-icons/md"; // Import the icon
import web_services from "../../../../../public/services/web_dev 1.svg";

const WebServices = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 my-12 md:mt-24 md:mb-24">
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
      <div className="pt-20 pb-16 text-center">
        <div className="bg-primry text-white py-5 rounded">
          <h1 className="text-xl md:text-3xl lg:text-4xl font-medium">
            Everybody wants to be{" "}
            <span className="font-extrabold">Texon.</span> <br /> But no one
            can’t be!
          </h1>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* <!-- Card 1 --> */}
        <div className="bg-white p-5 rounded-lg border border-[#E5E7EB] transition-transform duration-300 hover:scale-105 hover:border-blue flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-semibold mb-4 text-[#6B7280]">
              Custom Website Development
            </h2>
            <p className="text-[#9CA3AF] text-base mb-4">
              We create custom websites that are designed to reflect your brand
              and appeal to your target audience.
            </p>
          </div>
          <button className="bg-primry text-white py-1 px-3 rounded transition-colors duration-300 hover:bg-blue flex items-center mt-auto w-fit">
            Read more
            <MdKeyboardArrowRight className="ml-1 mt-1" /> {/* Add the icon */}
          </button>
        </div>

        {/* <!-- Card 2 --> */}
        <div className="bg-white p-5 rounded-lg border border-[#E5E7EB] transition-transform duration-300 hover:scale-105 hover:border-blue flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-semibold mb-4 text-[#6B7280]">
              E-commerce Website Development
            </h2>
            <p className="text-[#9CA3AF] text-base mb-4">
              We develop e-commerce websites that are easy to use, secure, and
              optimized for conversion.
            </p>
          </div>
          <button className="bg-primry text-white py-1 px-3 rounded transition-colors duration-300 hover:bg-blue flex items-center mt-auto w-fit">
            Read more
            <MdKeyboardArrowRight className="ml-1 mt-1" /> {/* Add the icon */}
          </button>
        </div>

        {/* <!-- Card 3 --> */}
        <div className="bg-white p-5 rounded-lg border border-[#E5E7EB] transition-transform duration-300 hover:scale-105 hover:border-blue flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-semibold mb-4 text-[#6B7280]">
              Content Management Systems (CMS)
            </h2>
            <p className="text-[#9CA3AF] text-base mb-4">
              We build websites that are powered by a CMS, making it easy for
              you to update your site and content.
            </p>
          </div>
          <button className="bg-primry text-white py-1 px-3 rounded transition-colors duration-300 hover:bg-blue flex items-center mt-auto w-fit">
            Read more
            <MdKeyboardArrowRight className="ml-1 mt-1" /> {/* Add the icon */}
          </button>
        </div>

        {/* <!-- Card 4 --> */}
        <div className="bg-white p-5 rounded-lg border border-[#E5E7EB] transition-transform duration-300 hover:scale-105 hover:border-blue flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-semibold mb-4 text-[#6B7280]">
              UI/UX Design
            </h2>
            <p className="text-[#9CA3AF] text-base mb-4">
              Our UI/UX design services include creating wireframes, prototypes,
              and visual designs for your website.
            </p>
          </div>
          <button className="bg-primry text-white py-1 px-3 rounded transition-colors duration-300 hover:bg-blue flex items-center mt-auto w-fit">
            Read more
            <MdKeyboardArrowRight className="ml-1 mt-1" /> {/* Add the icon */}
          </button>
        </div>

        {/* <!-- Card 5 --> */}
        <div className="bg-white p-5 rounded-lg border border-[#E5E7EB] transition-transform duration-300 hover:scale-105 hover:border-blue flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-semibold mb-4 text-[#6B7280]">
              Website Maintenance
            </h2>
            <p className="text-[#9CA3AF] text-base mb-4">
              We offer ongoing website maintenance services to keep your site
              running smoothly and securely.
            </p>
          </div>
          <button className="bg-primry text-white py-1 px-3 rounded transition-colors duration-300 hover:bg-blue flex items-center mt-auto w-fit">
            Read more
            <MdKeyboardArrowRight className="ml-1 mt-1" /> {/* Add the icon */}
          </button>
        </div>
      </div>
    </div>
  );
};

export default WebServices;
