export default function HeadingTitle({ heading, subHeading, smallHeading }) {
  return (
    <div className="mx-auto text-center space-y-1 mt-4">
      <h1 className="font-medium text-base md:text-lg lg:text-xl xl:text-2xl  ">
        {smallHeading}
      </h1>
      <h3
        style={{ lineHeight: "1.3" }} // Use relative line-height for better scalability
        className="text-3xl lg:text-[52px]  font-bold leading-normal pb-4"
      >
        {heading}
      </h3>
      <p className="text-sm md:text-base lg:text-[18px] leading-loose pb-3 text-slate-600">
        {subHeading}
      </p>
    </div>
  );
}
