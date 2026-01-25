// import  React from 'react';
// import { motion } from 'framer-motion';
// import growing2 from "../assets/growing2.jpeg";

// export default function Services() {
//   return (
//     <section id="services" className="bg-gradient-to-b from-[#0b0820] to-[#120d2e] py-20">
//       <div className="max-w-7xl mx-auto px-6 text-center text-white">

//         {/* Title */}
//         <h2 className="text-2xl md:text-3xl font-bold tracking-wide">
//           REAL-WORLD EXPERIENCE
//         </h2>
//         <p className="text-sm text-gray-400 mt-2">
//           The best business consulting firm you can count on!
//         </p>

//         {/* Cards */}
//               <div className="mt-12 flex gap-6 overflow-x-auto md:grid md:grid-cols-3 md:overflow-visible">

//   <div className="bg-black/70 p-8 rounded-lg text-center min-w-[260px] md:min-w-0">
//     <h3 className="text-lg font-semibold">WEALTH MANAGEMENT</h3>
//     <a className="text-md text-gray-400 mt-1 block" href="#">Read more</a>
//     <img src={growing2} alt="" className="mt-6 mx-auto w-20 h-20 object-contain" />
//   </div>

//   <div className="bg-black/70 p-8 rounded-lg text-center min-w-[260px] md:min-w-0">
//     <h3 className="text-lg font-semibold">WEALTH MANAGEMENT</h3>
//     <a className="text-md text-gray-400 mt-1 block" href="#">Read more</a>
//     <img src={growing2} alt="" className="mt-6 mx-auto w-20 h-20 object-contain" />
//   </div>

//   <div className="bg-black/70 p-8 rounded-lg text-center min-w-[260px] md:min-w-0">
//     <h3 className="text-lg font-semibold">WEALTH MANAGEMENT</h3>
//     <a className="text-md text-gray-400 mt-1 block" href="#">Read more</a>
//     <img src={growing2} alt="" className="mt-6 mx-auto w-20 h-20 object-contain" />
//   </div>

// </div>


//         {/* Bottom arrows */}
//         <div className="mt-12 flex items-center justify-between text-gray-400">
//           <button className="border border-gray-600 px-3 py-1 rounded-3px">
//             ‹
//           </button>

//           <p className="text-xs tracking-widest">MEET THE PARTNERS</p>

//           <button className="border border-gray-600 px-3 py-1 rounded-3px">
//             ›
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }


import React from "react";
import { motion } from "framer-motion";
import growing2 from "../assets/growing2.jpeg";

export default function Services() {
  return (
    <section
      id="services"
      className="bg-gradient-to-b from-[#0b0820] to-[#120d2e] py-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 text-center text-white">

        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold tracking-wide">
          REAL-WORLD EXPERIENCE
        </h2>
        <p className="text-sm text-gray-400 mt-2">
          The best business consulting firm you can count on!
        </p>

        {/* ===== SLIDING CARDS ===== */}
        <motion.div
          className="mt-12 flex gap-6 cursor-grab"
          drag="x"
         dragConstraints={{ left: -600, right: 600 }}
          whileTap={{ cursor: "grabbing" }}
          animate={{ x: [0, -260, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        >
          {[1, 2, 3].map((_, i) => (
            <motion.div
              key={i}
              className="bg-black/70 p-8 rounded-lg text-center min-w-[260px]"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-lg font-semibold">WEALTH MANAGEMENT</h3>
              <a className="text-md text-gray-400 mt-1 block" href="#">
                Read more
              </a>

              <img
                src={growing2}
                alt="Service"
                className="mt-6 mx-auto w-20 h-20 object-contain"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom arrows */}
        <div className="mt-12 flex items-center justify-between text-gray-400 max-w-md mx-auto">
          <button className="border border-gray-600 px-3 py-1 rounded">
            ‹
          </button>

          <p className="text-xs tracking-widest">MEET THE PARTNERS</p>

          <button className="border border-gray-600 px-3 py-1 rounded">
            ›
          </button>
        </div>

      </div>
    </section>
  );
}

