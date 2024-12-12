import HeadingTitle from "@/components/common/title/headingTitle";
import ChooseAccordion from "../../webDevelopment/webChoose/chooseAccordion";
import QuestionsAccordion from "../../Home/questions/questionsAccordion";

const TopicBasedChooseUs = ({ faqData, topic }) => {
  return (
    <>
      <div className="px-2 ">
        <HeadingTitle
          heading={
            <h1 className="text-3xl font-bold">
              {`Why Choose Our ${topic} Services?`}
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
      </div>

      <div className="max-w-screen-xl mx-auto pt-5 pb-14">
        {/* <ChooseAccordion /> */}

        <div className="max-w-3xl mx-auto">
          <QuestionsAccordion faqData={faqData} />
        </div>
      </div>

      <section className="py-10  sm:py-16 lg:py-24">
        <div className="max-w-screen-lg px-4 mx-auto sm:px-6 lg:px-8">
          <div className="grid items-center md:grid-cols-2 gap-y-10 md:gap-x-20">
            {/* Image Section */}
            <div className="pr-12 sm:pr-0 mx-auto ">
              <div className="relative max-w-xs mb-12">
                <img
                  className="object-bottom rounded-md"
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/features/4/man-eating-noodles.jpg"
                  alt=""
                />
                <img
                  className="absolute origin-bottom-right scale-75 rounded-md -bottom-12 -right-12"
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/features/4/smiling-businessman.jpg"
                  alt=""
                />
              </div>
            </div>

            {/* Text Section */}
            <div>
              <HeadingTitle
                heading={
                  <h2 className="md:text-left">
                    Grow business with Celebration.
                  </h2>
                }
                subHeading={
                  <p className="md:text-left">
                    Let's discuss more for transforming your Idea into business!
                    Empower your vision with expert solutions tailored for
                    growth! Together, we build strategies that turn dreams into
                    reality.
                  </p>
                }
              />
              <div className="flex justify-center md:justify-start">
                <button className="border  border-white px-6 py-3 rounded transition-transform duration-500 ease-in-out transform hover:scale-105 bg-blue text-white mx-auto md:mx-0  ">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TopicBasedChooseUs;
