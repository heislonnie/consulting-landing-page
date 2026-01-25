import React from "react";
import rise from "../assets/rise.png";

export default function CaseStudies() {
  return (
    <section className="bg-gray-100 py-24">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <h2 className="text-2xl md:text-3xl font-bold">
          NEW CASE STUDIES
        </h2>
        <p className="text-gray-500 mt-2">
          We help our clients renew their business
        </p>

        {/* Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Card */}
          <div className="bg-gray-400 h-64 flex flex-col items-center justify-center text-white">
            <img
             src={rise}
              alt="rise" 
              className="mt-6 mx-auto w-30 h-20 object-contain rounded-2px"/>
            <p className="text-sm mt-4">THOUGHT LEADERSHIP</p>
            <h3 className="font-bold mt-4">BUSINESSES GROWTH</h3>
          </div>
<div className="bg-gray-400 h-64 flex flex-col items-center justify-center text-white">
            <img
             src={rise}
              alt="rise" 
              className="mt-6 mx-auto w-30 h-20 object-contain rounded-2px"/>
            <p className="text-sm mt-4">THOUGHT LEADERSHIP</p>
            <h3 className="font-bold mt-4">BUSINESSES GROWTH</h3>
          </div>

          <div className="bg-blue-500 h-64 flex flex-col items-center justify-center text-white">
            <img
             src={rise}
              alt="rise" 
              className="mt-6 mx-auto w-30 h-20 object-contain rounded-2px"/>
            <p className="text-sm mt-4">THOUGHT LEADERSHIP</p>
            <h3 className="font-bold mt-4">BUSINESSES GROWTH</h3>
          </div>

        </div>
      </div>
    </section>
  );
}



