import Image from "next/image";
import about_bg from "../../../../../public/about/about_bg.svg";
import HeadingTitle from "@/components/common/title/headingTitle";

export default function AboutBannar() {
  return (
    <div className="max-w-screen-xl mx-auto py-5 md:py-10 lg:py-20 text-charleston">
      <div className="px-2">
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="space-y-7 lg:w-1/2 lg:pr-8">
            <HeadingTitle
              smallHeading={<div className="md:text-left">About Us</div>}
              heading={
                <h3 className="md:text-left">
                  Helping Enterprises to bring their Businesses into the Next
                  Level
                </h3>
              }
            />
          </div>
          <div className="w-full lg:w-2/5 mt-8 lg:mt-0">
            <Image src={about_bg} alt="about_bg" layout="responsive" />
          </div>
        </div>
      </div>
    </div>
  );
}
