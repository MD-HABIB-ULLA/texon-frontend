import HeadingTitle from "@/components/common/title/headingTitle";
import Image from "next/image";
import medal from "../../../../../public/icon/medal.svg";
import mouse from "../../../../../public/icon/mouse.svg";

export default function DevelopmentServices() {
  return (
    <div className="max-w-screen-xl mx-auto py-10">
      <div className="px-2">
        <div className="pb-3">
          <h1 className="text-center text-xl">Why You Choose Us</h1>
          <HeadingTitle
            heading={
              <>
                Premium Quality in Software <br /> Development Services
              </>
            }
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* First Card */}
          <div className="relative flex flex-col items-center rounded-lg bg-white w-full p-8 group">
            <div className="flex flex-col items-center">
              <Image src={medal} alt="medal" className="w-10 mb-4" />
              <p className="font-bold text-xl mb-4 text-left">
                Customer <br /> Satisfaction
              </p>
              <Image src={mouse} alt="mouse" className="w-12 mt-4" />
            </div>
            {/* Hidden paragraph and button */}
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-white p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-lg text-center mb-4">
                We're dedicated to excellent customer service, support, and
                maintenance for our clients.
              </p>
              <button className="py-2 px-5 rounded-lg raleway bg-primry hover:bg-blue text-white cursor-pointer font-medium">
                View Demo
              </button>
            </div>
          </div>

          {/* Second Card */}
          <div className="relative flex flex-col items-center rounded-lg bg-white w-full p-8 group">
            <div className="flex flex-col items-center">
              <Image src={medal} alt="medal" className="w-10 mb-4" />
              <p className="font-bold text-xl mb-4 text-left ml-5">
                Customer <br /> Satisfaction
              </p>
              <Image src={mouse} alt="mouse" className="w-12 mt-4" />
            </div>
            {/* Hidden paragraph and button */}
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-white p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-lg text-center mb-4">
                We're dedicated to excellent customer service, support, and
                maintenance for our clients.
              </p>
              <button className="py-2 px-5 rounded-lg raleway bg-primry hover:bg-blue text-white cursor-pointer font-medium">
                View Demo
              </button>
            </div>
          </div>

          {/* Third Card */}
          <div className="relative flex flex-col items-center rounded-lg bg-white w-full p-8 group">
            <div className="flex flex-col items-center">
              <Image src={medal} alt="medal" className="w-10 mb-4" />
              <p className="font-bold text-xl mb-4 text-left ml-5">
                Customer <br /> Satisfaction
              </p>
              <Image src={mouse} alt="mouse" className="w-12 mt-4" />
            </div>
            {/* Hidden paragraph and button */}
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-white p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-lg text-center mb-4">
                We're dedicated to excellent customer service, support, and
                maintenance for our clients.
              </p>
              <button className="py-2 px-5 rounded-lg raleway bg-primry hover:bg-blue text-white cursor-pointer font-medium">
                View Demo
              </button>
            </div>
          </div>

          {/* Fourth Card */}
          <div className="relative flex flex-col items-center rounded-lg bg-white w-full p-8 group">
            <div className="flex flex-col items-center">
              <Image src={medal} alt="medal" className="w-10 mb-4" />
              <p className="font-bold text-xl mb-4 text-left ml-5">
                Customer <br /> Satisfaction
              </p>
              <Image src={mouse} alt="mouse" className="w-12 mt-4" />
            </div>
            {/* Hidden paragraph and button */}
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-white p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-lg text-center mb-4">
                We're dedicated to excellent customer service, support, and
                maintenance for our clients.
              </p>
              <button className="py-2 px-5 rounded-lg raleway bg-primry hover:bg-blue text-white cursor-pointer font-medium">
                View Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
