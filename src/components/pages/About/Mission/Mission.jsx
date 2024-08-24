import Image from "next/image";
import commitedour from "../../../../../public/about/zohoaboutus-commitedour 1.svg";
import commonsense from "../../../../../public/about/zohoaboutus-commonsense 1.svg";

export default function Mission() {
  return (
    <div className="max-w-screen-xl mx-auto px-4 py-10">
      <div className="bg-primry text-white p-2 md:p-5 lg:p-10 rounded-lg shadow-lg space-y-16">
        <div className="flex flex-col md:flex-row md:space-x-8">
          <div className="md:w-1/2 space-y-4">
            <h1 className="text-2xl font-bold">MISSION</h1>
            <p>
              At Texon Limited, our mission is to deliver bespoke software
              solutions that surpass client expectations and propel their
              success in the dynamic digital landscape. We are dedicated to
              leveraging the latest technologies, fostering a culture of
              continuous learning and innovation, and building enduring
              partnerships.
            </p>
          </div>
          <div className="md:w-1/2 mt-6 md:mt-0">
            <Image src={commonsense} alt="commonsense" />
          </div>
        </div>

        <div className="flex flex-col-reverse md:flex-row md:space-x-8">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <Image src={commitedour} alt="commitedour" />
          </div>
          <div className="md:w-1/2 space-y-4">
            <h1 className="text-2xl font-bold">MISSION</h1>
            <p className="pb-5 md:mb-0 lg:pb-0">
              At Texon Limited, our mission is to deliver bespoke software
              solutions that surpass client expectations and propel their
              success in the dynamic digital landscape. We are dedicated to
              leveraging the latest technologies, fostering a culture of
              continuous learning and innovation, and building enduring
              partnerships.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
