// import { useState } from "react";
// import image1 from "../assets/images/our-values/image-1.jpg";
// import image2 from "../assets/images/our-values/image-2.jpg";
// import image3 from "../assets/images/our-values/image-3.jpg";
// import image4 from "../assets/images/our-values/image-4.jpg";
// import image5 from "../assets/images/our-values/image-5.jpg";
// import image6 from "../assets/images/our-values/image-6.jpg";
// import { content } from "../content/content";
// import SectionTitle from "./SectionTitle";
// import { motion } from "motion/react";

// const ImageCardButtonGroup = () => {
//   const { header } = content.en.ourStoryPage.ourCoreValues;
//   const [activeButton, setActiveButton] = useState("Customer Value");

//   const imageButtonCards = [
//     {
//       buttonName: "Customer Value",
//       image: image1,
//       textContent:
//         "Our customers are the reason for our existence and the only guarantee to our future. We recognize them as our partners and are committed to listen and respond positively to their needs.",
//     },
//     {
//       buttonName: "Empowerment",
//       image: image2,
//       textContent:
//         "We take care of our own and foster a team spirit while encouraging initiative and risk-taking.",
//     },
//     {
//       buttonName: "Excellence",
//       image: image3,
//       textContent:
//         "We are passionate about maintaining the highest level of excellence in our employees, products and services we provide for our customers, which drives our quest for excellence.",
//     },
//     {
//       buttonName: "Openness",
//       image: image4,
//       textContent:
//         "Exploring new ways to continually grow our business through teamwork creates channels for growth. We are open to change and new ideas from our employees, customers and others to develop innovative solutions based on trust and mutual respect.",
//     },
//     {
//       buttonName: "Respect",
//       image: image5,
//       textContent:
//         "We value the diversity of talents, perspectives and experiences of others, and seek to treat one another the way we want to be treated. Respect is earned, not given.",
//     },
//     {
//       buttonName: "Integrity",
//       image: image6,
//       textContent:
//         "Integrity is the hallmark of our business. To be fair, honest and ethical in our conduct is of utmost importance to us.",
//     },
//   ];

//   const activeCard = imageButtonCards.find(
//     (card) => card.buttonName === activeButton
//   );

//   // Calculate the fixed height based on the number of buttons
//   // Each button is approximately 64px (py-4 = 2rem = 32px top + bottom) plus gaps
//   const buttonCount = imageButtonCards.length;
//   const totalButtonsHeight = buttonCount * 64 + (buttonCount - 1) * 16; // 64px per button + 16px gap between

//   return (
//     <div className="mx-40">
//       <SectionTitle
//         title={header}
//         iconTop="-30px"
//         iconLeft="305px"
//         iconWidth="w-8"
//         iconHeight="h-12"
//       />

//       <div className="flex flex-col md:flex-row gap-6 mb-60">
//         {/* Left column - Buttons */}
//         <div className="md:w-1/3 flex flex-col gap-4">
//           {imageButtonCards.map((item) => (
//             <button
//               key={item.buttonName}
//               className={`py-4 px-6 text-center rounded-xl transition-all duration-300 border-2 ${
//                 activeButton === item.buttonName
//                   ? "bg-emerald-700 text-white border-emerald-700"
//                   : "bg-white text-gray-800 border-gray-200 hover:bg-gray-50"
//               }`}
//               onClick={() => setActiveButton(item.buttonName)}
//             >
//               <span className="font-medium text-lg">{item.buttonName}</span>
//             </button>
//           ))}
//         </div>

//         {/* Right column - Content Card with fixed height */}
//         <div className="md:w-2/3">
//           <motion.div
//             className="bg-emerald-700 rounded-xl overflow-hidden text-white px-9 pt-10 flex flex-col"
//             style={{ height: `${totalButtonsHeight}px` }}
//             layout
//           >
//             <>
//               {activeCard && (
//                 <motion.div
//                   key={activeButton}
//                   initial={{ opacity: 0, }}
//                   animate={{ opacity: 1 }}
//                   exit={{ opacity: 0 }}
//                   transition={{ duration: 0.5 }}
//                   className="flex flex-col"
//                 >
//                   {activeCard.image && (
//                     <motion.div
//                       className="mb-4 flex justify-center"
//                       initial={{ opacity: 0 }}
//                       animate={{ opacity: 1 }}
//                       exit={{ opacity: 0 }}
//                       transition={{ duration: 0.5 }}
//                     >
//                       <img
//                         src={activeCard.image}
//                         alt={activeCard.buttonName}
//                         className="w-[550px] h-[190px] rounded-md object-cover"
//                       />
//                     </motion.div>
//                   )}
//                   <motion.p
//                     className="text-lg leading-relaxed mb-20 mt-2"
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     exit={{ opacity: 0 }}
//                     transition={{ duration: 0.5 }}
//                   >
//                     {activeCard.textContent}
//                   </motion.p>
//                 </motion.div>
//               )}
//             </>
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ImageCardButtonGroup;

