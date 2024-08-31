import { MdOutlineKeyboardArrowRight } from "react-icons/md";

export default function CustomDevelopment() {
  return (
    <div className="">
      <div className="max-w-screen-xl mx-auto px-2 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-5">
          {/* First card with 66% width */}
          <div className="md:col-span-3 bg-white p-4 rounded-md flex flex-col">
            <div className="space-y-5">
              <p className="bg-black font-medium px-4 py-1 text-2xl rounded-full text-white inline-block">
                1
              </p>
              <h1 className="text-3xl font-medium">
                Custom Website Development
              </h1>
              <p className="pb-4">
                We create custom websites that are designed to reflect your
                brand and appeal to your target audience.
              </p>
            </div>
            <button className="mt-auto py-2 px-3 rounded-lg raleway bg-primry hover:bg-blue text-white cursor-pointer font-medium flex items-center w-fit">
              Read More
              <MdOutlineKeyboardArrowRight className="text-2xl pt-1" />
            </button>
          </div>
          {/* Second card with 40% width */}
          <div className="md:col-span-2 bg-white p-4 rounded-md flex flex-col">
            <div className="space-y-5">
              <p className="bg-black font-medium px-4 py-1 text-2xl rounded-full text-white inline-block">
                2
              </p>
              <h1 className="text-3xl font-medium">
                E-commerce Website Development
              </h1>
              <p className="pb-4">
                We develop e-commerce websites that are easy to use, secure, and
                optimized for conversion.
              </p>
            </div>
            <button className="mt-auto py-2 px-3 rounded-lg raleway bg-primry hover:bg-blue text-white cursor-pointer font-medium flex items-center w-fit">
              Read More
              <MdOutlineKeyboardArrowRight className="text-2xl pt-1" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
          {/* Third card */}
          <div className="bg-white p-4 rounded-md flex flex-col">
            <div className="space-y-5">
              <p className="bg-black font-medium px-4 py-1 text-2xl rounded-full text-white inline-block">
                3
              </p>
              <h1 className="text-3xl font-medium">
                Content Management Systems (CMS)
              </h1>
              <p className="pb-4">
                We build websites that are powered by a CMS, making it easy for
                you to update your site and content.
              </p>
            </div>
            <button className="mt-auto py-2 px-3 rounded-lg raleway bg-primry hover:bg-blue text-white cursor-pointer font-medium flex items-center w-fit">
              Read More
              <MdOutlineKeyboardArrowRight className="text-2xl pt-1" />
            </button>
          </div>
          {/* Fourth card */}
          <div className="bg-white p-4 rounded-md flex flex-col">
            <div className="space-y-5">
              <p className="bg-black font-medium px-4 py-1 text-2xl rounded-full text-white inline-block">
                4
              </p>
              <h1 className="text-3xl font-medium">UI/UX Design</h1>
              <p className="pb-4">
                Our UI/UX design services include creating wireframes,
                prototypes, and visual designs for your website.
              </p>
            </div>
            <button className="mt-auto py-2 px-3 rounded-lg raleway bg-primry hover:bg-blue text-white cursor-pointer font-medium flex items-center w-fit">
              Read More
              <MdOutlineKeyboardArrowRight className="text-2xl pt-1" />
            </button>
          </div>
          {/* Fifth card */}
          <div className="bg-white p-4 rounded-md flex flex-col">
            <div className="space-y-5">
              <p className="bg-black font-medium px-4 py-1 text-2xl rounded-full text-white inline-block">
                5
              </p>
              <h1 className="text-3xl font-medium">Website Maintenance</h1>
              <p className="pb-4">
                We offer ongoing website maintenance services to keep your site
                running smoothly and securely.
              </p>
            </div>
            <button className="mt-auto py-2 px-3 rounded-lg raleway bg-primry hover:bg-blue text-white cursor-pointer font-medium flex items-center w-fit">
              Read More
              <MdOutlineKeyboardArrowRight className="text-2xl pt-1" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
