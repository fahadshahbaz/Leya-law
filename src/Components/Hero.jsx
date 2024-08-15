import React, { useState } from "react";
import myVideo from "../assets/video/Leyaherosection.mp4";
import { rightfancyarrow, perezliorca, aozrueda, birdbird, swart, mannheimer } from "../assets/";

const Hero = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <section className="flex flex-col justify-center items-center py-10">
      <p className="bg-gray-100 p-2 rounded-full">
        Blog Announcing $25m in Series A
      </p>
      <h1 className="hero-heading font-medium text-center py-4 tracking-wide">
        Every draft, argument <br /> and review matters.
      </h1>
      <p className="text-sm sm:text-base text-gray-700 pb-5 text-center">
        And you need unparalleled tools to perfect every <br className="sm:hidden"/> detail.
      </p>
      <a href="" className="bg-black p-2 px-6 py-2 rounded-md text-white">
        Book a demo
      </a>
      <div className="relative w-[85%] sm:w-9/12 rounded-lg overflow-hidden sm:h-72 mt-8">
        {!videoLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
            <span className="text-gray-700 text-xl">Loading video...</span>
          </div>
        )}
        <video
          src={myVideo}
          autoPlay
          loop
          muted
          playsInline
          className={`object-cover w-full h-full ${
            videoLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoadedData={() => setVideoLoaded(true)}
        />
        <div className="absolute inset-0 flex items-center justify-center gap-6">
          <span className="text-black text-sm sm:text-base bg-[#f0ffff72] py-2 sm:p-3 rounded-lg">
            Check <span className="hidden sm:inline-block">these</span> documents for GDPR compliance
            <img
              src={rightfancyarrow}
              alt="Arrow"
              className="ml-5 bg-[#f0ffff79] rounded-lg w-7 p-2 inline-block"
            />
          </span>
        </div>
      </div>
      <div className="flex w-[70%] justify-between items-center flex-wrap mt-8 gap-4">
          <img src={perezliorca} alt="brands logo" className="w-28 text-gray-500 opacity-40"/>
          <img src={mannheimer} alt="brands logo" className="w-28 opacity-40"/>
          <img src={swart} alt="brands logo" className="w-9 opacity-40"/>
          <img src={birdbird} alt="brands logo" className="w-24 opacity-40"/>
          <img src={aozrueda} alt="brands logo" className="w-28 opacity-40"/>
        </div>
    </section>
  );
};

export default Hero;
