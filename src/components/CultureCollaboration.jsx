// import cottonFactory from "../assets/images/cotton-factory-2.jpg";
// import knittingIcon from "../assets/svgs/Knitting.svg";
// import dyeingIcon from "../assets/svgs/Dyeing.svg";
// import laboratoryIcon from "../assets/svgs/Laboratory.svg";
// import designIcon from "../assets/svgs/Design.svg";
// import patternsIcon from "../assets/svgs/Patterns.svg";
// import embroideryIcon from "../assets/svgs/Embroidary.svg";
// import printingIcon from "../assets/svgs/Printing.svg";
// import cuttingIcon from "../assets/svgs/Cutting.svg";
// import sewingIcon from "../assets/svgs/Sewing.svg";
// import accessoriesIcon from "../assets/svgs/Accessories.svg";
// import finishingIcon from "../assets/svgs/Finishing.svg";
// import { content } from "../content/content";

// const CultureCollaboration = () => {

//     const {heading} = content.en.workPage.cultureCollaboration;

//   const processSteps = [
//     { icon: knittingIcon, label: "Knitting" },
//     { icon: dyeingIcon, label: "Dyeing" },
//     { icon: laboratoryIcon, label: "Laboratory" },
//     { icon: designIcon, label: "Design" },
//     { icon: patternsIcon, label: "Patterns" },
//     { icon: embroideryIcon, label: "Embroidery" },
//     { icon: printingIcon, label: "Printing" },
//     { icon: cuttingIcon, label: "Cutting" },
//     { icon: sewingIcon, label: "Sewing" },
//     { icon: accessoriesIcon, label: "Accessories" },
//     { icon: finishingIcon, label: "Finishing" }
//   ];

//   return (
//     <div className="mt-40 relative">
//       {/* Background Image with Overlay */}
//       <div className="relative">
//         <img 
//           src={cottonFactory} 
//           alt="Cotton Factory" 
//           className="w-full h-[300px] xl:h-[415px] object-cover"
//         />
//         {/* Green Overlay */}
//         <div className="absolute inset-0 bg-[#0B714C] opacity-70"></div>
//       </div>
      
//       {/* Content Container */}
//       <div className="absolute inset-0 flex flex-col items-center justify-center px-6">
//         {/* Main Heading */}
//         <h2 className="text-white text-2xl xl:text-4xl font-extrabold text-center max-w-5xl leading-tight mb-20 mt-20 md:mt-0">
//          {heading}
//         </h2>
        
//         {/* Process Steps with Connected Lines */}
//         <div className="items-center justify-center relative max-w-5xl hidden md:block"> {/* flex */}
//           {/* Horizontal Line that spans across all icons */}
//           <div className="absolute h-[3px] bg-white w-full top-7 transform -translate-y-1/2"></div>
          
//           {/* Process Steps */}
//           <div className="flex justify-center items-center gap-4">
//             {processSteps.map((step) => (
//               <div key={step.label} className="flex flex-col items-center mx-4">
//                 <div className="bg-white rounded-full w-14 h-14 flex items-center justify-center z-10">
//                   <img src={step.icon} alt={step.label} className="w-8 h-8" />
//                 </div>
//                 <p className="text-white text-xs mt-2">{step.label}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CultureCollaboration;


// import { useState, useRef } from "react";
// import cottonFactory from "../assets/images/cotton-factory-2.jpg";
// import knittingIcon from "../assets/svgs/Knitting.svg";
// import dyeingIcon from "../assets/svgs/Dyeing.svg";
// import laboratoryIcon from "../assets/svgs/Laboratory.svg";
// import designIcon from "../assets/svgs/Design.svg";
// import patternsIcon from "../assets/svgs/Patterns.svg";
// import embroideryIcon from "../assets/svgs/Embroidary.svg";
// import printingIcon from "../assets/svgs/Printing.svg";
// import cuttingIcon from "../assets/svgs/Cutting.svg";
// import sewingIcon from "../assets/svgs/Sewing.svg";
// import accessoriesIcon from "../assets/svgs/Accessories.svg";
// import finishingIcon from "../assets/svgs/Finishing.svg";
// import { content } from "../content/content";

