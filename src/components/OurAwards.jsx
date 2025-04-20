// import { useEffect, useRef, useState } from "react";
// import medal from "../assets/olympic-medal.svg";
// import AwardCard from "./AwardCard";
// import { content } from "../content/content";

// const OurAwards = () => {
//   const awards = [
//     {
//       id: 1,
//       awardName: "National Export Trophy (Gold) by Ministry Of Commerce",
//       awardYear: "Awarded in 1993",
//       medal: medal,
//     },
//     {
//       id: 2,
//       awardName: "National Export Trophy (Gold) by Ministry Of Commerce",
//       awardYear: "Awarded in 1994",
//       medal: medal,
//     },
//     {
//       id: 3,
//       awardName: "Best Stall (Batexpo) by BGMEA",
//       awardYear: "Awarded in 1997",
//       medal: medal,
//     },
//     {
//       id: 4,
//       awardName: "Best Stall (Batexpo) by BGMEA",
//       awardYear: "Awarded in 1998",
//       medal: medal,
//     },
//     {
//       id: 5,
//       awardName: "Supplier of the Year by REDCATS",
//       awardYear: "Awarded in 2013",
//       medal: medal,
//     },
//     {
//       id: 6,
//       awardName:
//         "Best Performance by Sustainable Water Management (Stockholm International Water Institute)",
//       awardYear: "Awarded in 2015",
//       medal: medal,
//     },
//     {
//       id: 7,
//       awardName: "Gold Certificate of Compliance by WRAP",
//       awardYear: "Awarded in 2017",
//       medal: medal,
//     },
//     {
//       id: 8,
//       awardName: "Best Performance by the ALDI Factory Project",
//       awardYear: "Awarded in 2018",
//       medal: medal,
//     },
//   ];

//   const {heading} = content.en.ourStoryPage.ourAwards;
//   const carouselRef = useRef(null); // A reference to the carousel container, which allows direct manipulation of the DOM element.
//   const [activeIndex, setActiveIndex] = useState(0); // A function to update activeIndex.
//   const [isDragging, setIsDragging] = useState(false); // A boolean state to track if the user is dragging the carousel
//   const [startX, setStartX] = useState(0); // The starting position of the mouse when the user starts dragging.
//   const [scrollLeft, setScrollLeft] = useState(0); // The scroll position of the carousel.

//   // Handle scroll events to update progress bar
//   useEffect(() => {
//     const handleScroll = () => {
//       if (carouselRef.current) {
//         const { scrollLeft } =
//           carouselRef.current; /* , scrollWidth, clientWidth */

//         // Calculate which card is currently active based on scroll position
//         const cardWidth =
//           carouselRef.current.querySelector("div").offsetWidth + 64; // width + gap : 64
//         const newActiveIndex = Math.min(
//           Math.floor(scrollLeft / cardWidth),
//           awards.length - 1
//         );
//         setActiveIndex(newActiveIndex);
//       }
//     };

//     const carousel = carouselRef.current;
//     if (carousel) {
//       carousel.addEventListener("scroll", handleScroll);
//       return () => carousel.removeEventListener("scroll", handleScroll);
//     }
//   }, [awards.length]);

//   // Mouse drag scroll functionality
//   const handleMouseDown = (e) => {
//     e.preventDefault(); // Prevent text selection
//     setIsDragging(true);
//     setStartX(e.pageX - carouselRef.current.offsetLeft);
//     setScrollLeft(carouselRef.current.scrollLeft);

//     // Change cursor to grabbing
//     if (carouselRef.current) {
//       carouselRef.current.style.cursor = "grabbing";
//       carouselRef.current.style.userSelect = "none";
//     }
//   };

//   const handleMouseUp = () => {
//     setIsDragging(false);

//     // Restore cursor
//     if (carouselRef.current) {
//       carouselRef.current.style.cursor = "grab";
//       carouselRef.current.style.userSelect = "";
//     }
//   };

//   const handleMouseMove = (e) => {
//     if (!isDragging) return;
//     e.preventDefault(); // Prevent text selection during drag

//     const x = e.pageX - carouselRef.current.offsetLeft;
//     const walk = (x - startX) * 4; // Scroll speed multiplier : 1.5
//     carouselRef.current.scrollLeft = scrollLeft - walk;
//   };

//   const handleMouseLeave = () => {
//     setIsDragging(false);

//     // Restore cursor
//     if (carouselRef.current) {
//       carouselRef.current.style.cursor = "grab";
//       carouselRef.current.style.userSelect = "";
//     }
//   };

