import React from "react";

import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-slate-600 text-gray-300 py-12 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <div className="space-y-4">
            <h2 className="text-3xl font-extrabold text-white">WhereIsIt</h2>
            <p className="text-sm font-light max-w-xs leading-relaxed">
              Providing lost and found services since 2018. Helping reunite belongings with their owners worldwide.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-white mb-3">Contact Us</h3>
            <p className="text-sm hover:text-indigo-400 transition">House 12, Road 4, Dhanmondi</p>
            <p className="text-sm hover:text-indigo-400 transition">Dhaka 1205, Bangladesh</p>
            <p className="text-sm hover:text-indigo-400 transition">Email: contact@whereIsItbd.com</p>
            <p className="text-sm hover:text-indigo-400 transition">Phone: +880 1234-567890</p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {[
                { path: "/", label: "Home" },
                { path: "/about", label: "About" },
                { path: "/contact", label: "Contact" },
                { path: "/support", label: "Support" },
              ].map(({ path, label }) => (
                <li key={path}>
                  <Link
                    to={path}
                    className="hover:text-indigo-400 transition-colors duration-300"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-white mb-3">Follow Us</h3>
            <div className="flex space-x-5">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="p-3 bg-indigo-700 rounded-full text-white hover:bg-indigo-600 shadow-lg transition"
              >
                <FaFacebookF size={22} />
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="p-3 bg-blue-500 rounded-full text-white hover:bg-blue-400 shadow-lg transition"
              >
                <FaTwitter size={22} />
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-3 bg-blue-800 rounded-full text-white hover:bg-blue-700 shadow-lg transition"
              >
                <FaLinkedinIn size={22} />
              </a>
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="p-3 bg-red-600 rounded-full text-white hover:bg-red-500 shadow-lg transition"
              >
                <FaYoutube size={22} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-14 border-t border-gray-800 pt-6">
          <p className="text-center text-sm text-gray-500">
            &copy; 2025 WhereIsIt. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