// const CultureCollaboration = () => {
//   const { heading } = content.en.workPage.cultureCollaboration;
//   const [currentStep, setCurrentStep] = useState(0);
//   const touchStartX = useRef(null);
  
//   const processSteps = [
//     { icon: knittingIcon, label: "Knitting", number: "01" },
//     { icon: dyeingIcon, label: "Dyeing", number: "02" },
//     { icon: laboratoryIcon, label: "Laboratory", number: "03" },
//     { icon: designIcon, label: "Design", number: "04" },
//     { icon: patternsIcon, label: "Patterns", number: "05" },
//     { icon: embroideryIcon, label: "Embroidery", number: "06" },
//     { icon: printingIcon, label: "Printing", number: "07" },
//     { icon: cuttingIcon, label: "Cutting", number: "08" },
//     { icon: sewingIcon, label: "Sewing", number: "09" },
//     { icon: accessoriesIcon, label: "Accessories", number: "10" },
//     { icon: finishingIcon, label: "Finishing", number: "11" }
//   ];

//   // Handle swipe gestures
//   const handleTouchStart = (e) => {
//     touchStartX.current = e.touches[0].clientX;
//   };

//   const handleTouchEnd = (e) => {
//     if (!touchStartX.current) return;
    
//     const touchEndX = e.changedTouches[0].clientX;
//     const diff = touchStartX.current - touchEndX;
    
//     // Swipe threshold
//     if (Math.abs(diff) > 50) {
//       if (diff > 0) {
//         // Swipe left - next
//         setCurrentStep((prev) => (prev === processSteps.length - 1 ? 0 : prev + 1));
//       } else {
//         // Swipe right - previous
//         setCurrentStep((prev) => (prev === 0 ? processSteps.length - 1 : prev - 1));
//       }
//     }
    
//     touchStartX.current = null;
//   };

//   return (
//     <div className="mt-40 relative">
//       {/* Background Image with Overlay */}
//       <div className="relative">
//         <img 
//           src={cottonFactory} 
//           alt="Cotton Factory" 
//           className="w-full h-[300px] xl:h-[415px] object-cover"
//         />
//         {/* Green Overlay */}
//         <div className="absolute inset-0 bg-[#0B714C] opacity-70"></div>
//       </div>
      
//       {/* Content Container */}
//       <div className="absolute inset-0 flex flex-col items-center justify-center px-6">
//         {/* Main Heading */}
//         <h2 className="text-white text-2xl xl:text-4xl font-extrabold text-center max-w-5xl leading-tight mb-20 mt-20 md:mt-0">
//           {heading}
//         </h2>
        
//         {/* Desktop View - Process Steps with Connected Lines */}
//         <div className="items-center justify-center relative max-w-5xl hidden md:flex">
//           {/* Horizontal Line that spans across all icons */}
//           <div className="absolute h-[3px] bg-white w-full top-7 transform -translate-y-1/2"></div>
          
//           {/* Process Steps */}
//           <div className="flex justify-center items-center gap-4">
//             {processSteps.map((step) => (
//               <div key={step.label} className="flex flex-col items-center mx-4">
//                 <div className="bg-white rounded-full w-14 h-14 flex items-center justify-center z-10">
//                   <img src={step.icon} alt={step.label} className="w-8 h-8" />
//                 </div>
//                 <p className="text-white text-xs mt-2">{step.label}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
      