//   return (
//     /* Parent Container with the exact green color from the design */
//     <div className="bg-[#0B714C] py-16 relative">
//       {/* Title using the exact font size and spacing from design */}
//       <h2 className="text-2xl font-bold text-white text-center mb-12">
//         {heading}
//       </h2>

//       {/* Carousel Container with proper padding matching the design */}
//       <div className="relative">

//         {/* Carousel with cards */}
//         <div
//           ref={carouselRef}
//           className="flex overflow-x-auto gap-16 pb-16 snap-mandatory scroll-smooth hide-scrollbar cursor-grab select-none border-2 border-blue-500" 
//           /* cursor-grab gap-16*/
//           style={{
//             scrollbarWidth: "none",
//             msOverflowStyle: "none",
//             WebkitUserSelect: "none",
//             MozUserSelect: "none",
//             userSelect: "none",
//           }}
//           onMouseDown={handleMouseDown}
//           onMouseUp={handleMouseUp}
//           onMouseMove={handleMouseMove}
//           onMouseLeave={handleMouseLeave}
//           // Prevent text selection on touch devices
//           onTouchStart={() => {
//             if (carouselRef.current) {
//               carouselRef.current.style.userSelect = "none";
//             }
//           }}
//           onTouchEnd={() => {
//             if (carouselRef.current) {
//               carouselRef.current.style.userSelect = "";
//             }
//           }}
//         >
//           {awards.map((award, index) => (
//             <div
//               key={award.id}
//               onDragStart={(e) => e.preventDefault()} // Prevent default drag behavior
//               style={{
//                 paddingLeft: index === 0 ? "102px" : "0",
//                 paddingRight: index === awards.length - 1 ? "102px" : "0",
//                 transition: "padding 0.3s ease", 
//               }}
//             >
//               {/* className="flex-none w-[400px] snap-start border-2" */}
//               <AwardCard award={award} />
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Progress Bar matching the design - centered, with segment highlighting */}
//       <div className="w-full max-w-3xl mx-auto px-4 pb-7">
//         <div className="relative h-[3px]  bg-[#859E95] rounded-full">
//           {/* Active segment of the progress bar */}
//           <div
//             className="absolute h-[6px] bg-white rounded-full transition-all duration-300"
//             style={{
//               width: `${300 / awards.length}%`,
//               left: `${
//                 (activeIndex / (awards.length - 1)) *
//                 (125 - 100 / awards.length)
//               }%`,
//               transform: "translateY(-30%)",
//             }}
//           ></div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OurAwards;


// import { useEffect, useRef, useState } from "react";
// import medal from "../assets/olympic-medal.svg";
// import AwardCard from "./AwardCard";
// import { content } from "../content/content";

// const OurAwards = () => {
//   const awards = [
//     {
//       id: 1,
//       awardName: "National Export Trophy (Gold) by Ministry Of Commerce",
//       awardYear: "Awarded in 1993",
//       medal: medal,
//     },
//     {
//       id: 2,
//       awardName: "National Export Trophy (Gold) by Ministry Of Commerce",
//       awardYear: "Awarded in 1994",
//       medal: medal,
//     },
//     {
//       id: 3,
//       awardName: "Best Stall (Batexpo) by BGMEA",
//       awardYear: "Awarded in 1997",
//       medal: medal,
//     },
//     {
//       id: 4,
//       awardName: "Best Stall (Batexpo) by BGMEA",
//       awardYear: "Awarded in 1998",
//       medal: medal,
//     },
//     {
//       id: 5,
//       awardName: "Supplier of the Year by REDCATS",
//       awardYear: "Awarded in 2013",
//       medal: medal,
//     },
//     {
//       id: 6,
//       awardName:
//         "Best Performance by Sustainable Water Management (Stockholm International Water Institute)",
//       awardYear: "Awarded in 2015",
//       medal: medal,
//     },
//     {
//       id: 7,
//       awardName: "Gold Certificate of Compliance by WRAP",
//       awardYear: "Awarded in 2017",
//       medal: medal,
//     },
//     {
//       id: 8,
//       awardName: "Best Performance by the ALDI Factory Project",
//       awardYear: "Awarded in 2018",
//       medal: medal,
//     },
//   ];

