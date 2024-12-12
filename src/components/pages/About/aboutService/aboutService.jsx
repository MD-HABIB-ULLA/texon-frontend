import { FaGlobe, FaHeart, FaPalette } from "react-icons/fa";

export default function AboutService() {
  return (
    <div className="px-2 max-w-screen-xl mx-auto pb-5 md:pb-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className=" bg-primry/10 border border-blue text-black  shadow-lg rounded-[20px] p-6  transition-transform hover:scale-105">
          <div className="flex items-center mb-4">
            <FaGlobe className="w-8 h-8 mr-3" />
            <h2 className="text-xl font-semibold">Global Service</h2>
          </div>
          <p className="text-blue-100">
            Proven track record of successful projects in multiple countries.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-rose-600/10 border border-rose-600 text-black  shadow-lg rounded-[20px] p-6 transition-transform hover:scale-105">
          <div className="flex items-center mb-4">
            <FaPalette className="w-8 h-8 mr-3" />
            <h2 className="text-xl font-semibold">Customized Solutions</h2>
          </div>
          <p className="">
            Tailored approaches to meet unique client needs and challenges.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-green-600/10 border border-green-600 text-black  shadow-lg rounded-[20px] p-6  transition-transform hover:scale-105">
          <div className="flex items-center mb-4">
            <FaHeart className="w-8 h-8 mr-3" />
            <h2 className="text-xl font-semibold">Customer Satisfaction</h2>
          </div>
          <p className="">
            Committed to exceeding expectations and delivering outstanding
            results.
          </p>
        </div>
      </div>
    </div>
  );
}
