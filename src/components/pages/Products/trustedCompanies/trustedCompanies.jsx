import HeadingTitle from "@/components/common/title/headingTitle";
import OurCompany from "../../Home/ourCompany/ourCompany";

export default function TrustedCompanies() {
  return (
    <>
      <div className="max-w-screen-xl mx-auto mt-10 md:mt-20 pb-5 px-2">
        <HeadingTitle
          heading={
            <>
              Trusted by more than <br />
              10+ companies
            </>
          }
          subHeading={
            <>
              Our solution is trusted by more than 10+ companies who are happy
              with <br /> their online sales and growth. You can also check
              their testimonials on our <br /> website.
            </>
          }
        />
        <div className="flex justify-center mb-5">
          <button className="text-base font-medium py-2 px-5 rounded-lg raleway bg-primry hover:bg-blue text-white cursor-pointer">
            View Testimonials
          </button>
        </div>
      </div>
      <OurCompany />
    </>
  );
}
