import { MdOutlineKeyboardArrowRight } from "react-icons/md";

export default function CustomDevelopment() {
  return (
    <div className="">
      <div className="max-w-screen-xl mx-auto px-2 pb-20 md:grid-cols-11 grid gap-5">
        <div className="md:col-span-6  bg-white p-4  rounded-[20px]">
          {/* First card with 66% width */}

          <div className="space-y-5 col-span-7">
            <p className="bg-black font-medium px-4 py-1 text-2xl rounded-full text-white inline-block">
              1
            </p>
            <h1 className="lg:text-5xl md:text3xl text-2xl font-bold">Custom Website Development</h1>
            <p className="pb-4 lg:text-2xl md:text-xl text-base">
              We create custom websites that are designed to reflect your brand
              and appeal to your target audience.
            </p>
          </div>
          <button className="mt-auto py-2 px-3 rounded-[20px] d-lg raleway bg-primry hover:bg-blue text-white cursor-pointer font-medium flex items-center w-fit">
            Read More
            <MdOutlineKeyboardArrowRight className="text-2xl pt-1" />
          </button>
        </div>
        {/* Second card with 40% width */}
        <div className="md:col-span-5 bg-white p-4 rounded-[20px] flex flex-col">
          <div className="space-y-5">
            <p className="bg-black font-medium px-4 py-1 text-2xl rounded-full text-white inline-block">
              2
            </p>
            <h1 className="lg:text-5xl md:text3xl text-2xl font-bold">
              E-commerce Website Development
            </h1>
            <p className="pb-4 lg:text-2xl md:text-xl text-base">
              We develop e-commerce websites that are easy to use, secure, and
              optimized for conversion.
            </p>
          </div>
          <button className="mt-auto py-2 px-3 rounded-[20px] d-lg raleway bg-primry hover:bg-blue text-white cursor-pointer font-medium flex items-center w-fit">
            Read More
            <MdOutlineKeyboardArrowRight className="text-2xl pt-1" />
          </button>
        </div>

        {/* Third card */}
        <div className="bg-white md:col-span-5 p-4 rounded-[20px] flex flex-col">
          <div className="space-y-5">
            <p className="bg-black font-medium px-4 py-1 text-2xl rounded-full text-white inline-block">
              3
            </p>
            <h1 className="lg:text-5xl md:text-3xl text-2xl font-bold">
              Content Management Systems (CMS)
            </h1>
            <p className="pb-4 lg:text-2xl md:text-xl text-base">
              We build websites that are powered by a CMS, making it easy for
              you to update your site and content.
            </p>
          </div>
          <button className="mt-auto py-2 px-3 rounded-[20px] d-lg raleway bg-primry hover:bg-blue text-white cursor-pointer font-medium flex items-center w-fit">
            Read More
            <MdOutlineKeyboardArrowRight className="text-2xl pt-1" />
          </button>
        </div>
        {/* Fourth card */}
        <div className="bg-white p-4 md:col-span-3 rounded-[20px] flex flex-col">
          <div className="space-y-5">
            <p className="bg-black font-medium px-4 py-1 text-2xl rounded-full text-white inline-block">
              4
            </p>
            <h1 className="lg:text-5xl md:text3xl text-2xl font-bold">UI/UX Design</h1>
            <p className="pb-4 lg:text-2xl md:text-xl text-base">
              Our UI/UX design services include creating wireframes, prototypes,
              and visual designs for your website.
            </p>
          </div>
          <button className="mt-auto py-2 px-3 rounded-[20px] d-lg raleway bg-primry hover:bg-blue text-white cursor-pointer font-medium flex items-center w-fit">
            Read More
            <MdOutlineKeyboardArrowRight className="text-2xl pt-1" />
          </button>
        </div>
        {/* Fifth card */}
        <div className="bg-white p-4 md:col-span-3 rounded-[20px] flex flex-col">
          <div className="space-y-5">
            <p className="bg-black font-medium px-4 py-1 text-2xl rounded-full text-white inline-block">
              5
            </p>
            <h1 className="lg:text-5xl md:text3xl text-2xl font-bold">Website Maintenance</h1>
            <p className="pb-4 lg:text-2xl md:text-xl text-base">
              We offer ongoing website maintenance services to keep your site
              running smoothly and securely.
            </p>
          </div>
          <button className="mt-auto py-2 px-3 rounded-[20px] d-lg raleway bg-primry hover:bg-blue text-white cursor-pointer font-medium flex items-center w-fit">
            Read More
            <MdOutlineKeyboardArrowRight className="text-2xl pt-1" />
          </button>
        </div>
      </div>
    </div>
  );
}
