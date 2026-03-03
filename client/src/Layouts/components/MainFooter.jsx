import React from "react";
import { Leaf, Mail, Instagram, Linkedin, Github, X } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-green-950 to-black text-white">
      {/* Top Section */}
      <div className="max-w-full w-full mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            {/* <Leaf className="text-emerald-400" />
            <h2 className="text-2xl font-bold text-emerald-400">
              EcoMarket
            </h2> */}
            <img src="logo.png" className="w-40"/>
          </div>
          <p className="text-gray-300 text-sm leading-6">
            Sustainable products for a better tomorrow.
            Shop responsibly and support a greener planet.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-emerald-400 mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li className="hover:text-emerald-400 cursor-pointer transition">Home</li>
            <li className="hover:text-emerald-400 cursor-pointer transition">Shop</li>
            <li className="hover:text-emerald-400 cursor-pointer transition">About</li>
            <li className="hover:text-emerald-400 cursor-pointer transition">Contact</li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold text-emerald-400 mb-4">
            Support
          </h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li className="hover:text-emerald-400 cursor-pointer transition">FAQs</li>
            <li className="hover:text-emerald-400 cursor-pointer transition">Shipping</li>
            <li className="hover:text-emerald-400 cursor-pointer transition">Returns</li>
            <li className="hover:text-emerald-400 cursor-pointer transition">Privacy Policy</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold text-emerald-400 mb-4">
            Newsletter
          </h3>
          <p className="text-gray-300 text-sm mb-4">
            Get eco-tips & exclusive offers.
          </p>

          <div className="relative">
            <Mail
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full pl-10 pr-3 py-2 text-black rounded-md focus:outline-none"
            />
          </div>

          <button className="mt-3 w-full bg-emerald-400 text-black py-2 rounded-md hover:bg-emerald-500 transition font-medium">
            Subscribe
          </button>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center">
          
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} EcoMarket. All rights reserved.
          </p>

          <div className="flex space-x-4 mt-4 md:mt-0">
            <Instagram className="text-gray-400 hover:text-emerald-400 cursor-pointer transition" />
            <Linkedin className="text-gray-400 hover:text-emerald-400 cursor-pointer transition" />
            <Github className="text-gray-400 hover:text-emerald-400 cursor-pointer transition" />
            <X className="text-gray-400 hover:text-emerald-400 cursor-pointer transition" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;