// import { useState } from "react";
// import slider1 from "../assets/images/image-sliders/image-slider-1.png";
// import slider3 from "../assets/images/image-sliders/image-slider-3.png";
// import slider4 from "../assets/images/image-sliders/image-slider-4.png";
// import slider5 from "../assets/images/image-sliders/image-slider-5.png";
// import slider2 from "../assets/images/image-sliders/image0-slider-2.png";

// const images = [slider1, slider2, slider3, slider4, slider5];

// const ImageSlider = () => {
//   const [selectedIndex, setSelectedIndex] = useState(0);

//   const handleThumbnailClick = (index) => {
//     setSelectedIndex(index); // Update main image when a thumbnail is clicked
//   };

//   // Reorder images to move the selected thumbnail to the top
//   const orderedImages = [
//     images[selectedIndex], // Add the selected image first
//     ...images.slice(0, selectedIndex), // Add the images before the selected one
//     ...images.slice(selectedIndex + 1), // Add the images after the selected one
//   ];

//   return (
//     <div className="flex items-center gap-4 px-[102px]">
//       {/* Main Image */}
//       <div className="w-[967px] h-[558px] flex justify-center items-center border border-gray-300 rounded-lg shadow-lg">
//         <img
//           src={images[selectedIndex]}
//           alt={`Selected ${selectedIndex + 1}`}
//           className="rounded-lg object-cover w-full h-full"
//         />
//       </div>

//       {/* Vertical Thumbnails */}
//       <div className="flex flex-col gap-4 h-[558px] w-56 overflow-hidden border border-gray-200 rounded-lg">
//         {orderedImages.map((img, index) => (
//           <div
//             key={index}
//             className={`relative cursor-pointer rounded-md overflow-hidden transition-all duration-300`}
//             onClick={() => handleThumbnailClick(images.indexOf(img))}
//           >
//             <img
//               src={img}
//               alt={`Thumbnail ${index + 1}`}
//               className={`w-full h-[100px] object-cover rounded-md transition-transform duration-300 ${
//                 selectedIndex === images.indexOf(img)
//                   ? "scale-110 border-2 border-blue-500"
//                   : "border-2 border-transparent"
//               }`}
//             />
//             {selectedIndex === images.indexOf(img) && (
//               <div className="absolute top-0 left-0 right-0 bottom-0 bg-blue-500 opacity-20"></div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ImageSlider;

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

  // Reorder images to move the selected thumbnail to the top
  const orderedImages = [
    images[selectedIndex], // Add the selected image first
    ...images.slice(0, selectedIndex), // Add the images before the selected one
    ...images.slice(selectedIndex + 1), // Add the images after the selected one
  ];

  return (
    <div className="flex items-center gap-4 px-[102px]">
      {/* Main Image container */}
      <motion.div
        className="w-[967px] h-[558px] flex justify-center items-center border border-gray-300 rounded-lg shadow-lg"
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
        className="flex flex-col gap-4 h-[558px] w-56 overflow-hidden border border-gray-200 rounded-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {orderedImages.map((img, index) => (
          <motion.div
            key={index}
            className={`relative cursor-pointer rounded-md overflow-hidden transition-all duration-300`}
            onClick={() => handleThumbnailClick(images.indexOf(img))}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.img
              src={img}
              alt={`Thumbnail ${index + 1}`}
              className={`w-full h-[100px] object-cover rounded-md transition-transform duration-300 ${
                selectedIndex === images.indexOf(img)
                  ? "scale-110 border-2 border-blue-500"
                  : "border-2 border-transparent"
              }`}
              initial={{ scale: 0.8 }}
              animate={{ scale: selectedIndex === index ? 1.1 : 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
            />
            {selectedIndex === images.indexOf(img) && (
              <div className="absolute top-0 left-0 right-0 bottom-0 bg-blue-500 opacity-20"></div>
            )}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default ImageSlider;
