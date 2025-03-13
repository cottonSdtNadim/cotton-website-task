// import PropTypes from "prop-types";

// const ImageCard = ({ singleNews }) => {
//   const { image, title, details } = singleNews;

//   return (
//     <div
//       style={{ borderRadius: "8px 8px 0px 0px" }}
//       className="w-[308px] h-[278px] bg-white shadow-lg"
//     >
//       {/* Image Section */}
//       <div className="flex justify-center items-center border-2">
//         <img
//           src={image}
//           alt={title}
//         //   className="w-full h-[200px] object-cover rounded-t-lg"
//         />
//       </div>

//       {/* Text Container */}
//       <div
//         className="bg-[#0B714C] p-4 rounded-b-lg"
//         style={{ borderRadius: "0px 0px 8px 8px" }}
//       >
//         <h2 className="text-white text-2xl font-extrabold mb-4">{title}</h2>
//         <p className="text-white text-sm font-light mb-4">{details}</p>

//         {/* Read the story link */}
//         <a href="#" className="text-white text-lg font-medium hover:underline mt-12">
//           Read the story
//         </a>
//       </div>
//     </div>
//   );
// };

// ImageCard.propTypes = {
//     singleNews: PropTypes.shape({
//       image: PropTypes.string.isRequired,
//       title: PropTypes.string.isRequired,
//       details: PropTypes.string.isRequired
//     }).isRequired,
//   };

// export default ImageCard;

import PropTypes from "prop-types";
import AnimatedLink from "./AnimatedLink";
import { content } from "../content/content.js";

const ImageCard = ({ singleNews }) => {
  const {label} = content.en.readTheStoryLink
  const { image, title, details } = singleNews;

  return (
    <div className="w-[308px] h-[450px] bg-white">
      {/* Image Section - Fixed height */}
      <div className="h-[240px] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover rounded-t-lg"
        />
      </div>

      {/* Text Container - Fixed height */}
      <div
        className="bg-[#0B714C] p-4 h-[250px] flex flex-col justify-between"
        style={{ borderRadius: "0px 0px 8px 8px" }}
      >
        {/* Text content with truncation */}
        <div>
          <h2 className="text-white text-lg font-extrabold mb-2 overflow-hidden text-ellipsis whitespace-nowrap">
            {title}
          </h2>
          <p className="text-white text-sm font-normal overflow-hidden line-clamp-2 mb-24">
            {details}
          </p>
        </div>

        <div className="mt-auto pt-2">
          <AnimatedLink 
          // content={"Read the story"}
          content={label}
          >
          </AnimatedLink>
        </div>
      </div>
    </div>
  );
};

ImageCard.propTypes = {
  singleNews: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    details: PropTypes.string.isRequired,
  }).isRequired,
};

export default ImageCard;
