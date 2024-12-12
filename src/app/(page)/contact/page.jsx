import React from "react";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaGlobe } from "react-icons/fa";
import contact_us_bannar from "../../../../public/contact/contact_us_bg_2.png";
import Image from "next/image";

export default function ContactPage() {
  return (
    <div className="min-h-screen ">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-primry/10 ">
          {" "}
          <img
            className="mx-auto w-full object-bottom"
            src={
              "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            }
            alt="contact_us_bannar "
          />
        </div>
        <div className="w-full mx-auto px-4 py-24 relative bg-black/30 backdrop-blur-sm">
          <div className="container max-w-screen-xl m-auto">
            <h1 className="text-7xl font-bold text-white mb-6 tracking-tight">
              Contact Us
            </h1>
            <div className="h-1 w-24 bg-gradient-to-r from-primry to-cyan-500"></div>
          </div>
        </div>
      </div>

      {/* Contact Cards */}
      <div className="container mx-auto px-4 -mt-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="group bg-white/90 backdrop-blur-lg p-6 rounded-2xl border border-white hover:border-cyan-500/50 transition-all duration-300">
            <div className="bg-cyan-500/20 p-3 rounded-xl w-fit mb-4 group-hover:bg-cyan-500/30 transition-colors">
              <FaGlobe className="text-2xl text-cyan-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Global Service
            </h3>
            <p className="text-gray-600">
              Serving clients worldwide with innovative solutions
            </p>
          </div>
          <div className="group bg-white/90 backdrop-blur-lg p-6 rounded-2xl border border-white hover:border-emerald-500/50 transition-all duration-300">
            <div className="bg-emerald-500/20 p-3 rounded-xl w-fit mb-4 group-hover:bg-emerald-500/30 transition-colors">
              <FaPhone className="text-2xl text-emerald-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              24/7 Support
            </h3>
            <p className="text-gray-600">Always here to help you succeed</p>
          </div>
          <div className="group bg-white/90 backdrop-blur-lg p-6 rounded-2xl border border-white hover:border-rose-500/50 transition-all duration-300">
            <div className="bg-rose-500/20 p-3 rounded-xl w-fit mb-4 group-hover:bg-rose-500/30 transition-colors">
              <FaEnvelope className="text-2xl text-rose-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Quick Response
            </h3>
            <p className="text-gray-600">Fast and efficient communication</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white/90 backdrop-blur-lg p-8 rounded-2xl border border-white">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Hey! Get in touch
            </h2>
            <p className="text-gray-600 mb-8">
              Our experts get back to you in 1-2 hours.
            </p>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Name*
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-gray-100 border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email*
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-gray-100 border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full bg-gray-100 border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors"
                    placeholder="Your phone"
                  />
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full bg-gray-100 border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors"
                    placeholder="How can we help?"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Message*
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full bg-gray-100 border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors"
                  placeholder="Your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-primry/90 text-white font-medium py-3 px-6 rounded-lg hover:bg-primry transition-all duration-300 transform hover:scale-[1.02]"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Map and Contact Info */}
          <div className="space-y-6">
            <div className="bg-white/90 backdrop-blur-lg rounded-2xl border border-white overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7301.455007636766!2d90.375503!3d23.792716!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7daeb606bb1%3A0xb135266040948ee6!2sTexon%20-%20Software%20Solutions!5e0!3m2!1sen!2sbd!4v1726482914973!5m2!1sen!2sbd"
                width="100%"
                height="300"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <div className="bg-white/90 backdrop-blur-lg p-8 rounded-2xl border border-white">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-gray-200 p-3 rounded-lg">
                    <FaMapMarkerAlt className="text-cyan-400 text-xl" />
                  </div>
                  <div>
                    <p className="text-gray-900 font-medium">Office Address</p>
                    <p className="text-gray-600">
                      Digital Strategy Drive, Level 2, Birmingham, UK
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-gray-200 p-3 rounded-lg">
                    <FaPhone className="text-emerald-400 text-xl" />
                  </div>
                  <div>
                    <p className="text-gray-900 font-medium">Phone Number</p>
                    <p className="text-gray-600">+44 (123) 456-7890</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-gray-200 p-3 rounded-lg">
                    <FaEnvelope className="text-rose-400 text-xl" />
                  </div>
                  <div>
                    <p className="text-gray-900 font-medium">Email Address</p>
                    <p className="text-gray-600">hello@texon.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
