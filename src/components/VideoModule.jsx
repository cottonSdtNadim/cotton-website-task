/* 2nd last */

// "use client";
// import { motion } from "framer-motion";
// import { useState } from "react";
// import AnimatedButton from "./AnimatedButton.jsx";
// import { GoUnmute } from "react-icons/go";
// import { IoVolumeMuteOutline } from "react-icons/io5";

// const VideoModule = () => {
//   const [isHovered, setIsHovered] = useState(false);
//   const [isMuted, setIsMuted] = useState(true);

//   const toggleMute = () => {
//     setIsMuted((prev) => !prev);
//   };

//   const videoSrc = isMuted
//     ? "https://www.youtube.com/embed/gpUDSPPhf_M?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&loop=1&playlist=gpUDSPPhf_M&playsinline=1"
//     : "https://www.youtube.com/embed/gpUDSPPhf_M?autoplay=1&mute=0&controls=0&showinfo=0&rel=0&loop=1&playlist=gpUDSPPhf_M&playsinline=1";

//   return (
//     <div
//       className="relative flex items-start mx-auto px-20 w-[1236px]"
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       {/* Video Container */}
//       <motion.div
//         className="relative border-2 border-red-500"
//         style={{ zIndex: isHovered ? 1 : 2, overflow: "hidden" }}
//         initial={{ width: 1236, height: 550, borderRadius: "15px" }}
//         animate={
//           isHovered
//             ? { width: 859, height: 550, borderRadius: "15px 0 0 15px" }
//             : { width: 1236, height: 550, borderRadius: "15px" }
//         }
//         transition={{ type: "spring", stiffness: 100, damping: 20 }}
//       >
//         <iframe
//           src={videoSrc}
//           title="YouTube video player"
//           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//           allowFullScreen
//           className="w-full h-full absolute top-0 left-0"
//           style={{ border: "none" }}
//         ></iframe>
//       </motion.div>

//       {/* Mute/Unmute Button */}
//       <button
//         onClick={toggleMute}
//         className="absolute bottom-4 left-22 p-2 bg-white text-black rounded-full z-10"
//       >
//         {isMuted ? <IoVolumeMuteOutline /> : <GoUnmute />}
//       </button>

//       {/* Text Container */}
//       <motion.div
//         className="overflow-hidden"
//         style={{ zIndex: isHovered ? 2 : 1 }}
//         initial={{ width: 0, height: "550px", opacity: 0, borderRadius: 0 }}
//         animate={
//           isHovered
//             ? {
//                 width: 420, //377
//                 opacity: 1,
//                 transition: { delay: 0.2 },
//                 borderRadius: "0 15px 15px 0",
//               }
//             : { width: 0, height: "550px", opacity: 0, borderRadius: 0 }
//         }
//       >
//         <div className="bg-[#0B714C] h-[550px] p-[30px] w-[377px]"> {/* Fixed width here */}
//           <h2 className="text-2xl text-white font-bold w-[290px] mt-5">
//             Sustainability is integral to the way we do business.
//           </h2>
//           <p className="text-white mt-4">
//             We see sustainability as more of an opportunity than an obligation.
//             An opportunity to become more efficient, implement best practices in
//             management and maintenance, contribute to a better quality of life
//             in our communities and to help our partners meet their
//             sustainability goals.
//           </p>
//           <div className="mt-6">
//             <AnimatedButton
//               label="Learn More"
//               labelColor="#0B714C"
//               bgColor="white"
//             />
//           </div>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default VideoModule;


/* Final Response */

// "use client";
// import { motion } from "framer-motion";
// import { useState } from "react";
// import AnimatedButton from "./AnimatedButton.jsx";
// import { GoUnmute } from "react-icons/go";
// import { IoVolumeMuteOutline } from "react-icons/io5";

// const VideoModule = () => {
//   const [isHovered, setIsHovered] = useState(false);
//   const [isMuted, setIsMuted] = useState(true);

//   const toggleMute = () => {
//     setIsMuted((prev) => !prev);
//   };

//   const videoSrc = isMuted
//     ? "https://www.youtube.com/embed/gpUDSPPhf_M?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&loop=1&playlist=gpUDSPPhf_M&playsinline=1"
//     : "https://www.youtube.com/embed/gpUDSPPhf_M?autoplay=1&mute=0&controls=0&showinfo=0&rel=0&loop=1&playlist=gpUDSPPhf_M&playsinline=1";

