// import PropTypes from "prop-types";
// import Navbar from "./Navbar";

// const Cover = ({ image, heading, subHeading = "" }) => {
//   return (
//     <div className="relative overflow-hidden">
//       <div
//         className="w-full h-[585px]" /* w-full h-screen */
//         style={{
//           backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.40) 0%, rgba(0, 0, 0, 0.40) 100%), url(${image})`,
//           backgroundPosition: "50%",
//           backgroundSize: "cover",
//           backgroundRepeat: "no-repeat",
//         }}
//       >
//         <div className="absolute top-0 left-0 right-0 z-10">
//           <Navbar nonActiveTextColor="#F8FBFA" />
//         </div>
//         <div className="absolute inset-0 flex flex-col items-center justify-center">
//           {subHeading && (
//             <h2 className="text-3xl text-white mb-4 text-center font-normal mt-24">
//               {subHeading}
//             </h2>
//           )}
//           <h1 className="text-5xl font-extrabold text-[#F8FBFA] text-center leading-20">
//             {heading}
//           </h1>
//         </div>
//       </div>
//     </div>
//   );
// };

// Cover.propTypes = {
//   image: PropTypes.string.isRequired,
//   heading: PropTypes.string.isRequired,
//   subHeading: PropTypes.string,
//   pageName: PropTypes.string,
// };

// export default Cover;


import PropTypes from "prop-types";
import Navbar from "./Navbar";
import { useState, useEffect } from "react";

const Cover = ({ image, heading, subHeading = "", tagLine = "" }) => {
  const [scrollIndicator, setScrollIndicator] = useState(false);

  // Show scroll indicator on mobile only after a delay
  useEffect(() => {
    const timer = setTimeout(() => {
      const isMobile = window.innerWidth < 768;
      if (isMobile) {
        setScrollIndicator(true);
      }
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative overflow-hidden rounded-b-2xl md:rounded-b-none">
      <div
        className="w-full h-screen md:h-[585px]"
        style={{
          backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.40) 0%, rgba(0, 0, 0, 0.40) 100%), url(${image})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Navbar */}
        <div className="absolute top-0 left-0 right-0 z-10">
          <Navbar nonActiveTextColor="#F8FBFA" />
        </div>
        
        {/* Main Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          {subHeading && (
            <h2 className="text-2xl md:text-3xl text-white mb-2 md:mb-4 text-center font-normal mt-16 md:mt-24">
              {subHeading}
            </h2>
          )}
          <h1 className="text-5xl font-extrabold text-[#F8FBFA] text-center leading-tight px-4">
            {heading}
          </h1>
          {
            tagLine && (
              <p className="text-lg text-white mt-4 text-center px-4 font-light">
                {tagLine}
              </p>
            ) 
          }
        </div>
        
        {/* Scroll Indicator - Mobile Only */}
        {scrollIndicator && (
          <div className="md:hidden absolute bottom-8 left-0 right-0 flex flex-col items-center animate-bounce">
            <svg 
              className="w-6 h-6 text-white" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M19 14l-7 7m0 0l-7-7m7 7V3" 
              />
            </svg>
            <span className="text-white text-sm mt-1">Scroll Down</span>
          </div>
        )}
      </div>
    </div>
  );
};

Cover.propTypes = {
  image: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  subHeading: PropTypes.string,
  pageName: PropTypes.string,
  tagLine: PropTypes.string,
};

export default Cover;