export default function CustomDevelopment() {
  return (
    <div className="">
      <div className="max-w-screen-xl mx-auto px-2 py-20">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-5">
          {/* First card with 66% width */}
          <div className="md:col-span-3 bg-white p-4 rounded-md space-y-5">
            <p className="bg-black font-medium px-5 py-2 text-2xl rounded-full text-white inline-block">
              1
            </p>
            <h1 className="text-4xl font-medium">
              No coding, hosting or maintenance required:
            </h1>
            <p>
              We take care of everything for you. Just enter <br /> your store
              details and start selling.
            </p>
          </div>
          {/* Second card with 40% width */}
          <div className="md:col-span-2 bg-white p-4 rounded-md space-y-5">
            <p className="bg-black font-medium px-5 py-2 text-2xl rounded-full text-white inline-block">
              2
            </p>
            <h1 className="text-4xl font-medium">Flexible pricing models:</h1>
            <p>
              You can try our solution for free without any charges. You can
              also get free installation services from our experts.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
          {/* Third card */}
          <div className="bg-white p-4 rounded-md space-y-5">
            <p className="bg-black font-medium px-5 py-2 text-2xl rounded-full text-white inline-block">
              3
            </p>
            <h1 className="text-4xl font-medium">
              Free installation services or 3 months free trial:
            </h1>
            <p>
              You can choose from our different pricing models such as freemium,
              premium, one-time and subscription based monthly payments. You can
              also upgrade or downgrade anytime.
            </p>
          </div>
          {/* Fourth card */}
          <div className="bg-white p-4 rounded-md space-y-5">
            <p className="bg-black font-medium px-5 py-2 text-2xl rounded-full text-white inline-block">
              4
            </p>
            <h1 className="text-4xl font-medium">24/7 Support:</h1>
            <p>
              We provide 24/7 support for any issues or bugs that you may
              encounter. You can also request custom features or integrations
              that you may need for your store.
            </p>
          </div>
          {/* Fifth card */}
          <div className="bg-white p-4 rounded-md space-y-5">
            <p className="bg-black font-medium px-5 py-2 text-2xl rounded-full text-white inline-block">
              5
            </p>
            <h1 className="text-4xl font-medium">Ecommerce solution:</h1>
            <p>
              Our readymade ecommerce website and app solution offers four
              different pricing models to suit your needs and budget. You can
              choose from
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