//   const {heading} = content.en.ourStoryPage.ourAwards;
//   const carouselRef = useRef(null); // A reference to the carousel container, which allows direct manipulation of the DOM element.
//   const [activeIndex, setActiveIndex] = useState(0); // A function to update activeIndex.
//   const [isDragging, setIsDragging] = useState(false); // A boolean state to track if the user is dragging the carousel
//   const [startX, setStartX] = useState(0); // The starting position of the mouse when the user starts dragging.
//   const [scrollLeft, setScrollLeft] = useState(0); // The scroll position of the carousel.
//   const cardWidth = 350; // Match the width in AwardCard.jsx

//   // Handle scroll events to update progress bar
//   useEffect(() => {
//     const handleScroll = () => {
//       if (carouselRef.current) {
//         const { scrollLeft } = carouselRef.current;

//         // Calculate which card is currently active based on scroll position
//         // Account for the left padding and gap
//         const effectiveCardWidth = cardWidth + 64; // Card width + gap
//         const newActiveIndex = Math.min(
//           Math.floor((scrollLeft - 102) / effectiveCardWidth),
//           awards.length - 1
//         );
//         setActiveIndex(newActiveIndex >= 0 ? newActiveIndex : 0);
//       }
//     };

//     const carousel = carouselRef.current;
//     if (carousel) {
//       carousel.addEventListener("scroll", handleScroll);
//       return () => carousel.removeEventListener("scroll", handleScroll);
//     }
//   }, [awards.length]);

//   // Mouse drag scroll functionality
//   const handleMouseDown = (e) => {
//     e.preventDefault();
//     setIsDragging(true);
//     setStartX(e.pageX - carouselRef.current.offsetLeft);
//     setScrollLeft(carouselRef.current.scrollLeft);

//     if (carouselRef.current) {
//       carouselRef.current.style.cursor = "grabbing";
//       carouselRef.current.style.userSelect = "none";
//     }
//   };

//   const handleMouseUp = () => {
//     setIsDragging(false);

//     if (carouselRef.current) {
//       carouselRef.current.style.cursor = "grab";
//       carouselRef.current.style.userSelect = "";
//     }
//   };

//   const handleMouseMove = (e) => {
//     if (!isDragging) return;
//     e.preventDefault();

//     const x = e.pageX - carouselRef.current.offsetLeft;
//     const walk = (x - startX) * 3; // Adjusted scroll speed for better control
//     carouselRef.current.scrollLeft = scrollLeft - walk;
//   };

//   const handleMouseLeave = () => {
//     setIsDragging(false);

//     if (carouselRef.current) {
//       carouselRef.current.style.cursor = "grab";
//       carouselRef.current.style.userSelect = "";
//     }
//   };

//   // Calculate the container width needed to show 3.5 cards
//   // Container width = (3.5 * card width) + (3 * gap)
//   const containerWidth = (3.5 * cardWidth) + (3 * 64);

//   return (
//     <div className="bg-[#0B714C] py-16 relative">
//       <h2 className="text-2xl font-bold text-white text-center mb-12">
//         {heading}
//       </h2>

//       <div className="relative">
//         {/* Center-aligned container with specific width to show exactly 3.5 cards */}
//         <div className="mx-auto" style={{ maxWidth: `${containerWidth}px` }}>
//           <div
//             ref={carouselRef}
//             className="flex overflow-x-auto gap-16 pb-16 snap-x scroll-smooth hide-scrollbar cursor-grab select-none"
//             style={{
//               scrollbarWidth: "none",
//               msOverflowStyle: "none",
//               WebkitUserSelect: "none",
//               MozUserSelect: "none",
//               userSelect: "none",
//               paddingLeft: "102px",
//               paddingRight: "102px",
//             }}
//             onMouseDown={handleMouseDown}
//             onMouseUp={handleMouseUp}
//             onMouseMove={handleMouseMove}
//             onMouseLeave={handleMouseLeave}
//             onTouchStart={() => {
//               if (carouselRef.current) {
//                 carouselRef.current.style.userSelect = "none";
//               }
//             }}
//             onTouchEnd={() => {
//               if (carouselRef.current) {
//                 carouselRef.current.style.userSelect = "";
//               }
//             }}
//           >
//             {awards.map((award) => (
//               <div
//                 key={award.id}
//                 className="flex-none"
//                 onDragStart={(e) => e.preventDefault()}
//               >
//                 <AwardCard award={award} />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       <div className="w-full max-w-3xl mx-auto px-4 pb-7">
//         <div className="relative h-[3px] bg-[#859E95] rounded-full">
//           <div
//             className="absolute h-[6px] bg-white rounded-full transition-all duration-300"
//             style={{
//               width: `${250 / awards.length}%`,
//               left: `${
//                 (activeIndex / (awards.length - 1)) *
//                 (133 - 100 / awards.length)
//               }%`,
//               transform: "translateY(-30%)",
//             }}
//           ></div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OurAwards;



