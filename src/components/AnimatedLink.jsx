import {   motion } from "framer-motion"
import PropTypes from "prop-types";
import { Link } from "react-router";
import { useState } from "react";

const AnimatedLink = ({content, color}) => {
  const [isHovered, setIsHovered] = useState(false);

   // Set the default color to white (#F8FBFA) if no color prop is passed
   const textColor = color || "#F8FBFA";
  
  return (
    <div className="pt-2 pb-6">
      <Link
        to={"/"}
        // className="text-white text-base font-medium relative"
        className="text-base font-medium relative"
        style={{ color: textColor }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
     {content}
        <motion.div
          className="absolute left-0 bottom-[-4px]"
          style={{ backgroundColor: textColor }}
          initial={{ width: '19px', height: '1px' }}
          animate={{ 
            width: isHovered ? '100%' : '19px',
            height: isHovered ? '1px' : '1px'
          }}
          transition={{ duration: 0.3 }}
        />
      </Link>
    </div>
  );
};

AnimatedLink.propTypes = {
    content: PropTypes.string.isRequired,
    color: PropTypes.string,
}

export default AnimatedLink;