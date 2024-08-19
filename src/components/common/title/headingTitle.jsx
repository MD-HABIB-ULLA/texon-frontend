export default function HeadingTitle({ heading, subHeading }) {
  return (
    <div className="mx-auto text-center">
      <h3 className="text-3xl lg:text-4xl font-semibold lg:font-bold">
        {heading}
      </h3>
      <p className="py-5
      ">{subHeading}</p>
    </div>
  );
}
