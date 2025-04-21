import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
// import rightArrow from "../assets/svgs/right-arrow.svg"
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router";

const AnimatedButton = ({ label, labelColor, bgColor, url}) => {
  // const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia("(max-width: 768px)").matches);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Handle touch on mobile
  const handleTouchStart = () => {
    if (isMobile) {
      setIsActive(true);
    }
  };

  // For mobile, we want the active state to persist for a short time after touch
  const handleTouchEnd = () => {
    if (isMobile) {
      // Keep the effect active for a moment after touch ends
      setTimeout(() => {
        setIsActive(false);
      }, 1000); // 1 second delay before reverting
    }
  };

  // Create the style object with dynamic colors
  const buttonStyle = {
    color: labelColor,
    backgroundColor: bgColor,
    // paddingRight: isHovered ? "20px" : "0px", // Dynamic padding based on hover state
    paddingRight: isActive ? "20px" : "0px", // Dynamic padding based on active state
    // transform: isHovered ? "scale(1.1)" : "scale(1)",
    // transformOrigin: "left", // Set the scaling origin to the left side
  };

  // Framer Motion animation properties for the arrow
  const arrowVariants = {
    hidden: { opacity: 0, x: -5 },
    visible: { opacity: 1, x: 5 },
  };

  return (
    <div>
      <Link to={url}>
        <motion.button
          className="px-5 py-2 rounded-lg transition-all duration-300 ease-in-out flex items-center justify-center text-[16px] font-semibold"
          style={buttonStyle}
          // onMouseEnter={() => setIsHovered(true)}
          // onMouseLeave={() => setIsHovered(false)}
          // onTouchStart={() => setIsHovered(true)} // Touch start for mobile
          // onTouchEnd={() => setIsHovered(false)} // Touch end for mobile
          onMouseEnter={isMobile ? null : () => setIsActive(true)}
          onMouseLeave={isMobile ? null : () => setIsActive(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          // whileHover={{ scaleX: 1.1 }} // Increase button size on hover
          // animate={{ scaleX: isHovered ? 1.1 : 1 }} // Scale only in the horizontal direction
        >
          {label}
          <motion.span
            // className="inline-flex ml-1"
            initial="hidden"
            // animate={isHovered ? "visible" : "hidden"}
            animate={isActive ? "visible" : "hidden"}
            variants={arrowVariants}
            transition={{ duration: 0.3 }}
          >
            {/* <img src={rightArrow} alt="Right Arrow Symbol" /> */}
            <MdKeyboardArrowRight className="w-6 h-6" />
          </motion.span>
        </motion.button>
      </Link>
    </div>
  );
};

AnimatedButton.propTypes = {
  label: PropTypes.string.isRequired,
  labelColor: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
  url: PropTypes.string,
};

export default AnimatedButton;
