export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-gray-100 py-24">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* Left */}
        <div>
          <h2 className="text-3xl font-bold leading-tight">
            WHAT THEY <br /> ARE TALKING <br /> ABOUT?
          </h2>
          <p className="text-gray-500 mt-3">
            Trusted by more than 4,200 customers
          </p>

          <div className="mt-6 flex gap-4">
            <button className="w-10 h-10 rounded-full border flex items-center justify-center">
              ←
            </button>
            <button className="w-10 h-10 rounded-full border flex items-center justify-center">
              →
            </button>
          </div>
        </div>

        {/* Right cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-8 shadow">
            <p className="text-sm text-gray-600 leading-relaxed">
             Working with this team completely changed the way we run our business. Their advice helped us improve our processes and grow faster than we expected.
            </p>
            <p className="mt-4 font-semibold text-blue-600">NAME: TODD HIGGINS</p>
            <p className="text-xs text-gray-500">ROLE: CUSTOMER</p>
          </div>

          <div className="bg-white p-8 shadow">
            <p className="text-sm text-gray-600 leading-relaxed">
              The consultants were professional, easy to work with, and very knowledgeable. They understood our challenges and delivered real solutions.
            </p>
            <p className="mt-4 font-semibold text-blue-600">NAME: OLLIE WATKINS</p>
            <p className="text-xs text-gray-500">ROLE: CUSTOMER</p>
          </div>
        </div>

      </div>
    </section>
  );
}