// import { useState } from "react";
// import { motion } from "motion/react";
// import PropTypes from "prop-types";

// const ImageCardButtonGroup = ({data, width, height}) => {
//   const [activeButton, setActiveButton] = useState(data[0]?.buttonName || "");
//   const activeCard = data.find((card) => card.buttonName === activeButton
//   );

//   // Calculate the fixed height based on the number of buttons
//   // Each button is approximately 64px (py-4 = 2rem = 32px top + bottom) plus gaps
//   const buttonCount = data.length;
//   const totalButtonsHeight = buttonCount * 64 + (buttonCount - 1) * 16; // 64px per button + 16px gap between

//   return (
//     <div className="mx-40 border-2">
//       <div className="flex flex-col md:flex-row gap-6 mb-60">
//         {/* Left column - Buttons */}
//         <div className="2xl:w-1/3 flex flex-col gap-4">
//           {data.map((item) => (
//             <button
//               key={item.buttonName}
//               className={`py-4 px-6 text-center rounded-xl transition-all duration-300 border-2 ${
//                 activeButton === item.buttonName
//                   ? "bg-emerald-700 text-white border-emerald-700"
//                   : "bg-white text-gray-800 border-gray-200 hover:bg-gray-50"
//               }`}
//               onClick={() => setActiveButton(item.buttonName)}
//             >
//               <span className="font-medium text-lg">{item.buttonName}</span>
//             </button>
//           ))}
//         </div>

//         {/* Right column - Content Card with fixed height */}
//         <div className="2xl:w-2/3">
//           <motion.div
//             className="bg-emerald-700 rounded-xl overflow-hidden text-white px-9 pt-10 flex flex-col"
//             style={{ height: `${totalButtonsHeight}px` }}
//             layout
//           >
//             <>
//               {activeCard && (
//                 <motion.div
//                   key={activeButton}
//                   initial={{ opacity: 0, }}
//                   animate={{ opacity: 1 }}
//                   exit={{ opacity: 0 }}
//                   transition={{ duration: 0.5 }}
//                   className="flex flex-col"
//                 >
//                   {activeCard.image && (
//                     <motion.div
//                       className="mb-4 flex justify-center"
//                       initial={{ opacity: 0 }}
//                       animate={{ opacity: 1 }}
//                       exit={{ opacity: 0 }}
//                       transition={{ duration: 0.5 }}
//                     >
//                       <img
//                         src={activeCard.image}
//                         alt={activeCard.buttonName}
//                         // className="w-[550px] h-[190px] rounded-md object-cover"
//                         className={`${width} ${height} rounded-md object-cover`}
//                       />
//                     </motion.div>
//                   )}
//                   <motion.p
//                     className="text-lg leading-relaxed mb-20 mt-2"
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     exit={{ opacity: 0 }}
//                     transition={{ duration: 0.5 }}
//                   >
//                     {activeCard.textContent}
//                   </motion.p>
//                 </motion.div>
//               )}
//             </>
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// };

// ImageCardButtonGroup.propTypes = {
//   data: PropTypes.array.isRequired,
//   width: PropTypes.string.isRequired,
//   height: PropTypes.string.isRequired,
// };

// export default ImageCardButtonGroup;

// import { motion } from "motion/react";
// import PropTypes from "prop-types";
// import { useState } from "react";

// const ImageCardButtonGroup = ({ data, width, height }) => {
//   const [activeButton, setActiveButton] = useState(data[0]?.buttonName || "");
//   const activeCard = data.find((card) => card.buttonName === activeButton);

//   // Calculate the fixed height based on the number of buttons
//   // Each button is approximately 64px (py-4 = 2rem = 32px top + bottom) plus gaps
//   const buttonCount = data.length;
//   const totalButtonsHeight = buttonCount * 64 + (buttonCount - 1) * 16; // 64px per button + 16px gap between

