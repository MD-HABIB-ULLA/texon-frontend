import Image from "next/image";
import productDevelopmentImage from "../../../../../public/images/product development.svg";
export default function UsPartner() {
  return (
    <div className="max-w-screen-xl mx-auto px-2 mt-5 mb-20">
      <div className="w-full  md:flex lg:flex items-center justify-between bg-primry text-white rounded-lg">
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

          <button className="py-2 px-5 rounded-lg raleway bg-white hover:bg-black hover:text-white text-primry cursor-pointer font-medium">
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