"use client"

import { useEffect, useRef, useState } from "react";
import medal from "../assets/olympic-medal.svg";
import AwardCard from "./AwardCard";
import { content } from "../content/content";
import PropTypes from "prop-types"

const OurAwards = () => {
  const awards = [
    {
      id: 1,
      awardName: "National Export Trophy (Gold) by Ministry Of Commerce",
      awardYear: "Awarded in 1993",
      medal: medal,
    },
    {
      id: 2,
      awardName: "National Export Trophy (Gold) by Ministry Of Commerce",
      awardYear: "Awarded in 1994",
      medal: medal,
    },
    {
      id: 3,
      awardName: "Best Stall (Batexpo) by BGMEA",
      awardYear: "Awarded in 1997",
      medal: medal,
    },
    {
      id: 4,
      awardName: "Best Stall (Batexpo) by BGMEA",
      awardYear: "Awarded in 1998",
      medal: medal,
    },
    {
      id: 5,
      awardName: "Supplier of the Year by REDCATS",
      awardYear: "Awarded in 2013",
      medal: medal,
    },
    {
      id: 6,
      awardName:
        "Best Performance by Sustainable Water Management (Stockholm International Water Institute)",
      awardYear: "Awarded in 2015",
      medal: medal,
    },
    {
      id: 7,
      awardName: "Gold Certificate of Compliance by WRAP",
      awardYear: "Awarded in 2017",
      medal: medal,
    },
    {
      id: 8,
      awardName: "Best Performance by the ALDI Factory Project",
      awardYear: "Awarded in 2018",
      medal: medal,
    },
  ];

  const { heading } = content.en.ourStoryPage.ourAwards;
  const desktopCarouselRef = useRef(null);  // Separate ref for desktop
  const mobileCarouselRef = useRef(null);   // Separate ref for mobile
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  
  // Desktop card width
  const desktopCardWidth = 350;
  // Mobile card width (adjusted for smaller screens)
  const mobileCardWidth = 280;
  
  // Use media query to detect mobile screens
  // const isMobile = useMediaQuery("(max-width: 768px)");
  
  // Desktop and mobile gap values
  const desktopGap = 64; // 16rem
  const mobileGap = 16; // 1rem
  
  // Desktop padding values
  const desktopPadding = 102;
  // Mobile padding values
  const mobilePadding = 16;

  // Handle scroll events to update progress bar
  useEffect(() => {
    const handleDesktopScroll = () => {
      if (desktopCarouselRef.current) {
        const { scrollLeft } = desktopCarouselRef.current;

        // Calculate which card is currently active based on scroll position
        const effectiveCardWidth = desktopCardWidth + desktopGap;
        const newActiveIndex = Math.min(
          Math.floor((scrollLeft - desktopPadding) / effectiveCardWidth),
          awards.length - 1
        );
        setActiveIndex(newActiveIndex >= 0 ? newActiveIndex : 0);
      }
    };

    const handleMobileScroll = () => {
      if (mobileCarouselRef.current) {
        const { scrollLeft } = mobileCarouselRef.current;

        // Calculate which card is currently active based on scroll position
        const effectiveCardWidth = mobileCardWidth + mobileGap;
        const newActiveIndex = Math.min(
          Math.floor(scrollLeft / effectiveCardWidth),
          awards.length - 1
        );
        setActiveIndex(newActiveIndex >= 0 ? newActiveIndex : 0);
      }
    };

    const desktopCarousel = desktopCarouselRef.current;
    const mobileCarousel = mobileCarouselRef.current;

    if (desktopCarousel) {
      desktopCarousel.addEventListener("scroll", handleDesktopScroll);
    }
    
    if (mobileCarousel) {
      mobileCarousel.addEventListener("scroll", handleMobileScroll);
    }
    
    return () => {
      if (desktopCarousel) {
        desktopCarousel.removeEventListener("scroll", handleDesktopScroll);
      }
      if (mobileCarousel) {
        mobileCarousel.removeEventListener("scroll", handleMobileScroll);
      }
    };
  }, [awards.length]);

  // Mouse drag scroll functionality for desktop
  const handleMouseDown = (e) => {
    e.preventDefault();
    setIsDragging(true);
    setStartX(e.pageX - desktopCarouselRef.current.offsetLeft);
    setScrollLeft(desktopCarouselRef.current.scrollLeft);

    if (desktopCarouselRef.current) {
      desktopCarouselRef.current.style.cursor = "grabbing";
      desktopCarouselRef.current.style.userSelect = "none";
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);

    if (desktopCarouselRef.current) {
      desktopCarouselRef.current.style.cursor = "grab";
      desktopCarouselRef.current.style.userSelect = "";
    }
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();

    const x = e.pageX - desktopCarouselRef.current.offsetLeft;
    const walk = (x - startX) * 3; // Adjusted scroll speed for better control
    desktopCarouselRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseLeave = () => {
    setIsDragging(false);

    if (desktopCarouselRef.current) {
      desktopCarouselRef.current.style.cursor = "grab";
      desktopCarouselRef.current.style.userSelect = "";
    }
  };

  // Touch event handlers for mobile
  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
    setScrollLeft(mobileCarouselRef.current.scrollLeft);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const x = e.touches[0].clientX;
    const walk = (startX - x) * 1.5;
    mobileCarouselRef.current.scrollLeft = scrollLeft + walk;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  // Calculate container width for desktop
  const desktopContainerWidth = (3.5 * desktopCardWidth) + (3 * desktopGap);

  // Mobile AwardCard component styling adjustments
  const MobileAwardCard = ({ award }) => {
    return (
      <div className="flex-none w-[341px] h-[271px] bg-white rounded-xl p-6 flex flex-col justify-between snap-center">
        <div>
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-lg font-bold text-[#0B714C] w-4/5">{award.awardName}</h3>
            <img src={award.medal} alt="Medal" className="h-10 w-10" />
          </div>
        </div>
        <p className="text-[#0B714C]">{award.awardYear}</p>
      </div>
    );
  };

  return (
    <div className="bg-[#0B714C] py-8 md:py-16 relative">
      <h2 className="text-xl md:text-2xl font-bold text-white text-center mb-8 md:mb-12 px-4">
        {heading}
      </h2>

      <div className="relative">
        {/* Desktop view (hidden on mobile) */}
        <div className={`mx-auto hidden md:block`} style={{ maxWidth: `${desktopContainerWidth}px` }}>
          <div
            ref={desktopCarouselRef}
            className="flex overflow-x-auto gap-16 pb-16 snap-x scroll-smooth hide-scrollbar cursor-grab select-none"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              WebkitUserSelect: "none",
              MozUserSelect: "none",
              userSelect: "none",
              paddingLeft: `${desktopPadding}px`,
              paddingRight: `${desktopPadding}px`,
            }}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            {awards.map((award) => (
              <div
                key={award.id}
                className="flex-none"
                onDragStart={(e) => e.preventDefault()}
              >
                <AwardCard award={award} />
              </div>
            ))}
          </div>
        </div>

        {/* Mobile view (hidden on desktop) */}
        <div className="md:hidden">
          <div
            ref={mobileCarouselRef}
            className="flex overflow-x-auto gap-4 pb-10 snap-x scroll-smooth hide-scrollbar touch-pan-x select-none"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              WebkitUserSelect: "none",
              MozUserSelect: "none",
              userSelect: "none",
              paddingLeft: `${mobilePadding}px`,
              paddingRight: `${mobilePadding}px`,
            }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {awards.map((award) => (
              <div
                key={award.id}
                className="flex-none"
                onDragStart={(e) => e.preventDefault()}
              >
                <MobileAwardCard award={award} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Progress indicator - visible on all screens */}
      <div className="w-full max-w-xs md:max-w-3xl mx-auto px-4 pb-4 md:pb-7 hidden md:block">
        <div className="relative h-[3px] bg-[#859E95] rounded-full">
          <div
            className="absolute h-[6px] bg-white rounded-full transition-all duration-300"
            style={{
              width: `${250 / awards.length}%`,
              left: `${
                (activeIndex / (awards.length - 1)) * 
                (133 - 100 / awards.length)
              }%`,
              transform: "translateY(-30%)",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

// Define prop types for the component
OurAwards.propTypes = {
  award: PropTypes.shape({
    awardName: PropTypes.string.isRequired,
    awardYear: PropTypes.string.isRequired,
    medal: PropTypes.string.isRequired,
  }).isRequired,
};

export default OurAwards;