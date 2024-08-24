"use client";
import Image from "next/image";
import { useState } from "react";
import texon_logo from "../../../../../public/about/Texon Logo.svg";

export default function TexonVideo() {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleThumbnailClick = () => {
    setIsPlaying(true);
  };

  return (
    <div className="max-w-screen-xl mx-auto bg-primry">
      <div className="px-2 py-2">
        <div className="flex justify-center">
          {isPlaying ? (
            <iframe
              width="1280"
              height="500"
              src="https://www.youtube.com/embed/m050iy5_2ng?si=Ddwss6WfSmIcZA1i&autoplay=1"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          ) : (
            <div
              className="relative cursor-pointer"
              onClick={handleThumbnailClick}
            >
              <Image
                src={texon_logo} // Replace this with your desired thumbnail image
                alt="Texon Logo"
                width={1280}
                height={500}
                className="w-full h-auto"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="bg-black bg-opacity-50 p-3 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="50"
                    fill="white"
                    viewBox="0 0 24 24"
                  >
                    <path d="M10 8.64v6.72L15.27 12 10 8.64M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18.2a8.2 8.2 0 1 1 8.2-8.2 8.2 8.2 0 0 1-8.2 8.2z" />
                  </svg>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
