// "use client"

import { useEffect, useRef, useState } from "react";
import accessoriesIcon from "../assets/svgs/Accessories.svg";
import cuttingIcon from "../assets/svgs/Cutting.svg";
import designIcon from "../assets/svgs/Design.svg";
import dyeingIcon from "../assets/svgs/Dyeing.svg";
import embroideryIcon from "../assets/svgs/Embroidary.svg";
import finishingIcon from "../assets/svgs/Finishing.svg";
import knittingIcon from "../assets/svgs/Knitting.svg";
import laboratoryIcon from "../assets/svgs/Laboratory.svg";
import patternsIcon from "../assets/svgs/Patterns.svg";
import printingIcon from "../assets/svgs/Printing.svg";
import sewingIcon from "../assets/svgs/Sewing.svg";
import ProcessStep from "./ProcessStep";

const ProcessFlow = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const scrollContainerRef = useRef(null);

  console.log("scrollPercentage in ProcessFlow:", scrollPercentage);

  // Define all process steps
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
    { icon: finishingIcon, label: "Finishing" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (scrollContainerRef.current) {
        const container = scrollContainerRef.current;
        const scrollLeft = container.scrollLeft;
        const scrollWidth = container.scrollWidth - container.clientWidth;
        const percentage = (scrollLeft / scrollWidth) * 100;
        setScrollPercentage(percentage);

        // Calculate active step based on scroll percentage
        const newActiveStep = Math.min(
          Math.floor((percentage / 100) * processSteps.length),
          processSteps.length - 1
        );
        setActiveStepIndex(newActiveStep);
      }
    };

    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", handleScroll);
      }
    };
  }, [processSteps.length]);

  return (
    <div className="w-full relative py-6 px-4">
      {/* Scrollable container */}
      <div
        ref={scrollContainerRef}
        className="overflow-x-auto flex items-center pb-4 hide-scrollbar"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {/* Steps container with green line */}
        <div className="flex items-center relative min-w-max px-6">
          {/* The main horizontal line that spans across all steps */}
          <div className="h-[2px] bg-[#0B714C] absolute top-6 left-0 right-0 z-0"></div>

          {/* The completed portion of the line with increased thickness */}
          <div
            className="h-[4px] bg-[#0B714C] absolute top-[23px] left-0 z-10 transition-all duration-300"
            /*  style={{
              width: `${activeStepIndex * 80 + 40}px`, // Adjust based on your spacing
            }} */
            style={{
              width: `${(activeStepIndex + 1) * 135}px`, // Adjust the multiplier based on actual step width
            }}
          ></div>

          {/* Process steps with proper spacing */}
          <div className="flex space-x-16">
            {processSteps.map((step, index) => (
              <ProcessStep
                key={step.label}
                icon={step.icon}
                label={step.label}
                isActive={index <= activeStepIndex}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Custom Progress Indicator Bar */}
      <div className="absolute -bottom-3 left-6 right-6">
        {/* Thin background line */}
        <div className="relative w-full h-1 bg-gray-300 rounded-full"></div>

        {/* Thicker active progress bar */}
        <div
          className="absolute top-0 h-2 bg-[#0B714C] rounded-full transition-all duration-300"
          style={{
            left: `${(activeStepIndex / processSteps.length) * 100}%`,
            width: `${(1 / processSteps.length) * 100}%`,
            transform: "translateY(-25%)", // Adjust vertical position
          }}
        ></div>
      </div>
    </div>
  );
};

export default ProcessFlow;
