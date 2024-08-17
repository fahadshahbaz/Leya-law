import React from "react";
import { leyafooter, linkedin, ycombinator } from "../assets/";

const Footer = () => {
  return (
    <footer className="w-full px-20 p-7">
      <div className="flex flex-col md:flex-row items-start sm:justify-between sm:items-center">
        <div>
          <img src={leyafooter} alt="Leya Logo" className="size-28" />
        </div>
        <div>
          <ul className="flex flex-col sm:flex-row gap-10 font-medium">
            <li>
              <a href="">Legal</a>
            </li>
            <li>
              <a href="">Blog</a>
            </li>
            <li>
              <a href="">Testimonials</a>
            </li>
            <li>
              <a href="">Career</a>
            </li>
            <li>
              <a href="">Security</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full flex flex-col md:flex-row gap-5 sm:justify-between items-start sm:items-center mt-8 sm:m-0">
        <div><p className="text-gray-400">© 2023 Leya. All rights reserved.</p></div>
        <div><p>Backed by <img src={ycombinator} alt="Y combinator logo" className="inline-block sm:ml-4" /></p></div>
      </div>
    </footer>
  );
};

export default Footer;
