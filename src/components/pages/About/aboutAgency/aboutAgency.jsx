import Image from "next/image";
import it_image_1 from "../../../../../public/about/it_image_1.svg";
import it_image_2 from "../../../../../public/about/it_image_2.svg";
import it_image_3 from "../../../../../public/about/it_image_3.svg";
import it_image_4 from "../../../../../public/about/it_image_4.svg";

export default function AboutAgency() {
  return (
    <div className="max-w-screen-xl mx-auto py-5 md:py-10 lg:py-20">
      <div className="px-4">
        <div className="flex flex-col lg:flex-row items-center lg:space-x-8">
          <div className="space-y-7 lg:w-1/2">
            <h1 className="font-medium text-xl border-b-2 w-fit">About Us</h1>
            <h3 className="text-4xl md:text-5xl font-semibold">
              Expert IT solutions for <br /> Your Agency
            </h3>
            <p className="text-gray-700">
              Texon limited is a custom software development company that we are
              working for empowering entrepreneurs' ideas into business with
              Gen-Z technology.
            </p>
            <p className="text-gray-700">
              We provide various software solutions like Website Design &
              Development, Mobile apps, eCommerce ecosystems, UI/UX design,
              Inventory Management systems, ERP & HR Management systems, and
              more.
            </p>
            <p className="text-gray-700">
              We also serve AI & IoT-based hardware services (Automation,
              Robotics, Car Tracking, Research Projects, etc.) for your company.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 lg:w-1/2 mt-8 lg:mt-0">
            <div className="col-span-1 h-48">
              <Image
                src={it_image_1}
                alt="it_image_1"
                layout="responsive"
                objectFit="cover"
                className="h-full"
              />
            </div>
            <div className="col-span-1 h-48 mb-12">
              <Image
                src={it_image_2}
                alt="it_image_2"
                layout="responsive"
                objectFit="cover"
                className="h-full"
              />
            </div>
            <div className="col-span-1 h-48 mt-32">
              <Image
                src={it_image_3}
                alt="it_image_3"
                layout="responsive"
                objectFit="cover"
                className="h-full"
              />
            </div>
            <div className="col-span-1 h-48 -mt-12">
              <Image
                src={it_image_4}
                alt="it_image_4"
                layout="responsive"
                objectFit="cover"
                className="h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
