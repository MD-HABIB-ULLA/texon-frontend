import Image from "next/image";
import shukhi_mart from "../../../../../public/products/shukhi-mart.svg";
export default function OurSolution() {
  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="py-4 px-4">
        <div className="text-center space-y-7">
          <h1 className="text-2xl md:text-3xl lg:text-5xl font-semibold">
            Here are some of the benefits <br /> of choosing our solution
          </h1>
          <p className="text-gray-700">
            Our solution is built with the latest technologies such as PHP
            Laravel framework for the website and Android <br /> for the app.
            You don’t need to worry about coding, hosting or maintenance. We
            take care of everything for <br /> you.
          </p>
          <p className="text-gray-700">
            We even offer free installation services or a 3 months free trial
            without any charges. You can also choose <br /> from our flexible
            pricing models such as freemium, premium, one-time and subscription
            based <br /> monthly payments.
          </p>
        </div>
      </div>
      <div className="flex justify-center pb-12 mx-auto">
        <Image src={shukhi_mart} alt="shukhi_mart" />
      </div>
    </div>
  );
}
