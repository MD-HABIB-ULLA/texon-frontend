import Image from "next/image";
import productDevelopmentImage from "../../../../../public/images/product development.svg";
export default function UsPartner() {
  return (
    <div className="max-w-screen-xl mx-auto px-2 md:mt-5 mb-10 md:mb-20" id="contact">
      <div className="w-full  md:flex lg:flex items-center justify-between bg-primry text-white rounded-[20px]">
        <div className="space-y-4 lg:ms-8 ms-0 p-5 text-center md:text-start">
          <h1 className="font-bold lg:text-4xl md:text-4xl text-2xl">
            Want to Join Us as a <br /> Partner?
          </h1>
          <p>
            With the help of our partners, we can share our expertise and
            resources around the world. And thus we are expanding as the home of
            top IT professionals. So contact us to see how you can join our
            global family!
          </p>

          <button className="px-5 py-2 text-base rounded-lg raleway bg-white hover:bg-black hover:text-white text-primry cursor-pointer font-medium">
            Schedul a Call
          </button>
        </div>
        <div className="w-full">
          <Image
            src={productDevelopmentImage}
            className="pr-5 object-contain h-auto w-auto"
            alt="Product Development"
          />
        </div>
      </div>
    </div>
  );
}
