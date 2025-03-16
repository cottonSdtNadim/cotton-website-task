import { motion } from "framer-motion";
import { useState } from "react";
import cottonGreenLogo from "../../assets/images/cotton-green-logo.png";
import ellipse from "../../assets/svgs/Ellipse.svg";
import { NavLink, useLocation } from "react-router"; // Added useLocation
import PropTypes from 'prop-types';  

const Navbar = ({ nonActiveTextColor = "black" }) => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const location = useLocation(); // Get current location
  
  const navItemsList = [
    { name: "Home", path: "/" },
    { name: "About Cotton", path: "/aboutCotton" },
    { name: "Work", path: "/work" },
    { name: "Sustainability", path: "/sustainability" },
    { name: "Order", path: "/order" },
    { name: "Contact", path: "/contact" },
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
        {navItemsList.map(({ name, path }) => {
          const isActive = location.pathname === path;
          
          return (
            <NavLink
              key={name}
              to={path}
              className={
                `relative cursor-pointer px-4 py-1 rounded-md ${
                  isActive ? "bg-[#0B714C] text-white" : "font-semibold"
                }`
              }
              style={
                !isActive ? { color: nonActiveTextColor } : {}
              }
              onMouseEnter={() => setHoveredItem(name)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              {/* Bullet point for non-active items */}
              {!isActive && (
                <motion.div
                  className="absolute -left-1 top-1/2 -translate-y-1/2"
                  animate={{ 
                    opacity: hoveredItem === name ? 1 : 0,
                    x: hoveredItem === name ? 0 : -10
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <img src={ellipse} alt="Bullet Point" className="w-1.5 h-1.5" />
                </motion.div>
              )}
              {name}
            </NavLink>
          );
        })}
      </ul>
    </div>
  );
};

// Add PropTypes validation for nonActiveTextColor
Navbar.propTypes = {
  nonActiveTextColor: PropTypes.string,
};

export default Navbar;
