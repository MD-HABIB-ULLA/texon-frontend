import { FaCalendarAlt } from "react-icons/fa";

export default function WebBanner() {
  return (
    <div className="bg-[#111827] py-10">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex flex-col items-center">
          <h1 className="text-white text-center text-3xl md:text-4xl font-medium mb-4">
            Web Design & Development
          </h1>
          <button className="flex items-center px-5 py-2 justify-center font-medium bg-primry hover:bg-blue text-white mt-4">
            <FaCalendarAlt className="mr-2" />
            Request a Demo
          </button>
        </div>
      </div>
    </div>
  );
}
