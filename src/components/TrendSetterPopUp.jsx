"use client";

import { useEffect, useState } from "react";
import trendSetter from "../assets/images/blogs/popup-image.png";
import AnimatedButton from "./AnimatedButton";

export default function TrendSetterPopup() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if popup has been shown before
    // const hasShownPopup = localStorage.getItem("trendsetterPopupShown");

    // if (!hasShownPopup) {
    //   // Show popup after 5 seconds
    //   const timer = setTimeout(() => {
    //     setIsVisible(true);
    //     // Mark popup as shown
    //     localStorage.setItem("trendsetterPopupShown", "true");
    //   }, 5000); // 5 seconds

    //   return () => clearTimeout(timer);
    // }

    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 5000); // 5 seconds

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
      {/* Desktop version */}
      <div className="hidden md:flex bg-white rounded-3xl overflow-hidden max-w-4xl w-full max-h-[390px] relative">
        <div className="w-1/2 relative xl:w-[450px] xl:h-[350px]">
          <img
            src={trendSetter}
            alt="Model in green dress"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-full p-8 flex flex-col justify-center">
          <h2 className="text-[#0B714C] text-4xl font-black mb-4">
            BE A TRENDSETTER
          </h2>
          <p className="text-gray-800 text-lg font-light mb-6">
            Elevate your wardrobe with our exclusive catalog. Subscribe for your
            front-row seat.
          </p>

          <div className="space-y-4">
            <div className="flex justify-between gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-3/5 px-4 py-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B714C]"
              />

              {/* <button className="w-full bg-[#0B714C] text-white py-3 rounded-lg font-medium hover:bg-[#095a3d] transition-colors">
                Access Catalog
              </button> */}
              <div className="w-2/5">
                <AnimatedButton
                  label={"Access Catalog"}
                  labelColor={"white"}
                  bgColor={"#0B714C"}
                ></AnimatedButton>
              </div>
            </div>

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

      {/* Mobile Version */}
      <div className="md:hidden w-[352px] h-[609px] rounded-3xl overflow-hidden relative">
        {/* Background container with gradient and image */}
        <div
          className="absolute inset-0 bg-no-repeat"
          style={{
            background: `
              linear-gradient(180deg, 
                rgba(220, 233, 233, 0.95) 0%, 
                rgba(220, 233, 233, 0.95) 55%, 
                rgba(220, 233, 233, 0.8) 60%,
                rgba(220, 233, 233, 0.5) 65%,
                rgba(220, 233, 233, 0.3) 70%,
                rgba(220, 233, 233, 0) 75%),
              url(${trendSetter})
            `,
            backgroundPosition: "center bottom",
            backgroundSize: "cover",
          }}
        />

        {/* <div
          className="absolute inset-0 bg-gradient-to-b from-[#dce9e9]/95 via-[#dce9e9]/80 to-transparent"
          style={{ backgroundImage: `url(${trendSetter})` }}
        /> */}

        {/* Content overlay */}
        <div className="relative p-6 flex flex-col items-center h-full">
          {/* Heading */}
          <h2 className="text-[#0B714C] text-3xl font-black mt-8 mb-6 text-center tracking-tight">
            BE A TRENDSETTER
          </h2>

          {/* Description text */}
          <p className="text-black text-lg font-light mb-10 text-center max-w-[280px] leading-relaxed">
            Elevate your wardrobe with our exclusive catalog. Subscribe for your
            front-row seat.
          </p>

          {/* Form elements */}
          <div className="w-full space-y-4">
            {/* Email input */}
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full h-12 px-5 py-3 bg-white rounded-lg border border-gray-200 text-[#0B714C80] focus:outline-none focus:ring-2 focus:ring-[#0B714C] text-lg font-light"
            />

            {/* Access button */}
            <button className="w-full h-12 text-base font-semibold bg-[#0B714C] text-white py-3 rounded-lg  hover:bg-[#095a3d] transition-colors">
              Access Catalog
            </button>

            {/* Maybe Later button */}
            <div className="text-center pt-2">
              <button
                onClick={() => setIsVisible(false)}
                className="text-white text-lg font-light opacity-90 hover:opacity-100 underline"
              >
                Maybe Later
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
