// "use client";

// import { motion } from "framer-motion";
// import { useState } from "react";
// import image from "../assets/images/video-module.png";
// import AnimatedButton from "./AnimatedButton.jsx";

// const VideoModule = () => {
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <div
//       className="relative flex items-start mx-auto px-20 w-[1236px]"
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       {/* Image Container */}
//       <motion.div
//         className="relative z-10"
//         initial={{ width: 1236, height: 550, borderRadius: "15px" }}
//         animate={
//           isHovered
//             ? { width: 859, height: 550, borderRadius: "15px 0 0 15px" }
//             : { width: 1236, height: 550, borderRadius: "15px" }
//         }
//         transition={{ type: "spring", stiffness: 100, damping: 20 }}
//         style={{ overflow: "hidden" }}
//       >
//         <img
//           src={image}
//           alt="A woman in the factory"
//           className="object-cover w-full h-full"
//         />
//       </motion.div>

//       {/* Text Container */}
//       <motion.div
//         className="overflow-hidden"
//         initial={{ width: 0, opacity: 0, borderRadius: 0 }}
//         animate={
//           isHovered
//             ? {
//                 width: 377,
//                 opacity: 1,
//                 transition: { delay: 0.2 },
//                 borderRadius: "0 15px 15px 0",
//               }
//             : { width: 0, opacity: 0, borderRadius: 0 }
//         }
//       >
//         <div
//           className="bg-[#0B714C] h-[550px] p-[30px]"
//           // style={{ borderRadius: "0px 15px 15px 0px", width: "377px" }}
//         >
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


// "use client";
// import { motion } from "framer-motion";
// import { useState, useRef, useEffect } from "react";
// import AnimatedButton from "./AnimatedButton.jsx";

// const VideoModule = () => {
//   const [isHovered, setIsHovered] = useState(false);
//   const videoRef = useRef(null);

//   // Setup YouTube iframe API
//   useEffect(() => {
//     // Load YouTube API script if not already loaded
//     if (!window.YT) {
//       const tag = document.createElement('script');
//       tag.src = 'https://www.youtube.com/iframe_api';
//       const firstScriptTag = document.getElementsByTagName('script')[0];
//       firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
//     }
//   }, []);

//   return (
//     <div
//       className="relative flex items-start mx-auto px-20 w-[1236px]"
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       {/* Video Container */}
//       <motion.div
//         className="relative z-10"
//         initial={{ width: 1236, height: 550, borderRadius: "15px" }}
//         animate={
//           isHovered
//             ? { width: 859, height: 550, borderRadius: "15px 0 0 15px" }
//             : { width: 1236, height: 550, borderRadius: "15px" }
//         }
//         transition={{ type: "spring", stiffness: 100, damping: 20 }}
//         style={{ overflow: "hidden" }}
//       >
//         <div className="w-full h-full">
//           <iframe
//             ref={videoRef}
//             width="100%"
//             height="100%"
//             src="https://www.youtube.com/embed/gpUDSPPhf_M?autoplay=0&mute=1&controls=1&rel=0"
//             title="YouTube video player"
//             frameBorder="0"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//             allowFullScreen
//             style={{ objectFit: "cover", borderRadius: isHovered ? "15px 0 0 15px" : "15px" }}
//           ></iframe>
//         </div>
//       </motion.div>
      
//       {/* Text Container */}
//       <motion.div
//         className="overflow-hidden"
//         initial={{ width: 0, opacity: 0, borderRadius: 0 }}
//         animate={
//           isHovered
//             ? {
//                 width: 377,
//                 opacity: 1,
//                 transition: { delay: 0.2 },
//                 borderRadius: "0 15px 15px 0",
//               }
//             : { width: 0, opacity: 0, borderRadius: 0 }
//         }
//       >
//         <div
//           className="bg-[#0B714C] h-[550px] p-[30px]"
//         >
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


// "use client";
// import { motion } from "framer-motion";
// import { useState } from "react";
// import AnimatedButton from "./AnimatedButton.jsx";

// const VideoModule = () => {
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <div
//       className="relative flex items-start mx-auto px-20 w-[1236px]"
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       {/* Video Container */}
//       <motion.div
//         className="relative z-10"
//         initial={{ width: 1236, height: 550, borderRadius: "15px" }}
//         animate={
//           isHovered
//             ? { width: 859, height: 550, borderRadius: "15px 0 0 15px" }
//             : { width: 1236, height: 550, borderRadius: "15px" }
//         }
//         transition={{ type: "spring", stiffness: 100, damping: 20 }}
//         style={{ overflow: "hidden" }}
//       >
//         {/* Direct YouTube iframe embed */}
//         <iframe
//           src="https://www.youtube.com/embed/gpUDSPPhf_M?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&loop=1&playlist=gpUDSPPhf_M&playsinline=1"
//           title="YouTube video player"
//           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//           allowFullScreen
//           className="w-full h-full absolute top-0 left-0"
//           style={{ border: "none" }}
//         ></iframe>
//       </motion.div>
      
//       {/* Text Container */}
//       <motion.div
//         className="overflow-hidden"
//         initial={{ width: 0, opacity: 0, borderRadius: 0 }}
//         animate={
//           isHovered
//             ? {
//                 width: 377,
//                 opacity: 1,
//                 transition: { delay: 0.2 },
//                 borderRadius: "0 15px 15px 0",
//               }
//             : { width: 0, opacity: 0, borderRadius: 0 }
//         }
//       >
//         <div
//           className="bg-[#0B714C] h-[550px] p-[30px]"
//         >
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


// "use client";
// import { motion } from "framer-motion";
// import { useState, useRef } from "react";
// import AnimatedButton from "./AnimatedButton.jsx";

