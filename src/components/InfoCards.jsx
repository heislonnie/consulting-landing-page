export default function InfoCards() {
  return (
    <section className="bg-white -mt-10 relative z-10 py-10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8 relative transform translate-x-4 md:translate-x-8 z-2">

        <div className="bg-white shadow-lg p-8 flex gap-4">
          <div className="text-blue-500 font-bold text-xl">01</div>
          <div>
            <h4 className="font-semibold">GET PROFESSIONAL ADVICE</h4>
            <p className="text-sm text-gray-500 mt-2">
              There are many variations of available but the majority have suffered alteration.
            </p>
          </div>
        </div>

        <div className="bg-white shadow-lg p-8 flex gap-4">
          <div className="text-blue-500 font-bold text-xl">02</div>
          <div>
            <h4 className="font-semibold">TRUSTED & PROFESSIONAL</h4>
            <p className="text-sm text-gray-500 mt-2">
              There are many variations of available but the majority have suffered alteration.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
