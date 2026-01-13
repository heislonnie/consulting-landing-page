export default function Services() {
  return (
    <section id="services" className="bg-gradient-to-b from-[#0b0820] to-[#120d2e] py-20">
      <div className="max-w-7xl mx-auto px-6 text-center text-white">

        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold tracking-wide">
          REAL-WORLD EXPERIENCE
        </h2>
        <p className="text-sm text-gray-400 mt-2">
          The best business consulting firm you can count on!
        </p>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Card */}
          <div className="bg-black/70 p-8 rounded-lg text-left">
            <h3 className="text-sm font-semibold">WEALTH MANAGEMENT</h3>
            <p className="text-sm text-gray-400 mt-1">Read more</p>

            <div className="mt-6 w-10 h-10 bg-blue-500 flex items-center justify-center rounded">
              ▢
            </div>
          </div>

          {/* Card */}
          <div className="bg-black/70 p-8 rounded-lg text-left">
            <h3 className="text-sm font-semibold">WEALTH MANAGEMENT</h3>
            <p className="text-xs text-gray-400 mt-1">Read more</p>

            <div className="mt-6 w-10 h-10 bg-blue-500 flex items-center justify-center rounded">
              ▢
            </div>
          </div>

          {/* Card */}
          <div className="bg-black/70 p-8 rounded-lg text-left">
            <h3 className="text-sm font-semibold">WEALTH MANAGEMENT</h3>
            <p className="text-xs text-gray-400 mt-1">Read more</p>

            <div className="mt-6 w-10 h-10 bg-blue-500 flex items-center justify-center rounded">
              ▢
            </div>
          </div>
        </div>

        {/* Bottom arrows */}
        <div className="mt-12 flex items-center justify-between text-gray-400">
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
