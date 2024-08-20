import OurPreviousWorkSlider from "./ourPreviousWorkSlider";

export default function OurPreviousWork() {
  return (
    <div className="max-w-screen-xl mx-auto py-10">
      <div className="px-2">
        <div className="text-center">
          <p className="text-xl">Case Studies</p>
          <h1 className="text-3xl lg:text-4xl font-semibold lg:font-bold pt-3 pb-5">
            Our Previous Work
          </h1>
          <div className="flex items-center justify-center">
            <button className="py-2 px-5 rounded-lg raleway bg-primry hover:bg-blue text-white cursor-pointer font-medium">
              View All
            </button>
          </div>
        </div>
        <div className="mt-20 hidden lg:block">
          <OurPreviousWorkSlider />
        </div>
      </div>
    </div>
  );
}
