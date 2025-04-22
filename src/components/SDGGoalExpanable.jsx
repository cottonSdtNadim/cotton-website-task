

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const SDGGoalsExpandable = () => {
  const [expandedGoal, setExpandedGoal] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  // Check if the screen is mobile-sized
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkIfMobile();

    // Add event listener for window resize
    window.addEventListener("resize", checkIfMobile);

    // Cleanup
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  const goals = [
    {
      number: 3,
      color: "#4CAF50", // Bright green
      icon: "❤️",
      title: "Good Health And Well-Being",
      items: [
        "On-Site Daycare Facility",
        "Women's (Menstrual) Health",
        "On-Site Medical Support",
        "Vaccine Promotion",
      ],
    },
    {
      number: 5,
      color: "#FF5722", // Red-orange
      icon: "⚥",
      title: "Gender Equality",
      items: [
        "Equal Pay Initiatives",
        "Women Empowerment Programs",
        "Fighting Gender Discrimination",
        "Leadership Opportunities",
      ],
    },
    {
      number: 6,
      color: "#29B6F6", // Sky blue
      icon: "💧",
      title: "Clean Water And Sanitation",
      items: [
        "Sanitation and Worker Safety Measures During COVID-19",
        "Rainwater Harvesting",
        "Clean Drinking Water",
        "24/7 Effluent Treatment Plant (ETP)",
      ],
    },
    {
      number: 8,
      color: "#8E24AA", // Purple
      icon: "📈",
      title: "Decent Work And Economic Growth",
      items: [
        "Fair Wages",
        "Safe Working Conditions",
        "Economic Opportunity",
        "Skills Development",
      ],
    },
    {
      number: 9,
      color: "#FF7043", // Orange
      icon: "📚",
      title: "Industry, Innovation And Infrastructure",
      items: [
        "Sustainable Factories",
        "Technological Innovation",
        "Inclusive Infrastructure",
        "Research & Development",
      ],
    },
    {
      number: 12,
      color: "#C0A060", // Gold/brown
      icon: "♾️",
      title: "Responsible Consumption",
      items: [
        "Waste Reduction",
        "Sustainable Sourcing",
        "Circular Economy",
        "Ethical Production",
      ],
    },
    {
      number: 13,
      color: "#558B2F", // Dark green
      icon: "🍃",
      title: "Climate Action",
      items: [
        "Carbon Footprint Reduction",
        "Renewable Energy",
        "Climate Resilience",
        "Environmental Education",
      ],
    },
  ];

  const toggleGoal = (index) => {
    setExpandedGoal(expandedGoal === index ? null : index);
  };

  // Desktop version
  const renderDesktopLayout = () => (
    <div className="flex w-full h-[700px] overflow-hidden px-28 cursor-pointer">
      {goals.map((goal, index) => {
        const isExpanded = expandedGoal === index;
        const isDefault = expandedGoal === null;

        return (
          <motion.div
            key={goal.number}
            className="h-full"
            style={{ flex: isExpanded ? "5" : "1" }}
            onClick={() => toggleGoal(index)}
          >
            <AnimatePresence>
              {isExpanded ? (
                // Expanded state with content
                <motion.div
                  className="flex h-full"
                  initial={{ width: 0 }}
                  animate={{ width: "auto" }}
                  exit={{ width: 0 }}
                  transition={{
                    duration: 0.5,
                    ease: "easeInOut",
                  }}
                >
                  {/* Left colored bar with icon and number */}
                  <div
                    className="h-full flex flex-col items-center justify-start pt-20"
                    style={{
                      backgroundColor: goal.color,
                      width: "150px",
                    }}
                  >
                    <div className="text-white w-20 h-24 flex items-center justify-center mb-4">
                      <span className="text-8xl">{goal.icon}</span>
                    </div>
                    <div className="text-white text-9xl font-bold">
                      {goal.number}
                    </div>
                  </div>

                  {/* Right content area */}
                  <motion.div
                    className="h-full"
                    style={{
                      backgroundColor: "#f7fff7",
                      width: "500px",
                    }}
                    initial={{
                      opacity: 0,
                      scale: 1,
                      x: 0,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      x: 0,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 1,
                      x: 0,
                    }}
                    transition={{
                      type: "tween",
                      duration: 0.8,
                      ease: "easeInOut",
                    }}
                  >
                    <div className="p-8 h-full">
                      <h2
                        className="text-4xl font-bold mb-8"
                        style={{ color: goal.color }}
                      >
                        {goal.title}
                      </h2>
                      <ul className="space-y-5">
                        {goal.items.map((item, i) => (
                          <li key={i} className="flex items-start">
                            <div
                              className="mr-3 text-2xl mt-px"
                              style={{ color: goal.color }}
                            >
                              •
                            </div>
                            <div className="text-lg text-gray-800">{item}</div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </motion.div>
              ) : (
                // Collapsed state - just the colored bar with number and icon
                <motion.div
                  className="h-full flex flex-col items-center justify-start pt-20 px-2"
                  style={{ backgroundColor: goal.color }}
                  initial={{ width: "auto" }}
                  animate={{ width: "auto" }}
                  exit={{ width: 0 }}
                  transition={{
                    duration: 0.5,
                    ease: "easeInOut",
                  }}
                >
                  <div
                    className={`text-white ${
                      isDefault ? "w-20 h-24" : "w-12 h-11"
                    } flex items-center justify-center mb-${isDefault ? 4 : 9}`}
                  >
                    <span className={`${isDefault ? "text-8xl" : "text-5xl"}`}>
                      {goal.icon}
                    </span>
                  </div>
                  <div
                    className={`text-white font-bold ${
                      isDefault ? "text-9xl" : "text-6xl"
                    }`}
                  >
                    {goal.number}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );

  // Mobile version
  const renderMobileLayout = () => (
    <div className="flex flex-col w-full min-h-full cursor-pointer">
      {goals.map((goal, index) => {
        const isExpanded = expandedGoal === index;

        return (
          <div key={goal.number} className="w-full">
            {/* Collapsed bar (always visible) */}
            <motion.div
              className="w-full flex items-center justify-between px-6 py-4"
              style={{ backgroundColor: goal.color }}
              onClick={() => toggleGoal(index)}
            >
              <div className="flex items-center">
                <span className="text-white text-3xl mr-4">{goal.icon}</span>
                <span className="text-white text-4xl font-bold">
                  {goal.number}
                </span>
              </div>
              <div className="text-white text-sm">
                TAP TO {isExpanded ? "CLOSE" : "LEARN MORE"}
              </div>
            </motion.div>

            {/* Expandable content */}
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  className="w-full bg-[#f7fff7]"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{
                    duration: 0.5,
                    ease: "easeInOut",
                  }}
                >
                  <div className="p-6">
                    <h2
                      className="text-2xl font-bold mb-6"
                      style={{ color: goal.color }}
                    >
                      {goal.title}
                    </h2>
                    <ul className="space-y-4">
                      {goal.items.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <div
                            className="mr-3 text-xl mt-px"
                            style={{ color: goal.color }}
                          >
                            •
                          </div>
                          <div className="text-base text-gray-800">{item}</div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );

  return isMobile ? renderMobileLayout() : renderDesktopLayout();
};

export default SDGGoalsExpandable;

// import { motion } from "framer-motion";
// import { useState } from "react";

// const SDGGoalsExpandable = () => {
//   const [hoveredGoal, setHoveredGoal] = useState(null);

//   const goals = [
//     {
//       number: 3,
//       color: "#4CAF50", // Bright green
//       icon: "❤️",
//       title: "Good Health And Well-Being",
//       items: [
//         "On-Site Daycare Facility",
//         "Women's (Menstrual) Health",
//         "On-Site Medical Support",
//         "Vaccine Promotion",
//       ],
//     },
//     {
//       number: 5,
//       color: "#FF5722", // Red-orange
//       icon: "⚥",
//       title: "Gender Equality",
//       items: [
//         "Equal Pay Initiatives",
//         "Women Empowerment Programs",
//         "Fighting Gender Discrimination",
//         "Leadership Opportunities",
//       ],
//     },
//     {
//       number: 6,
//       color: "#29B6F6", // Sky blue
//       icon: "💧",
//       title: "Clean Water And Sanitation",
//       items: [
//         "Sanitation and Worker Safety Measures During COVID-19",
//         "Rainwater Harvesting",
//         "Clean Drinking Water",
//         "24/7 Effluent Treatment Plant (ETP)",
//       ],
//     },
//     {
//       number: 8,
//       color: "#8E24AA", // Purple
//       icon: "📈",
//       title: "Decent Work And Economic Growth",
//       items: [
//         "Fair Wages",
//         "Safe Working Conditions",
//         "Economic Opportunity",
//         "Skills Development",
//       ],
//     },
//     {
//       number: 9,
//       color: "#FF7043", // Orange
//       icon: "📚",
//       title: "Industry, Innovation And Infrastructure",
//       items: [
//         "Sustainable Factories",
//         "Technological Innovation",
//         "Inclusive Infrastructure",
//         "Research & Development",
//       ],
//     },
//     {
//       number: 12,
//       color: "#C0A060", // Gold/brown
//       icon: "♾️",
//       title: "Responsible Consumption",
//       items: [
//         "Waste Reduction",
//         "Sustainable Sourcing",
//         "Circular Economy",
//         "Ethical Production",
//       ],
//     },
//     {
//       number: 13,
//       color: "#558B2F", // Dark green
//       icon: "🍃",
//       title: "Climate Action",
//       items: [
//         "Carbon Footprint Reduction",
//         "Renewable Energy",
//         "Climate Resilience",
//         "Environmental Education",
//       ],
//     },
//   ];

//   return (
//     <div className="flex w-full h-screen overflow-hidden px-28">
//       {goals.map((goal, index) => {
//         const isHovered = hoveredGoal === index;

//         return (
//           <motion.div
//             key={goal.number}
//             className="h-full" /* transition-all duration-300 ease-in-out */
//             style={{
//               flex: isHovered ? "5" : "1",
//             }}
//             onMouseEnter={() => setHoveredGoal(index)}
//             onMouseLeave={() => setHoveredGoal(null)}
//           >
//             {isHovered ? (
//               // Expanded state with content
//               <motion.div
//                 className="flex h-full"
//                 initial={{ width: 0 }} // Start from collapsed width
//                 animate={{ width: "auto" }} // Expand to full width
//                 exit={{ width: 0 }} // Collapse back to 0
//                 transition={{ duration: 0.5, ease: "easeInOut" }} // Animation duration
//               >
//                 {/* Left colored bar with icon and number */}
//                 <div
//                   className="h-full flex flex-col items-center justify-start pt-20"
//                   style={{
//                     backgroundColor: goal.color,
//                     width: "150px",
//                   }}
//                 >
//                   <div className="text-white w-20 h-24 flex items-center justify-center mb-4">
//                     <span className="text-8xl">{goal.icon}</span>
//                   </div>
//                   <div className="text-white text-9xl font-bold">
//                     {goal.number}
//                   </div>
//                 </div>

//                 {/* Right content area */}
//                 <motion.div
//                   className="h-full"
//                   style={{
//                     backgroundColor: "#f7fff7",
//                     // width: "350px",
//                     width: "500px",
//                   }}
//                   initial={{opacity: 0}} // Start from invisible
//                   animate={{opacity: 1}} // Fade in
//                   exit={{opacity: 0}}  // Fade out
//                   transition={{delay: 0.2, duration: 0.3}} // Animation delay and duration
//                 >
//                   <div className="p-8 h-full">
//                     <h2
//                       className="text-4xl font-bold mb-8"
//                       style={{ color: goal.color }}
//                     >
//                       {goal.title}
//                     </h2>
//                     <ul className="space-y-5">
//                       {goal.items.map((item, i) => (
//                         <li key={i} className="flex items-start">
//                           <div
//                             className="mr-3 text-2xl mt-px"
//                             style={{ color: goal.color }}
//                           >
//                             •
//                           </div>
//                           <div className="text-lg text-gray-800">{item}</div>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 </motion.div>
//               </motion.div>
//             ) : (
//               // Collapsed state - just the colored bar with number and icon
//               <motion.div
//                 className={`h-full flex flex-col items-center justify-start pt-20 px-2 ${
//                   hoveredGoal === null ? "default-phase" : ""
//                 }`}
//                 style={{ backgroundColor: goal.color }}
//                 initial={{ width: "auto" }} // Start from expanded width
//                 animate={{ width: "auto" }} // Stay at expanded width
//                 exit={{ width: 0 }} // Collapse to 0
//                 transition={{ duration: 0.5, ease: "easeInOut" }} // Animation duration
//               >
//                 <div
//                   className={`text-white ${
//                     hoveredGoal === null ? "w-20 h-24" : "w-12 h-11"
//                   } flex items-center justify-center mb-${
//                     hoveredGoal === null ? 4 : 9
//                   }`}
//                 >
//                   <span
//                     className={`${
//                       hoveredGoal === null ? "text-8xl" : "text-5xl"
//                     }`}
//                   >
//                     {goal.icon}
//                   </span>
//                 </div>
//                 <div
//                   className={`text-white font-bold ${
//                     hoveredGoal === null ? "text-9xl" : "text-6xl"
//                   }`}
//                 >
//                   {goal.number}
//                 </div>
//               </motion.div>
//             )}
//           </motion.div>
//         );
//       })}
//     </div>
//   );
// };

// export default SDGGoalsExpandable;

// import { useState } from "react";

// const SDGGoalsExpandable = () => {
//   const [hoveredGoal, setHoveredGoal] = useState(null);

//   const goals = [
//     {
//       number: 3,
//       color: "#4CAF50", // Bright green
//       icon: "❤️",
//       title: "Good Health And Well-Being",
//       items: [
//         "On-Site Daycare Facility",
//         "Women's (Menstrual) Health",
//         "On-Site Medical Support",
//         "Vaccine Promotion",
//       ],
//     },
//     {
//       number: 5,
//       color: "#FF5722", // Red-orange
//       icon: "⚥",
//       title: "Gender Equality",
//       items: [
//         "Equal Pay Initiatives",
//         "Women Empowerment Programs",
//         "Fighting Gender Discrimination",
//         "Leadership Opportunities",
//       ],
//     },
//     {
//       number: 6,
//       color: "#29B6F6", // Sky blue
//       icon: "💧",
//       title: "Clean Water And Sanitation",
//       items: [
//         "Sanitation and Worker Safety Measures During COVID-19",
//         "Rainwater Harvesting",
//         "Clean Drinking Water",
//         "24/7 Effluent Treatment Plant (ETP)",
//       ],
//     },
//     {
//       number: 8,
//       color: "#8E24AA", // Purple
//       icon: "📈",
//       title: "Decent Work And Economic Growth",
//       items: [
//         "Fair Wages",
//         "Safe Working Conditions",
//         "Economic Opportunity",
//         "Skills Development",
//       ],
//     },
//     {
//       number: 9,
//       color: "#FF7043", // Orange
//       icon: "📚",
//       title: "Industry, Innovation And Infrastructure",
//       items: [
//         "Sustainable Factories",
//         "Technological Innovation",
//         "Inclusive Infrastructure",
//         "Research & Development",
//       ],
//     },
//     {
//       number: 12,
//       color: "#C0A060", // Gold/brown
//       icon: "♾️",
//       title: "Responsible Consumption",
//       items: [
//         "Waste Reduction",
//         "Sustainable Sourcing",
//         "Circular Economy",
//         "Ethical Production",
//       ],
//     },
//     {
//       number: 13,
//       color: "#558B2F", // Dark green
//       icon: "🍃",
//       title: "Climate Action",
//       items: [
//         "Carbon Footprint Reduction",
//         "Renewable Energy",
//         "Climate Resilience",
//         "Environmental Education",
//       ],
//     },
//   ];

//   return (
//     <div className="flex w-full h-screen overflow-hidden px-28">
//       {goals.map((goal, index) => {
//         const isHovered = hoveredGoal === index;

//         return (
//           <div
//             key={goal.number}
//             className="h-full" /* transition-all duration-300 ease-in-out */
//             style={{
//               flex: isHovered ? "5" : "1",
//             }}
//             onMouseEnter={() => setHoveredGoal(index)}
//             onMouseLeave={() => setHoveredGoal(null)}
//           >
//             {isHovered ? (
//               // Expanded state with content
//               <div
//                 className="flex h-full">
//                 {/* Left colored bar with icon and number */}
//                 <div
//                   className="h-full flex flex-col items-center justify-start pt-20"
//                   style={{
//                     backgroundColor: goal.color,
//                     width: "150px",
//                   }}
//                 >
//                   <div className="text-white w-20 h-24 flex items-center justify-center mb-4">
//                     <span className="text-8xl">{goal.icon}</span>
//                   </div>
//                   <div className="text-white text-9xl font-bold">
//                     {goal.number}
//                   </div>
//                 </div>

//                 {/* Right content area */}
//                 <div
//                   className="h-full"
//                   style={{
//                     backgroundColor: "#f7fff7",
//                     // width: "350px",
//                     width: "500px",
//                   }}>
//                   <div className="p-8 h-full">
//                     <h2
//                       className="text-4xl font-bold mb-8"
//                       style={{ color: goal.color }}
//                     >
//                       {goal.title}
//                     </h2>
//                     <ul className="space-y-5">
//                       {goal.items.map((item, i) => (
//                         <li key={i} className="flex items-start">
//                           <div
//                             className="mr-3 text-2xl mt-px"
//                             style={{ color: goal.color }}
//                           >
//                             •
//                           </div>
//                           <div className="text-lg text-gray-800">{item}</div>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//             ) : (
//               // Collapsed state - just the colored bar with number and icon
//               <div
//                 className={`h-full flex flex-col items-center justify-start pt-20 px-2 ${
//                   hoveredGoal === null ? "default-phase" : ""
//                 }`}
//                 style={{ backgroundColor: goal.color }}
//               >
//                 <div
//                   className={`text-white ${
//                     hoveredGoal === null ? "w-20 h-24" : "w-12 h-11"
//                   } flex items-center justify-center mb-${
//                     hoveredGoal === null ? 4 : 9
//                   }`}
//                 >
//                   <span
//                     className={`${
//                       hoveredGoal === null ? "text-8xl" : "text-5xl"
//                     }`}
//                   >
//                     {goal.icon}
//                   </span>
//                 </div>
//                 <div
//                   className={`text-white font-bold ${
//                     hoveredGoal === null ? "text-9xl" : "text-6xl"
//                   }`}
//                 >
//                   {goal.number}
//                 </div>
//               </div>
//             )}
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default SDGGoalsExpandable;

// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const SDGGoalsExpandable = () => {
//   const [hoveredGoal, setHoveredGoal] = useState(null);

//   const goals = [
//     {
//       number: 3,
//       color: "#4CAF50", // Bright green
//       icon: "❤️",
//       title: "Good Health And Well-Being",
//       items: [
//         "On-Site Daycare Facility",
//         "Women's (Menstrual) Health",
//         "On-Site Medical Support",
//         "Vaccine Promotion",
//       ],
//     },
//     {
//       number: 5,
//       color: "#FF5722", // Red-orange
//       icon: "⚥",
//       title: "Gender Equality",
//       items: [
//         "Equal Pay Initiatives",
//         "Women Empowerment Programs",
//         "Fighting Gender Discrimination",
//         "Leadership Opportunities",
//       ],
//     },
//     {
//       number: 6,
//       color: "#29B6F6", // Sky blue
//       icon: "💧",
//       title: "Clean Water And Sanitation",
//       items: [
//         "Sanitation and Worker Safety Measures During COVID-19",
//         "Rainwater Harvesting",
//         "Clean Drinking Water",
//         "24/7 Effluent Treatment Plant (ETP)",
//       ],
//     },
//     {
//       number: 8,
//       color: "#8E24AA", // Purple
//       icon: "📈",
//       title: "Decent Work And Economic Growth",
//       items: [
//         "Fair Wages",
//         "Safe Working Conditions",
//         "Economic Opportunity",
//         "Skills Development",
//       ],
//     },
//     {
//       number: 9,
//       color: "#FF7043", // Orange
//       icon: "📚",
//       title: "Industry, Innovation And Infrastructure",
//       items: [
//         "Sustainable Factories",
//         "Technological Innovation",
//         "Inclusive Infrastructure",
//         "Research & Development",
//       ],
//     },
//     {
//       number: 12,
//       color: "#C0A060", // Gold/brown
//       icon: "♾️",
//       title: "Responsible Consumption",
//       items: [
//         "Waste Reduction",
//         "Sustainable Sourcing",
//         "Circular Economy",
//         "Ethical Production",
//       ],
//     },
//     {
//       number: 13,
//       color: "#558B2F", // Dark green
//       icon: "🍃",
//       title: "Climate Action",
//       items: [
//         "Carbon Footprint Reduction",
//         "Renewable Energy",
//         "Climate Resilience",
//         "Environmental Education",
//       ],
//     },
//   ];

//   return (
//     <div className="flex w-full h-screen overflow-hidden px-28">
//       {goals.map((goal, index) => {
//         const isHovered = hoveredGoal === index;

//         return (
//           <motion.div
//             key={goal.number}
//             className="h-full relative"
//             style={{
//               flex: isHovered ? "5" : "1",
//             }}
//             onMouseEnter={() => setHoveredGoal(index)}
//             onMouseLeave={() => setHoveredGoal(null)}
//             transition={{ duration: 0.3 }}
//           >
//             <AnimatePresence>
//               {isHovered ? (
//                 // Expanded state with content
//                 <motion.div
//                   className="flex h-full"
//                   initial={{ opacity: 0, x: -100 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   exit={{ opacity: 0, x: -100 }}
//                   transition={{ duration: 0.3 }}
//                 >
//                   {/* Left colored bar with icon and number */}
//                   <motion.div
//                     className="h-full flex flex-col items-center justify-start pt-20"
//                     style={{
//                       backgroundColor: goal.color,
//                       width: "150px",
//                     }}
//                   >
//                     <div className="text-white w-20 h-24 flex items-center justify-center mb-4">
//                       <span className="text-8xl">{goal.icon}</span>
//                     </div>
//                     <div className="text-white text-9xl font-bold">
//                       {goal.number}
//                     </div>
//                   </motion.div>

//                   {/* Right content area */}
//                   <motion.div
//                     className="h-full"
//                     style={{
//                       backgroundColor: "#f7fff7",
//                       width: "500px",
//                     }}
//                   >
//                     <div className="p-8 h-full">
//                       <h2
//                         className="text-4xl font-bold mb-8"
//                         style={{ color: goal.color }}
//                       >
//                         {goal.title}
//                       </h2>
//                       <ul className="space-y-5">
//                         {goal.items.map((item, i) => (
//                           <li key={i} className="flex items-start">
//                             <div
//                               className="mr-3 text-2xl mt-px"
//                               style={{ color: goal.color }}
//                             >
//                               •
//                             </div>
//                             <div className="text-lg text-gray-800">{item}</div>
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
//                   </motion.div>
//                 </motion.div>
//               ) : (
//                 // Collapsed state - just the colored bar with number and icon
//                 <motion.div
//                   className={`h-full flex flex-col items-center justify-start pt-20 px-2`}
//                   style={{ backgroundColor: goal.color }}
//                   initial={{ opacity: 1, x: 0 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   exit={{ opacity: 0, x: -100 }}
//                   transition={{ duration: 0.3 }}
//                 >
//                   <div
//                     className={`text-white ${
//                       hoveredGoal === null ? "w-20 h-24" : "w-12 h-11"
//                     } flex items-center justify-center mb-${
//                       hoveredGoal === null ? 4 : 9
//                     }`}
//                   >
//                     <span
//                       className={`${
//                         hoveredGoal === null ? "text-8xl" : "text-5xl"
//                       }`}
//                     >
//                       {goal.icon}
//                     </span>
//                   </div>
//                   <div
//                     className={`text-white font-bold ${
//                       hoveredGoal === null ? "text-9xl" : "text-6xl"
//                     }`}
//                   >
//                     {goal.number}
//                   </div>
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </motion.div>
//         );
//       })}
//     </div>
//   );
// };

// export default SDGGoalsExpandable;

// import  { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const SDGGoalsExpandable = () => {
//   const [hoveredGoal, setHoveredGoal] = useState(null);

//   const goals = [
//     {
//       number: 3,
//       color: "#4CAF50", // Bright green
//       icon: "❤️",
//       title: "Good Health And Well-Being",
//       items: [
//         "On-Site Daycare Facility",
//         "Women's (Menstrual) Health",
//         "On-Site Medical Support",
//         "Vaccine Promotion",
//       ],
//     },
//     {
//       number: 5,
//       color: "#FF5722", // Red-orange
//       icon: "⚥",
//       title: "Gender Equality",
//       items: [
//         "Equal Pay Initiatives",
//         "Women Empowerment Programs",
//         "Fighting Gender Discrimination",
//         "Leadership Opportunities",
//       ],
//     },
//     {
//       number: 6,
//       color: "#29B6F6", // Sky blue
//       icon: "💧",
//       title: "Clean Water And Sanitation",
//       items: [
//         "Sanitation and Worker Safety Measures During COVID-19",
//         "Rainwater Harvesting",
//         "Clean Drinking Water",
//         "24/7 Effluent Treatment Plant (ETP)",
//       ],
//     },
//     {
//       number: 8,
//       color: "#8E24AA", // Purple
//       icon: "📈",
//       title: "Decent Work And Economic Growth",
//       items: [
//         "Fair Wages",
//         "Safe Working Conditions",
//         "Economic Opportunity",
//         "Skills Development",
//       ],
//     },
//     {
//       number: 9,
//       color: "#FF7043", // Orange
//       icon: "📚",
//       title: "Industry, Innovation And Infrastructure",
//       items: [
//         "Sustainable Factories",
//         "Technological Innovation",
//         "Inclusive Infrastructure",
//         "Research & Development",
//       ],
//     },
//     {
//       number: 12,
//       color: "#C0A060", // Gold/brown
//       icon: "♾️",
//       title: "Responsible Consumption",
//       items: [
//         "Waste Reduction",
//         "Sustainable Sourcing",
//         "Circular Economy",
//         "Ethical Production",
//       ],
//     },
//     {
//       number: 13,
//       color: "#558B2F", // Dark green
//       icon: "🍃",
//       title: "Climate Action",
//       items: [
//         "Carbon Footprint Reduction",
//         "Renewable Energy",
//         "Climate Resilience",
//         "Environmental Education",
//       ],
//     },
//   ];

//   return (
//     <div className="flex w-full h-screen overflow-hidden px-28">
//       {goals.map((goal, index) => {
//         const isHovered = hoveredGoal === index;
//         const otherHovered = hoveredGoal !== null && hoveredGoal !== index;

//         return (
//           <motion.div
//             key={goal.number}
//             className="h-full relative"
//             animate={{
//               flex: isHovered ? 5 : otherHovered ? 0.5 : 1,
//             }}
//             transition={{
//               type: "linear",
//               duration: 0.3
//             }}
//             onHoverStart={() => setHoveredGoal(index)}
//             onHoverEnd={() => setHoveredGoal(null)}
//           >
//             <AnimatePresence>
//               {isHovered ? (
//                 // Expanded state with content
//                 <motion.div
//                   key="expanded"
//                   initial={{opacity: 0, width: 0  }}
//                   animate={{ opacity: 1, width: "100%" }}
//                   exit={{ opacity: 0, width: 0}}
//                   transition={{
//                     type: "linear",
//                     duration: 0.3
//                   }}
//                   className="flex h-full absolute top-0 left-0 w-full"
//                 >
//                   {/* Left colored bar with icon and number */}
//                   <motion.div
//                     initial={{ width: 150 }}
//                     animate={{ width: 150 }}
//                     className="h-full flex flex-col items-center justify-start pt-20"
//                     style={{
//                       backgroundColor: goal.color,
//                     }}
//                   >
//                     <div className="text-white w-20 h-24 flex items-center justify-center mb-4">
//                       <span className="text-8xl">{goal.icon}</span>
//                     </div>
//                     <div className="text-white text-9xl font-bold">
//                       {goal.number}
//                     </div>
//                   </motion.div>

//                   {/* Right content area */}
//                   <motion.div
//                     initial={{ width: 0, opacity: 0 }}
//                     animate={{ width: 500, opacity: 1 }}
//                     transition={{
//                       type: "linear",
//                       duration: 0.3
//                     }}
//                     className="h-full"
//                     style={{
//                       backgroundColor: "#f7fff7",
//                     }}
//                   >
//                     <div className="p-8 h-full">
//                       <h2
//                         className="text-4xl font-bold mb-8"
//                         style={{ color: goal.color }}
//                       >
//                         {goal.title}
//                       </h2>
//                       <ul className="space-y-5">
//                         {goal.items.map((item, i) => (
//                           <li key={i} className="flex items-start">
//                             <div
//                               className="mr-3 text-2xl mt-px"
//                               style={{ color: goal.color }}
//                             >
//                               •
//                             </div>
//                             <div className="text-lg text-gray-800">{item}</div>
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
//                   </motion.div>

//                 </motion.div>
//               ) : (
//                 // Collapsed state - just the colored bar with number and icon
//                 <motion.div
//                   key="collapsed"
//                   initial={{ width: "100%" }}
//                   animate={{
//                     // width: otherHovered ? "50%" : "100%",
//                     otherHovered: "50%",
//                   }}
//                   transition={{
//                     type: "linear",
//                     duration: 0.3
//                   }}
//                   className="h-full flex flex-col items-center justify-start pt-20 px-2"
//                   style={{ backgroundColor: goal.color }}
//                 >
//                   <div
//                     className={`text-white ${
//                       hoveredGoal === null ? "w-20 h-24" : "w-12 h-11"
//                     } flex items-center justify-center mb-${
//                       hoveredGoal === null ? 4 : 9
//                     }`}
//                   >
//                     <span
//                       className={`${
//                         hoveredGoal === null ? "text-8xl" : "text-5xl"
//                       }`}
//                     >
//                       {goal.icon}
//                     </span>
//                   </div>
//                   <div
//                     className={`text-white font-bold ${
//                       hoveredGoal === null ? "text-9xl" : "text-6xl"
//                     }`}
//                   >
//                     {goal.number}
//                   </div>
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </motion.div>
//         );
//       })}
//     </div>
//   );
// };

// export default SDGGoalsExpandable;
