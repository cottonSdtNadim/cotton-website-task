/* Closest Response  */

// "use client";
// import {  motion } from "framer-motion";
// import { useState } from "react";
// import AnimatedButton from "./AnimatedButton.jsx";
// import { GoUnmute } from "react-icons/go";
// import { IoVolumeMuteOutline } from "react-icons/io5";
// import {content} from "../content/content.js"

// const VideoModule = () => {
//   const {title, description, learnMoreButton} = content.en.sustainability;
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
//         // ease: "easeOut"
//         ease: "easeInOut",
//       }
//     },
//     collapsed: {
//       width: [
//         "100%",                      // Start
//         // "calc(100% - 383px)",     // First overshoot (left) "calc(100% - 417px)",
//         // "calc(100% - 357px)",     // First bounce (right)
//         // "calc(100% - 397px)",     // Second bounce (left)
//         // "calc(100% - 367px)",     // Third bounce (right)
//         // "calc(100% - 377px)"      // Final position
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
//           times: [0, 0.4, 0.6, 0.75, 0.9, 1], // Timing distribution
//           // ease: "easeOut"
//           ease: "easeInOut",
//         }
//       }
//     }
//   };
 
  
//   return (
//     <div
//       className="relative mx-24 max-w-[1236px] h-[550px] border-2 border-amber-400" /* mx-auto w-full */
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       {/* Text Container - Positioned behind video */}
//       <div className="absolute top-0 right-0 h-full w-[377px]">
//         <div className="bg-[#0B714C] h-full p-[30px] w-full rounded-r-2xl">
//           <h2 className="text-2xl text-white font-bold w-[290px] mt-5">
//             {/* Sustainability is integral to the way we do business. */}
//             {
//              title
//             }
//           </h2>
//           <p className="text-white mt-4">
//            {/*  We see sustainability as more of an opportunity than an obligation.
//             An opportunity to become more efficient, implement best practices in
//             management and maintenance, contribute to a better quality of life
//             in our communities and to help our partners meet their
//             sustainability goals. */}
//             {
//               description
//             }
//           </p>
//           <div className="mt-6">
//             <AnimatedButton
//              /*  label="Learn More"
//               labelColor="#0B714C"
//               bgColor="white" */
//               label={learnMoreButton.label}
//               labelColor={learnMoreButton.labelColor}
//               bgColor={learnMoreButton.bgColor}
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


"use client";
import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { GoUnmute } from "react-icons/go";
import { IoVolumeMuteOutline } from "react-icons/io5";
import AnimatedButton from "../components/AnimatedButton";
import {content} from "../content/content.js"

const VideoModule = () => {
  const { title, description, learnMoreButton } = content.en.sustainability;
  const [isHovered, setIsHovered] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isScrolling, setIsScrolling] = useState(false);
  const lastScrollTimeRef = useRef(Date.now());
  const hoverIntentTimeoutRef = useRef(null);
  const containerRef = useRef(null);

  // Improved scroll detection
  useEffect(() => {
    const handleScroll = () => {
      lastScrollTimeRef.current = Date.now();
      
      // Force state to non-hovered during scroll
      if (isHovered) {
        setIsHovered(false);
      }
      
      // Set scrolling state
      setIsScrolling(true);
    };

    const checkScrollingState = () => {
      const now = Date.now();
      const timeSinceLastScroll = now - lastScrollTimeRef.current;
      
      // If it's been more than 300ms since last scroll event, consider scrolling stopped
      if (timeSinceLastScroll > 300 && isScrolling) {
        setIsScrolling(false);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll, { passive: true });
    
    // Check scrolling state every 100ms
    const intervalId = setInterval(checkScrollingState, 100);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(intervalId);
      if (hoverIntentTimeoutRef.current) {
        clearTimeout(hoverIntentTimeoutRef.current);
      }
    };
  }, [isHovered, isScrolling]);

  const toggleMute = (e) => {
    e.stopPropagation(); // Prevent triggering container hover events
    setIsMuted((prev) => !prev);
  };

  const videoSrc = isMuted
    ? "https://www.youtube.com/embed/gpUDSPPhf_M?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&loop=1&playlist=gpUDSPPhf_M&playsinline=1"
    : "https://www.youtube.com/embed/gpUDSPPhf_M?autoplay=1&mute=0&controls=0&showinfo=0&rel=0&loop=1&playlist=gpUDSPPhf_M&playsinline=1";

  const handleMouseEnter = () => {
    // Don't process hover events during scrolling
    if (isScrolling) return;

    // Clear any existing timeout
    if (hoverIntentTimeoutRef.current) {
      clearTimeout(hoverIntentTimeoutRef.current);
    }

    // Use timeout to ensure intentional hover
    hoverIntentTimeoutRef.current = setTimeout(() => {
      // Double-check we're still not scrolling before setting hover state
      if (!isScrolling) {
        setIsHovered(true);
      }
    }, 150);
  };

  const handleMouseLeave = () => {
    // Clear any pending hover intent timeout
    if (hoverIntentTimeoutRef.current) {
      clearTimeout(hoverIntentTimeoutRef.current);
      hoverIntentTimeoutRef.current = null;
    }
    
    // Immediately set to not hovered
    setIsHovered(false);
  };

  return (
    <div
      ref={containerRef}
      className="relative mx-auto max-w-[1236px] h-[550px]"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Main container with fixed dimensions */}
      <div 
      // className="w-full h-full overflow-hidden rounded-2xl relative"
      // className="relative mx-24 max-w-[1236px] h-[550px]" /* mx-auto w-full */
      className="relative rounded-2xl max-w-[1236px] mx-20 h-full overflow-hidden" /* mx-25 */
      >
        
        {/* Text Container - Always present but only visible when video shrinks */}
        <div className="absolute top-0 right-0 h-full w-[377px]">
          <div className="bg-[#0B714C] h-full p-[30px] w-full rounded-r-2xl">
            <h2 className="text-2xl text-white font-bold w-[290px] mt-5">
              {title}
            </h2>
            <p className="text-white mt-4">{description}</p>
            <div className="mt-6">
              <AnimatedButton
                label={learnMoreButton.label}
                labelColor={learnMoreButton.labelColor}
                bgColor={learnMoreButton.bgColor}
              />
            </div>
          </div>
        </div>

        {/* Video Container - Covers text container when expanded */}
        <motion.div
          className="absolute top-0 left-0 h-full bg-black"
          initial={{ width: "100%" }}
          animate={{ 
            width: isHovered && !isScrolling ? "calc(100% - 377px)" : "100%",
            borderRadius: isHovered && !isScrolling ? "15px 0 0 15px" : "15px"
          }}
          transition={{ 
            type: "spring",
            stiffness: 170, //80
            damping: 20,
            mass: 1,
            duration: 2.0 //0.8
          }}
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
          className="absolute bottom-4 left-4 p-2 bg-white text-black rounded-full z-20 hover:bg-gray-100 transition-colors"
        >
          {isMuted ? (
            <IoVolumeMuteOutline className="text-xl" />
          ) : (
            <GoUnmute className="text-xl" />
          )}
        </button>
      </div>
    </div>
  );
};

export default VideoModule;

