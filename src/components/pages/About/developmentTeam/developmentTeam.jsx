import HeadingTitle from "@/components/common/title/headingTitle";
import Image from "next/image";
import development_team_1 from "../../../../../public/about/development_team_1.svg";
import {
  default as development_team_2,
  default as development_team_3,
} from "../../../../../public/about/development_team_3.svg";

export default function DevelopmentTeam() {
  return (
    <div className="max-w-screen-xl mx-auto pt-20">
      <div className="px-2">
        <HeadingTitle
          heading={"Meet the Development Team"}
          subHeading={
            <>We have a nice Family with Expert, Happy, and Cheerful People</>
          }
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-10">
          <div className="flex justify-center">
            <div>
              <Image src={development_team_1} alt="Development Team Member 1" />
              <div className="mt-4">
                <h1 className="lg:text-2xl md:text-2xl text-xl font-semibold">
                  Fabien Pinckaers
                </h1>
                <p>Product Designer</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div>
              <Image
                className="mt-10"
                src={development_team_2}
                alt="Development Team Member 1"
              />
              <div className="mt-4">
                <h1 className="lg:text-2xl md:text-2xl text-xl font-semibold">
                  Fabien Pinckaers
                </h1>
                <p>Product Designer</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div>
              <Image src={development_team_3} alt="Development Team Member 1" />
              <div className="mt-4">
                <h1 className="lg:text-2xl md:text-2xl text-xl font-semibold">
                  Fabien Pinckaers
                </h1>
                <p>Product Designer</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div>
              <Image src={development_team_1} alt="Development Team Member 1" />
              <div className="mt-4">
                <h1 className="lg:text-2xl md:text-2xl text-xl font-semibold">
                  Fabien Pinckaers
                </h1>
                <p>Product Designer</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div>
              <Image
                className="mt-10"
                src={development_team_2}
                alt="Development Team Member 1"
              />
              <div className="mt-4">
                <h1 className="lg:text-2xl md:text-2xl text-xl font-semibold">
                  Fabien Pinckaers
                </h1>
                <p>Product Designer</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div>
              <Image src={development_team_3} alt="Development Team Member 1" />
              <div className="mt-4">
                <h1 className="lg:text-2xl md:text-2xl text-xl font-semibold">
                  Fabien Pinckaers
                </h1>
                <p>Product Designer</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div>
              <Image src={development_team_1} alt="Development Team Member 1" />
              <div className="mt-4">
                <h1 className="lg:text-2xl md:text-2xl text-xl font-semibold">
                  Fabien Pinckaers
                </h1>
                <p>Product Designer</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div>
              <Image
                className="mt-10"
                src={development_team_2}
                alt="Development Team Member 1"
              />
              <div className="mt-4">
                <h1 className="lg:text-2xl md:text-2xl text-xl font-semibold">
                  Fabien Pinckaers
                </h1>
                <p>Product Designer</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div>
              <Image src={development_team_3} alt="Development Team Member 1" />
              <div className="mt-4">
                <h1 className="lg:text-2xl md:text-2xl text-xl font-semibold">
                  Fabien Pinckaers
                </h1>
                <p>Product Designer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
