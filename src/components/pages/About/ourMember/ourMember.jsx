import Image from "next/image";
import Marquee from "react-fast-marquee"; // Import the marquee package
import team_member1 from "../../../../../public/about/team_member1.svg";
import team_member2 from "../../../../../public/about/team_member2.svg";
import team_member3 from "../../../../../public/about/team_member3.svg";
import team_member4 from "../../../../../public/about/team_member4.svg";
import team_member5 from "../../../../../public/about/team_member2.svg";

const teamMembers = [
  { src: team_member1, alt: "Team Member 1" },
  { src: team_member2, alt: "Team Member 2" },
  { src: team_member3, alt: "Team Member 3" },
  { src: team_member4, alt: "Team Member 4" },
  { src: team_member5, alt: "Team Member 5" },
];

export default function OurMember() {
  return (
    <div className="bg-[#252432] mt-5 mb-10 md:mb-20 md:mt-16 md:py-10">
      <div className="max-w-screen-2xl mx-auto">
        <Marquee speed={60} gradient={false}>
          {" "}
          {/* Adjust the speed as needed */}
          {teamMembers.map((member, index) => (
            <div key={index} className="px-5">
              {" "}
              {/* Adjust spacing between items */}
              <Image
                className="object-cover"
                src={member.src}
                alt={member.alt}
              />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}
