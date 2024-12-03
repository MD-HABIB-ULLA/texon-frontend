export default function HeadingTitle({ heading, subHeading }) {
  return (
    <div className="mx-auto text-center space-y-1 mt-4">
      <h3
        style={{ lineHeight: "1.3" }} // Use relative line-height for better scalability
        className="text-2xl md:text-3xl lg:text-[52px] font-semibold lg:font-bold leading-normal pb-4"
      >
        {heading}
      </h3>
      <p className="text-sm md:text-base lg:text-[18px] leading-relaxed pb-3">
        {subHeading}
      </p>
    </div>
  );
}
