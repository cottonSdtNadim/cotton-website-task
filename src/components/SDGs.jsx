import { content } from "../content/content";
import SDGGoalsExpandable from "./SDGGoalExpanable";
import SectionTitle from "./SectionTitle";

const SDGs = () => {
    const {firstHeading, secondHeading} = content.en.sustainabilityPage.sdg;

  return (
    <div>
      <SectionTitle
        title={
            <>
            {/* Through CottonCares™️, we strive to prioritize the  */}
            {firstHeading}
            <br />
            {/* following SDGs */}
            {secondHeading}
            </>
        }
        iconTop="-30px"
        iconLeft="140px"
        iconWidth="w-8"
        iconHeight="h-12"
      ></SectionTitle>
      <SDGGoalsExpandable></SDGGoalsExpandable>
    </div>
  );
};

export default SDGs;
