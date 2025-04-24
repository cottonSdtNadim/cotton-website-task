// import React, { useState } from "react";
// import image1 from "../assets/images/Company-Timeline-Images/image-1.jpg";
// import image2 from "../assets/images/Company-Timeline-Images/image-2.jpg";
// import image3 from "../assets/images/Company-Timeline-Images/image-3.jpg";
// import image4 from "../assets/images/Company-Timeline-Images/image-4.jpg";
// import image5 from "../assets/images/Company-Timeline-Images/image-5.jpg";

// const ImageCardTimelineSlider = () => {
//   const timelineData = [
//     {
//       id: 1,
//       period: "1990",
//       title: "A Young Man with a Dream",
//       description:
//         "At 25, Shaheen Mahmud, with experience and customer relationships, dreams of starting an RMG business. Despite limited funds, he hires an employee, starts in a 5,500 sqft. factory on Mohakhali Airport Road, and buys machinery from Gulshan. A banker backs his vision with a letter of credit amid industry skepticism.",
//       image: image1,
//     },
//     {
//       id: 2,
//       period: "1991-1995",
//       title: "Wheels Truning",
//       description:
//         "Cotton Group is born and carries out its first export on January 31, 1991. It begins exporting at 700,000 pieces per year with 250 employees. Achieving 200% growth year on year, Cotton Group expanded its factory space to 84,000 sqft by 1995 in a Mirpur facility while focusing on compliance measures within its practices",
//       image: image2,
//     },
//     {
//       id: 3,
//       period: "1994-1999",
//       title: "Unparalleled Growth",
//       description:
//         "In 1994, Cotton Group expanded production, won the Prime Minister Export Gold Award, and moved to Gazipur for a vertical setup, prioritizing compliance.",
//       image: image3,
//     },
//     {
//       id: 4,
//       period: "2001-2008",
//       title: "Racing Forward",
//       description:
//         "Cotton Group is a fully-integrated setup, focusing on the entire value chain from yarn to ready-to-wear. They've acquired land in the Bangabandhu Sheikh Mujib Shilpa Nagar – Mirershorai Economic Zone for expansion. Sustainability is a key commitment through their CottonCares™️ initiative, and they've adapted their production facility for COVID-19 safety.",
//       image: image4,
//     },
//     {
//       id: 5,
//       period: "2008-Current",
//       title: "A Better Tomorrow",
//       description:
//         "Cotton Group is a fully-integrated setup, focusing on the entire value chain from yarn to ready-to-wear. They've acquired land in the Bangabandhu Sheikh Mujib Shilpa Nagar – Mirershorai Economic Zone for expansion. Sustainability is a key commitment through their CottonCares™️ initiative, and they've adapted their production facility for COVID-19 safety.",
//       image: image5,
//     },
//   ];

//   const [currentSlide, setCurrentSlide] = useState(0);

//   const handlePrevious = () => {
//     if (currentSlide > 0) {
//       setCurrentSlide(currentSlide - 1);
//     }
//   };

//   const handleNext = () => {
//     if (currentSlide < timelineData.length - 1) {
//       setCurrentSlide(currentSlide + 1);
//     }
//   };

//   return (
//     <div className="bg-[#0B714C] p-8 relative w-full overflow-hidden px-20">
//       {/* Timeline */}
//       <div className="flex justify-between mb-16 pt-16 relative">
//         {/* Timeline nodes and lines */}
//         <div className="w-full flex items-center">
//           {timelineData.map((item, index) => (
//             <React.Fragment key={item.id}>
//               {/* Combined container for period and circle */}
//               <div
//                 className="flex flex-col items-center absolute w-full"
//                 style={{
//                   left: `${index * (100 / (timelineData.length - 1))}%`, // Dynamically position based on index
//                   transform: "translateX(-50%)", // Center the container horizontally
//                 }}
//               >
//                 {/* Period label */}
//                 <div className="text-white text-base font-medium mb-4">
//                   {item.period}
//                 </div>

//                 {/* Timeline circle */}
//                 <div className="flex items-center justify-center relative">
//                   <div
//                     className={`w-12 h-12 rounded-full flex items-center justify-center ${
//                       index <= currentSlide ? "bg-[#B2D4C9]" : "bg-[#5A9B83]"
//                     }`}
//                   >
//                     <div
//                       className={`w-5 h-5 rounded-full ${
//                         index <= currentSlide ? "bg-white" : "bg-[#84B19F]"
//                       }`}
//                     ></div>
//                   </div>
//                 </div>
//               </div>

