import React, { useState } from "react";
import conversation from "../assets/conversation.png";
import {
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaSearch,
} from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-[#3f3f3f] border-b border-gray-600 ">
      <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between text-white">
        {/* Logo */}
        <div className=" items-center gap-2 font-bold">
          {/* <img src={conversation} alt="Logo" className="h-6 w-6" /> */}
          CreativeLogo
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm">
          <a href="#hero" className="hover:text-gray-300">HOME</a>
          <a href="#services" className="hover:text-gray-300">SERVICES</a>
          <a href="#features" className="hover:text-gray-300">PAGES</a>
          <a href="#case-studies" className="hover:text-gray-300">CASE SHOP</a>
          <a href="#blog" className="hover:text-gray-300">BLOG</a>
          <a href="#faq" className="hover:text-gray-300">CONTENT</a>
        </div>

        {/* Right Section */}
<div className="flex items-center gap-4 text-lg">
  <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-gray-300">
    <FaInstagram />
  </a>

  <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-gray-300">
    <FaLinkedin />
  </a>

  <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-gray-300">
    <FaTwitter />
  </a>

  <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-gray-300">
    <FaFacebook />
  </a>

  <button className="hover:text-gray-300">
    <FaSearch />
  </button>

  <div className="hidden md:block pl-6 border-l border-gray-500">
    <p className="text-xs text-gray-300">Need help?</p>
    <a href="tel:+926668880000" className="font-semibold hover:text-gray-300">
      +92 666 888 0000
    </a>
  </div>
</div>


        {/* Mobile Button */}
        <button
          className="md:hidden text-xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
     {isOpen && (
  <div className=" left-0 w-full bg-[#3f3f3f] z-40 md:hidden border-b border-gray-600">
    <div className="px-6 py-6 space-y-4 text-white text-sm">
      <a href="#hero" className="block hover:text-gray-300">HOME</a>
      <a href="#services" className="block hover:text-gray-300">SERVICES</a>
      <a href="#features" className="block hover:text-gray-300">PAGES</a>
      <a href="#faq" className="block hover:text-gray-300">CONTENT</a>
    </div>
  </div>
)}

    </nav>
  );
}
