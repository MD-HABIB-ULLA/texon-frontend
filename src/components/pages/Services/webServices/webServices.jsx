import HeadingTitle from "@/components/common/title/headingTitle";
import WebServicesAccordion from "./webServicesAccordion";
import QuestionsAccordion from "../../Home/questions/questionsAccordion";

export default function WebServices() {
  return (
    <div className=" py-14">
      <div className="max-w-screen-xl mx-auto">
        <div className="px-2">
          <div>
            <HeadingTitle
              heading={
                <>
                  Why Choose Our Website <br />
                  Development Services?
                </>
              }
              subHeading={
                <span className="text-lg">
                  We have a proven track record of providing top-notch web{" "}
                  <br /> development services to <br /> clients around the
                  globe. Here are a few reasons why you should <br /> choose us:
                </span>
              }
            />
          </div>
          {/* <WebServicesAccordion /> */}
          <QuestionsAccordion/>
        </div>
      </div>
    </div>
  );
}
