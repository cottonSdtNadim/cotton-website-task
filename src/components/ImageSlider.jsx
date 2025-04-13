// import { motion } from "framer-motion";
// import { useEffect, useState } from "react";
// import slider1 from "../assets/images/image-sliders/image-slider-1.png";
// import slider3 from "../assets/images/image-sliders/image-slider-3.png";
// import slider4 from "../assets/images/image-sliders/image-slider-4.png";
// import slider5 from "../assets/images/image-sliders/image-slider-5.png";
// import slider2 from "../assets/images/image-sliders/image0-slider-2.png";

// const images = [slider1, slider2, slider3, slider4, slider5];

// const ImageSlider = () => {
//   const [selectedIndex, setSelectedIndex] = useState(0);

//   useEffect(() => {
//     // Set up the interval for autoplay (3 seconds)
//     const interval = setInterval(() => {
//       setSelectedIndex((prevIndex) => (prevIndex + 1) % images.length); // Loop back to 0 after the last image
//     }, 3000);

//     // Clean up the interval when the component unmounts
//     return () => clearInterval(interval);
//   }, []);

//   const handleThumbnailClick = (index) => {
//     setSelectedIndex(index); // Update main image when a thumbnail is clicked
//   };

//   // Reorder images based on the selected index, to ensure the selected image moves to the top
//   const orderedImages = [
//     images[selectedIndex], // Add the selected image first
//     ...images.slice(selectedIndex + 1), // Add the images after the selected one
//     ...images.slice(0, selectedIndex), // Add the images before the selected one
//   ];

//   // Limit the number of visible thumbnails to 4 (3 full images, 1 with 50% height)
//   const visibleThumbnails = orderedImages.slice(0, 4);

//   return (
//     <div className="flex items-center gap-7 px-4 md:px-24">
//       {/* px-[102px] */}
//       {/* Main Image container */}
//       <motion.div
//         className="w-full h-[200px] xl:w-[967px] xl:h-[558px] flex justify-center items-center rounded-lg"
//         key={selectedIndex} // Key prop triggers re-render when the selectedIndex changes
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         exit={{ opacity: 0 }}
//         transition={{ duration: 0.5 }} // Animation duration
//       >
//         <motion.img
//           src={images[selectedIndex]}
//           alt={`Selected ${selectedIndex + 1}`}
//           className="rounded-lg object-cover w-full h-full"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 0.5 }}
//         />
//       </motion.div>
//       {/* Vertical Thumbnails container (Hidden on mobile, visible on larger screens) */}
//       <motion.div
//         className="flex-col h-[558px] w-72 rounded-lg hidden xl:block" /* flex  */
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         exit={{ opacity: 0 }}
//         transition={{ duration: 0.5 }}
//       >
//         <div className="flex flex-col h-full">
//           {visibleThumbnails.map((img, index) => {
//             // Calculate the height for each thumbnail
//             const isLastThumbnail = index === 3;
//             const thumbnailHeight = isLastThumbnail ? "69px" : "139px"; // Half height for last thumbnail
//             const marginBottom = isLastThumbnail ? "0" : "21px"; // No margin for last item

//             // Custom border radius for the last thumbnail
//             let borderRadiusClass = "rounded-lg";
//             if (isLastThumbnail) {
//               borderRadiusClass = "rounded-t-lg rounded-b-none"; // Only round top corners
//             }