// const VideoModule = () => {
//   const [isHovered, setIsHovered] = useState(false);
//   const [isMuted, setIsMuted] = useState(true); // Add mute state
//   const iframeRef = useRef(null); // Reference to the iframe

//   // Function to toggle mute/unmute
//   const toggleMute = () => {
//     const iframe = iframeRef.current;
//     const iframeWindow = iframe.contentWindow;

//     if (iframeWindow) {
//       const message = {
//         event: "command",
//         func: isMuted ? "unMute" : "mute", // Toggle mute
//       };
//       iframeWindow.postMessage(JSON.stringify(message), "*");
//     }

//     // Toggle local mute state
//     setIsMuted((prev) => !prev);
//   };

//   return (
//     <div
//       className="relative flex items-start mx-auto px-20 w-[1236px]"
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       {/* Video Container */}
//       <motion.div
//         className="relative z-10"
//         initial={{ width: 1236, height: 550, borderRadius: "15px" }}
//         animate={
//           isHovered
//             ? { width: 859, height: 550, borderRadius: "15px 0 0 15px" }
//             : { width: 1236, height: 550, borderRadius: "15px" }
//         }
//         transition={{ type: "spring", stiffness: 100, damping: 20 }}
//         style={{ overflow: "hidden" }}
//       >
//         {/* Direct YouTube iframe embed */}
//         <iframe
//           ref={iframeRef}
//           src="https://www.youtube.com/embed/gpUDSPPhf_M?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&loop=1&playlist=gpUDSPPhf_M&playsinline=1"
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
//         className="absolute bottom-4 left-4 p-2 bg-white text-black rounded-full"
//       >
//         {isMuted ? "Unmute" : "Mute"}
//       </button>

//       {/* Text Container */}
//       <motion.div
//         className="overflow-hidden"
//         initial={{ width: 0, opacity: 0, borderRadius: 0 }}
//         animate={
//           isHovered
//             ? {
//                 width: 377,
//                 opacity: 1,
//                 transition: { delay: 0.2 },
//                 borderRadius: "0 15px 15px 0",
//               }
//             : { width: 0, opacity: 0, borderRadius: 0 }
//         }
//       >
//         <div className="bg-[#0B714C] h-[550px] p-[30px]">
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


// "use client";
// import { motion } from "framer-motion";
// import { useState } from "react";
// import AnimatedButton from "./AnimatedButton.jsx";
// import { GoUnmute } from "react-icons/go";
// import { IoVolumeMuteOutline } from "react-icons/io5";

// const VideoModule = () => {
//   const [isHovered, setIsHovered] = useState(false);
//   const [isMuted, setIsMuted] = useState(true); // Track mute state

//   // Function to toggle mute/unmute
//   const toggleMute = () => {
//     setIsMuted((prev) => !prev); // Toggle mute state
//   };

//   // Dynamically set the src URL based on the mute state
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
//         className="relative z-10"
//         initial={{ width: 1236, height: 550, borderRadius: "15px" }}
//         animate={
//           isHovered
//             ? { width: 859, height: 550, borderRadius: "15px 0 0 15px" }
//             : { width: 1236, height: 550, borderRadius: "15px" }
//         }
//         transition={{ type: "spring", stiffness: 100, damping: 20 }}
//         style={{ overflow: "hidden" }}
//       >
//         {/* Direct YouTube iframe embed */}
//         <iframe
//           src={videoSrc} // Set dynamic src based on mute state
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
//         {isMuted ? 
//         // "Unmute" 
//         <IoVolumeMuteOutline />
//         : 
//         // "Mute"
//         <GoUnmute />
//         }
//       </button>

//       {/* Text Container */}
//       <motion.div
//         className="overflow-hidden"
//         initial={{ width: 0, opacity: 0, borderRadius: 0 }}
//         animate={
//           isHovered
//             ? {
//                 width: 377,
//                 opacity: 1,
//                 transition: { delay: 0.2 },
//                 borderRadius: "0 15px 15px 0",
//               }
//             : { width: 0, opacity: 0, borderRadius: 0 }
//         }
//       >
//         <div className="bg-[#0B714C] h-[550px] p-[30px]">
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


"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import AnimatedButton from "./AnimatedButton.jsx";
import { GoUnmute } from "react-icons/go";
import { IoVolumeMuteOutline } from "react-icons/io5";

const VideoModule = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    setIsMuted((prev) => !prev);
  };

  const videoSrc = isMuted
    ? "https://www.youtube.com/embed/gpUDSPPhf_M?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&loop=1&playlist=gpUDSPPhf_M&playsinline=1"
    : "https://www.youtube.com/embed/gpUDSPPhf_M?autoplay=1&mute=0&controls=0&showinfo=0&rel=0&loop=1&playlist=gpUDSPPhf_M&playsinline=1";

  return (
    <div
      className="relative flex items-start mx-auto px-20 w-[1236px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Video Container */}
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
        className="absolute bottom-4 left-22 p-2 bg-white text-black rounded-full z-10"
      >
        {isMuted ? <IoVolumeMuteOutline /> : <GoUnmute />}
      </button>

      {/* Text Container */}
      <motion.div
        className="overflow-hidden"
        initial={{ width: 0, opacity: 0, borderRadius: 0 }}
        animate={
          isHovered
            ? {
                width: 420, // 377
                opacity: 1,
                transition: { delay: 0.2 },
                borderRadius: "0 15px 15px 0",
              }
            : { width: 0, opacity: 0, borderRadius: 0 }
        }
      >
        <div className="bg-[#0B714C] h-[550px] p-[30px] w-[377px]"> {/* Fixed width here */}
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




