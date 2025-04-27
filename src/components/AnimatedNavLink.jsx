import { useState } from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { MdKeyboardArrowLeft } from "react-icons/md";

const AnimatedNavLink = ({ label, labelColor, bgColor= "", onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Create the style object with dynamic colors
  const buttonStyle = {
    color: labelColor,
    backgroundColor: bgColor,
  };

  // Framer Motion animation properties for the arrow
  const arrowVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 },
  };

  // Text animation variants
  const textVariants = {
    initial: { x: 0 },
    hover: { x: 20 },
  };

  return (
    <div>
      <motion.button
        className="px-5 py-2 rounded-lg transition-all duration-300 ease-in-out flex items-center justify-center text-[16px] font-semibold relative overflow-hidden"
        style={buttonStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={onClick}
      >
        <motion.div
          className="flex items-center"
          initial="initial"
          animate={isHovered ? "hover" : "initial"}
          variants={textVariants}
          transition={{ duration: 0.3 }}
        >
          {label}
        </motion.div>

        <motion.span
          className="absolute left-2"
          initial="hidden"
          animate={isHovered ? "visible" : "hidden"}
          variants={arrowVariants}
          transition={{ duration: 0.3 }}
        >
          <MdKeyboardArrowLeft className="w-6 h-6" />
        </motion.span>
      </motion.button>
    </div>
  );
};

AnimatedNavLink.propTypes = {
  label: PropTypes.string.isRequired,
  labelColor: PropTypes.string.isRequired,
  bgColor: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default AnimatedNavLink;
