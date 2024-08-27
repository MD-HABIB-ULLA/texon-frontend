import HeadingTitle from "@/components/common/title/headingTitle";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import alpha from "../../../../../public/company/alpha.svg";
import hb_aviation from "../../../../../public/company/hb_aviation.svg";
import mawts from "../../../../../public/company/mawts.svg";
import optimal from "../../../../../public/company/optimal.svg";
import relax_bazar from "../../../../../public/company/relax_bazar.svg";
import shukhimart from "../../../../../public/company/shukhimart.svg";

export default function FeaturedClients() {
  return (
    <div className="bg-back">
      <div className="max-w-screen-xl mx-auto px-4 pb-10 md:pb-20 pt-10 mt-10">
        <HeadingTitle
          heading={"Featured Clients"}
          subHeading={
            "Our reputation branches across different industries and far beyond the borders"
          }
        />
        <div className="mt-5 md:mt-10">
          <Marquee pauseOnHover speed={60} gradient={false}>
            <div className="flex items-center px-3">
              <div className="bg-white px-5 py-10 w-40 h-32 flex items-center justify-center">
                <Image
                  src={shukhimart}
                  alt="shukhimart"
                  layout="intrinsic"
                  width={100}
                  height={60}
                />
              </div>
            </div>
            <div className="flex items-center px-3">
              <div className="bg-white px-5 py-10 w-40 h-32 flex items-center justify-center">
                <Image
                  src={optimal}
                  alt="optimal"
                  layout="intrinsic"
                  width={100}
                  height={60}
                />
              </div>
            </div>
            <div className="flex items-center px-3">
              <div className="bg-white px-5 py-10 w-40 h-32 flex items-center justify-center">
                <Image
                  src={alpha}
                  alt="alpha"
                  layout="intrinsic"
                  width={70}
                  height={60}
                />
              </div>
            </div>
            <div className="flex items-center px-3">
              <div className="bg-white px-5 py-10 w-40 h-32 flex items-center justify-center">
                <Image
                  src={mawts}
                  alt="mawts"
                  layout="intrinsic"
                  width={70}
                  height={60}
                />
              </div>
            </div>
            <div className="flex items-center px-3">
              <div className="bg-white px-5 py-10 w-40 h-32 flex items-center justify-center">
                <Image
                  src={relax_bazar}
                  alt="relax_bazar"
                  layout="intrinsic"
                  width={100}
                  height={60}
                />
              </div>
            </div>
            <div className="flex items-center px-3">
              <div className="bg-white px-5 py-10 w-40 h-32 flex items-center justify-center">
                <Image
                  src={hb_aviation}
                  alt="hb_aviation"
                  layout="intrinsic"
                  width={100}
                  height={60}
                />
              </div>
            </div>
            <div className="flex items-center px-3">
              <div className="bg-white px-5 py-10 w-40 h-32 flex items-center justify-center">
                <Image
                  src={alpha}
                  alt="alpha"
                  layout="intrinsic"
                  width={70}
                  height={60}
                />
              </div>
            </div>
          </Marquee>
        </div>
        <div className="mt-10">
          <Marquee pauseOnHover speed={60} gradient={false} direction="right">
            <div className="flex items-center px-3">
              <div className="bg-white px-5 py-10 w-40 h-32 flex items-center justify-center">
                <Image
                  src={shukhimart}
                  alt="shukhimart"
                  layout="intrinsic"
                  width={100}
                  height={60}
                />
              </div>
            </div>
            <div className="flex items-center px-3">
              <div className="bg-white px-5 py-10 w-40 h-32 flex items-center justify-center">
                <Image
                  src={optimal}
                  alt="optimal"
                  layout="intrinsic"
                  width={100}
                  height={60}
                />
              </div>
            </div>
            <div className="flex items-center px-3">
              <div className="bg-white px-5 py-10 w-40 h-32 flex items-center justify-center">
                <Image
                  src={alpha}
                  alt="alpha"
                  layout="intrinsic"
                  width={70}
                  height={60}
                />
              </div>
            </div>
            <div className="flex items-center px-3">
              <div className="bg-white px-5 py-10 w-40 h-32 flex items-center justify-center">
                <Image
                  src={mawts}
                  alt="mawts"
                  layout="intrinsic"
                  width={70}
                  height={60}
                />
              </div>
            </div>
            <div className="flex items-center px-3">
              <div className="bg-white px-5 py-10 w-40 h-32 flex items-center justify-center">
                <Image
                  src={relax_bazar}
                  alt="relax_bazar"
                  layout="intrinsic"
                  width={100}
                  height={60}
                />
              </div>
            </div>
            <div className="flex items-center px-3">
              <div className="bg-white px-5 py-10 w-40 h-32 flex items-center justify-center">
                <Image
                  src={hb_aviation}
                  alt="hb_aviation"
                  layout="intrinsic"
                  width={100}
                  height={60}
                />
              </div>
            </div>
            <div className="flex items-center px-3">
              <div className="bg-white px-5 py-10 w-40 h-32 flex items-center justify-center">
                <Image
                  src={alpha}
                  alt="alpha"
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
