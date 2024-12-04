import Image from "next/image";
import { FaPlayCircle } from "react-icons/fa"; // If you're using play icons in hover, import FaPlayCircle here

// Assuming your image imports are handled already
import alpha from "../../../../../public/work/alpha.svg";
import btrip from "../../../../../public/work/btrip.svg";
import examtice from "../../../../../public/work/examtice.svg";
import megamall from "../../../../../public/work/megamall.svg";
import pozo from "../../../../../public/work/pozo.svg";
import softmax from "../../../../../public/work/softmax.svg";
import HeadingTitle from "@/components/common/title/headingTitle";

export default function OurPreviousWork() {
  const caseStudies = [
    {
      image: alpha,
      title: "Alpha Catering Admin Portal",
      description: "Software Development . UI/UX Design",
      hoverDescription:
        "Alpha Catering website design is sleek and intuitive, offering seamless navigation for administrators.",
    },
    {
      image: pozo,
      title: "Pozo.app Business Management Software",
      description: "Website Design & Development . UI/UX Design",
      hoverDescription:
        "Pozo.app design is sleek and intuitive, offering seamless navigation for business management.",
    },
    {
      image: megamall,
      title: "Megamall Ecommerce website",
      description: "Website Design & Development . UI/UX Design",
      hoverDescription:
        "Megamall website design is sleek and intuitive, offering seamless navigation for shoppers.",
    },
    {
      image: examtice,
      title: "Examtice App",
      description: "Mobile App Design & Development . UI/UX Design",
      hoverDescription:
        "Examtice app design is sleek and intuitive, offering seamless navigation for students.",
    },
    {
      image: btrip,
      title: "Btrip Travel Agency Website",
      description: "Website Design & Development . UI/UX Design",
      hoverDescription:
        "Btrip website design is sleek and intuitive, offering seamless navigation for travelers.",
    },
    {
      image: softmax,
      title: "Softmax Online School",
      description: "Mobile App Design & Development . UI/UX Design",
      hoverDescription:
        "Softmax app design is sleek and intuitive, offering seamless navigation for learners.",
    },
  ];

  return (
    <div className="bg-[#A8D0FE] pb-1 mb-10" id="casestudies">
      <div className="max-w-screen-xl mx-auto py-14 my-14 px-2">
        {/* text section  */}
        <div className="text-center">
          <p className="text-xl">Case Studies</p>
          <HeadingTitle  heading={"Our Previous Work"}/>
          <div className="flex items-center justify-center">
            <button className="px-5 py-2 text-base rounded-lg raleway bg-primry hover:bg-blue text-white cursor-pointer font-medium">
              View All
            </button>
          </div>
        </div>

        {/* Grid for Case Studies */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-5 mt-8">
          {caseStudies.map((study, index) => (
            <div key={index} className="text-center md:text-start">
              <div className="relative group overflow-hidden rounded-[30px]">
                <Image
                  src={study.image}
                  alt={study.title}
                  className="w-full h-auto  rounded-t-lg"
                />
                <div className="absolute h-full inset-x-0 bottom-0 bg-white p-4 rounded-lg shadow-lg opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ">
                  <div className="p-4 flex flex-col justify-between items-start h-full">
                    <h1 className="text-xl text-primry md:text-2xl font-semibold mb-2">
                      {study.title}
                    </h1>
                    <p className="text-base font-semibold">
                      {study.hoverDescription}
                    </p>
                    <button className="mt-4 text-blue-500 hover:underline">
                      Explore
                    </button>
                  </div>
                </div>
              </div>
              <div className="mt-2">
                <h1 className="text-xl md:text-2xl font-semibold mb-2">
                  {study.title}
                </h1>
                <p className="font-medium text-gray-600">{study.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
