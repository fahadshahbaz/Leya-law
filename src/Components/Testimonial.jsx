import React from "react";
import { managing, boardteam, partner, pedropartner } from "../assets";

const Testimonial = () => {
  return (
    <>
      <div className="parent mx-auto !mt-32">
        <h3>Testimonials</h3>
        {/* Div 1 in the grid */}
        <div className="div1 bg-[#F9FAFB] rounded-md overflow-hidden w-full">
          <img
            src={partner}
            alt="Team Leader"
            className="w-auto h-full object-cover object-center"
          />
        </div>

        {/* Div 2 in the grid */}
        <div className="div2 bg-[#F9FAFB] p-6 md:p-8 rounded-md flex flex-col justify-center">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-medium mb-4 md:mb-6">
            "The generative AI platform that Leya is developing is both
            thrilling and innovative, and the best we have seen so far."
          </h1>
          <p className="text-sm">Jan Dernestam</p>
          <p className="text-sm text-neutral-500 tracking-tight">
            Managing Partner, Mannheimer Swartling
          </p>
        </div>

        {/* Div 3, 4, 5 in the grid */}
        {[
          {
            name: "Samuli Simojoki",
            title: "Chair of the Board, Borenius",
            img: boardteam,
          },
          { name: "Andy Ramos", title: "Partner, Pérez-Llorca", img: partner },
          {
            name: "Pedro Rueda",
            title: "Partner, Araoz & Rueda",
            img: pedropartner,
          },
        ].map((person, index) => (
          <div
            key={index}
            className={`div${
              index + 3
            } bg-[#F9FAFB] p-4 rounded-md flex flex-col justify-between`}
          >
            <div className="mb-3">
              <h1 className="text-neutral-600 text-xs md:text-sm">
                "Leya has proven to be the right tool for our objectives and
                needs, both in terms of efficiency and security."
              </h1>
            </div>
            <div className="flex items-center">
              <img
                src={person.img}
                alt={person.name}
                className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover mr-3"
              />
              <div>
                <h3 className="text-xs md:text-sm font-medium">
                  {person.name}
                </h3>
                <p className="text-xs text-neutral-500">{person.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Testimonial;
