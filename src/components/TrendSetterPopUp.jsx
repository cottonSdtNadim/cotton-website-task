"use client";

import { useState, useEffect } from "react";
import trendSetter from "../assets/images/blogs/popup-image.png"

export default function TrendSetterPopup() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if popup has been shown before
    const hasShownPopup = localStorage.getItem("trendsetterPopupShown");

    if (!hasShownPopup) {
      // Show popup after 5 seconds
      const timer = setTimeout(() => {
        setIsVisible(true);
        // Mark popup as shown
        localStorage.setItem("trendsetterPopupShown", "true");
      }, 5000); // 5 seconds

      return () => clearTimeout(timer);
    }
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
      {/* Desktop version */}
      <div className="hidden md:flex bg-white rounded-3xl overflow-hidden max-w-4xl w-full max-h-[500px] relative">
        <div className="w-1/2 relative">
          <img
            src={trendSetter}
            alt="Model in green dress"
            className="object-cover"
          />
        </div>

        <div className="w-1/2 p-8 flex flex-col justify-center">
          <h2 className="text-[#0B714C] text-4xl font-bold mb-4">
            BE A TRENDSETTER
          </h2>
          <p className="text-gray-800 text-lg mb-6">
            Elevate your wardrobe with our exclusive catalog. Subscribe for your
            front-row seat.
          </p>

          <div className="space-y-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B714C]"
            />

            <button className="w-full bg-[#0B714C] text-white py-3 rounded-lg font-medium hover:bg-[#095a3d] transition-colors">
              Access Catalog
            </button>

            <div className="text-center">
              <button
                onClick={() => setIsVisible(false)}
                className="text-gray-500 hover:underline"
              >
                Maybe Later
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile version */}
      <div className="md:hidden bg-white/95 backdrop-blur-sm rounded-3xl overflow-hidden max-w-xs w-full relative">
        <div className="p-6 flex flex-col items-center">
          <h2 className="text-[#0B714C] text-2xl font-bold mb-3 text-center">
            BE A TRENDSETTER
          </h2>
          <p className="text-gray-800 text-sm mb-5 text-center">
            Elevate your wardrobe with our exclusive catalog. Subscribe for your
            front-row seat.
          </p>

          <div className="space-y-3 w-full">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B714C]"
            />

            <button className="w-full bg-[#0B714C] text-white py-3 rounded-lg font-medium hover:bg-[#095a3d] transition-colors">
              Access Catalog
            </button>

            <div className="text-center">
              <button
                onClick={() => setIsVisible(false)}
                className="text-white hover:underline"
              >
                Maybe Later
              </button>
            </div>
          </div>
        </div>

        <div className="h-60 relative">
          <img
            src={trendSetter}
            alt="Model in green dress"
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}
