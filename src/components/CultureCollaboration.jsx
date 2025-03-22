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

const CultureCollaboration = () => {

    const {heading} = content.en.workPage.cultureCollaboration;

  const processSteps = [
    { icon: knittingIcon, label: "Knitting" },
    { icon: dyeingIcon, label: "Dyeing" },
    { icon: laboratoryIcon, label: "Laboratory" },
    { icon: designIcon, label: "Design" },
    { icon: patternsIcon, label: "Patterns" },
    { icon: embroideryIcon, label: "Embroidery" },
    { icon: printingIcon, label: "Printing" },
    { icon: cuttingIcon, label: "Cutting" },
    { icon: sewingIcon, label: "Sewing" },
    { icon: accessoriesIcon, label: "Accessories" },
    { icon: finishingIcon, label: "Finishing" }
  ];

  return (
    <div className="mt-40 relative">
      {/* Background Image with Overlay */}
      <div className="relative">
        <img 
          src={cottonFactory} 
          alt="Cotton Factory" 
          className="w-full h-[415px] object-cover"
        />
        {/* Green Overlay */}
        <div className="absolute inset-0 bg-[#0B714C] opacity-70"></div>
      </div>
      
      {/* Content Container */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-6">
        {/* Main Heading */}
        <h2 className="text-white text-4xl font-bold text-center max-w-5xl leading-tight mb-20">
         {heading}
        </h2>
        
        {/* Process Steps with Connected Lines */}
        <div className="flex items-center justify-center relative max-w-5xl">
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
  );
};

export default CultureCollaboration;