import React from "react";

const CallToAction = () => {
  return (
    <section className="flex flex-col justify-center items-center my-32 gap-6">
      <p>Get started</p>
      <h1 className="text-4xl sm:text-6xl font-medium text-center">Let’s make your legal <br /> work flow</h1>
      <p>Book a demo to get started</p>
      <a className="cursor-pointer bg-black rounded-md px-4 py-2 text-white">Book a demo</a>
    </section>
  );
};

export default CallToAction;
