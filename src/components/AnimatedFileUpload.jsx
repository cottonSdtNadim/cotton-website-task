import { useState, useRef } from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { FiUpload } from "react-icons/fi";

const AnimatedFileUpload = ({ 
  label, 
  labelColor, 
  bgColor, 
  onFileChange,
  accept,
  name 
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const fileInputRef = useRef(null);

  // Create the style object with dynamic colors
  const buttonStyle = {
    color: labelColor,
    backgroundColor: bgColor,
    paddingRight: isHovered ? "20px" : "0px", // Dynamic padding based on hover state
  };

  // Framer Motion animation properties for the icon
  const iconVariants = {
    hidden: { opacity: 0, x: -5 },
    visible: { opacity: 1, x: 5 },
  };

  // Handle button click to trigger file input
  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  // Handle file selection
  const handleFileChange = (e) => {
    if (onFileChange) {
      onFileChange(e);
    }
  };

  return (
    <div className="relative">
      {/* Hidden file input */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
        accept={accept}
        name={name}
        id={name}
      />
      
      {/* Animated button */}
      <motion.button
        className="px-5 py-2 rounded-lg transition-all duration-300 ease-in-out flex items-center justify-center text-base font-semibold"
        style={buttonStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleButtonClick}
        type="button"
      >
        {label}
        <motion.span
          initial="hidden"
          animate={isHovered ? "visible" : "hidden"}
          variants={iconVariants}
          transition={{ duration: 0.3 }}
          className="ml-1"
        >
          <FiUpload className="w-5 h-5" />
        </motion.span>
      </motion.button>
    </div>
  );
};

AnimatedFileUpload.propTypes = {
  label: PropTypes.string.isRequired,
  labelColor: PropTypes.string,
  bgColor: PropTypes.string,
  onFileChange: PropTypes.func.isRequired,
  accept: PropTypes.string,
  name: PropTypes.string.isRequired
};

AnimatedFileUpload.defaultProps = {
  labelColor: "white",
  bgColor: "#0B714C",
  accept: "*/*"
};

export default AnimatedFileUpload;