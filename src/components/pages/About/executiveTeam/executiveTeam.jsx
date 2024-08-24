import HeadingTitle from "@/components/common/title/headingTitle";
import Image from "next/image";
import Team1 from "../../../../../public/about/Mask group.svg";
import Team2 from "../../../../../public/about/Mask group (1).svg";
import Team3 from "../../../../../public/about/Mask group (2).svg";
import Team4 from "../../../../../public/about/Mask group (3).svg";

export default function ExecutiveTeam() {
  return (
    <div className="max-w-screen-xl mx-auto px-2">
      <HeadingTitle heading={"Meet the Executive Team"} />


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 my-20">
        <div className="flex place-items-end space-x-4">
          <Image src={Team1} alt="Team1" className="object-cover" />
          <div>
            <h1 className="text-2xl md:text-4xl font-semibold">
              Fabien Pinckaers • CEO
            </h1>
            <p className="mt-2 text-base md:text-lg">
              Antony is one of the lucky people in life who can say he loves
              what he does. He oversees 200+ in-house developers and looks after
              the community of 2,000 developers.
            </p>
          </div>
        </div>
        <div className="flex place-items-end space-x-4">
          <Image src={Team2} alt="Team1" className="object-cover" />
          <div>
            <h1 className="text-2xl md:text-4xl font-semibold">
              Fabien Pinckaers • CEO
            </h1>
            <p className="mt-2 text-base md:text-lg">
              Antony is one of the lucky people in life who can say he loves
              what he does. He oversees 200+ in-house developers and looks after
              the community of 2,000 developers.
            </p>
          </div>
        </div>
        <div className="flex place-items-end space-x-4">
          <Image src={Team4} alt="Team1" className="object-cover" />
          <div>
            <h1 className="text-2xl md:text-4xl font-semibold">
              Fabien Pinckaers • CEO
            </h1>
            <p className="mt-2 text-base md:text-lg">
              Antony is one of the lucky people in life who can say he loves
              what he does. He oversees 200+ in-house developers and looks after
              the community of 2,000 developers.
            </p>
          </div>
        </div>
        <div className="flex place-items-end space-x-4">
          <Image src={Team3} alt="Team1" className="object-cover" />
          <div>
            <h1 className="text-2xl md:text-4xl font-semibold">
              Fabien Pinckaers • CEO
            </h1>
            <p className="mt-2 text-base md:text-lg">
              Antony is one of the lucky people in life who can say he loves
              what he does. He oversees 200+ in-house developers and looks after
              the community of 2,000 developers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
