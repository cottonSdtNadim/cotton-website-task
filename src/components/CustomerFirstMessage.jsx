import chairmanSirImage from "../assets/images/chairman-sir.png";
import leftGreenLeaf from "../assets/images/left-green-leaf-vector_2.png";
import { content } from "../content/content.js";
import CustomerRelationship from "./CustomerRelationship.jsx";

const CustomerFirstMessage = () => {
  const { header, description, chairmanSir, designation } =
    content.en.customerFirstMessage;

  return (
    <div className="flex items-center">
      <img
        src={leftGreenLeaf}
        alt="Left Green Leaf"
        className="mr-6 w-[180px] h-[439px]"
      />
      {/* Container of Text and Image */}
      <div className="flex">
        {/* Text Container */}
        <CustomerRelationship
          width="w-[639px]"
          header={header}
          description={description}
        ></CustomerRelationship>

        {/* Image Container with Overlay Text */}
        <div className="relative">
          <img
            src={chairmanSirImage}
            alt="Chairman Sir"
            className="ml-[54px]"
          />
          <div className="absolute bottom-0 left-0 right-0 text-white bg-opacity-50 text-center px-2 py-6">
            <p className="text-lg font-semibold">
              {/* Shaheen Mahmud */}
              {chairmanSir}
            </p>
            <p className="text-sm">
              {/* Founder and Chairman */}
              {designation}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerFirstMessage;
