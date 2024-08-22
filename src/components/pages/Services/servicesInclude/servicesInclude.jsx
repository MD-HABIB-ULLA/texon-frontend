import HeadingTitle from "@/components/common/title/headingTitle";

export default function ServicesInclude() {
  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="px-2">
        <div>
          <HeadingTitle
            heading={<>Our Services Include</>}
            subHeading={
              <>
                We have provided over 50+ custom based Service solutions with{" "}
                <br />
                100% customer satisfaction.
              </>
            }
          />
        </div>

        {/*  */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 pt-5 lg:pt-10">
          <div className="flex items-center bg-white px-6 py-4 rounded-md shadow-md">
            <p className="bg-black font-medium px-5 py-2 text-2xl rounded-full text-white inline-block">
              1
            </p>
            <p className="ms-5 font-semibold text-xl lg:text-2xl">
              Multivendor Ecommerce eco systems Development
            </p>
          </div>
          <div className="flex items-center bg-white px-6 py-4 rounded-md shadow-md">
            <p className="bg-black font-medium px-5 py-2 text-2xl rounded-full text-white inline-block">
              2
            </p>
            <p className="ms-5 font-semibold text-xl lg:text-2xl">
              Single Vendor Ecommerce Development
            </p>
          </div>
          <div className="flex items-center bg-white px-6 py-4 rounded-md shadow-md">
            <p className="bg-black font-medium px-5 py-2 text-2xl rounded-full text-white inline-block">
              3
            </p>
            <p className="ms-5 font-semibold text-xl lg:text-2xl">
              B2C or B2B Website Development
            </p>
          </div>
          <div className="flex items-center bg-white px-6 py-4 rounded-md shadow-md">
            <p className="bg-black font-medium px-5 py-2 text-2xl rounded-full text-white inline-block">
              4
            </p>
            <p className="ms-5 font-semibold text-xl lg:text-2xl">
              Business Management Software
            </p>
          </div>
          <div className="flex items-center bg-white px-6 py-4 rounded-md shadow-md">
            <p className="bg-black font-medium px-5 py-2 text-2xl rounded-full text-white inline-block">
              5
            </p>
            <p className="ms-5 font-semibold text-xl lg:text-2xl">
              Cloud service
            </p>
          </div>
          <div className="flex items-center bg-white px-6 py-4 rounded-md shadow-md">
            <p className="bg-black font-medium px-5 py-2 text-2xl rounded-full text-white inline-block">
              6
            </p>
            <p className="ms-5 font-semibold text-xl lg:text-2xl">
              API Integrations & Web consultancy
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
