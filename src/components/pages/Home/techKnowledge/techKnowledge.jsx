import HeadingTitle from "@/components/common/title/headingTitle";
import Image from "next/image";
import chessmovecontent from "../../../../../public/images/Chess move content.svg";
import customvscms from "../../../../../public/images/customvscms.svg";
import edutech from "../../../../../public/images/edutech.svg";

export default function TechKnowledge() {
  return (
    <div className="max-w-screen-xl mx-auto py-5 md:pb-10">
      <div className="px-2">
        <div>
          <h1 className="text-center text-xl">Blogs</h1>
          <HeadingTitle
            heading={<>Tech Knowledge</>}
            subHeading={
              <>
                We provide custom development services across industries to
                ensure your
              </>
            }
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-2">
          <div>
            <Image src={customvscms} alt="customvscms"></Image>
            <div className="space-y-4">
              <button className="py-1 px-4 rounded-full raleway bg-[#777777] text-white cursor-pointer font-medium mt-4">
                Business
              </button>
              <p className="font-bold text-xl md:text-2xl lg:text-2xl">
                Custom vs CMS Development Which is Better for Long Term Business
              </p>
              <p>
                <span className="text-[#252432]">June 11, 2024</span>
              </p>
            </div>
          </div>

          <div>
            <Image src={edutech} alt="edutech"></Image>
            <div className="space-y-4">
              <button className="py-1 px-4 rounded-full raleway bg-[#777777] text-white cursor-pointer font-medium mt-4">
                Technology
              </button>
              <p className="font-bold text-xl md:text-2xl lg:text-2xl">
                Transforming Education with Cutting Edge EdTech Solutions
              </p>
              <p>
                <span className="text-[#252432]">June 11, 2024</span>
              </p>
            </div>
          </div>

          <div>
            <Image src={chessmovecontent} alt="chessmovecontent"></Image>
            <div className="space-y-4">
              <button className="py-1 px-4 rounded-full raleway bg-[#777777] text-white cursor-pointer font-medium mt-4">
                Technology
              </button>
              <p className="font-bold text-xl md:text-2xl lg:text-2xl">
                Seeking a breakthrough in your current situation
              </p>
              <p>
                <span className="text-[#252432]">June 11, 2024</span>
              </p>
            </div>
          </div>
        </div>
        <div className="flex md:justify-center lg:justify-center mt-5 md:mt-0">
          <button className="px-5 py-2 text-base rounded-lg raleway bg-primry hover:bg-blue text-white cursor-pointer font-medium">
            View All vlogs
          </button>
        </div>
      </div>
    </div>
  );
}
