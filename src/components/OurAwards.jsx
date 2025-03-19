// import AwardCard from "./AwardCard";
// import medal from "../assets/olympic-medal.svg";

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
//       awardYear: "Awarded in 1998",
//       medal: medal,
//     },
//     {
//       id: 4,
//       awardName: "Best Stall (Batexpo) by BGMEA",
//       awardYear: "Awarded in 1997",
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

//   return (
//     <div className="bg-[#0B714C]">
//       <h2 className="text-2xl font-bold text-white text-center pt-12 mb-16">
//         Our Awards
//       </h2>
//       <div className="grid grid-cols-4 gap-4">
//         {awards.map((award) => (
//           <AwardCard 
//           key={award.id}
//          award={award}
//           ></AwardCard>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default OurAwards;


import { useRef, useState, useEffect } from "react";
import AwardCard from "./AwardCard";
import medal from "../assets/olympic-medal.svg";

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
      awardYear: "Awarded in 1998",
      medal: medal,
    },
    {
      id: 4,
      awardName: "Best Stall (Batexpo) by BGMEA",
      awardYear: "Awarded in 1997",
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

  const carouselRef = useRef(null);
  const [progressWidth, setProgressWidth] = useState(0);

  const handleScroll = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      const scrollPercentage = (scrollLeft / (scrollWidth - clientWidth)) * 100;
      setProgressWidth(scrollPercentage);
    }
  };

  // const scrollNext = () => {
  //   if (carouselRef.current) {
  //     const cardWidth = carouselRef.current.querySelector("div").offsetWidth + 16; // width + gap
  //     carouselRef.current.scrollBy({ left: cardWidth, behavior: "smooth" });
  //   }
  // };

  // const scrollPrev = () => {
  //   if (carouselRef.current) {
  //     const cardWidth = carouselRef.current.querySelector("div").offsetWidth + 16; // width + gap
  //     carouselRef.current.scrollBy({ left: -cardWidth, behavior: "smooth" });
  //   }
  // };

  useEffect(() => {
    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener("scroll", handleScroll);
      return () => carousel.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <div className="bg-[#0B714C] py-12">
      <h2 className="text-2xl font-bold text-white text-center mb-16">
        Our Awards
      </h2>

      <div className="relative px-10 md:px-16">
        {/* Carousel with cards */}
        <div 
          ref={carouselRef}
          className="flex overflow-x-auto gap-4 pb-8 pt-2 snap-x scroll-smooth hide-scrollbar"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {awards.map((award) => (
            <div key={award.id} className="flex-none w-[300px] snap-start">
              <AwardCard award={award} />
            </div>
          ))}
        </div>

        {/* Navigation buttons */}
        {/* <button 
          onClick={scrollPrev} 
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full"
          aria-label="Previous award"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button 
          onClick={scrollNext} 
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full"
          aria-label="Next award"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button> */}
      </div>

      {/* Progress bar */}
      <div className="max-w-md mx-auto mt-8 px-4">
        <div className="h-2 bg-white/20 rounded-full relative">
          <div 
            className="h-1 bg-white absolute top-0.5 left-0 rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progressWidth}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default OurAwards;