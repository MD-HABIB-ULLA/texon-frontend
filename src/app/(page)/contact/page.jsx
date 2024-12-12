import HeadingTitle from "@/components/common/title/headingTitle";
import Image from "next/image";
import { AiOutlineGlobal, AiOutlineMail } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineLocalPhone } from "react-icons/md";
import { PiHandshake } from "react-icons/pi";
import { TbApps } from "react-icons/tb";
import contact_us_bannar from "../../../../public/contact/contact_us_bg_2.png";
import ContactForm from "./ContactForm";
export default function Contact() {
  return (
    <>
      <div className="mx-auto">
        <div>
          <Image
            className="mx-auto w-full"
            src={contact_us_bannar}
            alt="contact_us_bannar"
          />
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto px-2">
        <div className="-mt-5 md:-mt-8 pb-5 md:pb-10 lg:pb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Global Service */}
            <div className="flex items-center bg-indigo-100 rounded-[20px] shadow-lg p-6 border-b-2 border-transparent hover:border-indigo-500 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl animate-slide-in">
              <AiOutlineGlobal className="text-8xl text-indigo-500 hover:text-blue-700 transition-all duration-300" />
              <div className="ml-4">
                <h1 className="font-semibold">Global Service</h1>
                <p className="text-base">
                  Proven track record of successful projects in multiple
                  countries.
                </p>
              </div>
            </div>

            {/* Customized Solutions */}
            <div className="flex items-center bg-green-100 rounded-[20px] shadow-lg p-6 border-b-2 border-transparent hover:border-green-500 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl animate-slide-in">
              <TbApps className="text-8xl text-green-500 hover:text-green-700 transition-all duration-300" />
              <div className="ml-4">
                <h1 className="font-semibold">Customized Solutions</h1>
                <p className="text-base">
                  We provide customized solutions to meet individual needs.
                </p>
              </div>
            </div>

            {/* Customer Satisfaction */}
            <div className="flex items-center bg-red-100 rounded-[20px] shadow-lg p-6 border-b-2 border-transparent hover:border-red-500 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl animate-slide-in">
              <PiHandshake className="text-8xl text-red-500 hover:text-red-700 transition-all duration-300" />
              <div className="ml-4">
                <h1 className="font-semibold">Customer Satisfaction</h1>
                <p className="text-base">
                  We strive to provide excellent service & support.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="py-5 md:pb-10 lg:pb-16">
          <h1 className="text-center font-medium">Online Booking</h1>
          <HeadingTitle
            heading={<>Hey! Get in touch</>}
            subHeading={<>Our experts get back to within 1-2 Hours.</>}
          />

          <ContactForm />
        </div>
        <div className="mt-5 md:mt-10 mb-10 md:mb-20 lg:mb-24 bg-slate-900 p-10 rounded-[30px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Contact Card */}
            <div className="border border-white text-white p-6 rounded-[20px] shadow-md flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-lg">
              <IoLocationOutline className="text-6xl mb-4 text-indigo-500 drop-shadow-md" />
              <h2 className="text-lg font-medium mb-2 uppercase">
                Office Address 1
              </h2>
              <p className="text-center">
                Begum Rokeya Sarani, East Shewrapara, Mirpur, Dhaka 1216
              </p>
            </div>

            {/* Contact Card */}
            <div className="border border-white text-white p-6 rounded-[20px] shadow-md flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-lg">
              <MdOutlineLocalPhone className="text-6xl mb-4 text-green-500 drop-shadow-md" />
              <h2 className="text-lg font-medium mb-2 uppercase">
                Phone Number
              </h2>
              <p className="text-center">+88 01409 003646</p>
              <p className="text-center">+88 01751 513310</p>
            </div>

            {/* Contact Card */}
            <div className="border border-white text-white p-6 rounded-[20px] shadow-md flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-lg">
              <AiOutlineMail className="text-6xl mb-4 text-orange-600 drop-shadow-md" />
              <h2 className="text-lg font-medium mb-2 uppercase">Our Mail</h2>
              <p className="text-center">texonltd@gmail.com</p>
              <p className="text-center">contact@texonltd.com</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-20">
        <div className="max-w-screen-xl mx-auto  rounded-[30px] overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7301.455007636766!2d90.375503!3d23.792716!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7daeb606bb1%3A0xb135266040948ee6!2sTexon%20-%20Software%20Solutions!5e0!3m2!1sen!2sbd!4v1726482914973!5m2!1sen!2sbd"
            width="100%"
            height="500"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
}
