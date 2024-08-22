import HeadingTitle from "@/components/common/title/headingTitle";
import WebServicesAccordion from "./webServicesAccordion";

export default function WebServices() {
  return (
    <div className="bg-white pt-20 pb-10">
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
                <>
                  We have a proven track record of providing top-notch web{" "}
                  <br /> development services to <br /> clients around the
                  globe. Here are a few reasons why you should <br /> choose us:
                </>
              }
            />
          </div>
          <WebServicesAccordion />
        </div>
      </div>
    </div>
  );
}
