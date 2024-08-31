import HeadingTitle from "@/components/common/title/headingTitle";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import django from "../../../../../public/company/django.svg";
import flutter from "../../../../../public/company/flutter.svg";
import laravel from "../../../../../public/company/laravel.svg";
import mongoDB from "../../../../../public/company/mongoDB.svg";
import nextjs from "../../../../../public/company/nextjs.svg";
import reactjs from "../../../../../public/company/reactjs.svg";

export default function Technology() {
  return (
    <div className="bg-back" id="technologies">
      <div className="max-w-screen-xl mx-auto pt-10 pb-12 my-10">
        <h1 className="text-center font-medium text-xl text-black">NEXTGEN</h1>
        <HeadingTitle
          heading={<span className="text-black">Technology We used</span>}
        />
        <div className="">
          <Marquee pauseOnHover speed={60} gradient={false}>
            <div className="flex items-center px-3">
              <div className="bg-white px-5 py-10 w-40 h-32 flex items-center justify-center">
                <Image
                  src={reactjs}
                  alt="reactjs"
                  layout="intrinsic"
                  width={100}
                  height={60}
                />
              </div>
            </div>
            <div className="flex items-center px-3">
              <div className="bg-white px-5 py-10 w-40 h-32 flex items-center justify-center">
                <Image
                  src={nextjs}
                  alt="nextjs"
                  layout="intrinsic"
                  width={100}
                  height={60}
                />
              </div>
            </div>
            <div className="flex items-center px-3">
              <div className="bg-white px-5 py-10 w-40 h-32 flex items-center justify-center">
                <Image
                  src={laravel}
                  alt="laravel"
                  layout="intrinsic"
                  width={70}
                  height={60}
                />
              </div>
            </div>
            <div className="flex items-center px-3">
              <div className="bg-white px-5 py-10 w-40 h-32 flex items-center justify-center">
                <Image
                  src={mongoDB}
                  alt="mongoDB"
                  layout="intrinsic"
                  width={70}
                  height={60}
                />
              </div>
            </div>
            <div className="flex items-center px-3">
              <div className="bg-white px-5 py-10 w-40 h-32 flex items-center justify-center">
                <Image
                  src={django}
                  alt="django"
                  layout="intrinsic"
                  width={100}
                  height={60}
                />
              </div>
            </div>
            <div className="flex items-center px-3">
              <div className="bg-white px-5 py-10 w-40 h-32 flex items-center justify-center">
                <Image
                  src={flutter}
                  alt="flutter"
                  layout="intrinsic"
                  width={100}
                  height={60}
                />
              </div>
            </div>
            <div className="flex items-center px-3">
              <div className="bg-white px-5 py-10 w-40 h-32 flex items-center justify-center">
                <Image
                  src={laravel}
                  alt="laravel"
                  layout="intrinsic"
                  width={70}
                  height={60}
                />
              </div>
            </div>
          </Marquee>
        </div>
      </div>
    </div>
  );
}
