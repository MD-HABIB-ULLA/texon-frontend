export default function HeadingTitle({ heading, subHeading }) {
  return (
    <div className="mx-auto text-center">
      <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold lg:font-bold pb-1">
        {heading}
      </h3>
      <p className="pb-5
      ">{subHeading}</p>
    </div>
  );
}
