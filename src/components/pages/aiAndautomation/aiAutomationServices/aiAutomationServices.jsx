import Image from "next/image";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { MdKeyboardArrowRight } from "react-icons/md"; // Import the icon
import ai_and_automation from "../../../../../public/services/ai_and_automation.webp";

const AiAutomationServices = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 my-12 md:mt-24 md:mb-24">
      <div className="text-center mb-12">
        <h1 className="text-lg md:text-2xl lg:text-2xl font-semibold leading-relaxed">
          At Texon Limited, we offer cutting-edge AI and automation solutions
          that help businesses improve their operations, streamline their
          processes, and stay ahead of the competition. Our team of experts
          combines the latest technologies and development practices to create
          custom AI and automation solutions that exceed our clients'
          expectations.
        </h1>
      </div>
      <div className="flex flex-col md:flex-row items-center md:justify-between">
        <div className="flex-shrink-0 mb-8 md:mb-0 md:w-1/2 bg-white rounded-[30px]">
          <Image
            src={ai_and_automation}
            alt="ai_and_automation"
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
              Machine Learning Solutions
            </h2>
            <p className="text-[#9CA3AF] text-base mb-4">
              Our team of machine learning experts can help you develop and
              deploy custom machine learning models that fit your business
              needs, We have hands-on experience with TensorFlow, Keras, and
              PyTorch,
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
              Robotic Process Automation (RPA)
            </h2>
            <p className="text-[#9CA3AF] text-base mb-4">
              We can help you automate repetitive and time-consuming tasks using
              RPA, Our RPA solutions can help you reduce errors, improve
              accuracy, and save time and money,
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
              Natural Language Processing (NLP)
            </h2>
            <p className="text-[#9CA3AF] text-base mb-4">
              We have the capacity to aid you with developing NLP solutions that
              can help you automate your customer service, analyze customer
              feedback, and extract insights from unstructured data, We are
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
              Image Recognition
            </h2>
            <p className="text-[#9CA3AF] text-base mb-4">
              Our team's image and video processing libraries, such as OpenCV
              and TensorFlow's Object Detection API, are used to develop
              computer vision solutions that can help you identify objects,
              faces
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
              Chatbots and Virtual Assistants
            </h2>
            <p className="text-[#9CA3AF] text-base mb-4">
              We specialize in developing chatbots and virtual assistants that
              can help you improve your customer service, automate your sales
              processes, and reduce your customer support costs, With our
              expertise in
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
              Predictive Analytics
            </h2>
            <p className="text-[#9CA3AF] text-base mb-4">
              Our services are available to help you use predictive analytics to
              analyze data and make informed decisions about your business, Our
              solutions can help you forecast trends, identify patterns
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

export default AiAutomationServices;
