import HeadingTitle from "@/components/common/title/headingTitle";
import school from "../../../../../public/images/school.svg";
import vendor from "../../../../../public/images/vendor.svg";

import Image from "next/image";

export default function SoftwareProducts() {
  return (
    <div className="max-w-screen-xl mx-auto py-10 mt-10">
      <div className="px-2">
        <h1 className="text-center text-xl pb-5">Software Products</h1>
        <HeadingTitle
          heading={
            <>
              Ready-made software for <br /> your business
            </>
          }
          subHeading={
            <>
              With our remarkable services & solutions, we help to flourish your
              business. Our expertise in <br /> NextGen technologies, tools and
              services ensures that our software products are fully <br />{" "}
              tailored to meet your unique business needs.
            </>
          }
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-5 md:mt-10 lg:mt-10">
          <div className="rounded-lg">
            <Image src={school} alt="school" className="rounded-t-lg" />
            <div className="bg-white p-6 rounded-b-lg">
              <h1 className="font-bold text-xl md:text-2xl lg:text-2xl mb-4">
                Education Management Software
              </h1>
              <p className="font-medium mb-6">
                Texon EduCare is an all-in-one software product to manage
                schools and colleges. It has everything your institution will
                need.
              </p>
              <button className="py-2 px-5 rounded-lg raleway bg-primry hover:bg-blue text-white cursor-pointer font-medium">
                View Demo
              </button>
            </div>
          </div>
          <div className="rounded-lg">
            <Image src={vendor} alt="school" className="rounded-t-lg" />
            <div className="bg-white p-6 rounded-b-lg">
              <h1 className="font-bold text-xl md:text-2xl lg:text-2xl mb-4">
                Multi-vendor e-commerce Website
              </h1>
              <p className="font-medium mb-6">
                Texon EduCare is an all-in-one software product to manage
                schools and colleges. It has everything your institution will
                need.
              </p>
              <button className="py-2 px-5 rounded-lg raleway bg-primry hover:bg-blue text-white cursor-pointer font-medium">
                View Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
