import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { useState } from "react";
import { Link } from "react-router";

const AnimatedLink = ({ fontSize = "text-base", content, color , fontWeight = "font-medium", paddingBottom = "pb-0",}) => {
  const [isHovered, setIsHovered] = useState(false);

  // Set the default color to white (#F8FBFA) if no color prop is passed
  const textColor = color || "#F8FBFA";

  return (
    <div className={`pt-2  ${paddingBottom}`}> {/* pb-6 */}
      <Link
        to={"/"}
        // className="text-base font-medium relative"
        className={`${fontSize} ${fontWeight} relative`}
        style={{ color: textColor }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {content}
        <motion.div
          className="absolute left-0 bottom-[-4px]"
          style={{ backgroundColor: textColor }}
          initial={{ width: "19px", height: "1px" }}
          animate={{
            width: isHovered ? "100%" : "19px",
            height: isHovered ? "1px" : "1px",
          }}
          transition={{ duration: 0.3 }}
        />
      </Link>
    </div>
  );
};

AnimatedLink.propTypes = {
  fontSize: PropTypes.string,
  content: PropTypes.string.isRequired,
  color: PropTypes.string,
  fontWeight: PropTypes.string,
  paddingBottom: PropTypes.string
};

export default AnimatedLink;
