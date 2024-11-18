import React, { useContext } from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  ChevronRight,
} from "lucide-react";
import { context } from "../Context-provider/context-provider";
import { Link } from "react-router-dom";

const Footer = () => {
  const [colorTheme, setColorTheme] = useContext(context).theme;
  const [darkSide, setDarkSide] = useContext(context).darkSide;

  return (
    <footer
      className={`${
        darkSide ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="space-y-4">
            <h3
              className={`text-2xl font-bold ${
                darkSide ? "text-orange-400" : "text-orange-600"
              }`}
            >
              Musical
            </h3>
            <p className="text-gray-600 text-sm">
              Connecting music enthusiasts, creators, and businesses in a
              dynamic and vibrant community.
            </p>
            <div className="flex space-x-4">
              <Facebook
                className={`w-5 h-5 ${
                  darkSide
                    ? "text-gray-400 hover:text-orange-400"
                    : "text-gray-600 hover:text-orange-600"
                } cursor-pointer`}
              />
              <Twitter
                className={`w-5 h-5 ${
                  darkSide
                    ? "text-gray-400 hover:text-orange-400"
                    : "text-gray-600 hover:text-orange-600"
                } cursor-pointer`}
              />
              <Instagram
                className={`w-5 h-5 ${
                  darkSide
                    ? "text-gray-400 hover:text-orange-400"
                    : "text-gray-600 hover:text-orange-600"
                } cursor-pointer`}
              />
              <Youtube
                className={`w-5 h-5 ${
                  darkSide
                    ? "text-gray-400 hover:text-orange-400"
                    : "text-gray-600 hover:text-orange-600"
                } cursor-pointer`}
              />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className={`text-lg font-semibold mb-4 ${
                darkSide ? "text-white" : "text-gray-900"
              }`}
            >
              Quick Links
            </h4>
            <ul className="space-y-2 text-gray-600">
              <li>
                <Link
                  to="/"
                  className={`hover:${
                    darkSide ? "text-orange-400" : "text-orange-600"
                  }`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/aboutUs"
                  className={`hover:${
                    darkSide ? "text-orange-400" : "text-orange-600"
                  }`}
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  to="/marketplace"
                  className={`hover:${
                    darkSide ? "text-orange-400" : "text-orange-600"
                  }`}
                >
                  Marketplace
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4
              className={`text-lg font-semibold mb-4 ${
                darkSide ? "text-white" : "text-gray-900"
              }`}
            >
              Support
            </h4>
            <ul className="space-y-2 text-gray-600">
              <li>
                <Link
                  to="/FAQ"
                  className={`hover:${
                    darkSide ? "text-orange-400" : "text-orange-600"
                  }`}
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  to="/TermsOfService"
                  className={`hover:${
                    darkSide ? "text-orange-400" : "text-orange-600"
                  }`}
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Marketplace Navigation */}
          <div className="flex flex-col justify-center items-center space-y-4">
            <h4
              className={`text-lg font-semibold ${
                darkSide ? "text-white" : "text-gray-900"
              }`}
            >
              Explore Our Marketplace
            </h4>
            <p className="text-gray-600 text-sm text-center">
              Discover amazing instruments and musical notes from our community
            </p>
            <Link
              to="/marketplace"
              className="group flex items-center bg-orange-400 text-white px-6 py-3 rounded-full hover:bg-orange-500 transition duration-300"
            >
              Visit Marketplace
              <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p
              className={`${
                darkSide ? "text-gray-400" : "text-gray-700"
              } text-sm`}
            >
              © 2024 Musical. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                to="/TermsOfService"
                className={`${
                  darkSide
                    ? "text-gray-400 hover:text-orange-400"
                    : "text-gray-600 hover:text-orange-600"
                } text-sm`}
              >
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
