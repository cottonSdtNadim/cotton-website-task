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
      className="flex flex-col xl:flex-row items-center gap-7 px-4 md:px-24 "
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
                      ? "ml-4" // When last image, add margin-left to push away from left preview
                      : "mr-4" // Otherwise add margin-right to push away from right preview
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
        <div className="flex flex-row items-center mx-auto justify-center  w-full">
          <motion.div
            className="w-full h-[200px] xl:w-[967px] xl:h-[558px] flex justify-center items-center rounded-lg "
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
          </motion.div>{" "}
          {/* Vertical Thumbnails container (Hidden on mobile, visible on larger screens) */}
          <div className="px-2"></div>
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
      )}
    </div>
  );
};

export default ImageSlider;
