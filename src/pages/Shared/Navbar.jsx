import { motion } from "framer-motion";
import { useState } from "react";
import cottonGreenLogo from "../../assets/images/cotton-green-logo.png";
import ellipse from "../../assets/svgs/Ellipse.svg";

const Navbar = () => {
  const [selectedItem, setSelectedItem] = useState("Home");
  const [hoveredItem, setHoveredItem] = useState(null);
  
  const navItemsList = [
    "Home",
    "About Cotton",
    "Work",
    "Sustainability",
    "Order",
    "Contact",
  ];
  
  return (
    <div className="flex justify-between items-center px-[110px] py-[50px] text-black">
      {/* Cotton Logo */}
      <img
        src={cottonGreenLogo}
        alt="Cotton Green Logo"
        className="w-[99px] h-[86px]"
      />

      {/* NavItems Container */}
      <ul className="flex gap-[45px] font-semibold text-base">
        {navItemsList.map((item) => (
          <motion.li
            key={item}
            className={`relative cursor-pointer px-4 py-1 rounded-md ${
              selectedItem === item
                ? "bg-[#0B714C] text-white"
                : "text-black font-semibold"
            }`}
            onClick={() => setSelectedItem(item)}
            onMouseEnter={() => setHoveredItem(item)}
            onMouseLeave={() => setHoveredItem(null)}
            animate={{ 
              x: hoveredItem === item && selectedItem !== item ? 15 : 0 
            }}
            transition={{ duration: 0.3 }}
          >
            {/* Bullet point for non-active items */}
            {selectedItem !== item && (
              <motion.div
                className="absolute -left-1 top-1/2 -translate-y-1/2"
                animate={{ 
                  opacity: hoveredItem === item ? 1 : 0,
                  x: hoveredItem === item ? 0 : -10
                }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={ellipse}
                  alt="Bullet Point"
                  className="w-1.5 h-1.5"
                />
              </motion.div>
            )}

            {item}
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;