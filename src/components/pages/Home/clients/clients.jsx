"use client";
import HeadingTitle from "@/components/common/title/headingTitle";
import ClientsSlide from "./clientsSlide";

export default function Clients() {
  return (
    <div className="max-w-screen-xl mx-auto pt-0  pb-10 px-2 hidden lg:block">
      <HeadingTitle
        heading={
          <div className="text-3xl font-semibold">
            What Our Clients Say <br /> About Us
          </div>
        }
      />
      <div>
        <ClientsSlide />
      </div>
    </div>
  );
}
