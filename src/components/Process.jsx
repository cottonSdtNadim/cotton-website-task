

import { useEffect, useRef, useState } from "react";
import { content } from "../content/content.js";
import ProcessFlow from "./ProcessFlow";
import TextCard from "./textCard";

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
    window.addEventListener("resize", checkIfMobile);

    return () => window.removeEventListener("resize", checkIfMobile);
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
      scrollElement.addEventListener("scroll", handleScroll);
      handleScroll(); // Initial check

      return () => scrollElement.removeEventListener("scroll", handleScroll);
    }
  }, [isMobile]);

  // Scroll to next or previous card
  const scroll = (direction) => {
    if (!scrollRef.current) return;

    const cardWidth = 224; // Width of card + margin (56px + 16px spacing)
    const scrollAmount = direction === "left" ? -cardWidth : cardWidth;
    scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
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
                onClick={() => scroll("left")}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-gray-800 bg-opacity-50 rounded-full p-2 text-red-700"
                aria-label="Scroll left"
              >
                ←
              </button>
            )}
            {showRightArrow && (
              <button
                onClick={() => scroll("right")}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-gray-800 bg-opacity-50 rounded-full p-2 text-red-700"
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
        {/* {isMobile && (
          <div className="flex justify-center mt-4 space-x-2">
            {textCards.map((_, index) => (
              <div
                key={index}
                className="h-2 w-2 rounded-full bg-red-700"
                // You could add logic to highlight the active dot
              />
            ))}
          </div>
        )} */}
      </div>

      {/* Process Container */}
      <div className="mt-10 md:mt-0 md:ml-14 max-w-full md:max-w-[646px] ">
        <p className="text-xl md:text-2xl mb-4 md:mb-6 leading-relaxed">
          {description}
        </p>
        <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 ">
          {heading}
        </h3>
        <ProcessFlow />
      </div>
    </div>
  );
};

export default Process;