//             return (
//               <motion.div
//                 key={index}
//                 className={`relative cursor-pointer overflow-hidden transition-all duration-300 ${borderRadiusClass}`}
//                 onClick={() => handleThumbnailClick(images.indexOf(img))}
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 exit={{ opacity: 0 }}
//                 transition={{ duration: 0.3 }}
//                 style={{
//                   height: thumbnailHeight,
//                   marginBottom: marginBottom,
//                 }}
//               >
//                 <motion.img
//                   src={img}
//                   alt={`Thumbnail ${index + 1}`}
//                   className={`w-full h-full object-cover transition-transform duration-300
//                     /* ${
//                       selectedIndex === images.indexOf(img)
//                         ? "scale-110 border-2 border-blue-500"
//                         : "border-2 border-transparent"
//                     } */
//                   ${isLastThumbnail ? borderRadiusClass : "rounded-xl"}`}
//                   /* initial={{ scale: 0.8 }}
//                   animate={{
//                     scale: selectedIndex === images.indexOf(img) ? 1.1 : 1,
//                   }}
//                   exit={{ scale: 0.8 }} */
//                   transition={{ duration: 0.3 }}
//                 />
//                 {selectedIndex === images.indexOf(img) && (
//                   <div className="absolute top-0 left-0 right-0 bottom-0 bg-blue-500 opacity-20"></div>
//                 )}
//               </motion.div>
//             );
//           })}
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default ImageSlider;

// import { AnimatePresence, motion } from "framer-motion";
// import { useEffect, useRef, useState } from "react";
// import slider1 from "../assets/images/image-sliders/image-slider-1.png";
// import slider3 from "../assets/images/image-sliders/image-slider-3.png";
// import slider4 from "../assets/images/image-sliders/image-slider-4.png";
// import slider5 from "../assets/images/image-sliders/image-slider-5.png";
// import slider2 from "../assets/images/image-sliders/image0-slider-2.png";

// const images = [slider1, slider2, slider3, slider4, slider5];

// const ImageSlider = () => {
//   const [selectedIndex, setSelectedIndex] = useState(0);
//   const [direction, setDirection] = useState(1); // 1 for right-to-left, -1 for left-to-right
//   const [isMobile, setIsMobile] = useState(false);
//   const containerRef = useRef(null);

//   // Check if we're on mobile
//   useEffect(() => {
//     const checkMobile = () => {
//       setIsMobile(window.innerWidth < 1280); // xl breakpoint in Tailwind
//     };

//     // Check on mount and when window resizes
//     checkMobile();
//     window.addEventListener("resize", checkMobile);

//     return () => window.removeEventListener("resize", checkMobile);
//   }, []);

//   useEffect(() => {
//     // Set up the interval for autoplay (3 seconds)
//     const interval = setInterval(() => {
//       if (selectedIndex === images.length - 1) {
//         // If we're at the last image and on mobile
//         if (isMobile) {
//           setDirection(-1); // Set direction to left-to-right for reset animation
//         }
//       } else {
//         setDirection(1); // Normal right-to-left for progression
//       }

//       setSelectedIndex((prevIndex) => (prevIndex + 1) % images.length); // Loop back to 0
//     }, 3000);

//     // Clean up the interval when the component unmounts
//     return () => clearInterval(interval);
//   }, [selectedIndex, isMobile]);

//   const handleThumbnailClick = (index) => {
//     setSelectedIndex(index); // Update main image when a thumbnail is clicked
//   };

//   // Function to get next image index
//   const getNextIndex = (index) => {
//     return (index + 1) % images.length;
//   };

//   // Function to get previous image index
//   const getPrevIndex = (index) => {
//     return index === 0 ? images.length - 1 : index - 1;
//   };

//   // Handle clicking on preview images
//   const handlePreviewClick = (isNext) => {
//     if (isNext) {
//       setDirection(1);
//       setSelectedIndex(getNextIndex(selectedIndex));
//     } else {
//       setDirection(-1);
//       setSelectedIndex(getPrevIndex(selectedIndex));
//     }
//   };

//   // Reorder images based on the selected index, to ensure the selected image moves to the top
//   const orderedImages = [
//     images[selectedIndex], // Add the selected image first
//     ...images.slice(selectedIndex + 1), // Add the images after the selected one
//     ...images.slice(0, selectedIndex), // Add the images before the selected one
//   ];

//   // Limit the number of visible thumbnails to 4 (3 full images, 1 with 50% height)
//   const visibleThumbnails = orderedImages.slice(0, 4);

//   // Mobile slide variants
//   const slideVariants = {
//     enter: (direction) => ({
//       x: direction > 0 ? 1000 : -1000,
//       opacity: 0,
//     }),
//     center: {
//       x: 0,
//       opacity: 1,
//     },
//     exit: (direction) => ({
//       x: direction > 0 ? -1000 : 1000,
//       opacity: 0,
//     }),
//   };