//               {/* Connecting Lines */}
//               {index < timelineData.length - 1 && (
//                 <div className="flex-1 relative z-10">
//                   {/* Base connecting line */}
//                   <div className="h-[3px] bg-[#B2D4C9] absolute top-5 transform -translate-y-1/2 w-full"></div>

//                   {/* Active overlay line */}
//                   {index <= currentSlide && (
//                     <div
//                       className="h-[3px] bg-white absolute top-5 transform -translate-y-1/2 w-full"
//                       //  style={{
//                       //    width: index + 1 <= currentSlide ? "100%" : "0%",
//                       //  }}
//                     ></div>
//                   )}
//                 </div>
//               )}
//             </React.Fragment>
//           ))}
//         </div>
//       </div>

//       {/* Content Card - Hidden for now as it's not in the provided design */}
//       <div className="flex mb-8 justify-center pt-14">
//         <div className="w-80 h-[350px]">
//           <img
//             src={timelineData[currentSlide].image}
//             alt={timelineData[currentSlide].title}
//             className="w-full h-full object-cover rounded-lg rounded-r-none"
//           />
//         </div>
//         <div className="w-1/2 bg-white px-7 py-12 rounded-r-2xl flex items-center">
//           <div>
//             <h2 className="text-2xl font-bold text-black mb-4">
//               {timelineData[currentSlide].title}
//             </h2>
//             <p className="text-black text-lg font-normal">
//               {timelineData[currentSlide].description}
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Navigation buttons - Hidden for now as they're not in the provided design */}
//       <div className="flex justify-center">
//         <button
//           onClick={handlePrevious}
//           disabled={currentSlide === 0}
//           className={`w-14 h-14 rounded-full flex items-center justify-center mr-20 ${
//             currentSlide === 0
//               ? "bg-gray-300 text-gray-500 cursor-not-allowed"
//               : "bg-white text-[#0B714C] hover:bg-gray-100"
//           }`}
//           aria-label="Previous slide"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth={1.5}
//             stroke="currentColor"
//             className="w-5 h-6"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M15.75 19.5L8.25 12l7.5-7.5"
//             />
//           </svg>
//         </button>
//         <button
//           onClick={handleNext}
//           disabled={currentSlide === timelineData.length - 1}
//           className={`w-14 h-14 rounded-full flex items-center justify-center ${
//             currentSlide === timelineData.length - 1
//               ? "bg-gray-300 text-gray-500 cursor-not-allowed"
//               : "bg-white text-[#0B714C] hover:bg-gray-100"
//           }`}
//           aria-label="Next slide"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth={1.5}
//             stroke="currentColor"
//             className="w-5 h-6"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M8.25 4.5l7.5 7.5-7.5 7.5"
//             />
//           </svg>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ImageCardTimelineSlider;

// import { motion } from "framer-motion"; // Import framer-motion
// import React, { useState } from "react";
// import image1 from "../assets/images/Company-Timeline-Images/image-1.jpg";
// import image2 from "../assets/images/Company-Timeline-Images/image-2.jpg";
// import image3 from "../assets/images/Company-Timeline-Images/image-3.jpg";
// import image4 from "../assets/images/Company-Timeline-Images/image-4.jpg";
// import image5 from "../assets/images/Company-Timeline-Images/image-5.jpg";