//   return (
//     <div
//       className="relative max-w-[1236px] h-[550px] mx-24" /* mx-auto w-full */
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       {/* Text Container - Positioned behind video */}
//       <div className="absolute top-0 right-0 h-full w-[377px]">
//         <div className="bg-[#0B714C] h-full p-[30px] w-full rounded-r-2xl">
//           <h2 className="text-2xl text-white font-bold w-[290px] mt-5">
//             Sustainability is integral to the way we do business.
//           </h2>
//           <p className="text-white mt-4">
//             We see sustainability as more of an opportunity than an obligation.
//             An opportunity to become more efficient, implement best practices in
//             management and maintenance, contribute to a better quality of life
//             in our communities and to help our partners meet their
//             sustainability goals.
//           </p>
//           <div className="mt-6">
//             <AnimatedButton
//               label="Learn More"
//               labelColor="#0B714C"
//               bgColor="white"
//             />
//           </div>
//         </div>
//       </div>

//       {/* Video Container - Positioned on top, will shrink on hover */}
//       <motion.div
//         className="absolute top-0 left-0 overflow-hidden"
//         initial={{ width: "100%", height: 550, borderRadius: "15px" }}
//         animate={
//           isHovered
//             ? { width: "calc(100% - 377px)", height: 550, borderRadius: "15px 0 0 15px" }
//             : { width: "100%", height: 550, borderRadius: "15px" }
//         }
//         transition={{ type: "spring", stiffness: 100, damping: 20 }}
//       >
//         <iframe
//           src={videoSrc}
//           title="YouTube video player"
//           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//           allowFullScreen
//           className="w-full h-full absolute top-0 left-0"
//           style={{ border: "none" }}
//         ></iframe>
//       </motion.div>

//       {/* Mute/Unmute Button */}
//       <button
//         onClick={toggleMute}
//         className="absolute bottom-4 left-4 p-2 bg-white text-black rounded-full z-10"
//       >
//         {isMuted ? <IoVolumeMuteOutline /> : <GoUnmute />}
//       </button>
//     </div>
//   );
// };

// export default VideoModule;


// "use client";
// import { motion } from "framer-motion";
// import { useState } from "react";
// import AnimatedButton from "./AnimatedButton.jsx";
// import { GoUnmute } from "react-icons/go";
// import { IoVolumeMuteOutline } from "react-icons/io5";

// const VideoModule = () => {
//   const [isHovered, setIsHovered] = useState(false);
//   const [isMuted, setIsMuted] = useState(true);

//   const toggleMute = () => {
//     setIsMuted((prev) => !prev);
//   };

//   const videoSrc = isMuted
//     ? "https://www.youtube.com/embed/gpUDSPPhf_M?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&loop=1&playlist=gpUDSPPhf_M&playsinline=1"
//     : "https://www.youtube.com/embed/gpUDSPPhf_M?autoplay=1&mute=0&controls=0&showinfo=0&rel=0&loop=1&playlist=gpUDSPPhf_M&playsinline=1";

//   // Custom animation with keyframes for the bounce effect
//   const videoVariants = {
//     expanded: { 
//       width: "100%", 
//       height: 550, 
//       borderRadius: "15px",
//       transition: {
//         duration: 0.5,
//         ease: "easeOut"
//       }
//     },
//     collapsed: {
//       width: ["100%", "calc(100% - 383px)", "calc(100% - 377px)"], // Go beyond target, then come back calc(100% - 397px)
//       height: 550,
//       borderRadius: "15px 0 0 15px",
//       transition: {
//         width: {
//           duration: 0.6,
//           times: [0, 0.7, 1], // Timing for each keyframe (percentage of total duration)
//           ease: "easeOut"
//         }
//       }
//     }
//   };

//   return (
//     <div
//       className="relative mx-24 max-w-[1236px] h-[550px]" /* mx-auto w-full */
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       {/* Text Container - Positioned behind video */}
//       <div className="absolute top-0 right-0 h-full w-[377px]">
//         <div className="bg-[#0B714C] h-full p-[30px] w-full">
//           <h2 className="text-2xl text-white font-bold w-[290px] mt-5">
//             Sustainability is integral to the way we do business.
//           </h2>
//           <p className="text-white mt-4">
//             We see sustainability as more of an opportunity than an obligation.
//             An opportunity to become more efficient, implement best practices in
//             management and maintenance, contribute to a better quality of life
//             in our communities and to help our partners meet their
//             sustainability goals.
//           </p>
//           <div className="mt-6">
//             <AnimatedButton
//               label="Learn More"
//               labelColor="#0B714C"
//               bgColor="white"
//             />
//           </div>
//         </div>
//       </div>

