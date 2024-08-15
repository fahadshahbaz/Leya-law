import React from "react";
import futurework from "/futurework.mp4";
import { info, source, endless } from "../assets/";

const OurPlatform = () => {
  return (
    <section className="w-9/12 flex flex-wrap justify-between items-center mx-auto mt-32 gap-6">
      <div className="flex flex-col gap-4">
        <p className="text-sm">Our Platform</p>
        <h1 className="text-4xl my-4 font-medium">
          Your new legal <br /> workspace.
        </h1>
        <p className="text-gray-400">
          <img src={info} alt="logo" className="w-6 inline-block opacity-40"/> Aggregate information
        </p>
        <p className="text-gray-400">
          <img src={source} alt="logo" className="w-6 inline-block opacity-40"/> Source within reach
        </p>
        <p className="text-gray-400">
          <img src={endless} alt="logo" className="w-6 inline-block opacity-40"/> Endles accessibility
        </p>
      </div>
      <div className="w-[31rem] rounded-md overflow-hidden">
        <video src={futurework} autoPlay loop muted playsInline />
      </div>
    </section>
  );
};

export default OurPlatform;
