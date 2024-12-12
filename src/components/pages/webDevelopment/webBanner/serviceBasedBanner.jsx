import { FaCalendarAlt, FaList, FaShareAlt } from "react-icons/fa";
import { FiGrid, FiLayers } from "react-icons/fi";
import { IoApps } from "react-icons/io5";
import { PiTabs } from "react-icons/pi";

export default function serviceBasedBanner() {
  const bannerText = {
    title: "All-in-One Addons for Web Application",
    description: [
      "You don't need to waste your time and money anymore on searching for the right Elementor Page Builder Plugins.",
      "Here's the Best Elementor addon with 1 million+ users to help you build anything you want!",
    ],
    buttonText: "Request a Demo",
  };

  const features = [
    {
      icon: <FiGrid size={24} />,
      title: "Header & Footer Builder",
      color: "#4B9EFF",
    },
    { icon: <FaList size={24} />, title: "Megamenu Builder", color: "#FF4B93" },
    { icon: <PiTabs size={24} />, title: "Advanced Tab", color: "#4CAF50" },
    {
      icon: <FiLayers size={24} />,
      title: "Parallax Effect",
      color: "#6C5CE7",
    },
    { icon: <FaShareAlt size={24} />, title: "Social Feeds", color: "#A45EFF" },
    {
      icon: <IoApps size={24} />,
      title: "More Addons & Modules",
      subtitle: "90+",
      color: "#FF8A3D",
    },
  ];

  const stats = [
    { value: "100+", label: "Projects Completion" },
    { value: "10+", label: "Running Projects" },
    { value: "20+", label: "Team Members" },
    { value: "7+", label: "Countries Served" },
  ];

  return (
    <div className="pb-14 mt-10">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="max-w-3xl m-auto">
            <h1 className="text-[#1B0238] text-3xl sm:text-4xl lg:text-5xl font-bold max-w-4xl mx-auto leading-tight mb-8">
              {bannerText.title}
            </h1>
          </div>

          <div className="max-w-4xl mx-auto mb-12 text-gray-600">
            {bannerText.description.map((line, index) => (
              <p key={index} className="mb-2">
                {line}
              </p>
            ))}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 max-w-4xl mx-auto mb-12">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col items-center">
                <div
                  className={`transition-transform duration-300 hover:-translate-y-3 w-16 h-16 rounded-full flex items-center justify-center text-white mb-3 shadow-lg`}
                  style={{
                    background: `linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.4)), ${feature.color}`,
                    boxShadow: `0 10px 20px -5px ${feature.color}`,
                  }}
                >
                  {feature.icon}
                </div>
                <p className="text-[#1B0238] text-sm font-medium">
                  {feature.title}
                </p>
                {feature.subtitle && (
                  <p className="text-[#1B0238] text-sm font-medium">
                    {feature.subtitle}
                  </p>
                )}
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="flex items-center px-6 py-3 justify-center font-medium bg-primry hover:bg-blue rounded-2xl text-white mt-4">
              <FaCalendarAlt className="mr-2" />
              {bannerText.buttonText}
            </button>
          </div>
        </div>

        <div className="bg-[#111827] mt-12 rounded-lg">
          <div className="py-8">
            <div className="max-w-screen-lg mx-auto px-6 lg:px-8">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center text-white">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className={`${
                      index < stats.length - 1
                        ? "border-b sm:border-b-0 sm:border-r border-white pr-6 sm:pr-8"
                        : "pr-6 sm:pr-8"
                    }`}
                  >
                    <h1 className="text-3xl font-semibold">{stat.value}</h1>
                    <p className="text-lg mt-2">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