//       {/* Mobile Process Steps as Swipeable Cards - Positioned below the overlay */}
//       <div className="md:hidden w-full mt-10 flex justify-center">
//         <div className="max-w-xs w-full px-4">
//           <div 
//             className="relative"
//             onTouchStart={handleTouchStart}
//             onTouchEnd={handleTouchEnd}
//           >
//             {/* Process Card with Multiple Shadows */}
//             <div className="bg-white rounded-lg overflow-hidden relative">
//               {/* Multiple Shadow Layers */}
//               <div className="absolute -bottom-1 left-2 right-2 h-full bg-[#0B714C]/20 rounded-lg -z-10"></div>
//               <div className="absolute -bottom-2 left-4 right-4 h-full bg-[#0B714C]/15 rounded-lg -z-20"></div>
//               <div className="absolute -bottom-3 left-6 right-6 h-full bg-[#0B714C]/10 rounded-lg -z-30"></div>
//               <div className="absolute -bottom-4 left-8 right-8 h-full bg-[#0B714C]/5 rounded-lg -z-40"></div>
              
//               {/* Factory Image */}
//               <div className="h-32 bg-gray-200">
//                 <img src={cottonFactory} alt="Manufacturing Process" className="w-full h-full object-cover" />
//               </div>
              
//               {/* Green Background Bar with Label and Number */}
//               <div className="bg-[#0B714C] p-4 flex justify-between items-center">
//                 <div>
//                   <h3 className="font-bold text-lg text-white">{processSteps[currentStep].label}</h3>
//                 </div>
//                 <div className="text-[#9CCCBA] text-4xl font-bold opacity-80">
//                   {processSteps[currentStep].number}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CultureCollaboration;



import { useState, useRef } from "react";
import cottonFactory from "../assets/images/cotton-factory-2.jpg";
import knittingIcon from "../assets/svgs/Knitting.svg";
import dyeingIcon from "../assets/svgs/Dyeing.svg";
import laboratoryIcon from "../assets/svgs/Laboratory.svg";
import designIcon from "../assets/svgs/Design.svg";
import patternsIcon from "../assets/svgs/Patterns.svg";
import embroideryIcon from "../assets/svgs/Embroidary.svg";
import printingIcon from "../assets/svgs/Printing.svg";
import cuttingIcon from "../assets/svgs/Cutting.svg";
import sewingIcon from "../assets/svgs/Sewing.svg";
import accessoriesIcon from "../assets/svgs/Accessories.svg";
import finishingIcon from "../assets/svgs/Finishing.svg";
import { content } from "../content/content";


import image1 from "../assets/images/factory/image-1.jpg";
import image2 from "../assets/images/factory/image-2.png";
import image3 from "../assets/images/factory/image-1.jpg";
import image4 from "../assets/images/factory/image-3.jpg";
import image5 from "../assets/images/factory/image-4.jpg";
import image6 from "../assets/images/factory/image-5.jpg";
import image7 from "../assets/images/factory/image-6.jpg";
import image8 from "../assets/images/factory/image-1.jpg";
import image9 from "../assets/images/factory/image-2.png";
import image10 from "../assets/images/factory/image-1.jpg";
import image11 from "../assets/images/factory/image-3.jpg";
import PropTypes from "prop-types";

const processSteps = [
  { icon: knittingIcon, label: "Knitting", number: "01", image:image1 },
  { icon: dyeingIcon, label: "Dyeing", number: "02", image: image2 },
  { icon: laboratoryIcon, label: "Laboratory", number: "03", image: image3 },
  { icon: designIcon, label: "Design", number: "04", image: image4 },
  { icon: patternsIcon, label: "Patterns", number: "05", image: image5 },
  { icon: embroideryIcon, label: "Embroidery", number: "06", image: image6 },
  { icon: printingIcon, label: "Printing", number: "07", image: image7 },
  { icon: cuttingIcon, label: "Cutting", number: "08", image: image8 },
  { icon: sewingIcon, label: "Sewing", number: "09", image: image9  },
  { icon: accessoriesIcon, label: "Accessories", number: "10", image: image10 },
  { icon: finishingIcon, label: "Finishing", number: "11", image: image11 }
];

