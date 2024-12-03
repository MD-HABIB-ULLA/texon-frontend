import HeadingTitle from "@/components/common/title/headingTitle";
import Image from "next/image";
import automation from "../../../../../public/services/automation.svg";
import aws from "../../../../../public/services/aws.svg";
import business from "../../../../../public/services/business.svg";
import itinfrastructure from "../../../../../public/services/itinfrastructure.svg";
import mobile from "../../../../../public/services/mobile.svg";
import web from "../../../../../public/services/web.svg";
import { FaDatabase } from "react-icons/fa";
import { FiDatabase } from "react-icons/fi";

const servicesData = [
  {
    id: 1,
    title: "Web Design & Development",
    description:
      "Business performance and operational agility depend on the processes you set, manage your business digitally.",
    image: web, // Directly reference the imported image
    icon: <FiDatabase className="w-4 h-4 text-white" />,
  },
  {
    id: 2,
    title: "Mobile Apps Development",
    description:
      "With a custom web application, you will be able to fully implement your business idea and own a user-friendly website.",
    image: mobile,
    icon: <FiDatabase className="w-4 h-4 text-white" />,
  },
  {
    id: 3,
    title: "Business Management Software",
    description:
      "Streamline your business processes with efficient management tools and enhanced operational agility.",
    image: business,
    icon: <FiDatabase className="w-4 h-4 text-white" />,
  },
  {
    id: 4,
    title: "AI & Automation",
    description:
      "Integrate cutting-edge AI and automation technologies to optimize workflows and enhance productivity.",
    image: automation,
    icon: <FiDatabase className="w-4 h-4 text-white" />,
  },
  {
    id: 5,
    title: "AWS & Cloud Computing",
    description:
      "Leverage the power of cloud computing to scale your applications and ensure secure data storage.",
    image: aws,
    icon: <FiDatabase className="w-4 h-4 text-white" />,
  },
  {
    id: 6,
    title: "IT Infrastructure Solutions",
    description:
      "Enhance your IT systems with robust infrastructure solutions tailored to your business needs.",
    image: itinfrastructure,
    icon: <FiDatabase className="w-4 h-4 text-white" />,
  },
];

export default function CoreServices() {
  return (
    <div className="max-w-screen-xl mx-auto pb-10">
      <div className="px-2">
        <h1 className="text-center text-xl">What We Do</h1>
        <div className="">
          <HeadingTitle
            heading={<>Core Services and Competencies</>}
            subHeading={
              <div className="text-base">
                We transform your ideas into accomplished technology solutions.{" "}
                <br />
                Our team of professional developers has in-depth knowledge of
                all technologies and trends.
              </div>
            }
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-8 md:pt-10">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="relative bg-transparent h-[492px] group"
            >
              {/* Front Side */}
              <div className="absolute h-[100%] w-full group-hover:opacity-0 transition-opacity duration-300">
                <div className="h-full relative w-full bg-transparent">
                  <Image
                    src={service.image}
                    alt={service.title}
                    className="rounded-t-lg h-full mx-auto"
                    width={500}
                    height={300}
                  />
                  <div className="h-[25%] absolute bottom-0 w-full ">
                    <div className="w-full text-left p-4 flex flex-col justify-end h-full">
                      <p className="font-bold text-3xl mt-4">{service.title}</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Back Side */}
              <div className="h-[26%] bg-transparent"></div>
              <div className="h-[74%] bg-white rounded-xl">
                <div className="opacity-0 flex flex-col items-center justify-center bg-white p-5 group-hover:opacity-100 transition-opacity duration-300 rounded-lg h-full">
                  <section className="w-full max-w-4xl h-full mx-auto p-1">
                    <div className="relative h-full">
                      <div className="absolute top-0 right-0">
                        <div className="bg-primry p-3 rounded-full">
                          {service.icon}
                        </div>
                      </div>
                      <div className="space-y-6 h-full flex flex-col justify-between">
                        <h1 className="text-2xl font-bold tracking-tight">
                          {service.title}
                        </h1>
                        <p className="text-base leading-relaxed">
                          {service.description}
                        </p>
                        <div className="flex justify-start w-full">
                          <button className="py-2 px-5 rounded-lg raleway bg-primry hover:bg-blue text-white cursor-pointer font-medium">
                            Read More
                          </button>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
