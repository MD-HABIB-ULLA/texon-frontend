"use client";
import HeadingTitle from "@/components/common/title/headingTitle";
import ClientsSlide from "./clientsSlide";

export default function Clients() {
  return (
    <>
      <div className="mt-5 md:mt-0">
        <HeadingTitle
          heading={
            <>
              What Our Clients Say <br /> About Us
            </>
          }
        />
      </div>
      <div className="max-w-screen-xl mx-auto pt-0  pb-10 px-2">
        <div>
          <ClientsSlide />
        </div>
      </div>
    </>
  );
}
