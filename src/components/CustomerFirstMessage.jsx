// import chairmanSirImage from "../assets/images/chairman-sir.png";
// import leftGreenLeaf from "../assets/images/left-green-leaf-vector_2.png";
// import { content } from "../content/content.js";
// import CustomerRelationship from "./CustomerRelationship.jsx";

// const CustomerFirstMessage = () => {
//   const { header, description, chairmanSir, designation } =
//     content.en.customerFirstMessage;

//   return (
//     <div className="flex items-center">
//       <img
//         src={leftGreenLeaf}
//         alt="Left Green Leaf"
//         // className="mr-6 w-[180px] h-[439px]"
//         className="mr-6 w-48 h-[439px]"
//       />
//       {/* Container of Text and Image */}
//       <div className="flex">
//         {/* Text Container */}
//         <CustomerRelationship
//           width="w-[639px]"
//           header={header}
//           description={description}
//         ></CustomerRelationship>

//         {/* Image Container with Overlay Text */}
//         <div className="relative">
//           <img
//             src={chairmanSirImage}
//             alt="Chairman Sir"
//             className="ml-[54px]"
//           />
//           <div className="absolute bottom-0 left-0 right-0 text-white bg-opacity-50 text-center px-2 py-6">
//             <p className="text-lg font-semibold">
//               {/* Shaheen Mahmud */}
//               {chairmanSir}
//             </p>
//             <p className="text-sm">
//               {/* Founder and Chairman */}
//               {designation}
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CustomerFirstMessage;

// import chairmanSirImage from "../assets/images/chairman-sir.png";
// import leftGreenLeaf from "../assets/images/left-green-leaf-vector_2.png";
// import { content } from "../content/content.js";
// import CustomerRelationship from "./CustomerRelationship.jsx";

// const CustomerFirstMessage = () => {
//   const { header, description, chairmanSir, designation } =
//     content.en.customerFirstMessage;
//   return (
//     <div className="flex items-center justify-between w-full">
//       <div className="shrink-0">
//         {/* flex-shrink-0 */}
//         <img
//           src={leftGreenLeaf}
//           alt="Left Green Leaf"
//           className="w-48 h-[439px] mr-0"
//         />
//       </div>
//       {/* Container of Text and Image */}
//       <div className="flex grow justify-start 2xl:ml-6">
//         {/* flex-grow */}
//         {/* Text Container */}
//         <CustomerRelationship
//           width="w-[639px]"
//           header={header}
//           description={description}
//         ></CustomerRelationship>
//         {/* Image Container with Overlay Text */}
//         <div className="relative">
//           <img
//             src={chairmanSirImage}
//             alt="Chairman Sir"
//             className="ml-[54px]"
//           />
//           <div className="absolute bottom-0 left-0 right-0 text-white bg-opacity-50 text-center px-2 py-6">
//             <p className="text-lg font-semibold">{chairmanSir}</p>
//             <p className="text-sm">{designation}</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CustomerFirstMessage;

import chairmanSirImage from "../assets/images/chairman-sir.png";
import leftGreenLeaf from "../assets/images/left-green-leaf-vector_2.png";
import { content } from "../content/content.js";
import CustomerRelationship from "./CustomerRelationship.jsx";

const CustomerFirstMessage = () => {
  const { header, description, chairmanSir, designation } =
    content.en.customerFirstMessage;

  return (
    <div className="flex flex-col md:flex-row items-center w-full">
      {/* Large Green Leaf - Hidden on mobile, visible on larger screens */}
      <div className="hidden md:block shrink-0">
        <img
          src={leftGreenLeaf}
          alt="Left Green Leaf"
          className="w-48 h-[439px] mr-0"
        />
      </div>

      {/* Container of Text and Image - Stack vertically on mobile */}
      <div className="flex flex-col md:flex-row grow justify-start w-full xl:mr-36 2xl:ml-6">
        {/* Text Container - Full width on mobile */}
        <CustomerRelationship
          width="w-full md:w-[639px]"
          header={header}
          description={description}
        />

        {/* Image Container with Overlay Text and Green Leaf Background */}
        <div className="relative mt-8 md:mt-0 mx-auto md:mx-0">
          {/* Green leaf background behind the chairman image */}
          {/* Green leaf background behind the chairman image */}
          <div className="absolute left-0 bottom-0 -z-10 transform -translate-x-4 md:-translate-x-8 translate-y-4 md:hidden">
            <img
              src={leftGreenLeaf}
              alt="Background Green Leaf"
              className="w-24 md:w-32 opacity-80"
            />
          </div>

          {/* Chairman Image */}
          <img
            src={chairmanSirImage}
            alt="Chairman Sir"
            className="relative z-10"
          />

          {/* Name and designation overlay */}
          <div className="absolute bottom-0 left-0 right-0 text-white bg-opacity-50 px-2 py-6 z-20 text-center">
            <p className="text-lg font-semibold">{chairmanSir}</p>
            <p className="text-sm font-light">{designation}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerFirstMessage;