//   return (
//     <div className="mx-32 2xl:mx-40">
//       {/* xl:mx-32 */}
//       <div className="flex flex-col md:flex-row gap-6 mb-60 border-2">
//         {/* Left column - Buttons */}
//         <div className="w-1/2 2xl:w-1/3 flex flex-col gap-4 border-2 border-red-500">
//           {/* w-1/2 2xl:w-1/3 */}
//           {data.map((item) => (
//             <button
//               key={item.buttonName}
//               className={`py-4 px-6 text-center rounded-xl transition-all duration-300 border-2 ${
//                 activeButton === item.buttonName
//                   ? "bg-emerald-700 text-white border-emerald-700"
//                   : "bg-white text-gray-800 border-gray-200 hover:bg-gray-50"
//               }`}
//               onClick={() => setActiveButton(item.buttonName)}
//             >
//               <span className="font-medium text-lg">{item.buttonName}</span>
//             </button>
//           ))}
//         </div>
//         {/* Right column - Content Card with fixed height */}
//         <div className="w-3/5 2xl:w-2/3 border-2 border-blue-500">
//           {/* xl:w-2/3 2xl:w-2/3 */}
//           <motion.div
//             className="bg-emerald-700 rounded-xl overflow-hidden text-white px-9 pt-10 flex flex-col"
//             style={{ height: `${totalButtonsHeight}px` }}
//             layout
//           >
//             <>
//               {activeCard && (
//                 <motion.div
//                   key={activeButton}
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   exit={{ opacity: 0 }}
//                   transition={{ duration: 0.5 }}
//                   className="flex flex-col"
//                 >
//                   {activeCard.image && (
//                     <motion.div
//                       className="mb-4 flex justify-center"
//                       initial={{ opacity: 0 }}
//                       animate={{ opacity: 1 }}
//                       exit={{ opacity: 0 }}
//                       transition={{ duration: 0.5 }}
//                     >
//                       <img
//                         src={activeCard.image}
//                         alt={activeCard.buttonName}
//                         // className="w-[550px] h-[190px] rounded-md object-cover"
//                         className={`${width} ${height} rounded-md object-cover`}
//                       />
//                     </motion.div>
//                   )}
//                   <motion.p
//                     className="text-lg leading-relaxed mb-20 mt-2"
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     exit={{ opacity: 0 }}
//                     transition={{ duration: 0.5 }}
//                   >
//                     {activeCard.textContent}
//                   </motion.p>
//                 </motion.div>
//               )}
//             </>
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// };

// ImageCardButtonGroup.propTypes = {
//   data: PropTypes.array.isRequired,
//   width: PropTypes.string.isRequired,
//   height: PropTypes.string.isRequired,
// };

// export default ImageCardButtonGroup;


// import { motion } from "motion/react";
// import PropTypes from "prop-types";
// import { useState } from "react";

// const ImageCardButtonGroup = ({ data, width, height }) => {
//   const [activeButton, setActiveButton] = useState(data[0]?.buttonName || "");
//   const activeCard = data.find((card) => card.buttonName === activeButton);

//   // Calculate the fixed height based on the number of buttons
//   const buttonCount = data.length;
//   const totalButtonsHeight = buttonCount * 64 + (buttonCount - 1) * 16; // 64px per button + 16px gap between

//   return (
//     <div className="2xl:mx-40">
//       <div className="flex flex-col md:flex-row gap-6 mb-20 lg:mb-40 xl:mb-60">
//         {/* Left column - Buttons */}
//         <div className="xl:w-4/12 2xl:w-1/3 flex flex-col gap-4">
//           {data.map((item) => (
//             <button
//               key={item.buttonName}
//               className={`py-4 px-6 text-center rounded-xl transition-all duration-300 border-2 ${
//                 activeButton === item.buttonName
//                   ? "bg-emerald-700 text-white border-emerald-700"
//                   : "bg-white text-gray-800 border-gray-200 hover:bg-gray-50"
//               }`}
//               onClick={() => setActiveButton(item.buttonName)}
//             >
//               <span className="font-medium text-lg">{item.buttonName}</span>
//             </button>
//           ))}
//         </div>
        
//         {/* Right column - Content Card with fixed height */}
//         <div className="xl:w-7/12 2xl:w-2/3">
//           <motion.div
//             className="bg-emerald-700 rounded-xl overflow-hidden text-white px-8 xl:px-9 pt-10 flex flex-col"
//             style={{ height: `${totalButtonsHeight}px` }}
//             layout
//           >
//             {activeCard && (
//               <motion.div
//                 key={activeButton}
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 exit={{ opacity: 0 }}
//                 transition={{ duration: 0.5 }}
//                 className="flex flex-col"
//               >
//                 {activeCard.image && (
//                   <motion.div
//                     className="mb-4 flex justify-center"
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     exit={{ opacity: 0 }}
//                     transition={{ duration: 0.5 }}
//                   >
//                     <img
//                       src={activeCard.image}
//                       alt={activeCard.buttonName}
//                       className={`${width} ${height} rounded-md object-cover`}
//                     />
//                   </motion.div>
//                 )}
//                 <motion.p
//                   className="text-lg leading-relaxed mb-20 mt-2"
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   exit={{ opacity: 0 }}
//                   transition={{ duration: 0.5 }}
//                 >
//                   {activeCard.textContent}
//                 </motion.p>
//               </motion.div>
//             )}
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// };

