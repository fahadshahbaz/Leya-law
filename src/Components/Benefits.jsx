// import React from "react";
// import { unlock } from "../assets/";

// const Benefits = () => {
//   const benefitItems = [
//     {
//       title: "Unlocked Knowledge",
//       description: "Surface previous work, policies, and templates from the depths of your organization.",
//     },
//     {
//       title: "Increased Productivity",
//       description: "Dig deeper into your research. Proof-read in a moment. Consider more factors.",
//     },
//     {
//       title: "Improved Outcomes",
//       description: "Breeze through tedious tasks and spend your time on creating value for your clients.",
//     },
//   ];

//   const BenefitCard = ({ title, description }) => (
//     <div className="flex flex-col justify-center px-5 bg-[#e4e4e47a] filter backdrop-blur-lg w-[20rem] h-[12rem] rounded-lg border-4 border-red-600">
//       <img src={unlock} alt="logo" className="size-7 mb-4"/>
//       <h3>{title}</h3>
//       <p className="text-neutral-500 text-sm mt-2">{description}</p>
//     </div>
//   );

//   return (
//     <section id="benefits" className="border-4 border-green-600 flex flex-col justify-center items-center mt-32">
//       <div className="w-9/12 flex flex-col justify-start border-4 border-blue-600">
//         <p>Benefits</p>
//         <h1 className="text-5xl my-4 font-medium">Enhancing legal operations.</h1>
//       </div>
//       <div className="w-[80%] flex flex-wrap mx-auto justify-center m-5 gap-4">
//         {benefitItems.map((item, index) => (
//           <BenefitCard key={index} title={item.title} description={item.description} />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Benefits;



import React from "react";
import { unlock } from "../assets/";

const Benefits = () => {
  const benefitItems = [
    {
      title: "Unlocked Knowledge",
      description: "Surface previous work, policies, and templates from the depths of your organization.",
    },
    {
      title: "Increased Productivity",
      description: "Dig deeper into your research. Proof-read in a moment. Consider more factors.",
    },
    {
      title: "Improved Outcomes",
      description: "Breeze through tedious tasks and spend your time on creating value for your clients.",
    },
  ];

  const BenefitCard = ({ title, description }) => (
    <div className="flex flex-col justify-start p-8 bg-[#e4e4e47a] backdrop-blur-md w-full md:w-[22rem] rounded-lg border border-transparent shadow-lg mb-8">
      <img src={unlock} alt="logo" className="w-10 h-10 mb-4" />
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      <p className="text-neutral-700 text-sm mt-2">{description}</p>
    </div>
  );

  return (
    <section id="benefits" className="flex flex-col justify-center items-center mt-32 py-24 px-4">
      <div className="w-full md:w-9/12 text-center mb-12">
        <p className="text-gray-700 font-medium">Benefits</p>
        <h1 className="text-4xl md:text-5xl font-medium my-4">Enhancing legal operations.</h1>
      </div>
      <div className="w-full flex flex-wrap justify-center gap-4">
        {benefitItems.map((item, index) => (
          <BenefitCard key={index} title={item.title} description={item.description} />
        ))}
      </div>
    </section>
  );
};

export default Benefits;
