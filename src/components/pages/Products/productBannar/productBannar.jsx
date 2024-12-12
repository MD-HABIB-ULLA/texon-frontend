/* eslint-disable react/no-unescaped-entities */

import HeadingTitle from "@/components/common/title/headingTitle";

export default function ProductBanner() {
  return (
    <div className="max-w-screen-xl mx-auto px-4 py-12 md:py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text Section */}

        <div className="space-y-6">
          <h1 className="font-medium text-xl text-primry text-center md:text-left">Texon Products</h1>

          <HeadingTitle
            heading={
              <h2 className="md:text-left">
                Ecommerce <br />
                Website and App
              </h2>
            }
            subHeading={
              <p className="md:text-left">
                Do you want to start your own online store without any hassle?
                Do you want to sell your products or services to millions of
                customers around the world? If yes, then you need our readymade
                ecommerce website and app solution!
              </p>
            }
          />
        </div>

        {/* Form Section */}
        <div className="">
          <div className=" flex items-center justify-center  ">
            <form className="p-6 space-y-4 backdrop-blur-xl bg-white/10 border border-white rounded-[30px] shadow-xl">
              <h3 className="font-semibold text-2xl mb-4">
                Get Started with Your Free Demo
              </h3>
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Your Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  required
                  className="w-full px-3 py-2 border border-white rounded-[10px] shadow-sm"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Your Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  required
                  className="w-full px-3 py-2 border border-white rounded-[10px] shadow-sm"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Your Phone Number
                </label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  required
                  className="w-full px-3 py-2 border border-white rounded-[10px] shadow-sm"
                />
              </div>
              <div className="flex items-center space-x-2">
                <input
                  id="terms"
                  type="checkbox"
                  className="h-4 w-4 text-primry border-white rounded"
                />
                <label htmlFor="terms" className="text-sm text-gray-600">
                  I agree to the{" "}
                  <a href="#" className="text-primry hover:underline">
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-primry hover:underline">
                    Privacy Policy
                  </a>
                  .
                </label>
              </div>
              <button
                type="submit"
                className="w-full px-4 py-2 text-white bg-primry hover:bg-primry-dark rounded-[10px] shadow-sm"
              >
                Schedule a Demo
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
