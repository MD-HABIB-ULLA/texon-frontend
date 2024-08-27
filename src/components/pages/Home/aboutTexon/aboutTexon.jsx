import Image from "next/image";
import it_image_1 from "../../../../../public/about/it_image_1.svg";
import it_image_2 from "../../../../../public/about/it_image_2.svg";
import it_image_3 from "../../../../../public/about/it_image_3.svg";
import it_image_4 from "../../../../../public/about/it_image_4.svg";

export default function AboutTexon() {
  return (
    <div className="max-w-screen-xl mx-auto py-5 md:py-10 lg:py-20">
      <div className="px-4">
        <div className="flex flex-col lg:flex-row lg:space-x-8">
          <div className="space-y-7 lg:w-1/2">
            <h1 className="font-medium text-xl w-fit">About Texon</h1>
            <h3 className="text-4xl md:text-5xl font-semibold">Who We Are?</h3>
            <p>
              Texon limited is a custom software development company that we are
              working for empowering entrepreneurs ideas to business with Gen-Z
              technology
            </p>
            <p>
              We will provide various Software like - Website Design &
              Development, Mobile app, eCommerce ecosystem ,UI/UX design,
              Inventory Management system, ERP & HR Management system and more
            </p>
            <button className="py-2 px-5 rounded-lg raleway bg-primry hover:bg-blue text-white cursor-pointer font-medium">
              View Portfolio
            </button>
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
