import Image from "next/image";
import servicesBanner from "../../../../../public/services/services-bannar.svg";
import HeadingTitle from "@/components/common/title/headingTitle";

export default function ServicesBanner() {
  return (
    <div className="max-w-screen-xl mx-auto py-10 md:py-14 lg:py-40 text-charleston">
      <div className="px-2">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="space-y-5 md:space-y-7 lg:w-2/4 lg:pr-8 text-center lg:text-start">
            <h1 className="font-medium text-xl">Texon Servicess</h1>
            <HeadingTitle
              heading={
                <h3 className="lg:text-left ">Web Design & Development</h3>
              }
              subHeading={
                <p className="lg:text-left ">
                  Do you want to start your own online store without any hassle?
                  Do you want to sell your products or services to millions of
                  customers around the world? If yes, then you need our
                  readymade ecommerce website and app solution!
                </p>
              }
            />
          </div>
          <div className="w-full lg:w-2/3 mt-8 lg:mt-0">
            <Image
              src={servicesBanner}
              alt="Services Banner"
              layout="responsive"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
