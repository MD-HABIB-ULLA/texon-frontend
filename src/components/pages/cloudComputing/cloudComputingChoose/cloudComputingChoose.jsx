import HeadingTitle from "@/components/common/title/headingTitle";
import CloudComputingAccordion from "./cloudComputingAccordion";

const CloudComputingChoose = () => {
  return (
    <>
      <div className="px-2">
        <HeadingTitle
          heading={
            <h1 className="text-3xl font-bold">
              Why Choose Our Cloud Services?
            </h1>
          }
          subHeading={
            <>
              <p>
                Our cloud application development and AWS services are designed
                to help businesses
              </p>
              <p>
                of all sizes achieve their goals in the cloud. Here are some of
                the reasons why you should choose us:
              </p>
            </>
          }
        ></HeadingTitle>
      </div>

      <div className="max-w-screen-xl mx-auto pt-5 pb-14">
        <CloudComputingAccordion />
      </div>

      <div className="max-w-screen-xl mx-auto pt-5 pb-16">
        <div className="bg-primry rounded text-white p-6 md:p-10 flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
          <h1 className="text-2xl md:text-3xl font-semibold text-center md:text-left">
            Let's discuss more for transforming your Idea into business!
          </h1>
          <button className="border border-white px-6 py-3 rounded transition-transform duration-300 ease-in-out transform hover:scale-105 hover:bg-blue hover:text-white mx-auto md:mx-0">
            Contact Us
          </button>
        </div>
      </div>
    </>
  );
};

export default CloudComputingChoose;
