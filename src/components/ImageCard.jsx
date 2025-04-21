// import PropTypes from "prop-types";
// import { content } from "../content/content.js";
// import AnimatedLink from "./AnimatedLink";

// const ImageCard = ({ singleNews }) => {
//   const { label } = content.en.readTheStoryLink;
//   const { image, title, details } = singleNews;

//   return (
//     <div className="w-[308px] h-[450px] bg-white">
//       {/* Image Section - Fixed height */}
//       <div className="h-60 overflow-hidden">
//         <img
//           src={image}
//           alt={title}
//           className="w-full h-full object-cover rounded-t-lg"
//         />
//       </div>

//       {/* Text Container - Fixed height */}
//       <div
//         className="bg-[#0B714C] p-4 h-64 flex flex-col justify-between"
//         style={{ borderRadius: "0px 0px 8px 8px" }}
//       >
//         {/* Text content with truncation */}
//         <div>
//           <h2 className="text-white text-lg font-extrabold mb-2 overflow-hidden text-ellipsis whitespace-nowrap">
//             {title}
//           </h2>
//           <p className="text-white text-sm font-normal overflow-hidden line-clamp-2 mb-24">
//             {details}
//           </p>
//         </div>

//         <div className="mt-auto pt-2">
//           <AnimatedLink
//             // content={"Read the story"}
//             content={label}
//             paddingBottom="pb-6"
//           ></AnimatedLink>
//         </div>
//       </div>
//     </div>
//   );
// };

// ImageCard.propTypes = {
//   singleNews: PropTypes.shape({
//     image: PropTypes.string.isRequired,
//     title: PropTypes.string.isRequired,
//     details: PropTypes.string.isRequired,
//   }).isRequired,
// };

// export default ImageCard;

import PropTypes from "prop-types";
import { content } from "../content/content.js";
import AnimatedLink from "./AnimatedLink";

const ImageCard = ({ singleNews, url }) => {
  const { label } = content.en.readTheStoryLink;
  const { image, title, details } = singleNews;
  
  return (
    <div className="  bg-white shadow-sm w-[280px] md:w-auto"> {/* w-[280px] md:w-[308px] h-[420px] md:h-[450px] */}
      {/* Image Section - Fixed height */}
      <div className="h-48 md:h-60 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover rounded-t-lg"
        />
      </div>
      
      {/* Text Container - Fixed height */}
      <div
        className="bg-[#0B714C] p-4 h-60 md:h-64 flex flex-col justify-between"
        style={{ borderRadius: "0px 0px 8px 8px" }}
      >
        {/* Text content with truncation */}
        <div>
          <h2 className="text-white text-base md:text-lg font-extrabold mb-2 overflow-hidden text-ellipsis whitespace-nowrap">
            {title}
          </h2>
          <p className="text-white text-xs md:text-sm font-normal overflow-hidden line-clamp-2 mb-16 md:mb-24">
            {details}
          </p>
        </div>
        
        <div className="mt-auto pt-2">
          <AnimatedLink
            content={label}
            paddingBottom="pb-4 md:pb-6"
            to={url}
          />
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
  url: PropTypes.string // Added url prop
};

export default ImageCard;

// import PropTypes from "prop-types";
// import AnimatedLink from "./AnimatedLink";
// import { content } from "../content/content.js";

// const ImageCard = ({ singleNews }) => {
//   const {label} = content.en.readTheStoryLink
//   const { image, title, details } = singleNews;
//   return (
//     <div className="w-full max-w-[308px] mx-auto h-[450px] bg-white border-2">
//       {/* Image Section - Fixed height */}
//       <div className="h-[208px] overflow-hidden">
//         <img
//           src={image}
//           alt={title}
//           className="w-full h-full object-cover rounded-t-lg"
//         />
//       </div>
//       {/* Text Container - Fixed height */}
//       <div
//         className="bg-[#0B714C] p-4 h-[242px] flex flex-col justify-between"
//         style={{ borderRadius: "0px 0px 8px 8px" }}
//       >
//         {/* Text content with truncation */}
//         <div>
//           <h2 className="text-white text-lg font-extrabold mb-2 overflow-hidden text-ellipsis whitespace-nowrap">
//             {title}
//           </h2>
//           <p className="text-white text-sm font-normal overflow-hidden line-clamp-2 mb-24">
//             {details}
//           </p>
//         </div>
//         <div className="mt-auto pt-2">
//           <AnimatedLink content={label} />
//         </div>
//       </div>
//     </div>
//   );
// };

// ImageCard.propTypes = {
//   singleNews: PropTypes.shape({
//     image: PropTypes.string.isRequired,
//     title: PropTypes.string.isRequired,
//     details: PropTypes.string.isRequired,
//   }).isRequired,
// };

// export default ImageCard;
