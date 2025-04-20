// import fintra from "../assets/images/sister-concerns/Fintra.png";
// import bengalCommercialBank from "../assets/images/sister-concerns/bengal-commercial-bank.png";
// import bestInsurance from "../assets/images/sister-concerns/best-insurance.png";
// import bgtel from "../assets/images/sister-concerns/bgTel.png";
// import jamunaBank from "../assets/images/sister-concerns/jamuna-bank.png";
// import { content } from "../content/content";
// import { useMediaQuery } from "../hooks/useMediaQuery";

// const {descriptionForLargeScreen, descriptionForMobileScreen} = content.en.ourStoryPage.ourAwards;

// const SisterConcerns = () => {
//   const isMobile  = useMediaQuery("(max-width: 768px)");

//   return (
//     <div className="mt-36 mb-44">
//       <p className="text-lg xl:text-2xl font-light px-5 xl:px-[230px] xl:mb-40 leading-relaxed">
//         {
//           isMobile ? descriptionForMobileScreen : descriptionForLargeScreen
//         }
//       </p>

//       {/* Sister Concerns Container */}

//       {/* Best Insurance, Jamuna bank, BG Tel */}
//       <div className="grid grid-cols-3 gap-x-10 px-48 mb-10">
//         <div className="flex justify-center items-center">
//           <img
//             src={bestInsurance}
//             alt="Best Life Insurance"
//             className="w-[201px] h-[216px] object-contain"
//           />
//         </div>
//         <div className="flex justify-center items-center">
//           <img
//             src={jamunaBank}
//             alt="Jamuna Bank"
//             className="w-[370px] h-[55px] object-contain"
//           />
//         </div>
//         <div className="flex justify-center items-center">
//           <img
//             src={bgtel}
//             alt="BG Tel"
//             className="w-[153px] h-[180px] object-contain"
//           />
//         </div>
//       </div>

//       {/* Bengal Commercial Bank, Fintra */}
//       <div className="grid grid-cols-2 gap-x-16 px-56 mt-8">
//         <div className="flex justify-end items-center">
//           <img
//             src={bengalCommercialBank}
//             alt="Bengal Commercial Bank"
//             className="w-[302px] h-[250px] object-contain"
//           />
//         </div>
//         <div className="flex justify-start items-center">
//           <img
//             src={fintra}
//             alt="Fintra Securities Limited"
//             className="w-[281px] h-[220px] object-contain"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SisterConcerns;


"use client"

import { useRef, useState } from "react";
import fintra from "../assets/images/sister-concerns/Fintra.png";
import bengalCommercialBank from "../assets/images/sister-concerns/bengal-commercial-bank.png";
import bestInsurance from "../assets/images/sister-concerns/best-insurance.png";
import bgtel from "../assets/images/sister-concerns/bgTel.png";
import jamunaBank from "../assets/images/sister-concerns/jamuna-bank.png";
import { content } from "../content/content";
import { useMediaQuery } from "../hooks/useMediaQuery";

const SisterConcerns = () => {
  const { descriptionForLargeScreen, descriptionForMobileScreen } = content.en.ourStoryPage.ourAwards;
  const isMobile = useMediaQuery("(max-width: 768px)");
  
  // Create refs for the carousel
  const carouselRef = useRef(null);
  
  // States for swipe functionality
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  
  // List of all sister concern images
  const sisterConcerns = [
    {
      id: 1,
      src: bestInsurance,
      alt: "Best Life Insurance",
      width: "150px",
      height: "160px"
    },
    {
      id: 2,
      src: jamunaBank,
      alt: "Jamuna Bank",
      width: "250px",
      height: "38px"
    },
    {
      id: 3,
      src: bgtel,
      alt: "BG Tel",
      width: "120px",
      height: "140px"
    },
    {
      id: 4,
      src: bengalCommercialBank,
      alt: "Bengal Commercial Bank",
      width: "200px",
      height: "160px"
    },
    {
      id: 5,
      src: fintra,
      alt: "Fintra Securities Limited",
      width: "200px",
      height: "150px"
    }
  ];
  
  // Touch event handlers for mobile swipe
  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    
    const x = e.touches[0].clientX;
    const walk = (startX - x) * 1.5; // Adjust speed for smoother scrolling
    carouselRef.current.scrollLeft = scrollLeft + walk;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  return (
    <div className="mt-16 md:mt-36 mb-20 md:mb-44">
      <p className="text-base md:text-lg xl:text-2xl font-light px-5 xl:px-[230px] mb-12 xl:mb-40 leading-relaxed">
        {isMobile ? descriptionForMobileScreen : descriptionForLargeScreen}
      </p>
      
      {/* Desktop Layout */}
      <div className="hidden md:block">
        {/* Sister Concerns Container - First Row */}
        <div className="grid grid-cols-3 gap-x-10 px-8 lg:px-48 mb-10">
          <div className="flex justify-center items-center">
            <img
              src={bestInsurance}
              alt="Best Life Insurance"
              className="w-[201px] h-[216px] object-contain"
            />
          </div>
          <div className="flex justify-center items-center">
            <img
              src={jamunaBank}
              alt="Jamuna Bank"
              className="w-[370px] h-[55px] object-contain"
            />
          </div>
          <div className="flex justify-center items-center">
            <img
              src={bgtel}
              alt="BG Tel"
              className="w-[153px] h-[180px] object-contain"
            />
          </div>
        </div>
        
        {/* Second Row */}
        <div className="grid grid-cols-2 gap-x-16 px-12 lg:px-56 mt-8">
          <div className="flex justify-end items-center">
            <img
              src={bengalCommercialBank}
              alt="Bengal Commercial Bank"
              className="w-[302px] h-[250px] object-contain"
            />
          </div>
          <div className="flex justify-start items-center">
            <img
              src={fintra}
              alt="Fintra Securities Limited"
              className="w-[281px] h-[220px] object-contain"
            />
          </div>
        </div>
      </div>
      
      {/* Mobile Swipeable Carousel */}
      <div className="md:hidden">
        <div 
          ref={carouselRef}
          className="flex overflow-x-auto snap-x scroll-smooth hide-scrollbar pb-4 px-5"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitUserSelect: "none",
            MozUserSelect: "none",
            userSelect: "none"
          }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {sisterConcerns.map((item) => (
            <div 
              key={item.id} 
              className="flex-none snap-center mx-3 first:ml-0 last:mr-0 min-w-[200px] min-h-[180px] flex justify-center items-center"
            >
              <div className="bg-white rounded-lg shadow-md p-6 flex justify-center items-center w-full h-full">
                <img
                  src={item.src}
                  alt={item.alt}
                  style={{
                    width: item.width,
                    height: item.height,
                    maxWidth: "100%"
                  }}
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
        
        {/* Mobile indicator dots */}
        {/* <div className="flex justify-center mt-6 space-x-2">
          {sisterConcerns.map((_, index) => (
            <div 
              key={index} 
              className="w-2 h-2 rounded-full bg-gray-300"
              onClick={() => {
                if (carouselRef.current) {
                  // Calculate scroll position based on index
                  const itemWidth = 200 + 24; // item width + margins
                  carouselRef.current.scrollLeft = index * itemWidth;
                }
              }}
            ></div>
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default SisterConcerns;
