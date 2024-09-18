import HeadingTitle from "@/components/common/title/headingTitle";
import ChooseAccordion from "./chooseAccordion";

const WebChoose = () => {
  return (
    <>
      <HeadingTitle
        heading={
          <h1 className="text-3xl font-bold">
            Why Choose Our Website Development Services?
          </h1>
        }
        subHeading={
          <>
            <p>
              We have a proven track record of providing top-notch web
              development services to
            </p>
            <p>
              clients around the globe. Here are a few reasons why you should
              choose us:
            </p>
          </>
        }
      ></HeadingTitle>

      <div className="max-w-screen-xl mx-auto pt-5 pb-14">
        <ChooseAccordion />
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

export default WebChoose;
