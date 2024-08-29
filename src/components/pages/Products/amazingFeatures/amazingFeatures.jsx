import HeadingTitle from "@/components/common/title/headingTitle";

export default function AmazingFeatures() {
  return (
    <div className="max-w-screen-xl m-auto pt-10">
      <div className="px-2">
        <div className="pt-5">
          <HeadingTitle
            heading={<>Amazing features</>}
            subHeading={
              <>
                You can enjoy a lot of features that will make your online store
                stand <br /> out from the crowd. Some of the features are:
              </>
            }
          />
        </div>

        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 pt-5 lg:pt-10">
            <div className="flex items-center bg-white px-6 py-4 rounded-md shadow-md">
              <p className="bg-black font-medium px-5 py-2 text-2xl rounded-full text-white inline-block">
                1
              </p>
              <p className="ms-5 font-medium text-xl lg:text-2xl">
                Customizable design
              </p>
            </div>
            <div className="flex items-center bg-white px-6 py-4 rounded-md shadow-md">
              <p className="bg-black font-medium px-5 py-2 text-2xl rounded-full text-white inline-block">
                2
              </p>
              <p className="ms-5 font-medium text-xl lg:text-2xl">
                Powerful backend
              </p>
            </div>
            <div className="flex items-center bg-white px-6 py-4 rounded-md shadow-md">
              <p className="bg-black font-medium px-5 py-2 text-2xl rounded-full text-white inline-block">
                3
              </p>
              <p className="ms-5 font-medium text-xl lg:text-2xl">
                Secure payment gateway integration
              </p>
            </div>
            <div className="flex items-center bg-white px-6 py-4 rounded-md shadow-md">
              <p className="bg-black font-medium px-5 py-2 text-2xl rounded-full text-white inline-block">
                4
              </p>
              <p className="ms-5 font-medium text-xl lg:text-2xl">
                Product filter and search
              </p>
            </div>
            <div className="flex items-center bg-white px-6 py-4 rounded-md shadow-md">
              <p className="bg-black font-medium px-5 py-2 text-2xl rounded-full text-white inline-block">
                5
              </p>
              <p className="ms-5 font-medium text-xl lg:text-2xl">
                Localization
              </p>
            </div>
            <div className="flex items-center bg-white px-6 py-4 rounded-md shadow-md">
              <p className="bg-black font-medium px-5 py-2 text-2xl rounded-full text-white inline-block">
                6
              </p>
              <p className="ms-5 font-medium text-xl lg:text-2xl">
                Wish list
              </p>
            </div>
            <div className="flex items-center bg-white px-6 py-4 rounded-md shadow-md">
              <p className="bg-black font-medium px-5 py-2 text-2xl rounded-full text-white inline-block">
                7
              </p>
              <p className="ms-5 font-medium text-xl lg:text-2xll">
                Social media integration
              </p>
            </div>
            <div className="flex items-center bg-white px-6 py-4 rounded-md shadow-md">
              <p className="bg-black font-medium px-5 py-2 text-2xl rounded-full text-white inline-block">
                8
              </p>
              <p className="ms-5 font-medium text-xl lg:text-2xl">
                Coupon code
              </p>
            </div>
            <div className="flex items-center bg-white px-6 py-4 rounded-md shadow-md">
              <p className="bg-black font-medium px-5 py-2 text-2xl rounded-full text-white inline-block">
                9
              </p>
              <p className="ms-5 font-medium text-xl lg:text-2xl">
                Live chat
              </p>
            </div>
            <div className="flex items-center bg-white px-6 py-4 rounded-md shadow-md">
              <p className="bg-black font-medium px-5 py-2 text-2xl rounded-full text-white inline-block">
                10
              </p>
              <p className="ms-5 font-medium text-xl lg:text-2xl">
                Store locator
              </p>
            </div>
          </div>
          <div className="flex justify-start md:justify-center lg:justify-center mt-5">
            <div className="flex items-center bg-white px-6 py-4 rounded-md shadow-md md:w-2/5 w-full">
              <p className="bg-black font-medium px-5 py-2 text-2xl rounded-full text-white inline-block">
                11
              </p>
              <p className="ms-5 font-medium text-xl lg:text-2xl">
                Affiliate system
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
