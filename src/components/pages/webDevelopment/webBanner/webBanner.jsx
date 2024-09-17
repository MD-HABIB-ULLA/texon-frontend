import { FaCalendarAlt } from "react-icons/fa";

export default function WebBanner() {
  return (
    <div className="bg-[#111827] pt-20 pb-14">
      <div className="max-w-screen-xl mx-auto px-2">
        <div className="flex flex-col items-center">
          <h1 className="text-white text-center text-3xl md:text-4xl font-medium mb-6">
            Web Design & Development
          </h1>
          <button className="flex items-center px-6 py-3 justify-center font-medium bg-primry hover:bg-blue text-white mt-4">
            <FaCalendarAlt className="mr-2" />
            Request a Demo
          </button>
        </div>

        <div className="mt-8 lg:mt-12">
          <div className="py-6 lg:py-8">
            <div className="max-w-screen-lg mx-auto px-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 text-center text-white">
                <div className="lg:border-r md:border-r border-white last:border-r-0 pr-6 lg:pr-8">
                  <h1 className="text-3xl md:text-4xl font-semibold">100+</h1>
                  <p className="text-lg mt-2">Projects Completion</p>
                </div>
                <div className="border-white lg:border-r lg:pr-8 pr-6">
                  <h1 className="text-3xl md:text-4xl font-semibold">10+</h1>
                  <p className="text-lg mt-2">Running Projects</p>
                </div>
                <div className="lg:border-r md:border-r border-white last:border-r-0 pr-6 lg:pr-8">
                  <h1 className="text-3xl md:text-4xl font-semibold">20+</h1>
                  <p className="text-lg mt-2">Team Members</p>
                </div>
                <div className="pr-6 lg:pr-8">
                  <h1 className="text-3xl md:text-4xl font-semibold">7+</h1>
                  <p className="text-lg mt-2">Countries Served</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
