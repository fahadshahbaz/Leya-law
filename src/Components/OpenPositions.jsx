import React from 'react';
import { firstopen, secondopen, thirdopen } from '../assets/';

const OpenPositions = () => {
  return (
    <section className="relative h-[50vh] sm:h-screen mt-32">
      <div className="flex h-full gap-x-2">
        <div
          className="w-1/3 h-full bg-cover bg-center rounded-md"
          style={{ backgroundImage: `url(${firstopen})` }}
        ></div>
        <div
          className="w-1/3 h-full bg-cover bg-center rounded-md"
          style={{ backgroundImage: `url(${secondopen})` }}
        ></div>
        <div
          className="w-1/3 h-full bg-cover bg-center rounded-md"
          style={{ backgroundImage: `url(${thirdopen})` }}
        ></div>
      </div>

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-8">Open Positions</h1>
          <p className="text-white mb-12">Join our team in rethinking legal work.</p>
          <a className='bg-white px-5 py-3 rounded-lg cursor-pointer'>Explore roles</a>
        </div>
      </div>
    </section>
  );
};

export default OpenPositions;
