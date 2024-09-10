import HeadingTitle from "@/components/common/title/headingTitle";
import Image from "next/image";
import development_team_1 from "../../../../../public/about/development_team_1.svg";
import development_team_2 from "../../../../../public/about/development_team_2.svg";
import development_team_3 from "../../../../../public/about/development_team_3.svg";

export default function DevelopmentTeam() {
  return (
    <div className="max-w-screen-xl mx-auto px-2 py-5">
      <div className="pb-5">
        <HeadingTitle
          heading={"Meet the Development Team"}
          subHeading={
            <>We have a nice Family with Expert, Happy, and Cheerful People</>
          }
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 mb-5">
        {/* Team Member 1 */}
        <div className="flex justify-center">
          <div>
            <Image src={development_team_1} alt="Development Team Member 1" />
            <div className="mt-4">
              <h1 className="text-xl md:text-2xl lg:text-2xl font-semibold">
                Fabien Pinckaers
              </h1>
              <p>Product Designer</p>
            </div>
          </div>
        </div>

        {/* Team Member 2 */}
        <div className="flex justify-center">
          <div>
            <Image
              className="md:mt-10"
              src={development_team_2}
              alt="Development Team Member 2"
            />
            <div className="mt-4">
              <h1 className="text-xl md:text-2xl lg:text-2xl font-semibold">
                John Doe
              </h1>
              <p>Frontend Developer</p>
            </div>
          </div>
        </div>

        {/* Team Member 3 */}
        <div className="flex justify-center">
          <div>
            <Image src={development_team_3} alt="Development Team Member 3" />
            <div className="mt-4">
              <h1 className="text-xl md:text-2xl lg:text-2xl font-semibold">
                Jane Smith
              </h1>
              <p>Backend Developer</p>
            </div>
          </div>
        </div>

        {/* Team Member 4 */}
        <div className="flex justify-center">
          <div>
            <Image src={development_team_1} alt="Development Team Member 4" />
            <div className="mt-4">
              <h1 className="text-xl md:text-2xl lg:text-2xl font-semibold">
                Michael Johnson
              </h1>
              <p>UI/UX Designer</p>
            </div>
          </div>
        </div>

        {/* Team Member 5 */}
        <div className="flex justify-center">
          <div>
            <Image
              className="md:mt-10"
              src={development_team_2}
              alt="Development Team Member 5"
            />
            <div className="mt-4">
              <h1 className="text-xl md:text-2xl lg:text-2xl font-semibold">
                Emily Davis
              </h1>
              <p>Project Manager</p>
            </div>
          </div>
        </div>

        {/* Team Member 6 */}
        <div className="flex justify-center">
          <div>
            <Image src={development_team_3} alt="Development Team Member 6" />
            <div className="mt-4">
              <h1 className="text-xl md:text-2xl lg:text-2xl font-semibold">
                Daniel Brown
              </h1>
              <p>DevOps Engineer</p>
            </div>
          </div>
        </div>

        {/* Team Member 7 */}
        <div className="flex justify-center">
          <div>
            <Image src={development_team_1} alt="Development Team Member 7" />
            <div className="mt-4">
              <h1 className="text-xl md:text-2xl lg:text-2xl font-semibold">
                Jessica Wilson
              </h1>
              <p>QA Engineer</p>
            </div>
          </div>
        </div>

        {/* Team Member 8 */}
        <div className="flex justify-center">
          <div>
            <Image
              className="md:mt-10"
              src={development_team_2}
              alt="Development Team Member 8"
            />
            <div className="mt-4">
              <h1 className="text-xl md:text-2xl lg:text-2xl font-semibold">
                Christopher Lee
              </h1>
              <p>Full Stack Developer</p>
            </div>
          </div>
        </div>

        {/* Team Member 9 */}
        <div className="flex justify-center">
          <div>
            <Image src={development_team_3} alt="Development Team Member 9" />
            <div className="mt-4">
              <h1 className="text-xl md:text-2xl lg:text-2xl font-semibold">
                Olivia Harris
              </h1>
              <p>Data Scientist</p>
            </div>
          </div>
        </div>
      </div>
      <div className="pb-0 flex justify-center">
        <a className="font-medium px-10 py-2 text-base rounded-lg raleway bg-primry hover:bg-blue text-white cursor-pointer w-fit">
          See All
        </a>
      </div>
    </div>
  );
}