//       {/* Video Container - With bounce animation */}
//       <motion.div
//         className="absolute top-0 left-0 overflow-hidden"
//         variants={videoVariants}
//         initial="expanded"
//         animate={isHovered ? "collapsed" : "expanded"}
//       >
//         <iframe
//           src={videoSrc}
//           title="YouTube video player"
//           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//           allowFullScreen
//           className="w-full h-full absolute top-0 left-0"
//           style={{ border: "none" }}
//         ></iframe>
//       </motion.div>

//       {/* Mute/Unmute Button */}
//       <button
//         onClick={toggleMute}
//         className="absolute bottom-4 left-4 p-2 bg-white text-black rounded-full z-10"
//       >
//         {isMuted ? <IoVolumeMuteOutline /> : <GoUnmute />}
//       </button>
//     </div>
//   );
// };

// export default VideoModule;

/* Closest Response  */

"use client";
import {  motion } from "framer-motion";
import { useState } from "react";
import AnimatedButton from "./AnimatedButton.jsx";
import { GoUnmute } from "react-icons/go";
import { IoVolumeMuteOutline } from "react-icons/io5";
import {content} from "../content/content.js"

const VideoModule = () => {
  const {title, description, learnMoreButton} = content.en.sustainability;
  const [isHovered, setIsHovered] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    setIsMuted((prev) => !prev);
  };

  const videoSrc = isMuted
    ? "https://www.youtube.com/embed/gpUDSPPhf_M?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&loop=1&playlist=gpUDSPPhf_M&playsinline=1"
    : "https://www.youtube.com/embed/gpUDSPPhf_M?autoplay=1&mute=0&controls=0&showinfo=0&rel=0&loop=1&playlist=gpUDSPPhf_M&playsinline=1";

  // Enhanced keyframe animation with multiple bounce points
  const videoVariants = {
    expanded: { 
      width: "100%", 
      height: 550, 
      borderRadius: "15px",
      transition: {
        duration: 0.5,
        // ease: "easeOut"
        ease: "easeInOut",
      }
    },
    collapsed: {
      width: [
        "100%",                      // Start
        // "calc(100% - 383px)",     // First overshoot (left) "calc(100% - 417px)",
        // "calc(100% - 357px)",     // First bounce (right)
        // "calc(100% - 397px)",     // Second bounce (left)
        // "calc(100% - 367px)",     // Third bounce (right)
        // "calc(100% - 377px)"      // Final position
        "calc(100% - 383px)",
        "calc(100% - 380px)",
        "calc(100% - 377px)",
        "calc(100% - 382px)",
        "calc(100% - 377px)",
      ],
      height: 550,
      borderRadius: "15px 0 0 15px",
      transition: {
        width: {
          duration: 0.8,
          times: [0, 0.4, 0.6, 0.75, 0.9, 1], // Timing distribution
          // ease: "easeOut"
          ease: "easeInOut",
        }
      }
    }
  };
 
  
  return (
    <div
      className="relative mx-24 max-w-[1236px] h-[550px] border-2 border-amber-400" /* mx-auto w-full */
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Text Container - Positioned behind video */}
      <div className="absolute top-0 right-0 h-full w-[377px]">
        <div className="bg-[#0B714C] h-full p-[30px] w-full rounded-r-2xl">
          <h2 className="text-2xl text-white font-bold w-[290px] mt-5">
            {/* Sustainability is integral to the way we do business. */}
            {
             title
            }
          </h2>
          <p className="text-white mt-4">
           {/*  We see sustainability as more of an opportunity than an obligation.
            An opportunity to become more efficient, implement best practices in
            management and maintenance, contribute to a better quality of life
            in our communities and to help our partners meet their
            sustainability goals. */}
            {
              description
            }
          </p>
          <div className="mt-6">
            <AnimatedButton
             /*  label="Learn More"
              labelColor="#0B714C"
              bgColor="white" */
              label={learnMoreButton.label}
              labelColor={learnMoreButton.labelColor}
              bgColor={learnMoreButton.bgColor}
            />
          </div>
        </div>
      </div>

      {/* Video Container - With enhanced bounce animation */}
      <motion.div
        className="absolute top-0 left-0 overflow-hidden"
        variants={videoVariants}
        initial="expanded"
        animate={isHovered ? "collapsed" : "expanded"}
      >
        <iframe
          src={videoSrc}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full absolute top-0 left-0"
          style={{ border: "none" }}
        ></iframe>
      </motion.div>

      {/* Mute/Unmute Button */}
      <button
        onClick={toggleMute}
        className="absolute bottom-4 left-2 p-2 bg-white text-black rounded-full z-10"
      >
        {isMuted ? <IoVolumeMuteOutline /> : <GoUnmute />}
      </button>
    </div>
  );
};

