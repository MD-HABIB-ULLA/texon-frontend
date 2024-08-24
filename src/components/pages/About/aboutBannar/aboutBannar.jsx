import Image from "next/image";
import about_bg from "../../../../../public/about/about_bg.svg";

export default function AboutBannar() {
  return (
    <div className="max-w-screen-xl mx-auto py-5 md:py-10 lg:py-20">
      <div className="px-2">
        <div className="flex flex-col lg:flex-row">
          <div className="space-y-7 lg:w-1/2 lg:pr-8">
            <h1 className="font-medium text-xl">About Us</h1>
            <h3 className="text-4xl md:text-5xl lg:text-5xl font-semibold">
              Helping <br /> Enterprises to bring  <br /> their Businesses
              into the Next Level
            </h3>
          </div>
          <div className="w-full lg:w-2/5 mt-8 lg:mt-0">
            <Image src={about_bg} alt="about_bg" layout="responsive" />
          </div>
        </div>
      </div>
    </div>
  );
}