// const ImageCardTimelineSlider = () => {
//   const timelineData = [
//     {
//       id: 1,
//       period: "1990",
//       title: "A Young Man with a Dream",
//       description:
//         "At 25, Shaheen Mahmud, with experience and customer relationships, dreams of starting an RMG business. Despite limited funds, he hires an employee, starts in a 5,500 sqft. factory on Mohakhali Airport Road, and buys machinery from Gulshan. A banker backs his vision with a letter of credit amid industry skepticism.",
//       image: image1,
//     },
//     {
//       id: 2,
//       period: "1991-1995",
//       title: "Wheels Truning",
//       description:
//         "Cotton Group is born and carries out its first export on January 31, 1991. It begins exporting at 700,000 pieces per year with 250 employees. Achieving 200% growth year on year, Cotton Group expanded its factory space to 84,000 sqft by 1995 in a Mirpur facility while focusing on compliance measures within its practices",
//       image: image2,
//     },
//     {
//       id: 3,
//       period: "1994-1999",
//       title: "Unparalleled Growth",
//       description:
//         "In 1994, Cotton Group expanded production, won the Prime Minister Export Gold Award, and moved to Gazipur for a vertical setup, prioritizing compliance.",
//       image: image3,
//     },
//     {
//       id: 4,
//       period: "2001-2008",
//       title: "Racing Forward",
//       description:
//         "Cotton Group is a fully-integrated setup, focusing on the entire value chain from yarn to ready-to-wear. They've acquired land in the Bangabandhu Sheikh Mujib Shilpa Nagar – Mirershorai Economic Zone for expansion. Sustainability is a key commitment through their CottonCares™️ initiative, and they've adapted their production facility for COVID-19 safety.",
//       image: image4,
//     },
//     {
//       id: 5,
//       period: "2008-Current",
//       title: "A Better Tomorrow",
//       description:
//         "Cotton Group is a fully-integrated setup, focusing on the entire value chain from yarn to ready-to-wear. They've acquired land in the Bangabandhu Sheikh Mujib Shilpa Nagar – Mirershorai Economic Zone for expansion. Sustainability is a key commitment through their CottonCares™️ initiative, and they've adapted their production facility for COVID-19 safety.",
//       image: image5,
//     },
//   ];

//   const [currentSlide, setCurrentSlide] = useState(0);

//   const handlePrevious = () => {
//     if (currentSlide > 0) {
//       setCurrentSlide(currentSlide - 1);
//     }
//   };

//   const handleNext = () => {
//     if (currentSlide < timelineData.length - 1) {
//       setCurrentSlide(currentSlide + 1);
//     }
//   };

//   return (
//     <div className="bg-[#0B714C] p-8 relative w-full overflow-hidden px-20">
//       {/* Timeline */}
//       <div className="flex justify-between mb-16 pt-16 relative">
//         {/* Timeline nodes and lines */}
//         <div className="w-full flex items-center">
//           {timelineData.map((item, index) => (
//             <React.Fragment key={item.id}>
//               {/* Combined container for period and circle */}
//               <div
//                 className="flex flex-col items-center absolute w-full"
//                 style={{
//                   left: `${index * (100 / (timelineData.length - 1))}%`, // Dynamically position based on index
//                   transform: "translateX(-50%)", // Center the container horizontally
//                 }}
//               >
//                 {/* Period label */}
//                 <div className="text-white text-base font-medium mb-4">
//                   {item.period}
//                 </div>

//                 {/* Timeline circle */}
//                 <div className="flex items-center justify-center relative">
//                   <div
//                     className={`w-12 h-12 rounded-full flex items-center justify-center ${
//                       index <= currentSlide ? "bg-[#B2D4C9]" : "bg-[#B2D4C9]"
//                     }`}
//                   >
//                     <div
//                       className={`w-5 h-5 rounded-full ${
//                         index <= currentSlide ? "bg-white" : "bg-[#859E95]"
//                       }`}
//                     ></div>
//                   </div>
//                 </div>
//               </div>

//               {/* Connecting Lines */}
//               {index < timelineData.length - 1 && (
//                 <div className="flex-1 relative z-10">
//                   {/* Base connecting line */}
//                   <div className="h-[3px] bg-[#B2D4C9] absolute top-5 transform -translate-y-1/2 w-full"></div>

//                   {/* Active overlay line */}
//                   {index <= currentSlide && (
//                     <div
//                       className="h-[3px] bg-white absolute top-5 transform -translate-y-1/2 w-full"
//                       //  style={{
//                       //    width: index + 1 <= currentSlide ? "100%" : "0%",
//                       //  }}
//                     ></div>
//                   )}
//                 </div>
//               )}
//             </React.Fragment>
//           ))}
//         </div>
//       </div>

//       {/* Content Card - Hidden for now as it's not in the provided design */}
//       <div className="flex mb-8 justify-center pt-14">
//         <div className="w-80 h-[350px]">
//           <motion.img
//             src={timelineData[currentSlide].image}
//             alt={timelineData[currentSlide].title}
//             className="w-full h-full object-cover rounded-lg rounded-r-none"
//             key={currentSlide} // Set the key to currentSlide to trigger re-mount when the slide changes
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.5 }}
//           />
//         </div>
//         <motion.div
//           className="w-1/2 bg-white px-7 py-12 rounded-r-2xl flex items-center"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           <div>
//             <h2 className="text-2xl font-bold text-black mb-4">
//               {timelineData[currentSlide].title}
//             </h2>
//             <p className="text-black text-lg font-normal">
//               {timelineData[currentSlide].description}
//             </p>
//           </div>
//         </motion.div>
//       </div>