//   return (
//     <div
//       className="flex flex-col xl:flex-row items-center gap-7 px-4 md:px-24"
//       ref={containerRef}
//     >
//       {/* Main Image container */}
//       {isMobile ? (
//         // Mobile slider with horizontal swipe animations and preview images
//         <div className="w-[350px] h-64 md:h-80 relative overflow-hidden rounded-lg">
//           {/* Main slider with animation */}
//           <AnimatePresence initial={false} custom={direction}>
//             <motion.div
//               key={selectedIndex}
//               custom={direction}
//               variants={slideVariants}
//               initial="enter"
//               animate="center"
//               exit="exit"
//               transition={{
//                 x: { type: "spring", stiffness: 300, damping: 30 },
//                 opacity: { duration: 0.2 },
//               }}
//               className="absolute w-full h-full"
//             >
//               {/* Image container with preview images */}
//               <div className="relative flex items-center justify-center w-full h-full">
//                 {/* Left preview - only show for the last image */}
//                 {selectedIndex === images.length - 1 && (
//                   <div
//                     className="absolute left-0 h-full w-5 overflow-hidden cursor-pointer"
//                     onClick={() => handlePreviewClick(false)}
//                   >
//                     <div className="h-full w-48 relative">
//                       <img
//                         src={images[getPrevIndex(selectedIndex)]}
//                         alt="Previous"
//                         className="absolute right-0 h-full object-cover rounded-l-lg"
//                         style={{ width: "200%" }}
//                       />
//                       <div className="absolute inset-0 bg-opacity-40"></div>
//                     </div>
//                   </div>
//                 )}

//                 {/* Main image */}
//                 <img
//                   src={images[selectedIndex]}
//                   alt={`Selected ${selectedIndex + 1}`}
//                   className="rounded-lg object-cover w-full h-full"
//                 />

//                 {/* Right preview - show for all except last image */}
//                 {selectedIndex !== images.length - 1 && (
//                   <div
//                     className="absolute right-0 h-full w-5 overflow-hidden cursor-pointer border-2 ml-4" /* w-16 */
//                     onClick={() => handlePreviewClick(true)}
//                   >
//                     <div className="h-full w-48 relative">
//                       <img
//                         src={images[getNextIndex(selectedIndex)]}
//                         alt="Next"
//                         className="absolute left-0 h-full object-cover rounded-r-lg"
//                         style={{ width: "200%" }}
//                       />
//                       <div className="absolute inset-0  bg-opacity-40"></div>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             </motion.div>
//           </AnimatePresence>

//           {/* Swipe instruction indicators (first time only) */}
//           {/* <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 pointer-events-none">
//             <div className="bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-xs">
//               Swipe or tap previews to navigate
//             </div>
//           </div> */}
//         </div>
//       ) : (
//         // Desktop main image with fade animations
//         <motion.div
//           className="w-full h-[200px] xl:w-[967px] xl:h-[558px] flex justify-center items-center rounded-lg"
//           key={selectedIndex} // Key prop triggers re-render when the selectedIndex changes
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 0.5 }} // Animation duration
//         >
//           <motion.img
//             src={images[selectedIndex]}
//             alt={`Selected ${selectedIndex + 1}`}
//             className="rounded-lg object-cover w-full h-full"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.5 }}
//           />
//         </motion.div>
//       )}

//       {/* Vertical Thumbnails container (Hidden on mobile, visible on larger screens) */}
//       <motion.div
//         className="flex-col h-[558px] w-72 rounded-lg hidden xl:block"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         exit={{ opacity: 0 }}
//         transition={{ duration: 0.5 }}
//       >
//         <div className="flex flex-col h-full">
//           {visibleThumbnails.map((img, index) => {
//             // Calculate the height for each thumbnail
//             const isLastThumbnail = index === 3;
//             const thumbnailHeight = isLastThumbnail ? "69px" : "139px"; // Half height for last thumbnail
//             const marginBottom = isLastThumbnail ? "0" : "21px"; // No margin for last item

