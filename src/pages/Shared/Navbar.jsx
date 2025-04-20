// import { motion } from "framer-motion";
// import { useState } from "react";
// import cottonGreenLogo from "../../assets/images/cotton-green-logo.png";
// import cottonWhiteLogo from "../../assets/images/cotton-white-logo.png";
// import ellipse from "../../assets/svgs/Ellipse.svg";
// import { NavLink, useLocation } from "react-router"; // Added useLocation
// import PropTypes from 'prop-types';

// const Navbar = ({ nonActiveTextColor = "black" }) => {
//   const [hoveredItem, setHoveredItem] = useState(null);
//   const location = useLocation(); // Get current location

//   const navItemsList = [
//     { name: "Home", path: "/" },
//     { name: "About Cotton", path: "/aboutCotton" },
//     { name: "Work", path: "/work" },
//     { name: "Sustainability", path: "/sustainability" },
//     { name: "Order", path: "/order" },
//     { name: "Contact", path: "/contact" },
//   ];

//   const isHomePage = location.pathname === '/';

//   return (
//     <div className="flex justify-between items-center px-[110px] py-[50px] text-black">
//       {/* Cotton Logo */}
//       <img
//         src={isHomePage ? cottonGreenLogo : cottonWhiteLogo}
//         alt="Cotton Logo"
//         className="w-[99px] h-[86px]"
//       />
//       {/* NavItems Container */}
//       <ul className="flex gap-[45px] font-semibold text-base">
//         {navItemsList.map(({ name, path }) => {
//           const isActive = location.pathname === path;

//           return (
//             <NavLink
//               key={name}
//               to={path}
//               className={
//                 `relative cursor-pointer px-4 py-1 rounded-md ${
//                   isActive ? "bg-[#0B714C] text-white" : "font-semibold"
//                 }`
//               }
//               style={
//                 !isActive ? { color: nonActiveTextColor } : {}
//               }
//               onMouseEnter={() => setHoveredItem(name)}
//               onMouseLeave={() => setHoveredItem(null)}
//             >
//               {/* Bullet point for non-active items */}
//               {!isActive && (
//                 <motion.div
//                   className="absolute -left-1 top-1/2 -translate-y-1/2"
//                   animate={{
//                     opacity: hoveredItem === name ? 1 : 0,
//                     x: hoveredItem === name ? 0 : -10
//                   }}
//                   transition={{ duration: 0.3 }}
//                 >
//                   <img src={ellipse} alt="Bullet Point" className="w-1.5 h-1.5" />
//                 </motion.div>
//               )}
//               {name}
//             </NavLink>
//           );
//         })}
//       </ul>
//     </div>
//   );
// };

// // Add PropTypes validation for nonActiveTextColor
// Navbar.propTypes = {
//   nonActiveTextColor: PropTypes.string,
// };

// export default Navbar;

import { AnimatePresence, motion } from "framer-motion";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router";
import cottonGreenLogo from "../../assets/images/cotton-green-logo.png";
import cottonWhiteLogo from "../../assets/images/cotton-white-logo.png";
import hamburgerMenu from "../../assets/images/hamburger-menu-mobile/hamburger-menu.png";
import rightArrow from "../../assets/images/hamburger-menu-mobile/right-arrow.png";
import whiteHamburgerMenu from "../../assets/images/hamburger-menu-mobile/white-hamhurger-menu.png";
import ellipse from "../../assets/svgs/Ellipse.svg";
import { useMediaQuery } from "../../hooks/useMediaQuery";

