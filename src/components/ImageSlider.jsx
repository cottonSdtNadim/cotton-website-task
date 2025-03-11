import { motion } from "framer-motion";
import { useState } from "react";
import slider1 from "../assets/images/image-sliders/image-slider-1.png";
import slider3 from "../assets/images/image-sliders/image-slider-3.png";
import slider4 from "../assets/images/image-sliders/image-slider-4.png";
import slider5 from "../assets/images/image-sliders/image-slider-5.png";
import slider2 from "../assets/images/image-sliders/image0-slider-2.png";

const images = [slider1, slider2, slider3, slider4, slider5];

const ImageSlider = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleThumbnailClick = (index) => {
    setSelectedIndex(index); // Update main image when a thumbnail is clicked
  };

  // Reorder images based on the selected index, to ensure the selected image moves to the top
  const orderedImages = [
    images[selectedIndex], // Add the selected image first
    ...images.slice(selectedIndex + 1), // Add the images after the selected one
    ...images.slice(0, selectedIndex), // Add the images before the selected one
  ];

  // Limit the number of visible thumbnails to 4 (3 full images, 1 with 50% height)
  const visibleThumbnails = orderedImages.slice(0, 4);

  return (
    <div className="flex items-center gap-7 px-[102px]">
      {/* Main Image container */}
      <motion.div
        className="w-[967px] h-[558px] flex justify-center items-center rounded-lg"
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

      {/* Vertical Thumbnails container */}
      <motion.div
        className="flex flex-col h-[558px] w-72 rounded-lg"
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
                    /* ${
                      selectedIndex === images.indexOf(img)
                        ? "scale-110 border-2 border-blue-500"
                        : "border-2 border-transparent"
                    } */ 
                  ${isLastThumbnail ? borderRadiusClass : "rounded-xl"}`}
                  /* initial={{ scale: 0.8 }}
                  animate={{
                    scale: selectedIndex === images.indexOf(img) ? 1.1 : 1,
                  }}
                  exit={{ scale: 0.8 }} */
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
