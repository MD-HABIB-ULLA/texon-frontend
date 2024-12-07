import Image from "next/image";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { MdKeyboardArrowRight } from "react-icons/md"; // Import the icon
import business_software from "../../../../../public/services/business_software.png";

const ManagementSoftwareServices = () => {
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
        <div className="flex-shrink-0 mb-8 md:mb-0 md:w-1/2 bg-white rounded-[30px]">
          <Image
            src={business_software}
            alt="web_services"
            className="w-full max-w-md mx-auto object-cover h-64 sm:h-80 md:h-[400px] lg:h-[500px]"
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
              "Texon ERP Software",
              "Finance Management Software",
              "Export Import Business Management Software",
              "Desktop POS Software",
              "Pharmacy Management Software",
              "Fashion House Management Software",
              "Dealership Business Management Software",
              "Book Publisher’s Management Software",
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
              Ecommerce Website and App
            </h2>
            <p className="text-[#9CA3AF] text-base mb-4">
              Do you want to start your own online store without any hassle? Do
              you want to sell your products or services to millions of
              customers around the world? If yes,
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
              Educational Website and Accounting Software
            </h2>
            <p className="text-[#9CA3AF] text-base mb-4">
              Are you looking for a smart, easy and affordable way to manage
              your educational institution? Do you want to streamline your
              administrative tasks, improve your academic performance, and
              enhance your
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
              Texon ERP Software
            </h2>
            <p className="text-[#9CA3AF] text-base mb-4">
              Advanced ERP software is currently the power house of every
              business, Texon ERP software integrates all of the essential
              functions for running a business—e,g,, accounting, inventory and
              order management, human
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
              Texon POS Software
            </h2>
            <p className="text-[#9CA3AF] text-base mb-4">
              Point-of-sale (POS) software refers to the combination of computer
              hardware and software performing precise business transactions,
              Texon POS Software
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
              Pharmacy Management Software
            </h2>
            <p className="text-[#9CA3AF] text-base mb-4">
              Texon Limited’s Pharmacy Management Software ensures efficient
              business operation, a modern billing system, sales and purchase
              management, expense and revenue management, tracks inventory, and
              helps you grow your business digitally,
            </p>
          </div>
          <button className="bg-primry text-white py-1 px-3 rounded transition-colors duration-300 hover:bg-blue flex items-center mt-auto w-fit">
            Read more
            <MdKeyboardArrowRight className="ml-1 mt-1" /> {/* Add the icon */}
          </button>
        </div>
        <div className="bg-white p-5 rounded-lg border border-[#E5E7EB] transition-transform duration-300 hover:scale-105 hover:border-blue flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-semibold mb-4 text-charleston">
              Fashion and Footwear Management Software
            </h2>
            <p className="text-[#9CA3AF] text-base mb-4">
              To grow your fashion and footwear business, there is no substitute
              for using business management software, especially inventory,
              finance, expense, and sales management,
            </p>
          </div>
          <button className="bg-primry text-white py-1 px-3 rounded transition-colors duration-300 hover:bg-blue flex items-center mt-auto w-fit">
            Read more
            <MdKeyboardArrowRight className="ml-1 mt-1" /> {/* Add the icon */}
          </button>
        </div>
        <div className="bg-white p-5 rounded-lg border border-[#E5E7EB] transition-transform duration-300 hover:scale-105 hover:border-blue flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-semibold mb-4 text-charleston">
              Export Import Business Management Software
            </h2>
            <p className="text-[#9CA3AF] text-base mb-4">
              The import and export industry is the backbone of every developed
              and underdeveloped country, because the earnings from import and
              export are humongous and can transform an underdeveloped country
              into
            </p>
          </div>
          <button className="bg-primry text-white py-1 px-3 rounded transition-colors duration-300 hover:bg-blue flex items-center mt-auto w-fit">
            Read more
            <MdKeyboardArrowRight className="ml-1 mt-1" /> {/* Add the icon */}
          </button>
        </div>
        <div className="bg-white p-5 rounded-lg border border-[#E5E7EB] transition-transform duration-300 hover:scale-105 hover:border-blue flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-semibold mb-4 text-charleston">
              Book Publishers Management Software
            </h2>
            <p className="text-[#9CA3AF] text-base mb-4">
              Texon Limited delivers end-to-end publishing management software
              for trade, academic, and independent businesses, We help book
              publishers automate production workflow, optimize distribution
              processes and monetization, and acquire powerful reporting and
            </p>
          </div>
          <button className="bg-primry text-white py-1 px-3 rounded transition-colors duration-300 hover:bg-blue flex items-center mt-auto w-fit">
            Read more
            <MdKeyboardArrowRight className="ml-1 mt-1" /> {/* Add the icon */}
          </button>
        </div>
        <div className="bg-white p-5 rounded-lg border border-[#E5E7EB] transition-transform duration-300 hover:scale-105 hover:border-blue flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-semibold mb-4 text-charleston">
              Dealership Business Management Software
            </h2>
            <p className="text-[#9CA3AF] text-base mb-4">
              Texon Dealership Business Management Software is specifically made
              for retailers, wholesalers, and distributors by considering all
              the complexities of their businesses, There are varied types of
              useful reports, accounting, stock
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

export default ManagementSoftwareServices;
