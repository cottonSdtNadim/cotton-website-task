import calender from "../assets/icons/calender-svgrepo-com 1.png";
import dress from "../assets/icons/dress-svgrepo-com 1.png";
import sewing from "../assets/icons/sewing-machine-svgrepo-com 1.png";
import ProcessFlow from "./ProcessFlow";
import TextCard from "./textCard";

const Process = () => {
  return (
    <div className="flex my-20 w-[960px] mx-auto px-20">
      {/* Text Card Container */}
      <div className="space-y-[36px]">
        <TextCard
          svg={calender}
          textBold="30+"
          textSmall="Years of experience"
        ></TextCard>

        <TextCard
          svg={sewing}
          textBold="25+"
          textSmall="Production units"
        ></TextCard>

        <TextCard
          svg={dress}
          textBold="4"
          textSmall="Millions Pieces/Year"
        ></TextCard>
      </div>

      {/* Process Container */}
      <div className="ml-14 max-w-[480px]">
        <p className="text-xl mb-6">
          Cotton Group can meet your requirements of high-quality manufacturing
          of knit garments in all categories, such as basics, casual and active
          wear for men, women and children.{" "}
        </p>
        <h3 className="text-2xl font-bold mb-6">Here’s our process:</h3>
        <ProcessFlow></ProcessFlow>
      </div>
    </div>
  );
};

export default Process;
