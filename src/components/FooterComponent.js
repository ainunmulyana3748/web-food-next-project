import React from "react";
import { Instagram, Twitter, Facebook, Youtube } from "lucide-react";

const FooterComponent = () => {
  return (
    <footer className="bg-gray-900 text-white py-16 px-4 sm:px-6 border-t-4 border-purple-500/90">
      <div className="container mx-auto max-w-7xl">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-16">
          {/* Logo Section */}
          <div className="lg:col-span-2">
            <div className="mb-8">
              <h1 className="text-5xl font-extrabold text-white">
                <span className="text-orange-400">Dimas</span>akin.
              </h1>
              <p className="mt-4 text-gray-300 text-lg">
                Revolutionizing culinary experiences
              </p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-green-400 to-purple-500 bg-clip-text text-transparent">
              Get in Touch
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                  📞
                </div>
                <p className="text-lg">+1486 852 826 000</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                  ✉️
                </div>
                <p className="text-lg">Info@Dimasakin.Com</p>
              </div>
              <div className="flex items-center gap-3 mt-6">
                <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                  📍
                </div>
                <div>
                  <p>1959 Bekasi.</p>
                  <p>Bekasi City, CA, 93230</p>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-green-400 to-purple-500 bg-clip-text text-transparent">
              Stay Updated
            </h3>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-gray-800/50 border-2 border-gray-700 rounded-full py-4 px-6 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500/30 transition-all"
              />
              <button className="bg-orange-500 hover:bg-orange-400  text-white font-semibold rounded-full px-8 py-4 transition-all transform hover:scale-105 shadow-lg hover:shadow-green-500/20 whitespace-nowrap">
                Subscribe
              </button>
            </div>
            <p className="text-gray-400 text-sm mt-2">
              Join 50k+ subscribers for weekly recipes
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t-2 border-gray-800/80 mb-12 relative">
          <div className="absolute left-1/2 -translate-x-1/2 -top-3 w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-400 text-sm font-medium text-center md:text-left">
            © 2025 Dimasakin. • Created by by Ainun Mulyana
          </p>

          <div className="flex space-x-6">
            {[
              [
                Instagram,
                "hover:bg-gradient-to-tr from-purple-600 to-pink-600",
              ],
              [Twitter, "hover:bg-sky-600"],
              [Facebook, "hover:bg-blue-600"],
              [Youtube, "hover:bg-red-600"],
            ].map(([Icon, hoverClass], index) => (
              <a
                key={index}
                href="#"
                className={`p-3 rounded-full bg-gray-800/50 backdrop-blur-sm ${hoverClass} transition-all transform hover:scale-110 hover:shadow-lg`}
              >
                <Icon
                  size={22}
                  className="text-gray-300 hover:text-white transition-colors"
                  strokeWidth={1.5}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