//             // Custom border radius for the last thumbnail
//             let borderRadiusClass = "rounded-lg";
//             if (isLastThumbnail) {
//               borderRadiusClass = "rounded-t-lg rounded-b-none"; // Only round top corners
//             }

//             return (
//               <motion.div
//                 key={index}
//                 className={`relative cursor-pointer overflow-hidden transition-all duration-300 ${borderRadiusClass}`}
//                 onClick={() => handleThumbnailClick(images.indexOf(img))}
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 exit={{ opacity: 0 }}
//                 transition={{ duration: 0.3 }}
//                 style={{
//                   height: thumbnailHeight,
//                   marginBottom: marginBottom,
//                 }}
//               >
//                 <motion.img
//                   src={img}
//                   alt={`Thumbnail ${index + 1}`}
//                   className={`w-full h-full object-cover transition-transform duration-300
//                   ${isLastThumbnail ? borderRadiusClass : "rounded-xl"}`}
//                   transition={{ duration: 0.3 }}
//                 />
//                 {selectedIndex === images.indexOf(img) && (
//                   <div className="absolute top-0 left-0 right-0 bottom-0 bg-blue-500 opacity-20"></div>
//                 )}
//               </motion.div>
//             );
//           })}
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default ImageSlider;

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import slider1 from "../assets/images/image-sliders/image-slider-1.png";
import slider3 from "../assets/images/image-sliders/image-slider-3.png";
import slider4 from "../assets/images/image-sliders/image-slider-4.png";
import slider5 from "../assets/images/image-sliders/image-slider-5.png";
import slider2 from "../assets/images/image-sliders/image0-slider-2.png";

const images = [slider1, slider2, slider3, slider4, slider5];

