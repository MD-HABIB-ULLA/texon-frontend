import Image from "next/image";
import it_image_1 from "../../../../../public/about/it_image_1.svg";
import it_image_2 from "../../../../../public/about/it_image_2.svg";
import it_image_3 from "../../../../../public/about/it_image_3.svg";
import it_image_4 from "../../../../../public/about/it_image_4.svg";

export default function AboutAgency() {
  return (
    <div className="px-2 max-w-screen-xl mx-auto py-5 md:py-10 lg:pt-20">
      <div className="flex justify-between lg:space-x-8">
        <div className="space-y-7 lg:w-1/2 text-center lg:text-start">
          <div className="flex justify-center lg:justify-start">
            <h1 className="font-medium text-xl w-fit text-center lg:text-start border-b">
              About Us
            </h1>
          </div>
          <h3 className="text-4xl md:text-5xl font-semibold">
            Expert IT solutions for <br /> Your Agency
          </h3>
          <p>
            Texon limited is a custom software development company that we are
            working for empowering entrepreneurs ideas to business with Gen-Z
            technology.
          </p>
          <p>
            We will provide various Software like - Website Design &
            Development, Mobile app, eCommerce ecosystem ,UI/UX design,
            Inventory Management system, ERP & HR Management system and more.
          </p>
          <p>
            As well as we served Ai & IoT based many kind of hardware services
            (Automation, Robotics, Car Tracking, Research Project etc.) for your
            company.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-5 lg:w-1/3">
          <div className="flex justify-center items-center">
            <Image
              src={it_image_1}
              alt="it_image_1"
              width={200}
              height={200}
              className="object-contain hidden lg:block"
            />
          </div>
          <div className="flex justify-center items-center mb-20 -mt-10">
            <Image
              src={it_image_2}
              alt="it_image_2"
              width={200}
              height={200}
              className="object-contain hidden lg:block"
            />
          </div>
          <div className="flex justify-center items-center mb-20">
            <Image
              src={it_image_3}
              alt="it_image_3"
              width={200}
              height={200}
              className="object-contain hidden lg:block"
            />
          </div>
          <div className="flex justify-center items-center -mt-48">
            <Image
              src={it_image_4}
              alt="it_image_4"
              width={200}
              height={200}
              className="object-contain hidden lg:block"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
