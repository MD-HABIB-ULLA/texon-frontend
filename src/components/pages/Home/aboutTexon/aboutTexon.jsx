import Image from "next/image";
import it_image_1 from "../../../../../public/about/it_image_1.svg";
import it_image_2 from "../../../../../public/about/it_image_2.svg";
import it_image_3 from "../../../../../public/about/it_image_3.svg";
import it_image_4 from "../../../../../public/about/it_image_4.svg";
import HeadingTitle from "@/components/common/title/headingTitle";

export default function AboutTexon() {
  return (
    <div className="max-w-screen-xl mx-auto pb-10 px-2">
      <div className="grid grid-cols-1 md:grid-cols-7 gap-5 ">
        <div  className="flex md:col-span-4  items-center justify-center"
        >
          <div className="space-y-6  text-center lg:text-start ">
           <HeadingTitle smallHeading={"About Texon"} heading={<div className="md:text-left">Who We Are?</div>}/>
            <div className="text-base md:text-lg lg:text-xl xl:text-2xl leading-relaxed">
              <p>
                Texon limited is a custom software development company that we
                are working for empowering entrepreneurs' ideas to business with
                Gen-Z technology.
              </p>
              <p className="mt-4">
                We provide various Software like - Website Design & Development,
                Mobile app, eCommerce ecosystem, UI/UX design, Inventory
                Management system, ERP & HR Management system, and more.
              </p>
            </div>
            <button className="px-5 py-2 text-base rounded-lg raleway bg-primry hover:bg-blue text-white cursor-pointer font-medium">
              View Portfolio
            </button>
          </div>
        </div>
        <div className="flex items-end  md:col-span-3 justify-end w-full p-4">
          <div className="flex items-center justify-center w-full">
            <div className="grid grid-cols-2 gap-3 w-full">
              <div className="grid   w-full gap-3">
                {" "}
                <div className="flex justify-center items-center row-span-2 h-full">
                  <Image
                    src={it_image_1}
                    alt="it_image_1"
                    className="object-contain h-full w-full"
                  />
                </div>
                <div className="flex justify-center items-center">
                  <Image
                    src={it_image_2}
                    alt="it_image_2"
                    width={200}
                    height={200}
                    className="object-contain h-full w-full"
                  />
                </div>
              </div>
              <div className="grid  gap-3">
                <div className="flex justify-center items-center row-span-2">
                  <Image
                    src={it_image_3}
                    alt="it_image_3"
                    width={200}
                    height={200}
                    className="object-contain h-full w-full"
                  />
                </div>
                <div className="flex justify-center items-center">
                  <Image
                    src={it_image_4}
                    alt="it_image_4"
                    width={200}
                    height={200}
                    className="object-contain h-full w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