const ImageSlider = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for right-to-left, -1 for left-to-right
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef(null);

  // Check if we're on mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1280); // xl breakpoint in Tailwind
    };

    // Check on mount and when window resizes
    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    // Set up the interval for autoplay (3 seconds)
    const interval = setInterval(() => {
      if (selectedIndex === images.length - 1) {
        // If we're at the last image and on mobile
        if (isMobile) {
          setDirection(-1); // Set direction to left-to-right for reset animation
        }
      } else {
        setDirection(1); // Normal right-to-left for progression
      }

      setSelectedIndex((prevIndex) => (prevIndex + 1) % images.length); // Loop back to 0
    }, 3000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval);
  }, [selectedIndex, isMobile]);

  const handleThumbnailClick = (index) => {
    setSelectedIndex(index); // Update main image when a thumbnail is clicked
  };

  // Function to get next image index
  const getNextIndex = (index) => {
    return (index + 1) % images.length;
  };

  // Function to get previous image index
  const getPrevIndex = (index) => {
    return index === 0 ? images.length - 1 : index - 1;
  };

  // Handle clicking on preview images
  const handlePreviewClick = (isNext) => {
    if (isNext) {
      setDirection(1);
      setSelectedIndex(getNextIndex(selectedIndex));
    } else {
      setDirection(-1);
      setSelectedIndex(getPrevIndex(selectedIndex));
    }
  };

  // Reorder images based on the selected index, to ensure the selected image moves to the top
  const orderedImages = [
    images[selectedIndex], // Add the selected image first
    ...images.slice(selectedIndex + 1), // Add the images after the selected one
    ...images.slice(0, selectedIndex), // Add the images before the selected one
  ];

  // Limit the number of visible thumbnails to 4 (3 full images, 1 with 50% height)
  const visibleThumbnails = orderedImages.slice(0, 4);

  // Mobile slide variants
  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
    }),
  };

  return (
    <div
      className="flex flex-col xl:flex-row items-center gap-7 px-4 md:px-24"
      ref={containerRef}
    >
      {/* Main Image container */}
      {isMobile ? (
        // Mobile slider with horizontal swipe animations and preview images
        <div className="w-[350px] h-64 md:h-80 relative overflow-hidden rounded-lg">
          {/* Main slider with animation */}
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={selectedIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              className="absolute w-full h-full"
            >
              {/* Image container with preview images */}
              <div className="relative flex items-center justify-center w-full h-full">
                {/* Left preview - only show for the last image */}
                {selectedIndex === images.length - 1 && (
                  <div
                    className="absolute -left-0 h-full w-3 overflow-hidden cursor-pointer"
                    onClick={() => handlePreviewClick(false)}
                  >
                    <div className="h-full w-48 relative">
                      <img
                        src={images[getPrevIndex(selectedIndex)]}
                        alt="Previous"
                        className="absolute right-0 h-full object-cover rounded-l-lg"
                        style={{ width: "200%" }}
                      />
                      <div className="absolute inset-0 bg-opacity-40"></div>
                    </div>
                  </div>
                )}

                {/* Main image - with conditional margin based on which preview is showing */}
                <div 
                  className={`w-full h-full ${
                    selectedIndex === images.length - 1 
                      ? 'ml-4' // When last image, add margin-left to push away from left preview
                      : 'mr-4' // Otherwise add margin-right to push away from right preview
                  }`}
                >
                  <img
                    src={images[selectedIndex]}
                    alt={`Selected ${selectedIndex + 1}`}
                    className="rounded-lg object-cover w-full h-full"
                  />
                </div>

                {/* Right preview - show for all except last image */}
                {selectedIndex !== images.length - 1 && (
                  <div
                    className="absolute -right-0 h-full w-3 overflow-hidden cursor-pointer" /* w-5 */
                    onClick={() => handlePreviewClick(true)}
                  >
                    <div className="h-full w-48 relative">
                      <img
                        src={images[getNextIndex(selectedIndex)]}
                        alt="Next"
                        className="absolute left-0 h-full object-cover rounded-r-lg"
                        style={{ width: "200%" }}
                      />
                      <div className="absolute inset-0 bg-opacity-40"></div>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Swipe instruction indicators (first time only) */}
          {/* <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 pointer-events-none">
            <div className="bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-xs">
              Swipe or tap previews to navigate
            </div>
          </div> */}
        </div>
      ) : (
        // Desktop main image with fade animations
        <motion.div
          className="w-full h-[200px] xl:w-[967px] xl:h-[558px] flex justify-center items-center rounded-lg"
          key={selectedIndex} // Key prop triggers re-render when the selectedIndex changes
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }} // Animation duration
        >
          <motion.img
            src={images[selectedIndex]}
            alt={`Selected ${selectedIndex + 1}`}
            className="rounded-lg object-cover w-full h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          />
        </motion.div>
      )}

      {/* Vertical Thumbnails container (Hidden on mobile, visible on larger screens) */}
      <motion.div
        className="flex-col h-[558px] w-72 rounded-lg hidden xl:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col h-full">
          {visibleThumbnails.map((img, index) => {
            // Calculate the height for each thumbnail
            const isLastThumbnail = index === 3;
            const thumbnailHeight = isLastThumbnail ? "69px" : "139px"; // Half height for last thumbnail
            const marginBottom = isLastThumbnail ? "0" : "21px"; // No margin for last item

            // Custom border radius for the last thumbnail
            let borderRadiusClass = "rounded-lg";
            if (isLastThumbnail) {
              borderRadiusClass = "rounded-t-lg rounded-b-none"; // Only round top corners
            }

            return (
              <motion.div
                key={index}
                className={`relative cursor-pointer overflow-hidden transition-all duration-300 ${borderRadiusClass}`}
                onClick={() => handleThumbnailClick(images.indexOf(img))}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                style={{
                  height: thumbnailHeight,
                  marginBottom: marginBottom,
                }}
              >
                <motion.img
                  src={img}
                  alt={`Thumbnail ${index + 1}`}
                  className={`w-full h-full object-cover transition-transform duration-300
                  ${isLastThumbnail ? borderRadiusClass : "rounded-xl"}`}
                  transition={{ duration: 0.3 }}
                />
                {selectedIndex === images.indexOf(img) && (
                  <div className="absolute top-0 left-0 right-0 bottom-0 bg-blue-500 opacity-20"></div>
                )}
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
};

export default ImageSlider;

// "use client";

// import { AnimatePresence, motion } from "framer-motion";
// import { useEffect, useRef, useState } from "react";
// import slider1 from "../assets/images/image-sliders/image-slider-1.png";
// import slider3 from "../assets/images/image-sliders/image-slider-3.png";
// import slider4 from "../assets/images/image-sliders/image-slider-4.png";
// import slider5 from "../assets/images/image-sliders/image-slider-5.png";
// import slider2 from "../assets/images/image-sliders/image0-slider-2.png";

// const images = [slider1, slider2, slider3, slider4, slider5];

// const ImageSlider = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isMobile, setIsMobile] = useState(false);
//   const [direction, setDirection] = useState(1); // 1 for right, -1 for left
//   const sliderRef = useRef(null);
//   const autoplayRef = useRef(null);

//   console.log(isMobile);

//   // Check if screen is mobile
//   useEffect(() => {
//     const checkMobile = () => {
//       setIsMobile(window.innerWidth < 1280); // xl breakpoint in Tailwind
//     };

//     checkMobile(); // Check on initial load
//     window.addEventListener("resize", checkMobile);

//     return () => window.removeEventListener("resize", checkMobile);
//   }, []);

//   // Set up autoplay with smooth transitions
//   useEffect(() => {
//     const startAutoplay = () => {
//       autoplayRef.current = setInterval(() => {
//         setDirection(1); // Always move forward during autoplay
//         setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//       }, 3000);
//     };

//     startAutoplay();

//     return () => {
//       if (autoplayRef.current) clearInterval(autoplayRef.current);
//     };
//   }, []);

//   const handleThumbnailClick = (index) => {
//     // Clear autoplay when user interacts
//     if (autoplayRef.current) clearInterval(autoplayRef.current);

//     // Determine direction based on index change
//     setDirection(index > currentIndex ? 1 : -1);
//     setCurrentIndex(index);

//     // Restart autoplay after user interaction
//     autoplayRef.current = setInterval(() => {
//       setDirection(1);
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 3000);
//   };

//   // Get the next index in a circular manner
//   const getNextIndex = (current) => (current + 1) % images.length;

//   // Get the previous index in a circular manner
//   // const getPrevIndex = (current) => (current - 1 + images.length) % images.length

//   // Reorder images for desktop view
//   const orderedImages = [
//     images[currentIndex],
//     ...images.slice(currentIndex + 1),
//     ...images.slice(0, currentIndex),
//   ];

//   // Limit the number of visible thumbnails to 4
//   const visibleThumbnails = orderedImages.slice(0, 4);

//   return (
//     <div className="flex flex-col items-center pl-4 md:px-24 relative">
//       {/* Mobile Slider */}
//       <div className="w-full xl:hidden">
//         {/* <img src={leafMobile} alt="" className="absolute right-0 top-[-160px] w-[224px] h-[470px]" /> */}
//         <div
//           ref={sliderRef}
//           className="w-full overflow-hidden relative h-[200px] flex"
//         >
//           <AnimatePresence initial={false} custom={direction}>
//             <motion.div
//               key={`mobile-slide-${currentIndex}`}
//               custom={direction}
//               initial={{ x: direction > 0 ? "100%" : "-100%" }}
//               animate={{ x: "0%" }}
//               exit={{ x: direction > 0 ? "-100%" : "100%" }}
//               transition={{ duration: 0.5, ease: "easeInOut" }}
//               className="absolute top-0 left-0 w-[calc(100%-26px)] h-full"
//             >
//               <img
//                 src={images[currentIndex] || "/placeholder.svg"}
//                 alt={`Slide ${currentIndex + 1}`}
//                 className="w-full h-[200px] object-cover rounded-lg"
//               />
//             </motion.div>

//             {/* Preview of next image */}
//             <motion.div
//               className="absolute top-0 right-[-16px] w-[10%] h-full overflow-hidden"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               style={{ marginLeft: "16px" }}
//             >
//               <img
//                 src={images[getNextIndex(currentIndex)] || "/placeholder.svg"}
//                 alt={`Next Slide`}
//                 className="h-[200px] object-cover rounded-l-lg" /* rounded-l-none rounded-r-lg */
//                 style={{
//                   width: "auto",
//                   height: "100%",
//                   marginLeft: "20%",
//                 }} /* -90% */
//               />
//             </motion.div>

//             {/* Preview of previous image */}
//             {/* <motion.div
//               className="absolute top-0 left-0 w-[10%] h-full overflow-hidden"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//             >
//               <img
//                 src={images[getPrevIndex(currentIndex)] || "/placeholder.svg"}
//                 alt={`Previous Slide`}
//                 className="h-[200px] object-cover rounded-r-none rounded-l-lg"
//                 style={{ width: "auto", height: "100%", marginLeft: "0" }}
//               />
//             </motion.div> */}
//           </AnimatePresence>
//         </div>

//         {/* Mobile indicators */}
//         {/* <div className="flex justify-center gap-2 mt-4">
//           {images.map((_, index) => (
//             <button
//               key={index}
//               className={`w-2 h-2 rounded-full ${currentIndex === index ? "bg-blue-500" : "bg-gray-300"}`}
//               onClick={() => handleThumbnailClick(index)}
//             />
//           ))}
//         </div> */}
//       </div>

//       {/* Desktop Layout */}
//       <div className="hidden xl:flex items-center gap-7">
//         {/* Main Image container */}
//         <div className="w-[967px] h-[558px] overflow-hidden rounded-lg relative">
//           <AnimatePresence initial={false} custom={direction}>
//             <motion.div
//               key={`desktop-${currentIndex}`}
//               custom={direction}
//               initial={{ x: direction > 0 ? "100%" : "-100%" }}
//               animate={{ x: "0%" }}
//               exit={{ x: direction > 0 ? "-100%" : "100%" }}
//               transition={{ duration: 0.5, ease: "easeInOut" }}
//               className="absolute top-0 left-0 w-full h-full"
//             >
//               <img
//                 src={images[currentIndex] || "/placeholder.svg"}
//                 alt={`Selected ${currentIndex + 1}`}
//                 className="rounded-lg object-cover w-full h-full"
//               />
//             </motion.div>
//           </AnimatePresence>
//         </div>

//         {/* Vertical Thumbnails container */}
//         <div className="flex flex-col h-[558px] w-72 rounded-lg">
//           <div className="flex flex-col h-full">
//             {visibleThumbnails.map((img, index) => {
//               // Calculate the height for each thumbnail
//               const isLastThumbnail = index === 3;
//               const thumbnailHeight = isLastThumbnail ? "69px" : "139px"; // Half height for last thumbnail
//               const marginBottom = isLastThumbnail ? "0" : "21px"; // No margin for last item

//               // Custom border radius for the last thumbnail
//               let borderRadiusClass = "rounded-lg";
//               if (isLastThumbnail) {
//                 borderRadiusClass = "rounded-t-lg rounded-b-none"; // Only round top corners
//               }

//               const imgIndex = images.indexOf(img);
//               const isActive = currentIndex === imgIndex;

//               return (
//                 <motion.div
//                   key={index}
//                   className={`relative cursor-pointer overflow-hidden transition-all duration-300 ${borderRadiusClass}`}
//                   onClick={() => handleThumbnailClick(imgIndex)}
//                   style={{
//                     height: thumbnailHeight,
//                     marginBottom: marginBottom,
//                   }}
//                 >
//                   <motion.img
//                     src={img}
//                     alt={`Thumbnail ${index + 1}`}
//                     className={`w-full h-full object-cover transition-transform duration-300
//                       ${isLastThumbnail ? borderRadiusClass : "rounded-xl"}`}
//                     whileHover={{ scale: 1.05 }}
//                   />
//                   {isActive && (
//                     <div className="absolute top-0 left-0 right-0 bottom-0 bg-blue-500 opacity-20"></div>
//                   )}
//                 </motion.div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ImageSlider;
