export default function MarketSection() {
  return (
    <section className="bg-white py-24  ">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* Left icon */}
        <div className="flex justify-center md:justify-start">
          <div className="w-16 h-16 bg-blue-500 flex items-center justify-center rounded">
            ▶
          </div>
        </div>

        {/* Right content */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold">
            WE’RE LEADING IN <br /> THE MARKET
          </h2>

          <p className="text-gray-500 mt-4 max-w-md">
            We help companies grow by providing smart consulting solutions that improve performance, increase efficiency, and create long-term value.
          </p>

          <p className="text-blue-600 mt-4 text-sm font-medium">
            We have 35+ years of experience. We offer marketing and consulting services
          </p>

          {/* Progress bars */}
          <div className="mt-8 space-y-4">
            <div>
              <div className="flex justify-between font-bold text-xs mb-1">
                <span>CONSULTING</span>
                <span>88%</span>
              </div>
              <div className="h-2 bg-gray-200 rounded">
                <div className="h-2 bg-blue-500 rounded w-[88%]" />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs font-bold mb-1">
                <span>ADVICES</span>
                <span>68%</span>
              </div>
              <div className="h-2 bg-gray-200 rounded">
                <div className="h-2 bg-blue-500 rounded w-[68%]" />
              </div>
            </div>  
          </div>

       

          {/* Call */}
          <div className="mt-8 flex items-center gap-3 text-sm">
            <div className="w-10 h-10 bg-blue-100 flex items-center justify-center rounded">
              ☎
            </div>
            <div>
              <p className="text-gray-500">Have any question? Give us a call</p>
              <p className="font-semibold">+92 666 888 0000</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
