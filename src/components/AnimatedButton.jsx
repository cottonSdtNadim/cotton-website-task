import { useState } from "react"
import { motion } from "framer-motion"
import PropTypes from "prop-types";
// import rightArrow from "../assets/svgs/right-arrow.svg"
import { MdKeyboardArrowRight } from "react-icons/md";


const AnimatedButton = ({ label, labelColor, bgColor }) => {
  const [isHovered, setIsHovered] = useState(false)

  // Create the style object with dynamic colors
  const buttonStyle = {
    color: labelColor,
    backgroundColor: bgColor,
    paddingRight: isHovered ? "20px" : "0px", // Dynamic padding based on hover state
    // transform: isHovered ? "scale(1.1)" : "scale(1)",
    // transformOrigin: "left", // Set the scaling origin to the left side

  }

  // Framer Motion animation properties for the arrow
  const arrowVariants = {
    hidden: { opacity: 0, x: -5 },
    visible: { opacity: 1, x: 5 },
  }

  return (
    <div>
      <motion.button
        className="px-5 py-2 rounded-lg transition-all duration-300 ease-in-out flex items-center justify-center text-[16px] font-semibold"
        style={buttonStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        // whileHover={{ scaleX: 1.1 }} // Increase button size on hover
        // animate={{ scaleX: isHovered ? 1.1 : 1 }} // Scale only in the horizontal direction
      >
        {label}
        <motion.span
          // className="inline-flex ml-1"
          initial="hidden"
          animate={isHovered ? "visible" : "hidden"}
          variants={arrowVariants}
          transition={{ duration: 0.3 }}
        >
          {/* <img src={rightArrow} alt="Right Arrow Symbol" /> */}
          <MdKeyboardArrowRight className="w-6 h-6" />
        </motion.span>
      </motion.button>
    </div>
  )
}

AnimatedButton.propTypes = {
  label: PropTypes.string.isRequired,
  labelColor: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
};


export default AnimatedButton
