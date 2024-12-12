import React from "react";
import { FaBookOpen, FaCalendar, FaFacebookF, FaLinkedinIn, FaShare, FaTwitterSquare, FaUser, FaWhatsapp } from "react-icons/fa";
import { FiBarChart, FiSettings, FiTarget } from "react-icons/fi";
import { MdArticle } from "react-icons/md";
import { PiTarget } from "react-icons/pi";

function Page() {
  const blogPost = {
    title: "Transforming Education with Cutting Edge EdTech Solutions",
    author: "Texon Limited",
    date: "15 MAY 2023",
    content: `At Texon Limited, we're passionate about using technology to enhance the way people learn and grow. Our team of experts specializes in edtech app development, and we use our skills and experience to deliver cutting-edge solutions that help educators and institutions bring their content to life. We understand that education is changing, and that's why we're dedicated to developing edtech solutions that are designed to meet the unique needs of the education sector. Whether you're an educator looking to create an interactive learning app, or an institution seeking to enhance its online presence, we have the tools and expertise to help you achieve your goals. Our edutech app development services include mobile app design and development, gamification, augmented reality, and more. We use the latest technologies to deliver solutions that are engaging, interactive, and designed to help you deliver your content effectively. Transform the way people learn and grow with Texon. Contact us today to learn more about our edtech app development services and how we can help you achieve your online goals.`,
    focusPoints: [
      "User-Friendly Interface: The platform should be easy to navigate, with a user-friendly interface that allows educators and students to quickly find what they need.",
      "Content Management: The platform should have a robust content management system that allows educators to easily upload and manage their course materials, including text, images, videos, and more.",
      "Interactive Tools: The platform should include interactive tools, such as quizzes, polls, and gamification, to help keep students engaged and motivated.",
      "Mobile-Responsive Design: The platform should be designed to be mobile-responsive, allowing students to access course materials and participate in activities from their mobile devices.",
      "Security and Data Privacy: The platform should be secure and adhere to data privacy regulations, protecting sensitive student information and ensuring that all user data is handled responsibly.",
      "Integration with Other Tools: The platform should be able to integrate with other tools and platforms that educators and students use, such as learning management systems and student information systems.",
      "Accessibility: The platform should be accessible to all users, including those with disabilities, and should meet accessibility standards to ensure equal access to education for all.",
    ],
    keyFunctionalities: [
      "Course Management: The platform should allow educators to create and manage their courses, including setting up course structures, uploading course materials, and organizing assessments and activities.",
      "Student Management: The platform should allow educators to manage their students, including adding and removing students, tracking their progress, and providing feedback and grades.",
      "Content Delivery: The platform should allow educators to deliver their course content in a variety of formats, including text, images, videos, and interactive elements.",
      "Assessment and Grading: The platform should support assessment and grading, including the ability to create quizzes, assignments, and exams, as well as provide grades and feedback to students.",
      "Collaboration and Communication: The platform should support collaboration and communication between educators and students, including discussion forums, private messaging, and real-time chat.",
      "Reporting and Analytics: The platform should provide reporting and analytics tools that allow educators to track student progress, assess the effectiveness of their teaching methods, and make data-driven decisions.",
    ],
  };

  return (
    <div className="min-h-screen ">
      {/* Hero Section */}
      <div className="relative h-96">
        <img
          src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
          alt="Education Technology"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
              {blogPost.title}
            </h1>
            <div className="flex items-center justify-center space-x-6">
              <div className="flex items-center">
                <FaUser className="w-5 h-5 mr-2" />
                <span>{blogPost.author}</span>
              </div>
              <div className="flex items-center">
                <FaCalendar className="w-5 h-5 mr-2" />
                <span>{blogPost.date}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="prose lg:prose-lg max-w-none">
              <p className="text-slate-700 leading-relaxed mb-8">
                {blogPost.content}
              </p>

              <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">
                Key Focus Points
              </h2>
              <div className="space-y-4">
                {blogPost.focusPoints.map((point, index) => (
                  <div key={index} className="flex items-start">
                    <FiTarget className="w-6 h-6 text-primry mt-1 mr-3 flex-shrink-0" />
                    <p className="text-slate-700">{point}</p>
                  </div>
                ))}
              </div>

              <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">
                Key Functionalities
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {blogPost.keyFunctionalities.map((functionality, index) => {
                  const icons = [
                    FaBookOpen,
                    FiSettings,
                    FaUser,
                    FiBarChart,
                    FaShare,
                    PiTarget,
                  ];
                  const Icon = icons[index % icons.length];
                  return (
                    <div
                      key={index}
                      className="bg-white p-6 rounded-lg shadow-sm border border-slate-100"
                    >
                      <Icon className="w-8 h-8 text-primry mb-4" />
                      <p className="text-slate-700">{functionality}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100 sticky top-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">
                Share this article
              </h3>
              <div className="flex space-x-4">
                {/* Facebook Share */}
                <button className="flex items-center justify-center w-10 h-10 rounded-full bg-sky-100 text-sky-600 hover:bg-sky-200 transition-colors">
                  <FaFacebookF className="w-5 h-5" />
                </button>

                {/* Twitter Share */}
                <button className="flex items-center justify-center w-10 h-10 rounded-full bg-sky-300 text-sky-800 hover:bg-sky-400 transition-colors">
                  <FaTwitterSquare className="w-5 h-5" />
                </button>

                {/* LinkedIn Share */}
                <button className="flex items-center justify-center w-10 h-10 rounded-full bg-sky-700 text-white hover:bg-sky-800 transition-colors">
                  <FaLinkedinIn className="w-5 h-5" />
                </button>

                {/* WhatsApp Share */}
                <button className="flex items-center justify-center w-10 h-10 rounded-full bg-green-100 text-green-600 hover:bg-green-200 transition-colors">
                  <FaWhatsapp className="w-5 h-5" />
                </button>
              </div>

              <hr className="my-6" />

              <h3 className="text-lg font-semibold text-slate-900 mb-4">
                About the Author
              </h3>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-primry/20 flex items-center justify-center">
                  <FaUser className="w-6 h-6 text-slate-600" />
                </div>
                <div className="ml-4">
                  <h4 className="font-medium text-slate-900">
                    {blogPost.author}
                  </h4>
                  <p className="text-sm text-slate-500">
                    EdTech Solutions Expert
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Page;
