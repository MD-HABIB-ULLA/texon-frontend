import HeadingTitle from "@/components/common/title/headingTitle";
import Image from "next/image";
import Team2 from "../../../../../public/about/Mask group (1).svg";
import Team3 from "../../../../../public/about/Mask group (2).svg";
import Team4 from "../../../../../public/about/Mask group (3).svg";
import Team1 from "../../../../../public/about/Mask group.svg";

export default function ExecutiveTeam() {
  return (
    <div className="max-w-screen-xl mx-auto px-2">
      <HeadingTitle heading={"Meet the Executive Team"} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-10 lg:mb-20">
        <div className="lg:flex lg:place-items-end">
          <Image
            src={Team1}
            alt="Team1"
            className="object-cover mb-5 md:mb-0 lg:mb-0 pr-0 md:pr-5 lg:pr-5"
          />
          <div>
            <h1 className="lg:text-2xl md:text-xl text-xl font-semibold">
              Fabien Pinckaers • CEO
            </h1>
            <p className="mt-2">
              Antony is one of the lucky people in life who can say he loves
              what he does. He oversees 200+ in-house developers and looks after
              the community of 2,000 developers.
            </p>
          </div>
        </div>
        <div className="lg:flex lg:place-items-end">
          <Image
            src={Team2}
            alt="Team2"
            className="object-cover mb-5 md:mb-0 lg:mb-0 pr-0 md:pr-5 lg:pr-5"
          />
          <div>
            <h1 className="lg:text-2xl md:text-xl text-xl font-semibold">
              Antony Lesuisse • CTO
            </h1>
            <p className="mt-2">
              Antony is one of the lucky people in life who can say he loves
              what he does. He oversees 200+ in-house developers and looks after
              the community of 2,000 developers.
            </p>
          </div>
        </div>
        <div className="lg:flex lg:place-items-end mt-0 md:mt-10 lg:mt-10">
          <Image
            src={Team4}
            alt="Team4"
            className="object-cover mb-5 md:mb-0 lg:mb-0 pr-0 md:pr-5 lg:pr-5"
          />
          <div>
            <h1 className="lg:text-2xl md:text-xl text-xl font-semibold">
              Alessandro Mazzocchetti • CFO
            </h1>
            <p className="mt-2">
              Antony is one of the lucky people in life who can say he loves
              what he does. He oversees 200+ in-house developers and looks after
              the community of 2,000 developers.
            </p>
          </div>
        </div>
        <div className="lg:flex lg:place-items-end mt-0 md:mt-10 lg:mt-10">
          <Image
            src={Team3}
            alt="Team5"
            className="object-cover mb-5 md:mb-0 lg:mb-0 pr-0 md:pr-5 lg:pr-5"
          />
          <div>
            <h1 className="lg:text-2xl md:text-xl text-xl font-semibold">
              Sébastien Bruyr • CCO
            </h1>
            <p className="mt-2">
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
