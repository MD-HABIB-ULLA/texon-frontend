import Image from "next/image";
import it_image_1 from "../../../../../public/about/it_image_1.svg";
import it_image_2 from "../../../../../public/about/it_image_2.svg";
import it_image_3 from "../../../../../public/about/it_image_3.svg";
import it_image_4 from "../../../../../public/about/it_image_4.svg";

export default function AboutAgency() {
  return (
    <div className="max-w-screen-xl mx-auto py-5 md:py-10 lg:py-20">
      <div className="px-2">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="space-y-7 lg:w-1/2 lg:pr-8">
            <h1 className="font-medium text-xl border-b-2 w-fit">About Us</h1>
            <h3 className="text-4xl md:text-5xl lg:text-5xl font-semibold">
              Expert IT solutions for <br /> Your Agency
            </h3>
            <p className="text-gray-700">
              Texon limited is a custom software development company that we are
              working for empowering entrepreneurs ideas to business with Gen-Z
              technology.
            </p>
            <p className="text-gray-700">
              We will provide various Software like - Website Design &
              Development, Mobile app, eCommerce ecosystem ,UI/UX design,
              Inventory Management system, ERP & HR Management system and more.
            </p>
            <p className="text-gray-700">
              As well as we served Ai & IoT based many kind of hardware services
              (Automation, Robotics, Car Tracking, Research Project etc.) for
              your company
            </p>
          </div>
          <div className="grid grid-cols-4 gap-4">
            <div className="col-span-2">
              <Image src={it_image_1} alt="it_image_1" />
            </div>
            <div className="col-span-2">
              <Image src={it_image_2} alt="it_image_2" />
            </div>
            <div className="col-span-2">
              <Image src={it_image_3} alt="it_image_3" />
            </div>
            <div className="col-span-2">
              <Image src={it_image_4} alt="it_image_4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
