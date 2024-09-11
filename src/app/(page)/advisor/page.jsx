import HeadingTitle from "@/components/common/title/headingTitle";
import Image from "next/image";
import humayun_ahmed from "../../../../public/advisor/Humayun ahmed.jpg";
import mehedi_shamim from "../../../../public/advisor/Mehedi Shamim.jpg";
import tosar_chandra_das from "../../../../public/advisor/TosarChandraDas.jpg";

const Page = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4">
      <div className="py-10">
        <HeadingTitle
          heading={<>Fueling Success Together!</>}
          subHeading={<>Meet Our Team</>}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pb-10 md:pb-20">
        {/* Mehedi Shamim */}
        <div className="relative group">
          <Image
            src={mehedi_shamim}
            className="w-full h-auto object-cover"
            alt="Mehedi Shamim"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
            <div className="text-center text-white">
              <h3 className="text-xl font-semibold md:text-2xl">
                Mehedi Shamim
              </h3>
              <p className="text-sm md:text-base">
                Business Strategies and Marketing Advisor
              </p>
            </div>
          </div>
        </div>

        {/* Humayun Ahmed */}
        <div className="relative group">
          <Image
            src={humayun_ahmed}
            className="w-full h-auto object-cover"
            alt="Humayun Ahmed"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
            <div className="text-center text-white">
              <h3 className="text-xl font-semibold md:text-2xl">
                Humayun Ahmed
              </h3>
              <p className="text-sm md:text-base">
                Corporate Sales and Business Advisor
              </p>
            </div>
          </div>
        </div>

        {/* Tosar Chandra Das */}
        <div className="relative group">
          <Image
            src={tosar_chandra_das}
            className="w-full h-auto object-cover"
            alt="Tosar Chandra Das"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
            <div className="text-center text-white">
              <h3 className="text-xl font-semibold md:text-2xl">
                Tosar Chandra Das
              </h3>
              <p className="text-sm md:text-base">
                Business Development Consultant
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
