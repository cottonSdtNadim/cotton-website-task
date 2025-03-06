import { motion } from "framer-motion"
import PropTypes from "prop-types";
import { Link } from "react-router";
import { useState } from "react";

const AnimatedLink = ({content}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div className="mt-auto pt-2 pb-6">
      <Link
        to={"/"}
        className="text-white text-base font-medium relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
     {content}
        <motion.div
          className="absolute left-0 bg-white bottom-[-4px]"
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
    content: PropTypes.string.isRequired
}

export default AnimatedLink;