// Mobile Process Steps Card Component
const MobileProcessCard = ({ processSteps }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const touchStartX = useRef(null);

  // Handle swipe gestures
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (!touchStartX.current) return;
    
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;
    
    // Swipe threshold
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        // Swipe left - next
        setCurrentStep((prev) => (prev === processSteps.length - 1 ? 0 : prev + 1));
      } else {
        // Swipe right - previous
        setCurrentStep((prev) => (prev === 0 ? processSteps.length - 1 : prev - 1));
      }
    }
    
    touchStartX.current = null;
  };

  return (
    <div className="w-full mt-8 flex justify-center md:hidden">
      <div className="max-w-xs w-full px-4">
        <div 
          className="relative"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Process Card with Multiple Shadows */}
          <div className="bg-white rounded-lg overflow-hidden relative">
            {/* Multiple Shadow Layers */}
            <div className="absolute -bottom-1 left-2 right-2 h-full bg-[#0B714C]/20 rounded-lg -z-10"></div>
            <div className="absolute -bottom-2 left-4 right-4 h-full bg-[#0B714C]/15 rounded-lg -z-20"></div>
            <div className="absolute -bottom-3 left-6 right-6 h-full bg-[#0B714C]/10 rounded-lg -z-30"></div>
            <div className="absolute -bottom-4 left-8 right-8 h-full bg-[#0B714C]/5 rounded-lg -z-40"></div>
            
            {/* Factory Image */}
            <div className="h-32 bg-gray-200">
              {/* <img src={cottonFactory} alt="Manufacturing Process" className="w-full h-full object-cover" /> */}
              {
                processSteps[currentStep].image && (
                  <img 
                    src={processSteps[currentStep].image} 
                    alt="factory images" 
                    className="w-full h-full object-cover"
                  />
                )
              }
            </div>
            
            {/* Green Background Bar with Label and Number */}
            <div className="bg-[#0B714C] p-4 flex justify-between items-center">
              <div>
                <h3 className="font-bold text-lg text-white">{processSteps[currentStep].label}</h3>
              </div>
              <div className="text-[#9CCCBA] text-4xl font-bold opacity-80">
                {processSteps[currentStep].number}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main CultureCollaboration Component
const CultureCollaboration = () => {
  const { heading } = content.en.workPage.cultureCollaboration;

  return (
    <>
      <div className="mt-40 relative">
        {/* Background Image with Overlay */}
        <div className="relative">
          <img 
            src={cottonFactory} 
            alt="Cotton Factory" 
            className="w-full h-[300px] xl:h-[415px] object-cover"
          />
          {/* Green Overlay */}
          <div className="absolute inset-0 bg-[#0B714C] opacity-70"></div>
        </div>
        
        {/* Content Container */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6">
          {/* Main Heading */}
          <h2 className="text-white text-2xl xl:text-4xl font-extrabold text-center max-w-5xl leading-tight mb-20 mt-20 md:mt-0">
            {heading}
          </h2>
          
          {/* Desktop View - Process Steps with Connected Lines */}
          <div className="items-center justify-center relative max-w-5xl hidden md:flex">
            {/* Horizontal Line that spans across all icons */}
            <div className="absolute h-[3px] bg-white w-full top-7 transform -translate-y-1/2"></div>
            
            {/* Process Steps */}
            <div className="flex justify-center items-center gap-4">
              {processSteps.map((step) => (
                <div key={step.label} className="flex flex-col items-center mx-4">
                  <div className="bg-white rounded-full w-14 h-14 flex items-center justify-center z-10">
                    <img src={step.icon} alt={step.label} className="w-8 h-8" />
                  </div>
                  <p className="text-white text-xs mt-2">{step.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile Process Steps Card - Separate Component */}
      <MobileProcessCard processSteps={processSteps} />
    </>
  );
};

MobileProcessCard.propTypes = {
  processSteps: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
      label: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
};


export default CultureCollaboration;