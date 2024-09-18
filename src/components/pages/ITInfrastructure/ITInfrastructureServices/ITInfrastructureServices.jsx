import Image from "next/image";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { MdKeyboardArrowRight } from "react-icons/md"; // Import the icon
import itinfrastructure_services from "../../../../../public/services/itinfrastructure.svg";

const ITInfrastructureServices = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 my-12 md:mt-24 md:mb-24">
      <div className="text-center mb-12">
        <h1 className="text-lg md:text-2xl lg:text-2xl font-semibold leading-relaxed">
          Ignite your business with Texon IT Solutions, the catalyst for your IT
          infrastructure success. Our comprehensive services encompass
          networking, CCTV surveillance , cybersecurity, cloud solutions, and
          more.
        </h1>
      </div>
      <div className="flex flex-col md:flex-row items-center md:justify-between">
        <div className="flex-shrink-0 mb-8 md:mb-0 md:w-1/2 bg-white rounded">
          <Image
            src={itinfrastructure_services}
            alt="itinfrastructure"
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
              "Networking Solutions",
              "CCTV Surveillance",
              "24/7 monitoring and recording",
              "AI-Based Image Processing",
              "Chat bots and Virtual Assistants",
              "Cyber Security Solutions",
            ].map((service, index) => (
              <div key={index} className="flex items-start space-x-3">
                <IoMdCheckmarkCircleOutline className="text-xl text-primry" />
                <p className="text-base md:text-lg">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="py-12 md:py-20 lg:py-28 text-center">
        <div className="bg-primry text-white py-5 rounded">
          <h1 className="text-xl md:text-3xl lg:text-4xl font-medium">
            Everybody wants to be <span className="font-extrabold">Texon.</span>{" "}
            <br /> But no one can’t be!
          </h1>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* <!-- Card 1 --> */}
        <div className="bg-white p-5 rounded-lg border border-[#E5E7EB] transition-transform duration-300 hover:scale-105 hover:border-blue flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-semibold mb-4 text-charleston">
              Networking Solutions
            </h2>
            <p className="text-[#9CA3AF] text-base mb-4">
              Our team of seasoned experts specializes in crafting networking
              solutions that are customized to your unique needs, we provide:
              LAN design, implementation, and management WAN connectivity and
              optimization
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
            <h2 className="text-xl font-semibold mb-4 text-charleston">
              CCTV Surveillance
            </h2>
            <p className="text-[#9CA3AF] text-base mb-4">
              Texon Solutions specializes in deploying advanced CCTV
              surveillance systems that offer round-the-clock monitoring and
              recording capabilities,
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
            <h2 className="text-xl font-semibold mb-4 text-charleston">
              IT Consultancy, Support and Maintenance
            </h2>
            <p className="text-[#9CA3AF] text-base mb-4">
              Texon Limited goes beyond providing services, We are your trusted
              IT advisors, offering expert consultancy tailored to your business
              goal and challenges,
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
            <h2 className="text-xl font-semibold mb-4 text-charleston">
              Software and Hardware Product Supply
            </h2>
            <p className="text-[#9CA3AF] text-base mb-4">
              Texon Limited is your trusted source for high-quality software and
              hardware products, With strong partnerships with leading vendors,
              we offer an extensive range of industry-standard software
              solutions,
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
            <h2 className="text-xl font-semibold mb-4 text-charleston">
              Server and storage solutions
            </h2>
            <p className="text-[#9CA3AF] text-base mb-4">
              Networking equipment and devices supply End-user devices and
              peripherals supply Operating systems and software applications
              supply Licensing and software asset management services
            </p>
          </div>
          <button className="bg-primry text-white py-1 px-3 rounded transition-colors duration-300 hover:bg-blue flex items-center mt-auto w-fit">
            Read more
            <MdKeyboardArrowRight className="ml-1 mt-1" /> {/* Add the icon */}
          </button>
        </div>
        {/* <!-- Card 6 --> */}
        <div className="bg-white p-5 rounded-lg border border-[#E5E7EB] transition-transform duration-300 hover:scale-105 hover:border-blue flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-semibold mb-4 text-charleston">
              Data Management and Security
            </h2>
            <p className="text-[#9CA3AF] text-base mb-4">
              Effective data management is crucial for businesses to gain
              valuable insights and make informed decisions, Texon Limited
              offers comprehensive data management solutions,
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

export default ITInfrastructureServices;