//       {/* Navigation buttons - Hidden for now as they're not in the provided design */}
//       <div className="flex justify-center">
//         <button
//           onClick={handlePrevious}
//           disabled={currentSlide === 0}
//           className={`w-14 h-14 rounded-full flex items-center justify-center mr-20 ${
//             currentSlide === 0
//               ? "bg-gray-300 text-gray-500 cursor-not-allowed"
//               : "bg-white text-[#0B714C] hover:bg-gray-100"
//           }`}
//           aria-label="Previous slide"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth={1.5}
//             stroke="currentColor"
//             className="w-5 h-6"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M15.75 19.5L8.25 12l7.5-7.5"
//             />
//           </svg>
//         </button>
//         <button
//           onClick={handleNext}
//           disabled={currentSlide === timelineData.length - 1}
//           className={`w-14 h-14 rounded-full flex items-center justify-center ${
//             currentSlide === timelineData.length - 1
//               ? "bg-gray-300 text-gray-500 cursor-not-allowed"
//               : "bg-white text-[#0B714C] hover:bg-gray-100"
//           }`}
//           aria-label="Next slide"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth={1.5}
//             stroke="currentColor"
//             className="w-5 h-6"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M8.25 4.5l7.5 7.5-7.5 7.5"
//             />
//           </svg>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ImageCardTimelineSlider;

"use client";

import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import image1 from "../assets/images/Company-Timeline-Images/image-1.jpg";
import image2 from "../assets/images/Company-Timeline-Images/image-2.jpg";
import image3 from "../assets/images/Company-Timeline-Images/image-3.jpg";
import image4 from "../assets/images/Company-Timeline-Images/image-4.jpg";
import image5 from "../assets/images/Company-Timeline-Images/image-5.jpg";

