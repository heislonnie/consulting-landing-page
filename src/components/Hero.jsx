import React from "react";
// import {Motion } from "framer-motion"; 

export default function Hero() {
  return (
    <section id="hero" className="w-full">
      <div className="bg-[#3f3f3f] text-white px-6 md:px-16 py-20 flex flex-col justify-center min-h-[520px] w-full gap-6 mt-8">
<p className="self-start inline-block bg-gray-800 px-4 py-2 text-lg font-medium text-gray-300 mb-4">
  WELCOME TO CODESHAPER
</p>

        <h1 className="text-5xl md:text-5xl font-bold leading-tight line-height[1.9]">
          CONSULTING <br /> FOR EVERY <br /> BUSINESS
        </h1>

        <button className="bg-blue-500 mt-8 px-6 py-3 rounded text-lg font-medium w-fit">
          DISCOVER MORE
        </button>

      </div>
    </section>
  );
}
