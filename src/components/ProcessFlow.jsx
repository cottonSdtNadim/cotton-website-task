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
