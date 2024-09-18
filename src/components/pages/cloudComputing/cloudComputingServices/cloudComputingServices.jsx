import Image from "next/image";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { MdKeyboardArrowRight } from "react-icons/md";
import aws_services from "../../../../../public/services/aws.png";

const CloudComputingServices = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 my-12 md:mt-24 md:mb-24">
      <div className="text-center mb-12">
        <h1 className="text-lg md:text-2xl lg:text-2xl font-semibold leading-relaxed">
          At Texon Limited, we understand the importance of cloud computing in
          today's fast-paced digital world. That's why we specialize in cloud
          application development and AWS services to help businesses take
          advantage of the cloud's benefits, such as scalability, reliability,
          and cost-efficiency.
        </h1>
      </div>
      <div className="flex flex-col md:flex-row items-center md:justify-between">
        <div className="flex-shrink-0 mb-8 md:mb-0 md:w-1/2 bg-white rounded">
          <Image
            src={aws_services}
            alt="aws_services"
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
              "Machine Learning Solutions",
              "Robotic Process Automation (RPA)",
              "Natural Language Processing (NLP)",
              "Image Recognition",
              "Chatbots and Virtual Assistants",
              "Predictive Analytics",
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
              Cloud Application Development
            </h2>
            <p className="text-[#9CA3AF] text-base mb-4">
              Our team of experienced developers specializes in cloud
              application development using a range of cloud platforms,
              including AWS, Azure, and Google Cloud, Whether you need a
              cloud-native application built from
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
              AWS Services
            </h2>
            <p className="text-[#9CA3AF] text-base mb-4">
              We have AWS consulting experts with years of experience providing
              AWS services to our clients, We offer a range of AWS services,
              including cloud infrastructure management, data storage,
              application deployment,
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

export default CloudComputingServices;