const Navbar = ({ nonActiveTextColor = "black" }) => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth > 768) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navItemsList = [
    { name: "Home", path: "/" },
    { name: "About Cotton", path: "/aboutCotton" },
    { name: "Work", path: "/work" },
    { name: "Sustainability", path: "/sustainability" },
    { name: "Order", path: "/order" },
    { name: "Contact", path: "/contact" },
  ];

  const isHomePage = location.pathname === "/";
  const isNewsPage = location.pathname === "/news";
  // const isMobile = windowWidth < 768;
  const isMobile = useMediaQuery("(max-width: 768px)");

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  useEffect(() => {
    // Reset mobile menu when route changes
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Animation variants for slide-in from right
  const menuVariants = {
    hidden: {
      x: "100%",
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 0.8,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
    exit: {
      x: "100%",
      opacity: 0,
      transition: {
        type: "tween",
        duration: 0.7,
        when: "afterChildren",
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  // Updated item variants without opacity effects
  const itemVariants = {
    hidden: {
      x: 5 /* 20 */,
    },
    visible: {
      x: 5 /* 0 */,
      transition: {
        duration: 0.3,
      },
    },
    exit: {
      x: 5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <div
      className={`w-full ${
        isMobile ? "px-5 py-4" : "px-28 py-12" /* px-[110px] py-[50px] */
      } text-black relative`}
    >
      <div className="flex justify-between items-center">
        {/* Cotton Logo - Fixed to show the correct logo based on homepage status */}
        <img
          src={isHomePage || isNewsPage ? cottonGreenLogo : cottonWhiteLogo}
          alt="Cotton Logo"
          className={isMobile ? "w-20 h-16" : "w-24 h-20"}
        />{" "}
        {/* w-[70px] h-[60px] :  w-[99px] h-[86px]*/}
        {/* Desktop Navigation */}
        {!isMobile && (
          <ul className="flex gap-11 2xl:gap-20 font-semibold text-base">
            {" "}
            {/* gap-[45px] 2xl:gap-[70px] */}
            {navItemsList.map(({ name, path }) => {
              const isActive = location.pathname === path;

              return (
                <NavLink
                  key={name}
                  to={path}
                  className={`relative cursor-pointer px-4 py-1 rounded-md ${
                    isActive ? "bg-[#0B714C] text-white" : "font-semibold"
                  }`}
                  style={!isActive ? { color: nonActiveTextColor } : {}}
                  onMouseEnter={() => setHoveredItem(name)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  {/* Bullet point for non-active items */}
                  {!isActive && (
                    <motion.div
                      className="absolute left-2 top-1/2 -translate-y-1/2"
                      animate={{
                        opacity: hoveredItem === name ? 1 : 0,
                        x: hoveredItem === name ? 0 : -10,
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
                  {/* Nav Item Name with movement effect for non-active items */}
                  <motion.div
                    animate={{
                      x: !isActive && hoveredItem === name ? 10 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {name}
                  </motion.div>
                </NavLink>
              );
            })}
          </ul>
        )}
        {/* Mobile Hamburger Menu - Fixed to show the correct color based on page */}
        {isMobile && (
          <div className="cursor-pointer z-50" onClick={toggleMobileMenu}>
            {/* If menu is open, always show white bg with green icon */}
            {mobileMenuOpen ? (
              <div className="flex justify-center items-center w-10 h-10">
                {/* rounded-full bg-white */}
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#0B714C"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg> */}
                <img src={rightArrow} alt="" />
              </div>
            ) : (
              /* When menu is closed, show green bg with white icon on homepage, white bg with green icon elsewhere */
              <div
                className={`flex justify-center items-center w-10 h-10 rounded-full`}
                /* ${
                  isHomePage ? "bg-[#0B714C]" : "bg-white"
                } */
              >
                {/* <div className="flex flex-col items-center justify-center gap-1.5">
                  <span
                    className={`block w-5 h-0.5 ${
                      isHomePage ? "bg-white" : "bg-[#0B714C]"
                    }`}
                  ></span>
                  <span
                    className={`block w-5 h-0.5 ${
                      isHomePage ? "bg-white" : "bg-[#0B714C]"
                    }`}
                  ></span>
                  <span
                    className={`block w-5 h-0.5 ${
                      isHomePage ? "bg-white" : "bg-[#0B714C]"
                    }`}
                  ></span>
                </div> */}

                {isHomePage || isNewsPage ? (
                  <img src={hamburgerMenu} alt="" />
                ) : (
                  <img src={whiteHamburgerMenu} alt="" />
                )}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Mobile Menu Overlay with AnimatePresence for proper exit animations */}
      <AnimatePresence>
        {isMobile && mobileMenuOpen && (
          <motion.div
            className="fixed top-0 right-0 w-full h-screen bg-[#0B714C] z-40 flex flex-col"
            style={{ minHeight: "100vh" }}
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Exit arrow */}
            {/* <div className="absolute top-5 right-5">
              <div
                className="w-8 h-8 flex items-center justify-center cursor-pointer"
                onClick={toggleMobileMenu}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="19" y1="12" x2="5" y2="12"></line>
                  <polyline points="12 19 5 12 12 5"></polyline>
                </svg>
              </div>
            </div> */}

            {/* Mobile menu content */}
            <div className="flex flex-col items-start justify-center h-full px-10">
              <ul className="flex flex-col gap-8 w-full">
                {navItemsList.map(({ name, path }) => {
                  const isActive = location.pathname === path;

                  return (
                    <motion.li
                      key={name}
                      variants={itemVariants}
                      className="w-full"
                    >
                      <NavLink
                        to={path}
                        className="relative flex items-center text-white text-xl font-semibold"
                        // onClick={() => setMobileMenuOpen(false)}
                        onClick={() => {
                          setHoveredItem(null);
                          setMobileMenuOpen(false);
                        }}
                        onTouchStart={() => setHoveredItem(name)}
                        onTouchEnd={() => setHoveredItem(null)}
                        onMouseEnter={() => setHoveredItem(name)}
                        onMouseLeave={() => setHoveredItem(null)}
                      >
                        {/* Always show white ellipse for the active item */}
                        {isActive && (
                          <div className="w-2 h-2 bg-white rounded-full mr-4"></div>
                          //   <img
                          //   src={ellipse}
                          //   alt="Bullet Point"
                          //   className="w-1.5 h-1.5 bg-white rounded-full"
                          // />
                        )}

                        {/* Nav Item Name with automatic movement for active items */}
                        <motion.div
                          animate={{
                            x: isActive ? 10 : 0,
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          {name}
                        </motion.div>
                      </NavLink>
                    </motion.li>
                  );
                })}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// PropTypes validation
Navbar.propTypes = {
  nonActiveTextColor: PropTypes.string,
};

export default Navbar;