const ImageCardTimelineSlider = () => {
  const timelineData = [
    {
      id: 1,
      period: "1990",
      title: "A Young Man with a Dream",
      description:
        "At 25, Shaheen Mahmud, with experience and customer relationships, dreams of starting an RMG business. Despite limited funds, he hires an employee, starts in a 5,100 sqft. factory on Mohakhali Airport Road, and buys machinery from Gulistan. A banker backs his vision with a letter of credit amid industry skepticism.",
      image: image1,
    },
    {
      id: 2,
      period: "1991-1995",
      title: "Wheels Turning",
      description:
        "Cotton Group is born and carries out its first export on January 31, 1991. It begins exporting at 700,000 pieces per year with 250 employees. Achieving 200% growth year on year, Cotton Group expanded its factory space to 84,000 sqft by 1995 in a Mirpur facility while focusing on compliance measures within its practices",
      image: image2,
    },
    {
      id: 3,
      period: "1994-1999",
      title: "Unparalleled Growth",
      description:
        "In 1994, Cotton Group expanded production, won the Prime Minister Export Gold Award, and moved to Gazipur for a vertical setup, prioritizing compliance.",
      image: image3,
    },
    {
      id: 4,
      period: "2001-2008",
      title: "Racing Forward",
      description:
        "Cotton Group is a fully-integrated setup, focusing on the entire value chain from yarn to ready-to-wear. They've acquired land in the Bangabandhu Sheikh Mujib Shilpa Nagar – Mirershorai Economic Zone for expansion. Sustainability is a key commitment through their CottonCares™️ initiative, and they've adapted their production facility for COVID-19 safety.",
      image: image4,
    },
    {
      id: 5,
      period: "2008-Current",
      title: "A Better Tomorrow",
      description:
        "Cotton Group is a fully-integrated setup, focusing on the entire value chain from yarn to ready-to-wear. They've acquired land in the Bangabandhu Sheikh Mujib Shilpa Nagar – Mirershorai Economic Zone for expansion. Sustainability is a key commitment through their CottonCares™️ initiative, and they've adapted their production facility for COVID-19 safety.",
      image: image5,
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  // eslint-disable-next-line no-unused-vars
  const [isMobile, setIsMobile] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const sliderRef = useRef(null);

  // Check if the screen is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const handlePrevious = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const handleNext = () => {
    if (currentSlide < timelineData.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  // Swipe handlers
  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null); // Reset touchEnd
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe && currentSlide < timelineData.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }

    if (isRightSwipe && currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <div className="bg-[#0B714C] relative w-full overflow-hidden md:p-8 md:px-20">
      <h2 className="text-white text-3xl font-bold text-center pt-8 pb-12 md:mb-8">
        Our Journey
      </h2>

      {/* Desktop Timeline */}
      <div className="hidden md:flex justify-between mb-16 pt-16 relative">
        {/* Timeline nodes and lines */}
        <div className="w-full flex items-center">
          {timelineData.map((item, index) => (
            <React.Fragment key={item.id}>
              {/* Combined container for period and circle */}
              <div
                className="flex flex-col items-center absolute w-full"
                style={{
                  left: `${index * (100 / (timelineData.length - 1))}%`,
                  transform: "translateX(-50%)",
                }}
              >
                {/* Period label */}
                <div className="text-white text-base font-medium mb-4">
                  {item.period}
                </div>

                {/* Timeline circle */}
                <div className="flex items-center justify-center relative">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      index <= currentSlide ? "bg-[#B2D4C9]" : "bg-[#B2D4C9]"
                    }`}
                  >
                    <div
                      className={`w-5 h-5 rounded-full ${
                        index <= currentSlide ? "bg-white" : "bg-[#859E95]"
                      }`}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Connecting Lines */}
              {index < timelineData.length - 1 && (
                <div className="flex-1 relative z-10">
                  {/* Base connecting line */}
                  <div className="h-[3px] bg-[#B2D4C9] absolute top-5 transform -translate-y-1/2 w-full"></div>

                  {/* Active overlay line */}
                  {index < currentSlide && (
                    <div className="h-[3px] bg-white absolute top-5 transform -translate-y-1/2 w-full"></div>
                  )}
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Mobile Timeline */}
      <div className="md:hidden flex flex-col items-center mb-8">
        {/* Period label */}
        <div className="w-full overflow-hidden">
          <motion.div
            className="flex"
            animate={{ x: `calc(-${currentSlide * 100}%)` }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {timelineData.map((item, index) => (
              <div
                key={`period-${index}`}
                className="w-full flex-shrink-0 flex justify-center"
              >
                <div className="text-white text-2xl font-medium mb-4">
                  {item.period}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Timeline node and connecting line */}
        <div className="w-full overflow-hidden">
          <motion.div
            className="flex"
            animate={{ x: `calc(-${currentSlide * 100}%)` }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {timelineData.map((_, index) => (
              <div
                key={`timeline-node-${index}`}
                className="w-full flex-shrink-0 relative flex justify-center"
              >
                <div className="relative">
                  {/* White circle with green center */}
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center z-10">
                    <div className="w-5 h-5 rounded-full bg-[#B2D4C9]"></div>
                  </div>

                  {/* Horizontal line extending to the right */}
                  {/* <div className="h-[2px] bg-white absolute left-full top-1/2 -translate-y-1/2 w-screen"></div> */}
                  {index < timelineData.length - 1 && (
                    <div className="h-[2px] bg-white absolute left-full top-1/2 -translate-y-1/2 w-screen"></div>
                  )}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Desktop Content */}
      <div className="hidden md:flex mb-8 justify-center pt-14">
        <div className="w-80 h-[350px]">
          <motion.img
            src={timelineData[currentSlide].image}
            alt={timelineData[currentSlide].title}
            className="w-full h-full object-cover rounded-lg rounded-r-none"
            key={`desktop-img-${currentSlide}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          />
        </div>
        <motion.div
          className="w-1/2 bg-white px-7 py-12 rounded-r-2xl flex items-center"
          key={`desktop-content-${currentSlide}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <h2 className="text-2xl font-bold text-black mb-4">
              {timelineData[currentSlide].title}
            </h2>
            <p className="text-black text-lg font-normal">
              {timelineData[currentSlide].description}
            </p>
          </div>
        </motion.div>
      </div>

      {/* Mobile Content - Swipeable */}
      <div
        className="md:hidden w-full overflow-hidden"
        ref={sliderRef}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <motion.div
          className="flex"
          animate={{ x: `calc(-${currentSlide * 100}%)` }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          {timelineData.map((item, index) => (
            <div
              key={`mobile-slide-${index}`}
              className="w-full flex-shrink-0 px-5 mb-12"
            >
              {/* Image */}
              <div className="w-full h-[200px]">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-full object-cover rounded-t-lg"
                  draggable="false"
                />
              </div>
              {/* Text Card */}
              <div className="bg-white rounded-b-lg p-6 h-[300px]">
                <h2 className="text-[#0B714C] text-xl font-bold mb-2">
                  {item.title}
                </h2>
                <p className="text-black text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Desktop Navigation buttons */}
      <div className="hidden md:flex justify-center">
        <button
          onClick={handlePrevious}
          disabled={currentSlide === 0}
          className={`w-14 h-14 rounded-full flex items-center justify-center mr-20 ${
            currentSlide === 0
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-white text-[#0B714C] hover:bg-gray-100"
          }`}
          aria-label="Previous slide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </button>
        <button
          onClick={handleNext}
          disabled={currentSlide === timelineData.length - 1}
          className={`w-14 h-14 rounded-full flex items-center justify-center ${
            currentSlide === timelineData.length - 1
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-white text-[#0B714C] hover:bg-gray-100"
          }`}
          aria-label="Next slide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Pagination Dots */}
      {/* <div className="md:hidden flex justify-center py-6 space-x-2">
        {timelineData.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full cursor-pointer ${index === currentSlide ? "bg-white" : "bg-[#B2D4C9]"}`}
            onClick={() => setCurrentSlide(index)}
          ></div>
        ))}
      </div> */}
    </div>
  );
};

export default ImageCardTimelineSlider;

// import { motion } from "framer-motion";
// import  { useState } from "react";
// import image1 from "../assets/images/Company-Timeline-Images/image-1.jpg";
// import image2 from "../assets/images/Company-Timeline-Images/image-2.jpg";
// import image3 from "../assets/images/Company-Timeline-Images/image-3.jpg";
// import image4 from "../assets/images/Company-Timeline-Images/image-4.jpg";
// import image5 from "../assets/images/Company-Timeline-Images/image-5.jpg";

// const ImageCardTimelineSlider = () => {
//   const timelineData = [
//     {
//       id: 1,
//       period: "1990",
//       title: "A Young Man with a Dream",
//       description:
//         "At 25, Shaheen Mahmud, with experience and customer relationships, dreams of starting an RMG business. Despite limited funds, he hires an employee, starts in a 5,500 sqft. factory on Mohakhali Airport Road, and buys machinery from Gulshan. A banker backs his vision with a letter of credit amid industry skepticism.",
//       image: image1,
//     },
//     {
//       id: 2,
//       period: "1991-1995",
//       title: "Wheels Truning",
//       description:
//         "Cotton Group is born and carries out its first export on January 31, 1991. It begins exporting at 700,000 pieces per year with 250 employees. Achieving 200% growth year on year, Cotton Group expanded its factory space to 84,000 sqft by 1995 in a Mirpur facility while focusing on compliance measures within its practices",
//       image: image2,
//     },
//     {
//       id: 3,
//       period: "1994-1999",
//       title: "Unparalleled Growth",
//       description:
//         "In 1994, Cotton Group expanded production, won the Prime Minister Export Gold Award, and moved to Gazipur for a vertical setup, prioritizing compliance.",
//       image: image3,
//     },
//     {
//       id: 4,
//       period: "2001-2008",
//       title: "Racing Forward",
//       description:
//         "Cotton Group is a fully-integrated setup, focusing on the entire value chain from yarn to ready-to-wear. They've acquired land in the Bangabandhu Sheikh Mujib Shilpa Nagar – Mirershorai Economic Zone for expansion. Sustainability is a key commitment through their CottonCares™️ initiative, and they've adapted their production facility for COVID-19 safety.",
//       image: image4,
//     },
//     {
//       id: 5,
//       period: "2008-Current",
//       title: "A Better Tomorrow",
//       description:
//         "Cotton Group is a fully-integrated setup, focusing on the entire value chain from yarn to ready-to-wear. They've acquired land in the Bangabandhu Sheikh Mujib Shilpa Nagar – Mirershorai Economic Zone for expansion. Sustainability is a key commitment through their CottonCares™️ initiative, and they've adapted their production facility for COVID-19 safety.",
//       image: image5,
//     },
//   ];

//   const [currentSlide, setCurrentSlide] = useState(0);

//   const handlePrevious = () => {
//     if (currentSlide > 0) {
//       setCurrentSlide(currentSlide - 1);
//     }
//   };

//   const handleNext = () => {
//     if (currentSlide < timelineData.length - 1) {
//       setCurrentSlide(currentSlide + 1);
//     }
//   };

//   return (
//     <div className="bg-[#0B714C] p-8 relative w-full overflow-hidden px-20">
//       {/* Timeline */}
//       <div className="flex justify-between mb-16 pt-16 relative">
//         {/* Timeline nodes and lines */}
//         <div className="w-full flex items-center relative">
//           {/* Continuous background line first (rendered below everything) */}
//           <div className="h-[3px] bg-[#B2D4C9] absolute top-[20px] left-0 right-0 w-full"></div>

//           {/* Active progress line (only spans the active portion) */}
//           <div
//             className="h-[3px] bg-white absolute top-[76px] left-0"
//             style={{
//               width: `${currentSlide === 0 ? 0 : currentSlide / (timelineData.length - 1) * 100}%`,
//               transition: "width 0.3s ease-in-out"
//             }}
//           ></div>

//           {/* Timeline nodes */}
//           {timelineData.map((item, index) => (
//             <div
//               key={item.id}
//               className="flex flex-col items-center absolute"
//               style={{
//                 left: `${index * (100 / (timelineData.length - 1))}%`,
//                 transform: "translateX(-50%)",
//               }}
//             >
//               {/* Period label */}
//               <div className="text-white text-base font-medium mb-4 flex-nowrap">
//                 {item.period}
//               </div>

//               {/* Timeline circle - outer */}
//               <div
//                 className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-300
//                   ${index <= currentSlide ? "bg-[#B2D4C9]" : "bg-[#5A9B83]"}`}
//               >
//                 {/* Timeline circle - inner */}
//                 <div
//                   className={`w-5 h-5 rounded-full transition-colors duration-300
//                     ${index <= currentSlide ? "bg-white" : "bg-[#84B19F]"}`}
//                 ></div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Content Card */}
//       <div className="flex mb-8 justify-center pt-14">
//         <motion.div
//           className="w-80 h-[350px]"
//           key={`image-${currentSlide}`}
//           initial={{ opacity: 0, x: -20 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           <img
//             src={timelineData[currentSlide].image}
//             alt={timelineData[currentSlide].title}
//             className="w-full h-full object-cover rounded-lg rounded-r-none"
//           />
//         </motion.div>
//         <motion.div
//           className="w-1/2 bg-white px-7 py-12 rounded-r-2xl flex items-center"
//           key={`content-${currentSlide}`}
//           initial={{ opacity: 0, x: 20 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           <div>
//             <h2 className="text-2xl font-bold text-black mb-4">
//               {timelineData[currentSlide].title}
//             </h2>
//             <p className="text-black text-lg font-normal">
//               {timelineData[currentSlide].description}
//             </p>
//           </div>
//         </motion.div>
//       </div>

//       {/* Navigation buttons */}
//       <div className="flex justify-center">
//         <button
//           onClick={handlePrevious}
//           disabled={currentSlide === 0}
//           className={`w-14 h-14 rounded-full flex items-center justify-center mr-20 ${
//             currentSlide === 0
//               ? "bg-gray-300 text-gray-500 cursor-not-allowed"
//               : "bg-white text-[#0B714C] hover:bg-gray-100"
//           }`}
//           aria-label="Previous slide"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth={1.5}
//             stroke="currentColor"
//             className="w-5 h-6"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M15.75 19.5L8.25 12l7.5-7.5"
//             />
//           </svg>
//         </button>
//         <button
//           onClick={handleNext}
//           disabled={currentSlide === timelineData.length - 1}
//           className={`w-14 h-14 rounded-full flex items-center justify-center ${
//             currentSlide === timelineData.length - 1
//               ? "bg-gray-300 text-gray-500 cursor-not-allowed"
//               : "bg-white text-[#0B714C] hover:bg-gray-100"
//           }`}
//           aria-label="Next slide"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth={1.5}
//             stroke="currentColor"
//             className="w-5 h-6"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M8.25 4.5l7.5 7.5-7.5 7.5"
//             />
//           </svg>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ImageCardTimelineSlider;
