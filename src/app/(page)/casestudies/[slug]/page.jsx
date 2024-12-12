import { FaArrowRight } from "react-icons/fa";
import {
  FiAward,
  FiBarChart,
  FiCheckCircle,
  FiCpu,
  FiGlobe,
  FiTarget,
  FiUsers,
} from "react-icons/fi";
import { IoMdArrowDropright } from "react-icons/io";

const ProjectDetails = () => {
  return (
    <div className="min-h-screen max-w-screen-xl m-auto">
      <div className=" min-h-screen p-5">
        <div className=" mx-auto  ">
          <div className="group shadow-xl  relative rounded-[30px] overflow-hidden w-full ">
            <div className="">
              <div className="relative lg:h-[400px] md:h-[300px] h-[200px] overflow-hidden  bg-black">
                <img
                  src={
                    "https://i.ibb.co/mRhgss9/b92d6a206512051-66cdd9095be5f.png"
                  }
                  alt={"this is a placeholder"}
                  className="absolute top-0 w-full h-auto transition-transform duration-500 ease-in-out group-hover:translate-y-[-80%]"
                />
              </div>
            </div>
            <div className="absolute group-hover:opacity-100 transition-all duration-500 opacity-0 bottom-4   w-full px-4">
              <div className="   flex  w-full bg-black/60 border-white rounded-full    justify-between items-center inset-0 py-5 px-5">
                <h1 className="lg:text-4xl md:text-2xl text-xl font-bold text-white mt text-left">
                  Unipolar Automation Technologies
                </h1>
                <button className="bg-primry flex items-center gap-3 rounded-full px-3 py-3 text-white">
                  Explore <FaArrowRight></FaArrowRight>{" "}
                </button>
              </div>
            </div>
          </div>

          <div className="p-8 mt-10 bg-white rounded-[30px]">
            <div className="flex items-center mb-6">
              <FiGlobe className="text-2xl text-primry mr-2" />
              <h2 className="text-2xl font-semibold">Project Overview</h2>
            </div>
            <p className="text-slate-700 mb-6">
              A prominent company in the automation sector working with public
              and private organizations to deliver automation technologies.
              Based in Bangladesh, Unipolar Automation Technologies aims to
              promote their brand and increase business growth through a
              professional website.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <div className="flex items-center mb-4">
                  <FiTarget className="text-2xl text-primry mr-2" />
                  <h3 className="text-xl font-semibold">Project Objectives</h3>
                </div>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-center">
                    <IoMdArrowDropright className="text-primry mr-2" />
                    Provide a user-friendly and showroom-like experience
                  </li>
                  <li className="flex items-center">
                    <IoMdArrowDropright className="text-primry mr-2" />
                    Create a unique and visually stunning UX/UI design
                  </li>
                  <li className="flex items-center">
                    <IoMdArrowDropright className="text-primry mr-2" />
                    Rank well in usability and enhance user interaction
                  </li>
                  <li className="flex items-center">
                    <IoMdArrowDropright className="text-primry mr-2" />
                    Deliver super web performance and high-speed loading
                  </li>
                  <li className="flex items-center">
                    <IoMdArrowDropright className="text-primry mr-2" />
                    Generate various analytics and reports for growth strategies
                  </li>
                  <li className="flex items-center">
                    <IoMdArrowDropright className="text-primry mr-2" />
                    Develop a fully automated system
                  </li>
                </ul>
              </div>

              <div>
                <div className="flex items-center mb-4">
                  <FiCheckCircle className="text-2xl text-primry mr-2" />
                  <h3 className="text-xl font-semibold">Key Features</h3>
                </div>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-center">
                    <IoMdArrowDropright className="text-primry mr-2" />
                    Attractive user experience and UI design
                  </li>
                  <li className="flex items-center">
                    <IoMdArrowDropright className="text-primry mr-2" />
                    Category-based products and services display
                  </li>
                  <li className="flex items-center">
                    <IoMdArrowDropright className="text-primry mr-2" />
                    Shipping eligibility control
                  </li>
                  <li className="flex items-center">
                    <IoMdArrowDropright className="text-primry mr-2" />
                    Product price and quantity synchronization
                  </li>
                  <li className="flex items-center">
                    <IoMdArrowDropright className="text-primry mr-2" />
                    Price quotation, product review, and rating system
                  </li>
                  <li className="flex items-center">
                    <IoMdArrowDropright className="text-primry mr-2" />
                    Real-time chatbot and social media integration
                  </li>
                </ul>
              </div>
            </div>

            <div className="mb-8">
              <div className="flex items-center mb-4">
                <FiCpu className="text-2xl text-primry mr-2" />
                <h3 className="text-xl font-semibold">Technologies Used</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  "Next.js",
                  "React",
                  "Django",
                  "Python",
                  "PostgreSQL",
                  "Material-UI",
                  "TailwindCSS",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="bg-primry/20 text-primry px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <div className="flex items-center mb-4">
                <FiUsers className="text-2xl text-primry mr-2" />
                <h3 className="text-xl font-semibold">Project Challenges</h3>
              </div>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-center">
                  <IoMdArrowDropright className="text-primry mr-2" />
                  Showcase services and products uniquely
                </li>
                <li className="flex items-center">
                  <IoMdArrowDropright className="text-primry mr-2" />
                  Highlight partner organizations, testimonials, and successful
                  projects
                </li>
                <li className="flex items-center">
                  <IoMdArrowDropright className="text-primry mr-2" />
                  Present team, blogs, careers, and quotations dynamically
                </li>
                <li className="flex items-center">
                  <IoMdArrowDropright className="text-primry mr-2" />
                  Implement high technology as per client requirements
                </li>
              </ul>
            </div>

            <div>
              <div className="flex items-center mb-4">
                <FiAward className="text-3xl text-primry mr-3" />
                <h3 className="text-2xl font-semibold">Solutions Provided</h3>
              </div>
              <p className="text-slate-700 mb-4">
                Developed using Django (Python framework) and Next.js, the
                website includes:
              </p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-center">
                  <IoMdArrowDropright className="text-primry mr-2" />
                  Product categories and filtering
                </li>
                <li className="flex items-center">
                  <IoMdArrowDropright className="text-primry mr-2" />
                  New inventory system
                </li>
                <li className="flex items-center">
                  <IoMdArrowDropright className="text-primry mr-2" />
                  Client connection functionality
                </li>
                <li className="flex items-center">
                  <IoMdArrowDropright className="text-primry mr-2" />
                  Testimonials and partner program
                </li>
                <li className="flex items-center">
                  <IoMdArrowDropright className="text-primry mr-2" />
                  Dynamic blog and careers sections
                </li>
                <li className="flex items-center">
                  <IoMdArrowDropright className="text-primry mr-2" />
                  High performance and fast loading
                </li>
              </ul>
            </div>

            <div>
              <div className="flex items-center my-4">
                <FiBarChart className="text-2xl text-primry mr-2" />
                <h3 className="text-xl font-semibold">Project Results</h3>
              </div>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-center">
                  <IoMdArrowDropright className="text-primry mr-2" />
                  Increased customer engagement and sales through high-speed
                  loading
                </li>
                <li className="flex items-center">
                  <IoMdArrowDropright className="text-primry mr-2" />
                  Generated reports for customer retention and marketing
                  strategies
                </li>
                <li className="flex items-center">
                  <IoMdArrowDropright className="text-primry mr-2" />
                  Enabled smooth operation with a fully automated system
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
