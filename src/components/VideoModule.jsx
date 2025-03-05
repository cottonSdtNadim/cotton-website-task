"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import image from "../assets/images/video-module.png";
import AnimatedButton from "./AnimatedButton.jsx";

const VideoModule = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative flex items-start mx-auto px-20 w-[1236px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <motion.div
        className="relative z-10"
        initial={{ width: 1236, height: 550, borderRadius: "15px" }}
        animate={
          isHovered
            ? { width: 859, height: 550, borderRadius: "15px 0 0 15px" }
            : { width: 1236, height: 550, borderRadius: "15px" }
        }
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        style={{ overflow: "hidden" }}
      >
        <img
          src={image}
          alt="A woman in the factory"
          className="object-cover w-full h-full"
        />
      </motion.div>

      {/* Text Container */}
      <motion.div
        className="overflow-hidden"
        initial={{ width: 0, opacity: 0, borderRadius: 0 }}
        animate={
          isHovered
            ? {
                width: 377,
                opacity: 1,
                transition: { delay: 0.2 },
                borderRadius: "0 15px 15px 0",
              }
            : { width: 0, opacity: 0, borderRadius: 0 }
        }
      >
        <div
          className="bg-[#0B714C] h-[550px] p-[30px]"
          // style={{ borderRadius: "0px 15px 15px 0px", width: "377px" }}
        >
          <h2 className="text-2xl text-white font-bold w-[290px] mt-5">
            Sustainability is integral to the way we do business.
          </h2>
          <p className="text-white mt-4">
            We see sustainability as more of an opportunity than an obligation.
            An opportunity to become more efficient, implement best practices in
            management and maintenance, contribute to a better quality of life
            in our communities and to help our partners meet their
            sustainability goals.
          </p>
          <div className="mt-6">
            <AnimatedButton
              label="Learn More"
              labelColor="#0B714C"
              bgColor="white"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default VideoModule;
