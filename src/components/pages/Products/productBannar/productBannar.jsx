/* eslint-disable react/no-unescaped-entities */

export default function ProductBanner() {
  return (
    <div className="max-w-screen-xl mx-auto px-4 py-36 flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-12">
      <div className="space-y-7">
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
      <div className="w-full lg:w-1/2">
        <form className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Your Name"
              className="input input-bordered w-full"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Your Email"
              className="input input-bordered w-full"
            />
          </div>
          <div>
            <input
              type="tel"
              placeholder="Your Phone Number"
              className="input input-bordered w-full"
            />
          </div>
          <div className="flex items-center space-x-2">
            <input type="checkbox" defaultChecked className="checkbox" />
            <p className="text-gray-700">
              I agree to the terms of Service and Privacy Policy.
            </p>
          </div>
          <div>
            <button className="btn btn-primary w-full">Schedule a Demo</button>
          </div>
        </form>
      </div>
    </div>
  );
}
