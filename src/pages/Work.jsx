import image from "../assets/images/covers/machines.png";
import CultureCollaboration from "../components/CultureCollaboration";
import CustomerRelationship from "../components/CustomerRelationship";
import Machineries from "../components/Machineries";
import Partners from "../components/Partners";
import { content } from "../content/content";
import Cover from "./Shared/Cover";

const Work = () => {
  const { coverHeader } = content.en.workPage;
  const { header, description, chairmanSir, designation } =
    content.en.customerFirstMessage;

  return (
    <div>
      <Cover image={image} heading={coverHeader}></Cover>
      {/* <div className="px-[230px] mb-24 mt-20">
        <CustomerRelationship
          width="w-[880px]"
          header={header}
          quotee={chairmanSir}
          designation={designation}
          description={description}
        ></CustomerRelationship>
      </div> */}
      <div className="px-4 sm:px-8 md:px-16 lg:px-32 xl:px-48 2xl:px-64 mb-12 md:mb-24 mt-10 md:mt-20">
        <CustomerRelationship
          header={header}
          quotee={chairmanSir}
          designation={designation}
          description={description}
        />
      </div>
      <Partners></Partners>
      <CultureCollaboration></CultureCollaboration>
      <Machineries></Machineries>
    </div>
  );
};

export default Work;
