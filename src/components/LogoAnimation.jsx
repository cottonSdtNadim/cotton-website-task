import { motion } from "motion/react"
import PropTypes from "prop-types";

const LogoAnimation = ({logos, width, height}) => {
  return (
    <div>
      <div className="relative w-full overflow-hidden">
        {/* Outer container with overflow hidden */}
        <div className="relative w-full overflow-hidden">
          {/* Create two identical rows and animate them together */}
          <div className="relative flex whitespace-nowrap">
            <motion.div
              className="flex items-center gap-10 mb-8"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 20,
                  ease: "linear",
                },
              }}
            >
              {/* First set of logos */}
              {logos.map((logo, index) => (
                <div
                  key={`original-${index}`}
                  // className="w-40 h-16 flex-shrink-0 mx-16 inline-block"
                  className={`${width} ${height} flex-shrink-0 mx-16 inline-block`}
                >
                  <img
                    src={logo}
                    alt={`Partner ${index}`}
                    className="w-full h-full object-contain"
                  />
                </div>
              ))}

              {/* Second set of logos (identical duplicate) */}
              {logos.map((partner, index) => (
                <div
                  key={`duplicate-${index}`}
                  className="w-40 h-16 flex-shrink-0 mx-16 inline-block"
                >
                  <img
                    src={partner}
                    alt={`Partner ${index}`}
                    className="w-full h-full object-contain"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

LogoAnimation.propTypes = {
    logos: PropTypes.arrayOf(PropTypes.string).isRequired, // Validate the 'logos' prop as an array of strings
    width: PropTypes.string.isRequired, // Validate the 'width' prop as a string
    height: PropTypes.string.isRequired, // Validate the 'height' prop as a string
  };

export default LogoAnimation;