export default VideoModule;






/* Final Response */

// "use client";
// import { motion } from "framer-motion";
// import { useState, useRef, useEffect } from "react";
// import AnimatedButton from "./AnimatedButton.jsx";
// import { GoUnmute } from "react-icons/go";
// import { IoVolumeMuteOutline } from "react-icons/io5";
// import { content } from "../content/content.js";

// const VideoModule = () => {
//   const { title, description, learnMoreButton } = content.en.sustainability;
//   const [isHovered, setIsHovered] = useState(false);
//   const [isMuted, setIsMuted] = useState(true);
//   const [isAnimating, setIsAnimating] = useState(false);
//   const textContainerRef = useRef(null);

//   // Handle hover events
//   const handleMouseEnter = () => {
//     setIsHovered(true);
//     setIsAnimating(true);
//   };

//   const handleMouseLeave = () => {
//     setIsHovered(false);
//     setIsAnimating(true);
//   };

//   // Effect to track animation completion
//   useEffect(() => {
//     const animationTimer = setTimeout(() => {
//       setIsAnimating(false);
//     }, 850); // Slightly longer than animation duration

//     return () => clearTimeout(animationTimer);
//   }, [isHovered]);

//   const toggleMute = () => {
//     setIsMuted((prev) => !prev);
//   };

//   const videoSrc = isMuted
//     ? "https://www.youtube.com/embed/gpUDSPPhf_M?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&loop=1&playlist=gpUDSPPhf_M&playsinline=1"
//     : "https://www.youtube.com/embed/gpUDSPPhf_M?autoplay=1&mute=0&controls=0&showinfo=0&rel=0&loop=1&playlist=gpUDSPPhf_M&playsinline=1";

//   // Animation variants
//   const videoVariants = {
//     expanded: {
//       width: "100%",
//       height: 550,
//       borderRadius: "15px",
//       transition: {
//         duration: 0.5,
//         ease: "easeInOut",
//       }
//     },
//     collapsed: {
//       width: [
//         "100%",
//         "calc(100% - 383px)",
//         "calc(100% - 380px)",
//         "calc(100% - 377px)",
//         "calc(100% - 382px)",
//         "calc(100% - 377px)",
//       ],
//       height: 550,
//       borderRadius: "15px 0 0 15px",
//       transition: {
//         width: {
//           duration: 0.8,
//           times: [0, 0.4, 0.6, 0.75, 0.9, 1],
//           ease: "easeInOut",
//         }
//       }
//     }
//   };

//   return (
//     <div
//       className="relative mx-24 max-w-[1236px] h-[550px] border-2 border-amber-400"
//       onMouseEnter={handleMouseEnter}
//       onMouseLeave={handleMouseLeave}
//     >
//       {/* Text Container - Only visible when video is hovered */}
//       <div 
//         ref={textContainerRef}
//         className="absolute top-0 right-0 h-full w-[377px]"
//         style={{ 
//           visibility: isHovered || isAnimating ? "visible" : "hidden",
//           opacity: isHovered ? 1 : 0,
//           transition: "opacity 0.3s ease-in-out"
//         }}
//       >
//         <div className="bg-[#0B714C] h-full p-[30px] w-full rounded-r-2xl">
//           <h2 className="text-2xl text-white font-bold w-[290px] mt-5">
//             {title}
//           </h2>
//           <p className="text-white mt-4">
//             {description}
//           </p>
//           <div className="mt-6">
//             <AnimatedButton
//               label={learnMoreButton.label}
//               labelColor={learnMoreButton.labelColor}
//               bgColor={learnMoreButton.bgColor}
//             />
//           </div>
//         </div>
//       </div>

//       {/* Video Container */}
//       <motion.div
//         className="absolute top-0 left-0 overflow-hidden"
//         variants={videoVariants}
//         initial="expanded"
//         animate={isHovered ? "collapsed" : "expanded"}
//         onAnimationComplete={() => setIsAnimating(false)}
//       >
//         <iframe
//           src={videoSrc}
//           title="YouTube video player"
//           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//           allowFullScreen
//           className="w-full h-full absolute top-0 left-0"
//           style={{ border: "none" }}
//         ></iframe>
//       </motion.div>

