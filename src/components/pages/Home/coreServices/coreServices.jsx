import HeadingTitle from "@/components/common/title/headingTitle";
import Image from "next/image";
import automation from "../../../../../public/services/automation.svg";
import aws from "../../../../../public/services/aws.svg";
import business from "../../../../../public/services/business.svg";
import itinfrastructure from "../../../../../public/services/itinfrastructure.svg";
import mobile from "../../../../../public/services/mobile.svg";
import web from "../../../../../public/services/web.svg";

export default function CoreServices() {
  return (
    <div className="max-w-screen-xl mx-auto py-10">
      <div className="px-2">
        <h1 className="text-center text-xl pb-5">What We do</h1>
        <div className="pb-28">
          <HeadingTitle
            heading={<>Core Services and Competencies</>}
            subHeading={
              <>
                We transform your ideas into accomplished technology solutions.{" "}
                <br />
                Our Team of professional developers has in-depth knowledge of
                all technologies and trends.
              </>
            }
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* 1 Card */}
          <div className="relative flex flex-col items-center rounded-lg bg-white max-w-lg w-full group">
            <div className="flex flex-col items-center p-5">
              <Image
                src={web}
                alt="web"
                className="rounded-t-lg group-hover:opacity-0 transition-opacity duration-300 w-48 -mt-16"
              />
              <div className="w-full text-left">
                <p className="font-bold text-xl mt-4 p-2 rounded-lg">
                  Web Design & Development
                </p>
              </div>
            </div>

            {/* Hidden paragraph and button */}
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-white p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
              <p className="text-lg mb-4">
                With a custom web application, you will be able to fully
                implement your business idea and own a user-friendly website.
              </p>
              <div className="flex justify-start w-full">
                <button className="py-2 px-5 rounded-lg raleway bg-primry hover:bg-blue text-white cursor-pointer font-medium">
                  Read More
                </button>
              </div>
            </div>
          </div>
          {/* 2 Card */}
          <div className="relative flex flex-col items-center rounded-lg bg-white max-w-lg w-full group mt-20 md:mt-0 lg:mt-0">
            <div className="flex flex-col items-center p-5">
              <Image
                src={mobile}
                alt="Phone"
                className="rounded-t-lg group-hover:opacity-0 transition-opacity duration-300 w-48 -mt-16"
              />
              <div className="w-full text-left">
                <p className="font-bold text-xl mt-4 p-2 rounded-lg">
                  Mobile Apps Development
                </p>
              </div>
            </div>

            {/* Hidden paragraph and button */}
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-white p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
              <p className="text-lg mb-4">
                With a custom web application, you will be able to fully
                implement your business idea and own a user-friendly website.
              </p>
              <div className="flex justify-start w-full">
                <button className="py-2 px-5 rounded-lg raleway bg-primry hover:bg-blue text-white cursor-pointer font-medium">
                  Read More
                </button>
              </div>
            </div>
          </div>
          {/* 3 Card */}
          <div className="relative flex flex-col items-center rounded-lg bg-white max-w-lg w-full group mt-20 md:mt-0 lg:mt-0">
            <div className="flex flex-col items-center p-5">
              <Image
                src={business}
                alt="business"
                className="rounded-t-lg group-hover:opacity-0 transition-opacity duration-300 w-48 -mt-16"
              />
              <div className="w-full text-left">
                <p className="font-bold text-xl mt-4 p-2 rounded-lg">
                  Business Management Software
                </p>
              </div>
            </div>

            {/* Hidden paragraph and button */}
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-white p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
              <p className="text-lg mb-4">
                With a custom web application, you will be able to fully
                implement your business idea and own a user-friendly website.
              </p>
              <div className="flex justify-start w-full">
                <button className="py-2 px-5 rounded-lg raleway bg-primry hover:bg-blue text-white cursor-pointer font-medium">
                  Read More
                </button>
              </div>
            </div>
          </div>
          {/* 4 Card */}
          <div className="relative flex flex-col items-center rounded-lg bg-white max-w-lg w-full group mt-10">
            <div className="flex flex-col items-center p-5">
              <Image
                src={automation}
                alt="automation"
                className="rounded-t-lg group-hover:opacity-0 transition-opacity duration-300 w-48 -mt-16"
              />
              <div className="w-full text-left">
                <p className="font-bold text-xl mt-4 p-2 rounded-lg">
                  Ai & Automation
                </p>
              </div>
            </div>

            {/* Hidden paragraph and button */}
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-white p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
              <p className="text-lg mb-4">
                With a custom web application, you will be able to fully
                implement your business idea and own a user-friendly website.
              </p>
              <div className="flex justify-start w-full">
                <button className="py-2 px-5 rounded-lg raleway bg-primry hover:bg-blue text-white cursor-pointer font-medium">
                  Read More
                </button>
              </div>
            </div>
          </div>
          {/* 5 Card */}
          <div className="relative flex flex-col items-center rounded-lg bg-white max-w-lg w-full group mt-10">
            <div className="flex flex-col items-center p-5">
              <Image
                src={aws}
                alt="aws"
                className="rounded-t-lg group-hover:opacity-0 transition-opacity duration-300 w-48 -mt-16"
              />
              <div className="w-full text-left">
                <p className="font-bold text-xl mt-4 p-2 rounded-lg">
                  AWS & Cloud Computing
                </p>
              </div>
            </div>

            {/* Hidden paragraph and button */}
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-white p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
              <p className="text-lg mb-4">
                With a custom web application, you will be able to fully
                implement your business idea and own a user-friendly website.
              </p>
              <div className="flex justify-start w-full">
                <button className="py-2 px-5 rounded-lg raleway bg-primry hover:bg-blue text-white cursor-pointer font-medium">
                  Read More
                </button>
              </div>
            </div>
          </div>
          {/* 6 Card */}
          <div className="relative flex flex-col items-center rounded-lg bg-white max-w-lg w-full group mt-10">
            <div className="flex flex-col items-center p-5">
              <Image
                src={itinfrastructure}
                alt="itinfrastructure"
                className="rounded-t-lg group-hover:opacity-0 transition-opacity duration-300 w-48 -mt-16"
              />
              <div className="w-full text-left">
                <p className="font-bold text-xl mt-4 p-2 rounded-lg">
                  IT Infrastructure Solutions
                </p>
              </div>
            </div>

            {/* Hidden paragraph and button */}
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-white p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
              <p className="text-lg mb-4">
                With a custom web application, you will be able to fully
                implement your business idea and own a user-friendly website.
              </p>
              <div className="flex justify-start w-full">
                <button className="py-2 px-5 rounded-lg raleway bg-primry hover:bg-blue text-white cursor-pointer font-medium">
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
