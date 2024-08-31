import Image from "next/image";
import team_member1 from "../../../../../public/about/team_member1.svg";
import team_member2 from "../../../../../public/about/team_member2.svg";
import team_member3 from "../../../../../public/about/team_member3.svg";
import team_member4 from "../../../../../public/about/team_member4.svg";

const teamMembers = [
  { src: team_member1, alt: "Team Member 1" },
  { src: team_member2, alt: "Team Member 2" },
  { src: team_member3, alt: "Team Member 3" },
  { src: team_member4, alt: "Team Member 4" },
];

export default function OurMember() {
  return (
    <div className="bg-[#252432] mt-5 mb-10 md:mb-20 md:mt-16 md:py-10">
      <div className="max-w-screen-2xl mx-auto">
        <div className="md:flex md:justify-between lg:flex lg:justify-between items-center gap-5">
          {teamMembers.map((member, index) => (
            <div key={index}>
              <Image
                className="object-cover w-full"
                src={member.src}
                alt={member.alt}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
