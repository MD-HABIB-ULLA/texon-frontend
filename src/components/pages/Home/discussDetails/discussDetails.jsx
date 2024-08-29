import Image from "next/image";
import gestImage from "../../../../../public/images/gest.svg";
import productDevelopmentImage from "../../../../../public/images/product development.svg";
import logos from "../../../../../public/svgs/logos_whatsapp-icon.svg";

export default function DiscussDetails() {
  return (
    <div className="max-w-screen-xl mx-auto py-7 md:py-12 lg:py-16 px-2">
      <div className="flex flex-col lg:flex-row gap-5">
        {/* Section 1 - 75% Width on Large Screens */}
        <div className="w-full lg:w-3/4 flex items-center justify-between bg-charleston text-white rounded-lg">
          <div className="space-y-4 lg:ms-8 ms-0 p-5">
            <h1 className="font-bold text-xl md:pb-5 lg:pb-5">
              Got a project in mind?
            </h1>
            <p className="font-bold lg:text-4xl md:text-4xl text-2xl lg:pb-24 md:pb-14">
              Let’s Discuss in Detail
            </p>

            <button className="py-2 px-5 rounded-lg raleway bg-primry hover:bg-blue text-white cursor-pointer font-medium">
              Schedul a Call
            </button>
          </div>
          <div className="hidden md:block">
            <Image
              src={productDevelopmentImage}
              className="pr-5"
              alt="Product Development"
            />
          </div>
        </div>

        {/* Section 2 */}
        <div className="w-full lg:flex-1 bg-primry text-white px-5 rounded-lg flex flex-col justify-center space-y-5 pb-5 md:pb-0 lg:pb-0">
          <div className="mt-5 md:mt-5 lg:mt-0">
            <Image className="rounded-full" src={gestImage} alt="Gest" />
          </div>
          <h1 className="text-xl mb-4">
            My name is Ashraful, Head of Business Development at Texon. I will
            answer all your questions.
          </h1>
          <p className="py-2 px-5 rounded-lg raleway bg-white hover:bg-black text-primry cursor-pointer font-semibold flex items-center w-fit">
            Ask Question
            <Image src={logos} className="ms-5" alt="logos"></Image>
          </p>
        </div>
      </div>
    </div>
  );
}