//       {/* Mute/Unmute Button */}
//       <button
//         onClick={toggleMute}
//         className="absolute bottom-4 left-2 p-2 bg-white text-black rounded-full z-10"
//       >
//         {isMuted ? <IoVolumeMuteOutline /> : <GoUnmute />}
//       </button>
//     </div>
//   );
// };

// export default VideoModule;

/* Transition with more bounce */
// "use client";
// import { motion } from "framer-motion";
// import { useState } from "react";
// import AnimatedButton from "./AnimatedButton.jsx";
// import { GoUnmute } from "react-icons/go";
// import { IoVolumeMuteOutline } from "react-icons/io5";

// const VideoModule = () => {
//   const [isHovered, setIsHovered] = useState(false);
//   const [isMuted, setIsMuted] = useState(true);

//   const toggleMute = () => {
//     setIsMuted((prev) => !prev);
//   };

//   const videoSrc = isMuted
//     ? "https://www.youtube.com/embed/gpUDSPPhf_M?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&loop=1&playlist=gpUDSPPhf_M&playsinline=1"
//     : "https://www.youtube.com/embed/gpUDSPPhf_M?autoplay=1&mute=0&controls=0&showinfo=0&rel=0&loop=1&playlist=gpUDSPPhf_M&playsinline=1";

//   // Enhanced keyframe animation with multiple bounce points
//   const videoVariants = {
//     expanded: {
//       width: "100%",
//       height: 550,
//       borderRadius: "15px",
//       transition: {
//         duration: 0.5,
//         ease: "easeInOut", // [CHANGED] Added smooth ease transition
//       },
//     },
//     collapsed: {
//       width: [
//         "100%",
//         "calc(100% - 383px)",
//         "calc(100% - 380px)",
//         "calc(100% - 377px)",
//         "calc(100% - 382px)",
//         "calc(100% - 377px)",
//       ],
//       height: 550,
//       borderRadius: "15px 0 0 15px",
//       x: [
//         0, // [CHANGED] Starting position of the container
//         -10, // [CHANGED] Slight left shift to simulate the bounce
//         10,  // [CHANGED] Right shift (bounce effect)
//         -5,  // [CHANGED] Slight left shift again
//         0,   // [CHANGED] Return to original position
//       ],
//       transition: {
//         width: {
//           duration: 0.8,
//           times: [0, 0.4, 0.6, 0.75, 0.9, 1],
//           ease: "easeInOut", // [CHANGED] Apply smooth easing for width transition
//         },
//         x: { // [CHANGED] Apply transition for x-axis as well
//           duration: 0.8,
//           ease: "easeInOut", // [CHANGED] Smooth easing for the x-axis bounce
//         }
//       },
//     },
//   };

//   return (
//     <div
//       className="relative mx-24 max-w-[1236px] h-[550px]"
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       {/* Text Container - Positioned behind video */}
//       <div className="absolute top-0 right-0 h-full w-[377px]">
//         <div className="bg-[#0B714C] h-full p-[30px] w-full rounded-r-2xl">
//           <h2 className="text-2xl text-white font-bold w-[290px] mt-5">
//             Sustainability is integral to the way we do business.
//           </h2>
//           <p className="text-white mt-4">
//             We see sustainability as more of an opportunity than an obligation.
//             An opportunity to become more efficient, implement best practices in
//             management and maintenance, contribute to a better quality of life
//             in our communities and to help our partners meet their
//             sustainability goals.
//           </p>
//           <div className="mt-6">
//             <AnimatedButton
//               label="Learn More"
//               labelColor="#0B714C"
//               bgColor="white"
//             />
//           </div>
//         </div>
//       </div>

//       {/* Video Container - With enhanced bounce animation */}
//       <motion.div
//         className="absolute top-0 left-0 overflow-hidden"
//         variants={videoVariants}
//         initial="expanded"
//         animate={isHovered ? "collapsed" : "expanded"}
//       >
//         <iframe
//           src={videoSrc}
//           title="YouTube video player"
//           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//           allowFullScreen
//           className="w-full h-full absolute top-0 left-0"
//           style={{ border: "none" }}
//         ></iframe>
//       </motion.div>

//       {/* Mute/Unmute Button */}
//       <button
//         onClick={toggleMute}
//         className="absolute bottom-4 left-2 p-2 bg-white text-black rounded-full z-10"
//       >
//         {isMuted ? <IoVolumeMuteOutline /> : <GoUnmute />}
//       </button>
//     </div>
//   );
// };

// export default VideoModule;


