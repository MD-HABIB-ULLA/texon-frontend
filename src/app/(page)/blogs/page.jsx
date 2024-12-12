import HeadingTitle from "@/components/common/title/headingTitle";
import Image from "next/image";
import blog_banner from "../../../../public/blogs/blog-banner.jpg";
import chessmovecontent from "../../../../public/images/Chess move content.svg";
import customvscms from "../../../../public/images/customvscms.svg";
import edutech from "../../../../public/images/edutech.svg";
import { FiBarChart, FiUsers } from "react-icons/fi";
import { IoMdArrowDropright } from "react-icons/io";

const Page = () => {
  const blogPosts = [
    {
      image: customvscms,
      category: "Business",
      title:
        "Custom vs CMS Development: Which is Better for Long Term Business?",
      date: "June 11, 2024",
    },
    {
      image: edutech,
      category: "Technology",
      title: "Transforming Education with Cutting-Edge EdTech Solutions",
      date: "June 11, 2024",
    },
    {
      image: chessmovecontent,
      category: "Technology",
      title: "Seeking a Breakthrough in Your Current Situation",
      date: "June 11, 2024",
    },
  ];
  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="relative">
        <Image
          className="w-full h-[300px] object-cover"
          src={blog_banner}
          alt="blog_banner"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-5xl font-bold tracking-wider">
            Blogs
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Explore the Tech World
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-slate-500 sm:mt-4">
            Dive into our latest articles and stay ahead in the rapidly evolving
            tech landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((blog, index) => (
            <div
              key={index}
              className="flex flex-col cursor-pointer    overflow-hidden "
            >
              <Image
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover transition-transform duration-500 ease-in-out transform hover:scale-105"
              />
              <div className="mt-4   flex-1">
                <div className="flex flex-col  h-full ">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 bg-primry/10 text-primry rounded-full text-sm font-semibold">
                        {blog.category}
                      </span>
                      <div className="flex items-center text-slate-500 text-sm">
                        <FiUsers className="h-4 w-4 mr-1" />
                        <span>1.2k views</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                      {blog.title}
                    </h3>
                  </div>
                  <div className="flex-1 flex justify-end flex-col w-full ">
                    <div className=" flex justify-between items-center   ">
                      <div className="flex items-center  h-full text-slate-500 text-sm ">
                        <FiBarChart className="h-4 w-4 mr-1" />
                        <span>{blog.date}</span>
                      </div>
                      {/* <button className=" inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primry hover:bg-primry/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primry/50">
                        Read More
                        <IoMdArrowDropright className="h-4 w-4 ml-2" />
                      </button> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primry hover:bg-primry/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primry/50">
            View All Blogs
            <IoMdArrowDropright className="h-5 w-5 ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
