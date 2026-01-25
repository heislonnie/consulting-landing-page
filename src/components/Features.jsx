import React from "react";
import consultancy from "../assets/consultancy.png";
export default function Features() {
  return (
    <>
      {/* ===== STATS BAR ===== */}
     {/* ===== STATS BAR ===== */}
<section
  id="features"
  className="relative bg-gradient-to-b from-[#0b1633] to-[#0a0f24] py-16 pb-32 text-white"
>
  <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 text-center">

    {[1,2,3,4].map((_, i) => (
      <div key={i} className="flex flex-col items-center">
        <div className="w-14 h-14 bg-black/40 flex items-center justify-center mb-4">
          <img src={consultancy} alt="" />
        </div>
        <h3 className="text-3xl font-bold">420</h3>
        <p className="text-xs tracking-widest text-gray-300 mt-1">
          CONSULTING SOLUTIONS
        </p>
      </div>
    ))}

  </div>

  {/* ===== TABS BAR (OVERLAY) ===== */}
  <div className="absolute left-1/2 -bottom-12 transform -translate-x-1/2 w-full px-6">
    <div className="max-w-4xl mx-auto grid grid-cols-3 text-center shadow-lg bg-white rounded-md overflow-hidden">
      <div className="py-6 text-blue-500 font-bold">
        BUSINESS GROWTH
      </div>
      <div className="py-6 font-bold bg-gray-100 text-black">
        BUSINESS GROWTH
      </div>
       <div className="py-6 font-bold bg-gray-100 text-black">
        BUSINESS GROWTH
      </div>
    </div>
  </div>
</section>


      {/* ===== FEATURES ===== */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">

          {/* Left */}
          <div className="space-y-10">
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-blue-100 text-blue-600 flex items-center justify-center rounded-full">
                ✓
              </div>
              <div>
                <h4 className="font-semibold">HIGHEST SUCCESS RATES</h4>
                <p className="text-sm text-gray-600 mt-2">
                  We focus on delivering solutions that create real impact,
                  helping our clients achieve consistent growth.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 bg-blue-100 text-blue-600 flex items-center justify-center rounded-full">
                ✓
              </div>
              <div>
                <h4 className="font-semibold">WE BUILD EXPERIENCE</h4>
                <p className="text-sm text-gray-600 mt-2">
                  Our team combines industry knowledge with practical skills
                  to create strategies that work in real environments.
                </p>
              </div>
            </div>
          </div>

          {/* Right */}
          <div>
            <p className="text-gray-600 leading-relaxed">
              We help organizations improve their performance by analyzing
              existing challenges and developing clear strategies for future
              growth. Our approach is focused on results, efficiency, and
              long-term success.
            </p>

            <ul className="mt-6 space-y-2 text-sm text-gray-600">
              <li>— Clear strategies that support business growth</li>
              <li>— Practical solutions based on real experience</li>
              <li>— Transparent processes and honest communication</li>
              <li>— Continuous improvement and innovation</li>
            </ul>
          </div>

        </div>
      </section>
    </>
  );
}
