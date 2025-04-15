// /* import calender from "../assets/icons/calender-svgrepo-com 1.png";
// import dress from "../assets/icons/dress-svgrepo-com 1.png";
// import sewing from "../assets/icons/sewing-machine-svgrepo-com 1.png"; */
// import ProcessFlow from "./ProcessFlow";
// import TextCard from "./textCard";
// import { content } from "../content/content.js"; 

// const Process = () => {
//         const { textCards, description, heading} = content.en.process;
//   return (
//     <div className="flex my-20 w-[960px] mx-auto px-10">
//       {/* Text Card Container */}
//       <div className="space-y-[36px]">
//         {/* <TextCard
//           svg={calender}
//           textBold="30+"
//           textSmall="Years of experience"
//         ></TextCard>

//         <TextCard
//           svg={sewing}
//           textBold="25+"
//           textSmall="Production units"
//         ></TextCard>

//         <TextCard
//           svg={dress}
//           textBold="4"
//           textSmall="Millions Pieces/Year"
//         ></TextCard> */}
//         {textCards.map((card, index) => (
//           <TextCard
//             key={index}
//             svg={card.svg}
//             textBold={card.textBold}
//             textSmall={card.textSmall}
//           />
//         ))}
//       </div>

//       {/* Process Container */}
//       <div className="ml-14 max-w-[646px]"> {/* 480px */}
//         <p className="text-2xl mb-6">
//           {/* Cotton Group can meet your requirements of high-quality manufacturing
//           of knit garments in all categories, such as basics, casual and active
//           wear for men, women and children.{" "} */}
//           {
//             description
//           }
//         </p>
//         <h3 className="text-3xl font-bold mb-6">
//           {/* Here’s our process: */}
//           {
//             heading
//           }
//           </h3>
//         <ProcessFlow></ProcessFlow>
//       </div>
//     </div>
//   );
// };

// export default Process;

// import ProcessFlow from "./ProcessFlow";
// import TextCard from "./textCard";
// import { content } from "../content/content.js"; 

// const Process = () => {
//   const { textCards, description, heading } = content.en.process;
  
//   return (
//     <div className="flex flex-col md:flex-row my-10 md:my-20 w-full md:w-[960px] mx-auto px-4 md:px-10">
//       {/* Text Card Container - vertical on desktop, horizontal on mobile */}
//       <div className="flex flex-row md:flex-col space-x-4 md:space-x-0 md:space-y-[36px]  pb-6 md:pb-0">
//         {textCards.map((card, index) => (
//           <TextCard
//             key={index}
//             svg={card.svg}
//             textBold={card.textBold}
//             textSmall={card.textSmall}
//           />
//         ))}
//       </div>

//       {/* Process Container */}
//       <div className="mt-10 md:mt-0 md:ml-14 max-w-full md:max-w-[646px]">
//         <p className="text-xl md:text-2xl mb-4 md:mb-6">
//           {description}
//         </p>
//         <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">
//           {heading}
//         </h3>
//         <ProcessFlow />
//       </div>
//     </div>
//   );
// };

// export default Process;


import { useRef, useState, useEffect } from "react";
import ProcessFlow from "./ProcessFlow";
import TextCard from "./textCard";
import { content } from "../content/content.js"; 

const Process = () => {
  const { textCards, description, heading } = content.en.process;
  const scrollRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  // Check if we're on mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  // Handle scroll position to show/hide arrows
  const handleScroll = () => {
    if (!scrollRef.current) return;
    
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setShowLeftArrow(scrollLeft > 0);
    setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
  };

  useEffect(() => {
    const scrollElement = scrollRef.current;
    if (scrollElement) {
      scrollElement.addEventListener('scroll', handleScroll);
      handleScroll(); // Initial check
      
      return () => scrollElement.removeEventListener('scroll', handleScroll);
    }
  }, [isMobile]);

  // Scroll to next or previous card
  const scroll = (direction) => {
    if (!scrollRef.current) return;
    
    const cardWidth = 224; // Width of card + margin (56px + 16px spacing)
    const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;
    scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };
  
  return (
    <div className="flex flex-col md:flex-row my-10 md:my-20 w-full md:w-[960px] mx-auto px-4 md:px-10">
      {/* Text Card Container - horizontal scrollable on mobile, vertical on desktop */}
      <div className="relative w-full md:w-auto">
        {/* Mobile scroll arrows - only shown on mobile */}
        {isMobile && (
          <>
            {showLeftArrow && (
              <button 
                onClick={() => scroll('left')}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-gray-800 bg-opacity-50 rounded-full p-2 text-white"
                aria-label="Scroll left"
              >
                ←
              </button>
            )}
            {showRightArrow && (
              <button 
                onClick={() => scroll('right')}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-gray-800 bg-opacity-50 rounded-full p-2 text-white"
                aria-label="Scroll right"
              >
                →
              </button>
            )}
          </>
        )}
        
        {/* Scrollable container for mobile */}
        <div 
          ref={scrollRef}
          className="flex flex-row md:flex-col overflow-x-auto md:overflow-visible scrollbar-hide md:space-y-[36px] pb-6 md:pb-0 gap-4 md:gap-0 snap-x snap-mandatory"
        >
          {textCards.map((card, index) => (
            <div key={index} className="snap-start flex-shrink-0">
              <TextCard
                svg={card.svg}
                textBold={card.textBold}
                textSmall={card.textSmall}
              />
            </div>
          ))}
        </div>
        
        {/* Optional: Pagination dots for mobile */}
        {isMobile && (
          <div className="flex justify-center mt-4 space-x-2">
            {textCards.map((_, index) => (
              <div 
                key={index} 
                className="h-2 w-2 rounded-full bg-gray-300" 
                // You could add logic to highlight the active dot
              />
            ))}
          </div>
        )}
      </div>

      {/* Process Container */}
      <div className="mt-10 md:mt-0 md:ml-14 max-w-full md:max-w-[646px]">
        <p className="text-xl md:text-2xl mb-4 md:mb-6">
          {description}
        </p>
        <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">
          {heading}
        </h3>
        <ProcessFlow />
      </div>
    </div>
  );
};

export default Process;