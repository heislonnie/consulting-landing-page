import { useState } from "react";

export default function FAQ() {
  const [open, setOpen] = useState(0);

  const faqs = [
    {
      q: "THINK AHEAD AND BOOST YOUR BUSINESS?",
      a: "There are many variations of passages the majority have suffered alteration in some form injected humour."
    },
    { q: "HOW CONSULTANCY EXPERTS WORK?", a: "We analyze, plan and execute growth strategies." },
    { q: "WHAT IS THE BEST ADVICE FOR GROWTH?", a: "Consistency and customer focus drive success." },
    { q: "HOW TO IMPROVE YOUR BUSINESS?", a: "Use data, feedback and automation wisely." }
  ];

  return (
    <section id="faq" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold">QUESTION ANSWERS</h2>
          <p className="text-gray-500 mt-2">
            We help our clients renew their business
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">

          {/* FAQ list */}
          <div className="space-y-4">
            {faqs.map((item, i) => (
              <div
                key={i}
                className="border rounded-lg p-5 cursor-pointer bg-gray-50"
                onClick={() => setOpen(i === open ? -1 : i)}
              >
                <div className="flex justify-between items-center">
                  <h4 className="font-semibold text-sm">
                    <span className="text-blue-500 mr-2">{i + 1}.</span>
                    {item.q}
                  </h4>
                  <span className="text-blue-500 text-xl">
                    {open === i ? "−" : "+"}
                  </span>
                </div>

                {open === i && (
                  <p className="text-sm text-gray-600 mt-3">{item.a}</p>
                )}
              </div>
            ))}
          </div>

          {/* Right side info */}
          <div className="flex  justify-between">

           <div>
           <ul className="space-y-6 text-lg text-gray-600">
  <li>✔ Clear business strategies tailored to your goals.</li>
  <li>✔ Expert consultants with real industry experience.</li>
  <li>✔ Practical solutions that drive measurable results.</li>
  <li>✔ Proven methods to improve efficiency and growth.</li>
  <li>✔ Ongoing support to help you stay ahead.</li>
</ul>

            </div> 
          

          <div className="mt-10 w-40 h-40 bg-blue-500 text-white flex flex-col items-center justify-center text-center">
              <h3 className="text-4xl font-bold">30</h3>
              <p className="text-sm">Years of <br /> Experience</p>
            </div>
            </div>

        </div>
      </div>
    </section>
  );
}
