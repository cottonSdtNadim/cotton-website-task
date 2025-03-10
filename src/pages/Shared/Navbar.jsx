import { motion } from "framer-motion";
import { useState } from "react";
import cottonGreenLogo from "../../assets/images/cotton-green-logo.png";
import ellipse from "../../assets/svgs/Ellipse.svg";

const Navbar = () => {
  const [selectedItem, setSelectedItem] = useState("Home");

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
        src={cottonGreenLogo || "/placeholder.svg"}
        alt="Cotton Green Logo"
        className="w-[99px] h-[86px]"
      />

      {/* NavItems Container */}
      <ul className="flex gap-[45px] font-semibold text-base">
        {navItemsList.map((item) => (
          <motion.li
            key={item}
            className={`relative cursor-pointer px-4 py-2 rounded-md ${
              selectedItem === item
                ? "bg-[#0B714C] text-white"
                : "text-black font-semibold"
            }`}
            onClick={() => setSelectedItem(item)}
            whileHover={{ x: selectedItem !== item ? 15 : 0 }} // Move right on hover for non-active
            initial={{ x: 0 }}
            animate={{ x: 0 }}
          >
            {/* Bullet point for non-active items */}
            {selectedItem !== item && (
              <motion.span
                className="absolute -left-1 mt-2"
                variants={{
                  hover: { opacity: 1, x: 0 },
                  idle: { opacity: 0, x: -10 },
                }}
                initial="idle"
                animate="idle"
                whileHover="hover"
                transition={{ duration: 0.3 }}
              >
                <img
                  src={ellipse}
                  alt="Bullet Point"
                  className="w-1.5 h-1.5 text-[#0B714C]"
                />
              </motion.span>
            )}

            {item}
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
