"use client";
import Image from "next/image";
import { useState } from "react";
import { FaPlayCircle } from "react-icons/fa";
import texon_logo from "../../../../../public/about/Texon Logo.svg";

export default function TexonVideo() {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleThumbnailClick = () => {
    setIsPlaying(true);
  };

  return (
    <div className="my-10 lg:my-20">
      {" "}
      <div className="max-w-screen-xl mx-auto bg-primry rounded-[30px] shadow-lg">
        <div className="px-2 py-2">
          <div className="flex justify-center">
            {isPlaying ? (
              <iframe
                width="100%"
                height="500"
                src="https://www.youtube.com/embed/m050iy5_2ng?si=Ddwss6WfSmIcZA1i&autoplay=1"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="max-w-screen-xl"
              ></iframe>
            ) : (
              <div
                className="relative cursor-pointer max-w-screen-xl h-[500px] flex items-center justify-center"
                onClick={handleThumbnailClick}
              >
                <Image
                  src={texon_logo}
                  alt="Texon Logo"
                  className="w-full h-auto object-contain"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <FaPlayCircle className="w-24 h-24 text-white" />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
