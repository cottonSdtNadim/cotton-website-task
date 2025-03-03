/* import designIcon from "../assets/svgs/Design.svg";
import dyeingIcon from "../assets/svgs/Dyeing.svg";
import knittingIcon from "../assets/svgs/Knitting.svg";
import laboratoryIcon from "../assets/svgs/Laboratory.svg";
import patternsIcon from "../assets/svgs/Patterns.svg";
import ProcessStep from "./ProcessStep";

const ProcessFlow = () => {
  return (
    <div className="flex items-center justify-between relative">
      <ProcessStep icon={knittingIcon} label="Knitting" />
      <div className="w-16 h-[2px] bg-[#0B714C] flex-shrink-0 absolute top-1/3 left-13"></div>

      <ProcessStep icon={dyeingIcon} label="Dyeing" />
      <div className="w-16 h-[2px] bg-[#0B714C] flex-shrink-0 absolute top-1/3 left-15 right-13"></div>

      <ProcessStep icon={laboratoryIcon} label="Laboratory" />
      <div className="w-16 h-[2px] bg-[#0B714C] flex-shrink-0 absolute top-1/3 left-13"></div>

      <ProcessStep icon={designIcon} label="Design" />
      <div className="w-16 h-[2px] bg-[#0B714C] flex-shrink-0 absolute top-1/3 left-13"></div>

      <ProcessStep icon={patternsIcon} label="Patterns" />
    </div>
  );
};

export default ProcessFlow; */

// import designIcon from "../assets/svgs/Design.svg";
// import dyeingIcon from "../assets/svgs/Dyeing.svg";
// import knittingIcon from "../assets/svgs/Knitting.svg";
// import laboratoryIcon from "../assets/svgs/Laboratory.svg";
// import patternsIcon from "../assets/svgs/Patterns.svg";
// import ProcessStep from "./ProcessStep";

// const ProcessFlow = () => {
//   return (
//     <div className="flex items-center justify-between relative">
//       <ProcessStep icon={knittingIcon} label="Knitting" />

//       {/* Connecting line between Knitting and Dyeing */}
//       <div className="w-full h-[2px] bg-[#0B714C] absolute top-1/3 z-0"></div>

//       <ProcessStep icon={dyeingIcon} label="Dyeing" />
//       <ProcessStep icon={laboratoryIcon} label="Laboratory" />
//       <ProcessStep icon={designIcon} label="Design" />
//       <ProcessStep icon={patternsIcon} label="Patterns" />
//     </div>
//   );
// };

// export default ProcessFlow;

// import designIcon from "../assets/svgs/Design.svg";
// import dyeingIcon from "../assets/svgs/Dyeing.svg";
// import knittingIcon from "../assets/svgs/Knitting.svg";
// import laboratoryIcon from "../assets/svgs/Laboratory.svg";
// import patternsIcon from "../assets/svgs/Patterns.svg";
// import ProcessStep from "./ProcessStep";

// const ProcessFlow = () => {
//   return (
//     <div className="flex items-center">
//       {/* First step - Knitting */}
//       <div className="flex flex-col items-center">
//         <div className="flex items-center">
//           <div className="w-16 h-16 rounded-full bg-[#0B714C] flex items-center justify-center">
//             <img src={knittingIcon} alt="Knitting" className="w-8 h-8" />
//           </div>
//           {/* Line connecting to next step */}
//           <div className="w-16 h-[2px] bg-[#0B714C]"></div>
//         </div>
//         <span className="text-[#0B714C] font-medium mt-2">Knitting</span>
//       </div>

//       {/* Second step - Dyeing */}
//       <div className="flex flex-col items-center">
//         <div className="flex items-center">
//           <div className="w-16 h-16 rounded-full bg-[#0B714C] flex items-center justify-center">
//             <img src={dyeingIcon} alt="Dyeing" className="w-8 h-8" />
//           </div>
//           {/* Line connecting to next step */}
//           <div className="w-16 h-[2px] bg-[#0B714C]"></div>
//         </div>
//         <span className="text-[#0B714C] font-medium mt-2">Dyeing</span>
//       </div>

//       {/* Third step - Laboratory */}
//       <div className="flex flex-col items-center">
//         <div className="flex items-center">
//           <div className="w-16 h-16 rounded-full bg-[#0B714C] flex items-center justify-center">
//             <img src={laboratoryIcon} alt="Laboratory" className="w-8 h-8" />
//           </div>
//           {/* Line connecting to next step */}
//           <div className="w-16 h-[2px] bg-[#0B714C]"></div>
//         </div>
//         <span className="text-[#0B714C] font-medium mt-2">Laboratory</span>
//       </div>

//       {/* Fourth step - Design */}
//       <div className="flex flex-col items-center">
//         <div className="flex items-center">
//           <div className="w-16 h-16 rounded-full bg-[#0B714C] flex items-center justify-center">
//             <img src={designIcon} alt="Design" className="w-8 h-8" />
//           </div>
//           {/* Line connecting to next step */}
//           <div className="w-16 h-[2px] bg-[#0B714C]"></div>
//         </div>
//         <span className="text-[#0B714C] font-medium mt-2">Design</span>
//       </div>

//       {/* Fifth step - Patterns (last step, no connecting line after it) */}
//       <div className="flex flex-col items-center">
//         <div className="w-16 h-16 rounded-full bg-[#0B714C] flex items-center justify-center">
//           <img src={patternsIcon} alt="Patterns" className="w-8 h-8" />
//         </div>
//         <span className="text-[#0B714C] font-medium mt-2">Patterns</span>
//       </div>
//     </div>
//   );
// };

// export default ProcessFlow;

import designIcon from "../assets/svgs/Design.svg";
import dyeingIcon from "../assets/svgs/Dyeing.svg";
import knittingIcon from "../assets/svgs/Knitting.svg";
import laboratoryIcon from "../assets/svgs/Laboratory.svg";
import patternsIcon from "../assets/svgs/Patterns.svg";
import ProcessStep from "./ProcessStep";

const ProcessFlow = () => {
  return (
    <div className="flex flex-col w-full relative">
      {/* Container for steps and line */}
      <div className="flex items-center justify-between w-full relative">
        {/* The main horizontal line that spans across all steps */}
        <div className="h-[2px] bg-[#0B714C] absolute top-6 left-6 right-6 z-0"></div>
        
        {/* Process steps */}
        <ProcessStep icon={knittingIcon} label="Knitting" />
        <ProcessStep icon={dyeingIcon} label="Dyeing" />
        <ProcessStep icon={laboratoryIcon} label="Laboratory" />
        <ProcessStep icon={designIcon} label="Design" />
        <ProcessStep icon={patternsIcon} label="Patterns" />
      </div>
    </div>
  );
};

export default ProcessFlow;
