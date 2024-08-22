import Image from "next/image";
import servicesBanner from "../../../../public/services/services-bannar.svg";

export default function ServicesBanner() {
  return (
    <div className="max-w-screen-xl mx-auto py-5 md:py-10 lg:py-20">
      <div className="px-2">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="space-y-7 lg:w-1/2 lg:pr-8">
            <h1 className="font-medium text-xl">Texon Services</h1>
            <h3 className="text-4xl md:text-5xl lg:text-5xl font-semibold">
              Web Design & <br />
              Development
            </h3>
            <p className="text-gray-700">
              Do you want to start your own online store without any hassle? Do
              you want to sell your products or services to millions of
              customers around the world? If yes, then you need our readymade
              ecommerce website and app solution!
            </p>
          </div>
          <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
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
