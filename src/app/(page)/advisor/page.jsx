import HeadingTitle from "@/components/common/title/headingTitle";
import Image from "next/image";
import humayun_ahmed from "../../../../public/advisor/Humayun ahmed.jpg";
import mehedi_shamim from "../../../../public/advisor/Mehedi Shamim.jpg";
import tosar_chandra_das from "../../../../public/advisor/TosarChandraDas.jpg";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Page = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-2 min-h-screen">
      <div className="py-10">
        <HeadingTitle
          heading={<>Fueling Success Together!</>}
          subHeading={<>Meet Our Team</>}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pb-10 md:pb-20">
        {/* Team Member Card */}
        {[
          {
            name: "Mehedi Shamim",
            role: "Business Strategies and Marketing Advisor",
            img: mehedi_shamim,
          },
          {
            name: "Humayun Ahmed",
            role: "Corporate Sales and Business Advisor",
            img: humayun_ahmed,
          },
          {
            name: "Tosar Chandra Das",
            role: "Business Development Consultant",
            img: tosar_chandra_das,
          },
        ].map((member, index) => (
          <div
            className="relative group overflow-hidden rounded-[30px]"
            key={index}
          >
            <Image
              src={member.img}
              className="w-full h-auto object-cover"
              alt={member.name}
            />
            <div className="absolute inset-0 flex flex-col items-center justify-end bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
              <div className="text-center text-white mb-4">
                <h3 className="text-xl font-semibold md:text-2xl">
                  {member.name}
                </h3>
                <p className="text-sm md:text-base">{member.role}</p>
              </div>
              <div className="flex space-x-4">
                {/* Social Icons */}
                <a
                  href="#"
                  className="text-[#0077b5] hover:text-[#005582] transition"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin size={24} />
                </a>
                <a
                  href="#"
                  className="text-[#1DA1F2] hover:text-[#0d8ae5] transition"
                  aria-label="Twitter"
                >
                  <FaTwitter size={24} />
                </a>
                <a
                  href="#"
                  className="text-[#fff] hover:text-[#ffffffa2] transition"
                  aria-label="GitHub"
                >
                  <FaGithub size={24} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
