import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#0b1633] to-[#080b1a] text-gray-300 pt-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">

        {/* ===== BRAND ===== */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">
            CreativeLogo
          </h3>
          <p className="text-sm leading-relaxed">
            Welcome to our consulting agency. We help businesses grow by
            providing smart strategies and practical solutions.
          </p>

          <div className="mt-6 space-y-3 text-sm">
            <p className="flex items-center gap-3">
              <FaPhoneAlt /> +92 666 888 0000
            </p>
            <p className="flex items-center gap-3">
              <FaEnvelope /> support@company.com
            </p>
            <p className="flex items-center gap-3">
              <FaMapMarkerAlt /> 66 Brooklyn Street, New York, USA
            </p>
          </div>
        </div>

        {/* ===== LINKS ===== */}
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h4 className="text-white font-semibold mb-4">EXPLORE</h4>
            <ul className="space-y-2 text-sm">
              <li>About</li>
              <li>Meet our Team</li>
              <li>Case Studies</li>
              <li>Latest News</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">SUPPORT</h4>
            <ul className="space-y-2 text-sm">
              <li>Terms of Use</li>
              <li>Privacy Policy</li>
              <li>Help Center</li>
            </ul>
          </div>
        </div>

        {/* ===== NEWSLETTER ===== */}
        <div>
          <h4 className="text-white font-semibold mb-4">NEWSLETTER</h4>
          <p className="text-sm mb-4">
            Subscribe to get the latest updates, insights, and resources
            delivered straight to your inbox.
          </p>

          <div className="bg-black/40 p-4 rounded flex">
            <input
              type="email"
              placeholder="Email address"
              className="flex-1 bg-transparent outline-none text-sm"
            />
            <button className="bg-blue-500 px-4 py-2 text-white text-sm">
              REGISTER
            </button>
          </div>
        </div>

      </div>

      {/* ===== BOTTOM BAR ===== */}
      <div className="mt-16 border-t border-white/10 py-6 text-center text-sm text-gray-400">
        © 2026 Company. All rights reserved.
      </div>
    </footer>
  );
}
