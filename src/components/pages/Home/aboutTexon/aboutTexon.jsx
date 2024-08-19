import HeadingTitle from "@/components/common/title/headingTitle";

 

export default function AboutTexon() {
  return (
    <div className="max-w-screen-xl mx-auto mt-5 lg:mt-10 pb-10">
      <div className="px-2">
        <div>
          <h1 className="text-center text-xl pb-5">About Texon</h1>
          <HeadingTitle heading={<>Who We Are?</>} />
        </div>
        <div className="text-center space-y-5">
          <p>
            Texon limited is a custom software development company that we are
            working for <br /> empowering entrepreneurs ideas to business with
            Gen-Z technology.
          </p>
          <p>
            We will provide various Software like - Website Design &
            Development, Mobile app, <br /> eCommerce ecosystem ,UI/UX design,
            Inventory Management system, ERP & HR <br /> Management system and
            more
          </p>
          <p>
            As well as we served Ai & IoT based many kind of hardware services
            (Automation, <br /> Robotics, Car Tracking, Research Project etc.)
            for your company.
          </p>
          <button className="py-2 px-5 rounded-lg raleway bg-primry hover:bg-blue text-white cursor-pointer font-medium">
            View Portfolio
          </button>
        </div>
      </div>
    </div>
  );
}
