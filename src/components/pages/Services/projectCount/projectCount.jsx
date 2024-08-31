export default function ProjectCount() {
  return (
    <div className="mt-5 lg:mt-10">
      <div className="bg-[#252432] py-8 lg:mb-10">
        <div className="max-w-screen-lg mx-auto px-2">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center text-white">
            <div className="lg:border-r md:border-r border-white last:border-r-0 pr-8 ">
              <h1 className="text-3xl md:text-4xl font-semibold">100+</h1>
              <p className="text-lg mt-2">Projects Completion</p>
            </div>
            <div className="lg:border-r md:border-r border-white last:border-r-0 pr-8 ">
              <h1 className="text-3xl md:text-4xl font-semibold">10+</h1>
              <p className="text-lg mt-2">Running Projects</p>
            </div>
            <div className="lg:border-r md:border-r border-white last:border-r-0 pr-8 ">
              <h1 className="text-3xl md:text-4xl font-semibold">20+</h1>
              <p className="text-lg  mt-2">Team Members</p>
            </div>
            <div className="pr-8">
              <h1 className="text-3xl md:text-4xl font-semibold">7+</h1>
              <p className="text-lg mt-2">Countries Served</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