// ImageCardButtonGroup.propTypes = {
//   data: PropTypes.array.isRequired,
//   width: PropTypes.string.isRequired,
//   height: PropTypes.string.isRequired,
// };

// export default ImageCardButtonGroup;


import { motion } from "motion/react";
import PropTypes from "prop-types";
import { useState, useEffect, useRef } from "react";

const ImageCardButtonGroup = ({ data, width, height }) => {
  const [activeButton, setActiveButton] = useState(data[0]?.buttonName || "");
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const activeCard = data.find((card) => card.buttonName === activeButton);
  const buttonContainerRef = useRef(null);
  const autoplayIntervalRef = useRef(null);
  
  // Calculate the fixed height based on the number of buttons for desktop
  const buttonCount = data.length;
  const totalButtonsHeight = buttonCount * 64 + (buttonCount - 1) * 16; // 64px per button + 16px gap between

  // Start autoplay functionality
  useEffect(() => {
    if (isAutoPlaying) {
      autoplayIntervalRef.current = setInterval(() => {
        const currentIndex = data.findIndex(item => item.buttonName === activeButton);
        const nextIndex = (currentIndex + 1) % data.length;
        setActiveButton(data[nextIndex].buttonName);
        
        // Scroll to the active button on mobile
        if (window.innerWidth < 768 && buttonContainerRef.current) {
          const buttonElements = buttonContainerRef.current.querySelectorAll('button');
          if (buttonElements[nextIndex]) {
            buttonContainerRef.current.scrollTo({
              left: buttonElements[nextIndex].offsetLeft - 20,
              behavior: 'smooth'
            });
          }
        }
      }, 5000); // Change active button every 5 seconds
    }
    
    return () => {
      if (autoplayIntervalRef.current) {
        clearInterval(autoplayIntervalRef.current);
      }
    };
  }, [activeButton, data, isAutoPlaying]);

  // Pause autoplay when user interacts
  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
    setIsAutoPlaying(false);
    
    // Resume autoplay after 10 seconds of inactivity
    if (autoplayIntervalRef.current) {
      clearInterval(autoplayIntervalRef.current);
    }
    
    setTimeout(() => {
      setIsAutoPlaying(true);
    }, 10000);
  };

  return (
    <div className="2xl:mx-40">
      <div className="flex flex-col mb-20 lg:mb-40 xl:mb-60">
        {/* Buttons - Horizontal for mobile, vertical for desktop */}
        <div 
          ref={buttonContainerRef}
          className="flex flex-row md:flex-col gap-4 mb-6 md:mb-0 overflow-x-auto pb-4 md:pb-0 md:overflow-visible snap-x snap-mandatory md:snap-none scrollbar-hide md:w-4/12 md:xl:w-4/12 md:2xl:w-1/3"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {data.map((item) => (
            <button
              key={item.buttonName}
              className={`py-3 md:py-4 px-4 md:px-6 text-center rounded-xl transition-all duration-300 border-2 whitespace-nowrap flex-shrink-0 snap-center ${
                activeButton === item.buttonName
                  ? "bg-emerald-700 text-white border-emerald-700"
                  : "bg-white text-gray-800 border-gray-200 hover:bg-gray-50"
              }`}
              onClick={() => handleButtonClick(item.buttonName)}
            >
              <span className="font-medium text-base md:text-lg">{item.buttonName}</span>
            </button>
          ))}
        </div>
        
        {/* Content layout - Full width on mobile, side-by-side on desktop */}
        <div className="w-full md:w-auto md:flex md:flex-row">
          {/* Hidden spacer div on desktop to maintain layout */}
          <div className="hidden md:block md:w-4/12 md:xl:w-4/12 md:2xl:w-1/3"></div>
          
          {/* Content Card */}
          <div className="w-full md:w-7/12 md:xl:w-7/12 md:2xl:w-2/3">
            <motion.div
              className="bg-emerald-700 rounded-xl overflow-hidden text-white px-6 md:px-8 xl:px-9 pt-6 md:pt-10 flex flex-col"
              style={{ 
                height: window.innerWidth < 768 ? '480px' : `${totalButtonsHeight}px`
              }}
              layout
            >
              {activeCard && (
                <motion.div
                  key={activeButton}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col h-full"
                >
                  {activeCard.image && (
                    <motion.div
                      className="mb-4 flex justify-center"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <img
                        src={activeCard.image}
                        alt={activeCard.buttonName}
                        className={`w-full md:${width} h-auto md:${height} rounded-md object-cover`}
                      />
                    </motion.div>
                  )}
                  <motion.p
                    className="text-base md:text-lg leading-relaxed mb-6 md:mb-20 mt-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    {activeCard.textContent}
                  </motion.p>
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

ImageCardButtonGroup.propTypes = {
  data: PropTypes.array.isRequired,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
};

export default ImageCardButtonGroup;