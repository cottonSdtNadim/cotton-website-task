import { motion } from "motion/react";
import PropTypes from "prop-types";
import { useState } from "react";
import { content } from "../content/content.js";
import AnimatedButton from "./AnimatedButton.jsx";

const VisionaryPersonCard = ({ person }) => {
  const { name, designation, image } = person;
  const [isHovered, setIsHovered] = useState(false);
  const { title } = content.en.ourStoryPage.ourVisionaries.animatedButton;

  return (
    <motion.div
      className="w-[261px] h-[392px] rounded-xl mb-56 relative"
      style={{
        background: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 56.25%, rgba(0, 0, 0, 0.40) 79.69%), url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Text Container */}
      <motion.div
        className="absolute bottom-0 left-5 w-full text-white text-left py-4"
        initial={{ bottom: 0 }}
        animate={{ bottom: isHovered ? "60px" : "0px" }}
        exit={{ bottom: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-sm font-light leading-relaxed">{designation}</p>
      </motion.div>

      {/* Animated Button */}
      <motion.div 
      className="absolute bottom-6 left-4 w-full"
      initial={{opacity: 0, bottom: "0px"}}
      animate={{opacity: isHovered ? 1 : 0, bottom: isHovered ? "20px" : "0px"}}
      exit={{opacity: 0, bottom: "0px"}}
      transition={{duration: 0.3}}
      >
        <AnimatedButton
          label={title}
          labelColor="#0B714C"
          bgColor="#F8FBFA"
        ></AnimatedButton>
      </motion.div>
    </motion.div>
  );
};

VisionaryPersonCard.propTypes = {
  person: PropTypes.object.isRequired,
};

export default VisionaryPersonCard;
