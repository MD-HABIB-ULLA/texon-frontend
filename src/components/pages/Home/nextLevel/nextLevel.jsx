import HeadingTitle from "@/components/common/title/headingTitle";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import ecommerceImg from "../../../../../public/images/e-commerce.svg";
import inventoryImg from "../../../../../public/images/work.svg";
import internetImg from "../../../../../public/images/internet.svg";

export default function nextLevel() {
  return (
    <div className="max-w-screen-xl mx-auto py-10">
      <div className="px-2">
        <div>
          <HeadingTitle
            heading={
              <>
                Texon provides you Next <br /> Level technology.
              </>
            }
            subHeading={
              <>
                We provide custom Website, Mobile App and Management Software
                development services <br /> for wide range of industry verticals
              </>
            }
          />
        </div>
        <div className="flex items-center justify-center">
          <button className="py-2 px-5 rounded-lg raleway bg-primry hover:bg-blue text-white cursor-pointer font-medium">
            Contact Us
          </button>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="flex flex-col items-start bg-white p-3 rounded-xl">
              <div className="flex items-center justify-between w-full py-3">
                <h1 className="font-bold text-2xl">
                  Ecommerce Website Development
                </h1>
                <FaArrowRight className="font-bold text-2xl" />
              </div>
              <Image className="rounded-lg" src={ecommerceImg} alt="commerce" />
            </div>

            <div className="flex flex-col items-start bg-white p-4 rounded-xl">
              <div className="flex items-center justify-between w-full py-3">
                <h1 className="font-bold text-2xl">
                Custom Software Development
                </h1>
                <FaArrowRight className="font-bold text-2xl" />
              </div>
              <Image className="rounded-lg" src={internetImg} alt="commerce" />
            </div>

            {/* Card 3 */}
            <div className="flex flex-col items-start bg-white p-3 rounded-xl">
              <div className="flex items-center justify-between w-full py-3">
                <h1 className="font-bold text-2xl">
                  Inventory Management Software
                </h1>
                <FaArrowRight className="font-bold text-2xl" />
              </div>
              <Image className="rounded-lg" src={inventoryImg} alt="commerce" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
