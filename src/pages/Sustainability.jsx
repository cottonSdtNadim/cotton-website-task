import sustainability from "../assets/images/covers/sustainability.jpg";
import SustainabilityOverview from "../components/SustainabilityOverview";
import { content } from "../content/content";
import Cover from "./Shared/Cover";

const Sustainability = () => {
  const { subHeading, headingOne, headingTwo } = content.en.sustainabilityPage;

  return (
    <div>
      <Cover
        image={sustainability}
        subHeading={subHeading}
        heading={
          <>
            {headingOne} <br />
            {headingTwo}
          </>
        }
        pagename="sustainability"
      ></Cover>
      <SustainabilityOverview></SustainabilityOverview>
    </div>
  );
};

export default Sustainability;
