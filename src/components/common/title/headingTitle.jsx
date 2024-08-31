export default function HeadingTitle({ heading, subHeading }) {
  return (
    <div className="mx-auto text-center">
      <h3 className="text-2xl lg:text-3xl font-semibold lg:font-bold">
        {heading}
      </h3>
      <p className="pb-5
      ">{subHeading}</p>
    </div>
  );
}
