/* eslint-disable react/no-unescaped-entities */

export default function ProductBanner() {
  return (
    <div className="max-w-screen-xl mx-auto px-4 py-36 flex flex-col lg:flex-row lg:space-x-12">
      {/* Text Section */}
      <div className="space-y-7 lg:w-2/3">
        <h1 className="font-medium text-xl">Texon Products</h1>
        <h3 className="text-4xl md:text-5xl lg:text-5xl font-semibold">
          Ecommerce <br />
          Website and App
        </h3>
        <p className="text-gray-700">
          Do you want to start your own online store without any hassle? Do you
          want to sell your products or services to millions of customers around
          the world? If yes, then you need our readymade ecommerce website and
          app solution!
        </p>
      </div>

      {/* Form Section */}
      <div className="w-full lg:w-1/3">
        <form className="space-y-4">
          <h2 className="font-semibold text-xl mb-4">
            Get Started with Your Free Demo
          </h2>
          <div>
            <input
              type="text"
              placeholder="Your Name"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Your Email"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div>
            <input
              type="tel"
              placeholder="Your Phone Number"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="flex items-center space-x-2">
            <input type="checkbox" defaultChecked className="checkbox" />
            <label className="text-gray-700">
              I agree to the{" "}
              <a href="#" className="text-blue-600 hover:underline">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="#" className="text-blue-600 hover:underline">
                Privacy Policy
              </a>
              .
            </label>
          </div>
          <div>
            <button
              type="submit"
              className="font-semibold py-3 px-5 rounded-lg raleway bg-primry hover:bg-blue text-white cursor-pointer w-full"
            >
              Schedule a Demo
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
