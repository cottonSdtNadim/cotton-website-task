// import { motion } from "framer-motion";
// import aldi from "../assets/images/partners-logo/aldi.png";
// import auchan from "../assets/images/partners-logo/auchan.png";
// import bestSeller from "../assets/images/partners-logo/bestseller.png";
// import caLayer from "../assets/images/partners-logo/CA_layer.png";
// import carreFour from "../assets/images/partners-logo/carrefour.png";
// import eciLogo from "../assets/images/partners-logo/eci-logo.png";
// import kiabiLondon from "../assets/images/partners-logo/kiabi-london.png";
// import layoutSetLogo from "../assets/images/partners-logo/layout-set-logo.jpg";
// import logoDaRedoute from "../assets/images/partners-logo/logo-da-redoute.png";
// import newYorker from "../assets/images/partners-logo/newyorker.png";
// import next from "../assets/images/partners-logo/next.jpg";
// import nkd from "../assets/images/partners-logo/nkd.png";
// import teamAthletics from "../assets/images/partners-logo/team-athletics.png";
// import topPNG from "../assets/images/partners-logo/top-png.png";
// import trueWorths from "../assets/images/partners-logo/true-worth.jpg";
// import verbaudets from "../assets/images/partners-logo/verbaudet.png";
// import vfAsia from "../assets/images/partners-logo/vf-asia.png";
// import SectionTitle from "./Sectiontitle";

// const partners = [
//   aldi,
//   auchan,
//   bestSeller,
//   caLayer,
//   carreFour,
//   eciLogo,
//   kiabiLondon,
//   layoutSetLogo,
//   logoDaRedoute,
//   newYorker,
//   next,
//   nkd,
//   teamAthletics,
//   topPNG,
//   trueWorths,
//   verbaudets,
//   vfAsia,
// ];

// const Partners = () => {
//   return (
//     <div className="mt-32">
//       <SectionTitle title={"Our Partners"}></SectionTitle>

//       <div className="relative w-full overflow-hidden">
//         <motion.div
//           className="flex gap-10 mb-8"
//           animate={{ x: [0, -2000] }}
//         // animate={{ x: [-2000, 0, -2000] }}
//           transition={{
//             x: {
//               repeat: Infinity,
//               repeatType: "loop",
//               duration: 10,
//             //   ease: "easeInOut",
//             ease: "linear",
//             },
//           }}
//         >
//           {/* Display two sets of logos to ensure continuous flow */}
//           {[...partners, ...partners].map((partner, index) => (
//             <div key={index} className="w-40 h-16 flex-shrink-0 mx-16">
//               <img
//                 src={partner}
//                 alt={partner}
//                 className="w-full h-full object-contain"
//               />
//             </div>
//           ))}
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default Partners;

import { motion } from "framer-motion";
import aldi from "../assets/images/partners-logo/aldi.png";
import auchan from "../assets/images/partners-logo/auchan.png";
import bestSeller from "../assets/images/partners-logo/bestseller.png";
import caLayer from "../assets/images/partners-logo/CA_layer.png";
import carreFour from "../assets/images/partners-logo/carrefour.png";
import eciLogo from "../assets/images/partners-logo/eci-logo.png";
import kiabiLondon from "../assets/images/partners-logo/kiabi-london.png";
import layoutSetLogo from "../assets/images/partners-logo/layout-set-logo.jpg";
import logoDaRedoute from "../assets/images/partners-logo/logo-da-redoute.png";
import newYorker from "../assets/images/partners-logo/newyorker.png";
import next from "../assets/images/partners-logo/next.jpg";
import nkd from "../assets/images/partners-logo/nkd.png";
import teamAthletics from "../assets/images/partners-logo/team-athletics.png";
import topPNG from "../assets/images/partners-logo/top-png.png";
import trueWorths from "../assets/images/partners-logo/true-worth.jpg";
import verbaudets from "../assets/images/partners-logo/verbaudet.png";
import vfAsia from "../assets/images/partners-logo/vf-asia.png";
import { content } from "../content/content";
import SectionTitle from "./SectionTitle.jsx";

const partners = [
  aldi,
  auchan,
  bestSeller,
  caLayer,
  carreFour,
  eciLogo,
  kiabiLondon,
  layoutSetLogo,
  logoDaRedoute,
  newYorker,
  next,
  nkd,
  teamAthletics,
  topPNG,
  trueWorths,
  verbaudets,
  vfAsia,
];

const Partners = () => {
  // Calculate the width needed to ensure one complete set is always visible
  // This approach uses CSS to create a continuous flow effect
  const { header } = content.en.ourPartners;
  return (
    <div className="mt-32">
      <SectionTitle
        // title={"Our Partners"}
        title={header}
        iconTop="-30px"
        iconLeft="495px"
        iconWidth="w-8"
        iconHeight="h-12"
      ></SectionTitle>

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
              {partners.map((partner, index) => (
                <div
                  key={`original-${index}`}
                  className="w-40 h-16 flex-shrink-0 mx-16 inline-block"
                >
                  <img
                    src={partner}
                    alt={`Partner ${index}`}
                    className="w-full h-full object-contain"
                  />
                </div>
              ))}

              {/* Second set of logos (identical duplicate) */}
              {partners.map((partner, index) => (
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

export default Partners;
