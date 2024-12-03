export default function HeadingTitle({ heading, subHeading }) {
  return (
    <div className="mx-auto text-center space-y-4 mt-4">
      <h3 className="text-2xl md:text-3xl lg:text-[52px] font-semibold lg:font-bold pb-2">
        {heading}
      </h3>
      <p className="pb-3 text-sm md:text-base lg:text-[18px]">{subHeading}</p>
    </div>
  );
}
