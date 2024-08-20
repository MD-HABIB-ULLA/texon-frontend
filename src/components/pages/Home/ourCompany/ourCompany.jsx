import Image from "next/image";
import Marquee from "react-fast-marquee";
import company4 from "../../../../../public/company/Logo-A3-DARK 1.svg";
import company5 from "../../../../../public/company/Logo-Bollore-DARK 1.svg";
import company2 from "../../../../../public/company/Logo-Hootsuite-DARK 1.svg";
import company1 from "../../../../../public/company/Logo-Keywords_Studios-DARK 1.svg";
import company3 from "../../../../../public/company/Logo-Quest_Trade-DARK 1.svg";

export default function OurCompany() {
  return (
    <div className="pb-5 md:pb-10 lg:pb-20">
      <div className="bg-[#A8D0FE]">
        <div className="mx-auto max-w-screen-xl py-5">
          <Marquee play pauseOnHover speed={100}>
            <div>
              <Image src={company1} className="mx-10" alt="company1"></Image>
            </div>
            <div>
              <Image src={company2} className="mx-10" alt="company2"></Image>
            </div>
            <div>
              <Image src={company3} className="mx-10" alt="company3"></Image>
            </div>
            <div>
              <Image src={company4} className="mx-10" alt="company4"></Image>
            </div>
            <div>
              <Image src={company5} className="mx-10" alt="company5"></Image>
            </div>
            <div>
              <Image src={company1} className="mx-10" alt="company3"></Image>
            </div>
            <div>
              <Image src={company2} className="mx-10" alt="company2"></Image>
            </div>
            <div>
              <Image src={company3} className="mx-10" alt="company2"></Image>
            </div>
          </Marquee>
        </div>
      </div>
    </div>
  );
}
