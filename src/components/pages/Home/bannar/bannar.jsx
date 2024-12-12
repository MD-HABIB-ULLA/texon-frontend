/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import clutch from "../../../../../public/company/clutch-logo-2D745B01F0-seeklogo.com 1.svg";
import google from "../../../../../public/company/Current-Google-logo-2015-2023-600x203 1.svg";
import trustpilot from "../../../../../public/company/trustpilot 1.svg";

export default function Bannar() {
  return (
    <div className="max-w-screen-xl mx-auto text-charleston">
      <div className="text-center space-y-2 pt-8 md:pt-14 lg:pt-28 md:space-y-8 px-2">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[80px] font-semibold">
          Empowering <br /> Entrepreneurs <br /> Through Technology
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-[20px]">
          We're geared up to empower you with cutting-edge solutions, from
          software development to <br /> cloud services, AI, and machine
          learning, with 100% project delivery success.
        </p>
        <div>
          <button className="px-5 py-2 text-base sm:text-lg md:text-xl rounded-lg raleway bg-primry hover:bg-blue text-white cursor-pointer font-medium mt-5 md:mt-0">
            <a>Get a Quotation</a>
          </button>
          <button className="px-5 py-2 text-base sm:text-lg md:text-xl rounded-lg raleway bg-[#252432] hover:bg-blue text-white cursor-pointer ms-1 mt-7 md:mt-0 md:ms-5 font-medium">
            View Portfolio
          </button>
        </div>

        <div className="py-7 md:py-14 px-1">
          <div className="flex flex-wrap justify-center md:justify-start gap-4 w-full md:w-1/2">
            <div className="flex-1 w-full sm:w-1/2 md:w-1/3 text-center md:text-left pt-1">
              <Image src={google} alt="google" className="mx-auto md:mx-0" />
              <div className="flex items-center justify-center md:justify-start mt-2">
                <p className="font-bold text-xl">4.8</p>
                <span className="text-yellow flex items-center ml-2">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </span>
              </div>
            </div>
            <div className="flex-1 w-full sm:w-1/2 md:w-1/3 text-center md:text-left pt-2">
              <Image src={clutch} alt="clutch" className="mx-auto md:mx-0" />
              <div className="flex items-center justify-center md:justify-start pt-3">
                <p className="font-bold text-xl">4.8</p>
                <span className="text-yellow flex items-center ml-2">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </span>
              </div>
            </div>
            <div className="flex-1 w-full sm:w-1/2 md:w-1/3 text-center md:text-left">
              <Image
                src={trustpilot}
                alt="trustpilot"
                className="mx-auto md:mx-0"
              />
              <div className="flex items-center justify-center md:justify-start mt-2">
                <p className="font-bold text-xl">4.8</p>
                <span className="text-yellow flex items-center ml-2">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}





// /* eslint-disable react/no-unescaped-entities */
// import Image from "next/image";
// import { FaCloud, FaCode, FaRobot, FaStar } from "react-icons/fa";
// import clutch from "../../../../../public/company/clutch-logo-2D745B01F0-seeklogo.com 1.svg";
// import google from "../../../../../public/company/Current-Google-logo-2015-2023-600x203 1.svg";
// import trustpilot from "../../../../../public/company/trustpilot 1.svg";
// import clientMeeting from "../../../../../public/images/client-meeting.png"

// export default function Bannar() {
//   const serviceIcons = [
//     {
//       icon: FaCode,
//       title: "Software Development",
//       description: "Cutting-edge solutions",
//     },
//     {
//       icon: FaCloud,
//       title: "Cloud Services",
//       description: "Scalable infrastructure",
//     },
//     {
//       icon: FaRobot,
//       title: "AI & Machine Learning",
//       description: "Intelligent innovations",
//     },
//   ];

//   const ratings = [
//     { logo: google, name: "Google" },
//     { logo: clutch, name: "Clutch" },
//     { logo: trustpilot, name: "Trustpilot" },
//   ];
//   return (
//     <div className=" flex items-center bg-gradient-to-br ">
//       <div className="max-w-screen-xl mx-auto px-4 py-16 grid lg:grid-cols-2 gap-12 items-center">
//         {/* Content Section */}
//         <div className="space-y-6">
//           <div className="bg-white/70 border border-white backdrop-blur-xl rounded-2xl p-6 shadow-lg">
//             <h1 className="text-4xl md:text-5xl font-extrabold text-blue-800 mb-4 leading-tight">
//               Empowering{" "}
//               <span
//                 style={{
//                   background: "linear-gradient(to right, #60a5fa, #38bdf8)",
//                   WebkitBackgroundClip: "text",
//                   WebkitTextFillColor: "transparent",
//                 }}
//               >
//                 Entrepreneurs
//               </span>
//               <span className="block  text-3xl md:text-4xl">
//                 Through Technology
//               </span>
//             </h1>
//             <p className="text-slate-600 text-lg mb-6">
//               We transform innovative ideas into powerful digital solutions,
//               delivering 100% project success through advanced software
//               development, cloud services, and AI-driven technologies.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4">
//               <button className="px-6 py-3 bg-primry hover:bg-primry/90 text-white rounded-lg transition-colors font-semibold shadow-md">
//                 Get a Quotation
//               </button>
//               <button className="px-6 py-3 bg-white border border-primry/20 text-primry hover:bg-sky-50 rounded-lg transition-colors font-semibold shadow-md">
//                 View Portfolio
//               </button>
//             </div>
//           </div>

//           {/* Service Icons */}
//           <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
//             {serviceIcons.map(({ icon: Icon, title, description }, index) => (
//               <div
//                 key={index}
//                 className="bg-white/80 backdrop-blur-sm rounded-xl p-4 text-center shadow-md hover:shadow-lg transition-all duration-300 group"
//               >
//                 <div className="bg-blue-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-100 transition-colors">
//                   <Icon className="text-blue-600 text-3xl group-hover:scale-110 transition-transform" />
//                 </div>
//                 <h3 className="font-bold text-blue-800">{title}</h3>
//                 <p className="text-sm text-gray-500">{description}</p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Client Image and Ratings Section */}
//         <div className="space-y-8">
//           <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
//             <Image
//               src={clientMeeting}
//               alt="Client Meeting"
//               fill
//               className="object-cover transform hover:scale-105 transition-transform duration-500"
//               priority
//             />
//             {/* Decorative elements */}
//             <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent"></div>
//             <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-100 rounded-full blur-3xl opacity-60"></div>
//             <div className="absolute -top-6 -left-6 w-32 h-32 bg-indigo-100 rounded-full blur-3xl opacity-60"></div>
//           </div>

//           {/* Ratings Section */}
//           <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg space-y-6">
//             <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
//               {ratings.map(({ logo, name }) => (
//                 <div key={name} className="text-center">
//                   <div className="relative h-10 mb-2">
//                     <Image
//                       src={logo}
//                       alt={`${name} logo`}
//                       fill
//                       className="object-contain opacity-70 hover:opacity-100 transition-opacity"
//                     />
//                   </div>
//                   <div className="flex items-center justify-center mt-2">
//                     <p className="font-bold text-xl mr-2 text-blue-800">4.8</p>
//                     <div className="flex text-yellow-500">
//                       {[...Array(5)].map((_, i) => (
//                         <FaStar key={i} className="w-4 h-4" />
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             <div className="text-center text-gray-600 italic">
//               "Trusted by 500+ businesses worldwide for innovative tech
//               solutions"
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



// /* eslint-disable react/no-unescaped-entities */
// import Image from "next/image";
// import { FaGraduationCap, FaStar } from "react-icons/fa";
// import clutch from "../../../../../public/company/clutch-logo-2D745B01F0-seeklogo.com 1.svg";
// import google from "../../../../../public/company/Current-Google-logo-2015-2023-600x203 1.svg";
// import trustpilot from "../../../../../public/company/trustpilot 1.svg";
// import { HiSparkles } from "react-icons/hi";
// import { GoRocket } from "react-icons/go";

// export default function Bannar() {
//   return (
//     <div className="max-w-screen-xl mx-auto text-charleston">
//       <div className="text-center space-y-2  px-2">
//         <div className="min-h-screen flex items-center justify-center p-4">
//           <div className="max-w-6xl mx-auto text-center relative">
//             {/* Animated background elements */}
//             <div className="absolute inset-0 grid grid-cols-2 -skew-y-12 opacity-30">
//               {[...Array(6)].map((_, i) => (
//                 <div
//                   key={i}
//                   className="h-32 bg-gradient-to-r from-primry/20 to-sky-500/20 blur-xl transform rotate-3 animate-pulse"
//                   style={{ animationDelay: `${i * 0.5}s` }}
//                 />
//               ))}
//             </div>

//             {/* Main content */}
//             <div className="relative z-10">
             

//               <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[80px] font-extrabold leading-tight tracking-tight">
//                 <span className="block bg-gradient-to-r from-primry via-primry to-sky-400 text-transparent bg-clip-text animate-gradient">
//                   Empowering
//                 </span>
//                 <span
//                   className="block sm:inline bg-gradient-to-r from-primry via-primry to-sky-400 text-transparent bg-clip-text animate-gradient"
//                   style={{ animationDelay: "0.2s" }}
//                 >
//                   Entrepreneurs
//                 </span>
//                 <br />
//                 <span className="inline-block text-white rotate-2 px-6 py-2 my-4 border-2 border-primry rounded-3xl bg-gradient-to-r from-primry/50 to-primry/10 backdrop-blur-sm transform hover:scale-105 transition-transform">
//                   Through
//                 </span>
//                 <br />
//                 <span
//                   className="inline-block -rotate-1 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 text-transparent bg-clip-text animate-gradient"
//                   style={{ animationDelay: "0.4s" }}
//                 >
//                   Technology
//                 </span>
//               </h1>

//               <p className="text-sm sm:text-base md:text-lg lg:text-[20px] text-gray-300 mt-6 max-w-3xl mx-auto leading-relaxed">
//                 We're geared up to empower you with cutting-edge solutions, from
//                 software development to cloud services, AI, and machine
//                 learning, with{" "}
//                 <span className="font-bold text-purple-400">
//                   100% project delivery success
//                 </span>
//                 .
//               </p>

//               <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
//                 <button className="group px-8 py-3 text-base sm:text-lg rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-medium hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 transform hover:-translate-y-1">
//                   <span className="flex items-center gap-2">
//                     Get a Quotation
//                     <GoRocket className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//                   </span>
//                 </button>
//                 <button className="group px-8 py-3 text-base sm:text-lg rounded-lg bg-slate-800 text-white font-medium border border-purple-500/30 hover:border-purple-500 hover:bg-slate-700 transition-all duration-300 transform hover:-translate-y-1">
//                   <span className="flex items-center gap-2">
//                     View Portfolio
//                     <HiSparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
//                   </span>
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="py-7 md:py-14 px-1">
//           <div className="flex flex-wrap justify-center md:justify-start gap-4 w-full md:w-1/2">
//             <div className="flex-1 w-full sm:w-1/2 md:w-1/3 text-center md:text-left pt-1">
//               <Image src={google} alt="google" className="mx-auto md:mx-0" />
//               <div className="flex items-center justify-center md:justify-start mt-2">
//                 <p className="font-bold text-xl">4.8</p>
//                 <span className="text-yellow flex items-center ml-2">
//                   <FaStar />
//                   <FaStar />
//                   <FaStar />
//                   <FaStar />
//                   <FaStar />
//                 </span>
//               </div>
//             </div>
//             <div className="flex-1 w-full sm:w-1/2 md:w-1/3 text-center md:text-left pt-2">
//               <Image src={clutch} alt="clutch" className="mx-auto md:mx-0" />
//               <div className="flex items-center justify-center md:justify-start pt-3">
//                 <p className="font-bold text-xl">4.8</p>
//                 <span className="text-yellow flex items-center ml-2">
//                   <FaStar />
//                   <FaStar />
//                   <FaStar />
//                   <FaStar />
//                   <FaStar />
//                 </span>
//               </div>
//             </div>
//             <div className="flex-1 w-full sm:w-1/2 md:w-1/3 text-center md:text-left">
//               <Image
//                 src={trustpilot}
//                 alt="trustpilot"
//                 className="mx-auto md:mx-0"
//               />
//               <div className="flex items-center justify-center md:justify-start mt-2">
//                 <p className="font-bold text-xl">4.8</p>
//                 <span className="text-yellow flex items-center ml-2">
//                   <FaStar />
//                   <FaStar />
//                   <FaStar />
//                   <FaStar />
//                   <FaStar />
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
