import Image from "next/image";
import alpha from "../../../../../public/work/alpha.svg";
import btrip from "../../../../../public/work/btrip.svg";
import examtice from "../../../../../public/work/examtice.svg";
import megamall from "../../../../../public/work/megamall.svg";
import pozo from "../../../../../public/work/pozo.svg";
import softmax from "../../../../../public/work/softmax.svg";

export default function OurPreviousWork() {
  return (
    <div className="bg-[#A8D0FE]" id="casestudies">
      <div className="max-w-screen-xl mx-auto py-14 my-14 px-2">
        {/* text section  */}
        <div className="text-center">
          <p className="text-xl">Case Studies</p>
          <h1 className="text-3xl lg:text-3xl font-semibold lg:font-bold pt-3 pb-4">
            Our Previous Work
          </h1>
          <div className="flex items-center justify-center">
            <button className="px-5 py-2 text-base rounded-lg raleway bg-primry hover:bg-blue text-white cursor-pointer font-medium">
              View All
            </button>
          </div>
        </div>

        {/* grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-5 mt-8">
          <div className="text-center md:text-start">
            <Image
              src={alpha}
              alt="alpha"
              className="w-full h-auto mb-4 rounded-t-lg"
            />
            <div>
              <h1 className="text-xl md:text-2xl font-semibold mb-2">
                Alpha Catering Admin Portal
              </h1>
              <p className="font-medium text-gray-600">
                Software Development . UI/UX Design
              </p>
            </div>
          </div>
          <div className="text-center md:text-start">
            <Image
              src={pozo}
              alt="pozo"
              className="w-full h-auto mb-4 rounded-t-lg"
            />
            <div>
              <h1 className="text-xl md:text-2xl font-semibold mb-2">
                Pozo.app Business Management Software
              </h1>
              <p className="font-medium text-gray-600">
                Website Design & Development . UI/UX Design
              </p>
            </div>
          </div>
          <div className="text-center md:text-start">
            <Image
              src={megamall}
              alt="megamall"
              className="w-full h-auto mb-4 rounded-t-lg"
            />
            <div>
              <h1 className="text-xl md:text-2xl font-semibold mb-2">
                Megamall Ecommerce website
              </h1>
              <p className="font-medium text-gray-600">
                Website Design & Development . UI/UX Design
              </p>
            </div>
          </div>
          <div className="text-center md:text-start">
            <Image
              src={examtice}
              alt="examtice"
              className="w-full h-auto mb-4 rounded-t-lg"
            />
            <div>
              <h1 className="text-xl md:text-2xl font-semibold mb-2">
                Examtice App
              </h1>
              <p className="font-medium text-gray-600">
                Mobile App Design & Development . UI/UX Design
              </p>
            </div>
          </div>
          <div className="text-center md:text-start">
            <Image
              src={btrip}
              alt="btrip"
              className="w-full h-auto mb-4 rounded-t-lg"
            />
            <div>
              <h1 className="text-xl md:text-2xl font-semibold mb-2">
                Btrip Travel Agency Website
              </h1>
              <p className="font-medium text-gray-600">
                Website Design & Development . UI/UX Design
              </p>
            </div>
          </div>
          <div className="text-center md:text-start">
            <Image
              src={softmax}
              alt="softmax"
              className="w-full h-auto mb-4 rounded-t-lg"
            />
            <div>
              <h1 className="text-xl md:text-2xl font-semibold mb-2">
                Softmax Online School
              </h1>
              <p className="font-medium text-gray-600">
                Mobile App Design & Development . UI/UX Design
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
