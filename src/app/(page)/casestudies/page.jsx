"use client"

import HeadingTitle from "@/components/common/title/headingTitle";
import { useRouter } from "next/navigation";

import { FaEye } from "react-icons/fa";

export default function CaseStudies() {
  const router = useRouter()
  return (
    <div className="min-h-screen max-w-screen-xl m-auto mt-10">
      <HeadingTitle
        heading={<span className="text-center">Our Previous Work</span>}
        smallHeading={<span className="text-center">Case Studies</span>}
        subHeading={
          <span className="text-center">
            we also enhance your recognition and originality with versatile
            ideas for every sphere of the digital world!
          </span>
        }
      />

      <div className=" my-10 px-5 m-auto w-full">
        <div className="grid grid-cols-d md:grid-cols-2 lg:grid-cols-3 gap-5 m-auto w-full">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
            <div
onClick={()=>router.push("/casestudies/10")}            
              key={i}
              className="group cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300 w-full overflow-hidden rounded-[20px]  bg-white"
            >
              <div className="relative h-[200px] overflow-hidden">
                <img
                  src={
                    "https://i.ibb.co/mRhgss9/b92d6a206512051-66cdd9095be5f.png"
                  }
                  alt={"this is a placeholder"}
                  className="absolute top-0 w-full h-auto transition-transform duration-500 ease-in-out group-hover:translate-y-[-80%]"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2 text-gray-800">
                  Awesome Project
                </h2>
                <p className="text-gray-600 mb-4">
                  A cutting-edge web application showcasing the latest .....
                </p>
                <div className="flex flex-wrap gap-2">
                  {["React", "Node.js", "Tailwind CSS", "TypeScript"].map(
                    (tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-primry/10 text-primry rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
