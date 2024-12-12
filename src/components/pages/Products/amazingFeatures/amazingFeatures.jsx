import HeadingTitle from "@/components/common/title/headingTitle";

export default function AmazingFeatures() {
  const services = [
    { title: "Customizable design" },
    { title: "Powerful backend" },
    { title: "Secure payment gateway integration" },
    { title: "Product filter and search" },
    { title: "Localization" },
    { title: "Wish list" },
    { title: "Social media integration" },
    { title: "Coupon code" },
    { title: "Live chat" },
    { title: "Store locator" },
    { title: "Affiliate system" },
  ];
  return (
    <div className="max-w-screen-xl m-auto pt-10 px-2">
      <div className="pt-5">
        <div className="pb-2">
          <HeadingTitle
            heading={<>Amazing features</>}
            subHeading={
              <div className="text-lg">
                You can enjoy a lot of features that will make your online store
                stand <br /> out from the crowd. Some of the features are:
              </div>
            }
          />
        </div>
      </div>

      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex items-center bg-white px-6 py-4 rounded-[10px] shadow"
            >
              <p className="bg-black font-medium px-4 py-1 text-2xl rounded-full text-white inline-block">
                {index + 1}
              </p>
              <p className="ms-5 font-medium text-xl lg:text-2xl">
                {service.title}
              </p>
            </div>
          ))}
        </div>
      
      </div>
    </div>
  );
}
