import { AiOutlineGlobal } from "react-icons/ai";
import { PiHandshake } from "react-icons/pi";
import { TbApps } from "react-icons/tb";

export default function page() {
  return (
    <div className="max-w-screen-xl mx-auto px-2 py-10 md:py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Global Service */}
        <div className="flex items-center bg-white rounded-lg shadow-lg p-6 border-b-2 border-transparent hover:border-primry transition-all duration-300">
          <AiOutlineGlobal className="text-8xl" />
          <div className="ml-4">
            <h1 className="font-semibold">Global Service</h1>
            <p className="text-base">
              Proven track record of successful projects in multiple countries.
            </p>
          </div>
        </div>

        {/* Customized Solutions */}
        <div className="flex items-center bg-white rounded-lg shadow-lg p-6 border-b-2 border-transparent hover:border-primry transition-all duration-300">
          <TbApps className="text-8xl" />
          <div className="ml-4">
            <h1 className="font-semibold">Customized Solutions</h1>
            <p className="text-base">
              We provide customized solutions to meet individual needs.
            </p>
          </div>
        </div>

        {/* Customer Satisfaction */}
        <div className="flex items-center bg-white rounded-lg shadow-lg p-6 border-b-2 border-transparent hover:border-primry transition-all duration-300">
          <PiHandshake className="text-8xl" />
          <div className="ml-4">
            <h1 className="font-semibold">Customer Satisfaction</h1>
            <p className="text-base">
              We strive to provide excellent service & support.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
