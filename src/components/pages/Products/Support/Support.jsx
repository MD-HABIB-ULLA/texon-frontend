import Image from "next/image";
import selling from "../../../../../public/products/selling.svg";

export default function Support() {
  return (
    <div className="bg-primry pt-44">
      <div className="max-w-screen-xl mx-auto px-2 py-20 ">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-5 lg:px-10">
          <div className="md:col-span-3 bg-white  p-4 rounded-[30px] space-y-5">
            <p className="bg-black font-medium px-4 py-1 text-2xl rounded-full text-white inline-block">
              1
            </p>

            <h1 className="lg:text-5xl md:text-3xl text-xl font-bold">
              No coding, hosting or maintenance required:
            </h1>
            <p className="text-xl">
              We take care of everything for you. Just enter <br /> your store
              details and start selling.
            </p>
            <div className="flex lg:justify-end md:justify-end justify-start">
              <Image src={selling} width={170} alt="selling" />
            </div>
          </div>
          <div className="md:col-span-2 bg-white  p-4 rounded-[30px] space-y-5">
            <p className="bg-black font-medium px-4 py-1 text-2xl rounded-full text-white inline-block">
              2
            </p>
            <h1 className="lg:text-5xl md:text-3xl text-xl font-bold">Flexible pricing models:</h1>
            <p className="text-xl">
              You can try our solution for free without any charges. You can
              also get free installation services from our experts.
            </p>
          </div>
          <div className="md:col-span-2 bg-white  p-4 rounded-[30px] space-y-5">
            <p className="bg-black font-medium px-4 py-1 text-2xl rounded-full text-white inline-block">
              3
            </p>
            <h1 className="lg:text-5xl md:text-3xl text-xl font-bold">
              Free installation services or 3 months free trial:
            </h1>
            <p className="text-xl">
              You can choose from our different pricing models such as freemium,
              premium, one-time and subscription based monthly payments. You can
              also upgrade or downgrade anytime.
            </p>
          </div>
          <div className="md:col-span-3 bg-white  p-4 rounded-[30px] space-y-5">
            <p className="bg-black font-medium px-4 py-1 text-2xl rounded-full text-white inline-block">
              4
            </p>
            <h1 className="lg:text-5xl md:text-3xl text-xl font-bold">24/7 Support:</h1>
            <p className="text-xl">
              We provide 24/7 support for any issues or bugs that you may
              encounter. You can also request custom features or integrations
              that you may need for your store.
            </p>
            <p className="text-xl">
              Our readymade ecommerce website and app solution offers four
              different pricing models to suit your needs and budget. You can
              choose from
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
