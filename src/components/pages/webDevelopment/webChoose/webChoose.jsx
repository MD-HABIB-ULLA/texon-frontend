import HeadingTitle from "@/components/common/title/headingTitle";
import ChooseAccordion from "./chooseAccordion";

const WebChoose = () => {
  return (
    <>
      <HeadingTitle
        heading={<h1 className="text-3xl font-bold">Why Choose Our Website Development Services?</h1>}
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
    </>
  );
};

export default WebChoose;
