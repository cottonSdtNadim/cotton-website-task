// import video from "../assets/images/video-module.png";
// import AnimatedButton from "./AnimatedButton";

// const VideoModule = () => {
//   return (
//     <div>
//       <img src={video} alt="A woman in the factory" className="px-[102px]" />

//       {/* Text Container */}
//       <div
//         className="bg-[#0B714C] w-[377px] h-[550px] p-[38px]"
//         style={{ borderRadius: "0px 15px 15px 0px" }}
//       >
//         <h2 className="text-3xl text-white font-bold w-[309px]">
//           Sustainability is integral to the way we do business.
//         </h2>
//         <p className="text-white mt-4">
//           We see sustainability as more of an opportunity than an obligation. An
//           opportunity to become more efficient, implement best practices in
//           management and maintenance, contribute to a better quality of life in
//           our communities and to help our partners meet their sustainability
//           goals.
//         </p>
//         <AnimatedButton
//           label={"Learn More"}
//           labelColor="#0B714C"
//           bgColor="white"
//         ></AnimatedButton>
//       </div>
//     </div>
//   );
// };

// export default VideoModule;

// "use client";

// import { motion } from "framer-motion";
// import { useState } from "react";
// import image from "../assets/images/video-module.png";
// import AnimatedButton from "./AnimatedButton.jsx";

// const VideoModule = () => {
//   const [isHovered, setIsHovered] = useState(false);

//   // Image variants for animation
//   const imageVariants = {
//     initial: { width: 1236, height: 550 },
//     hover: { width: 780, height: 550 },
//   };

//   // Text container variants for animation
//   const textContainerVariants = {
//     initial: { opacity: 0, x: -50 },
//     hover: { opacity: 1, x: 0, transition: { delay: 0.2 } },
//   };

//   return (
//     <div
//       className="relative flex items-start mx-auto px-24 border-2"
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       <motion.div
//         className="relative z-10"
//         initial="initial"
//         animate={isHovered ? "hover" : "initial"}
//         variants={imageVariants}
//         transition={{ type: "spring", stiffness: 100, damping: 20 }}
//       >
//         {/* Using a placeholder image. Replace with your actual image */}
//         <img
//           src={image}
//           alt="A woman in the factory"
//           className="object-cover"
//           style={{ width: "100%", height: "100%" }}
//         />
//       </motion.div>

//       {/* Text Container */}
//       <motion.div
//         className="absolute top-0 left-[859px] z-0"
//         initial="initial"
//         animate={isHovered ? "hover" : "initial"}
//         variants={textContainerVariants}
//         transition={{ type: "spring", stiffness: 100, damping: 20 }}
//       >
//         <div
//           className="bg-[#0B714C] w-[377px] h-[550px] p-[38px]"
//           style={{ borderRadius: "0px 15px 15px 0px" }}
//         >
//           <h2 className="text-3xl text-white font-bold w-[309px]">
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
// // import { Link } from "react-router";
// import image from "../assets/images/video-module.png";
// import AnimatedButton from "./AnimatedButton.jsx";

// const VideoModule = () => {
//   const [isHovered, setIsHovered] = useState(false);

//   // Image animation
//   const imageVariants = {
//     initial: { width: 1236, height: 550 },
//     hover: { width: 859, height: 550 },
//   };

//   return (
//     <div
//       className="relative flex items-start mx-auto px-20 w-[1236px]"
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       {/* Image Container */}
//       <motion.div
//         className="relative z-10"
//         initial="initial"
//         animate={isHovered ? "hover" : "initial"}
//         variants={imageVariants}
//         transition={{ type: "spring", stiffness: 100, damping: 20 }}
//       >
//         <img
//           src={image}
//           alt="A woman in the factory"
//           className="object-cover"
//           style={{ width: "100%", height: "100%" }}
//         />
//       </motion.div>

//       {/* Text Container (hidden initially, appears on hover) */}
//       <motion.div
//         className="overflow-hidden "
//         initial={{ width: 0, opacity: 0 }}
//         animate={
//           isHovered
//             ? { width: 450, opacity: 1, transition: { delay: 0.2 } }
//             : { width: 0, opacity: 0 }
//         }
//       >
//         <div
//           className="bg-[#0B714C] h-[550px] p-[38px]"
//           style={{ borderRadius: "0px 15px 15px 0px", width: "377px" }}
//         >
//           <h2 className="text-3xl text-white font-bold w-[309px]">
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
//             {/* <Link to={"/sustainability"}>
//               <AnimatedButton
//                 label="Learn More"
//                 labelColor="#0B714C"
//                 bgColor="white"
//               />
//             </Link> */}
//             <AnimatedButton
//                 label="Learn More"
//                 labelColor="#0B714C"
//                 bgColor="white"
//               />
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
        initial={{ width: 0, opacity: 0 }}
        animate={
          isHovered
            ? { width: 377, opacity: 1, transition: { delay: 0.2 } }
            : { width: 0, opacity: 0 }
        }
      >
        <div
          className="bg-[#0B714C] h-[550px] p-[38px]"
          style={{ borderRadius: "0px 15px 15px 0px", width: "377px" }}
        >
          <h2 className="text-3xl text-white font-bold w-[309px]">
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
