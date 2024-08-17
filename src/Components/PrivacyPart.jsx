import React from "react";
import futurework from "/futurework.mp4";
import { isoicon, gdpricon, socicon } from "../assets/";

const Privacypart = () => {
  return (
    <section className="w-9/12 flex flex-wrap justify-around items-start mx-auto mt-32 gap-6">
      <div className="flex flex-col gap-5 lg:w-[40%] p-3">
        <p className="text-sm">Bank level security</p>
        <h1 className="text-4xl sm:text-5xl font-medium">
          Built with your <br /> privacy in mind.
        </h1>
        <p className="text-gray-400 text-sm">
          Compliant with GDPR and certified for ISO 27001:2022 and SOC 2
          Type I, ensuring the highest standards of privacy and security.
        </p>
        <a
          href="#"
          className="p-3 shadow-md text-center rounded-lg border border-gray-300 w-32"
        >
          Read more
        </a>
        <div className="flex gap-5 sm:w-[60%]">
          <img src={isoicon} alt="ISO logo" className="size-16"/>
          <img src={gdpricon} alt="GDPR logo" className="size-16"/>
          <img src={socicon} alt="SOC logo" className="size-16"/>
        </div>
      </div>
      <div className="w-[31rem] rounded-md overflow-hidden">
        <video src={futurework} autoPlay loop muted playsInline />
      </div>
    </section>
  );
};

export default Privacypart;
