// /* import calender from "../assets/icons/calender-svgrepo-com 1.png";
// import dress from "../assets/icons/dress-svgrepo-com 1.png";
// import sewing from "../assets/icons/sewing-machine-svgrepo-com 1.png"; */
// import ProcessFlow from "./ProcessFlow";
// import TextCard from "./textCard";
// import { content } from "../content/content.js"; 

// const Process = () => {
//         const { textCards, description, heading} = content.en.process;
//   return (
//     <div className="flex my-20 w-[960px] mx-auto px-10">
//       {/* Text Card Container */}
//       <div className="space-y-[36px]">
//         {/* <TextCard
//           svg={calender}
//           textBold="30+"
//           textSmall="Years of experience"
//         ></TextCard>

//         <TextCard
//           svg={sewing}
//           textBold="25+"
//           textSmall="Production units"
//         ></TextCard>

//         <TextCard
//           svg={dress}
//           textBold="4"
//           textSmall="Millions Pieces/Year"
//         ></TextCard> */}
//         {textCards.map((card, index) => (
//           <TextCard
//             key={index}
//             svg={card.svg}
//             textBold={card.textBold}
//             textSmall={card.textSmall}
//           />
//         ))}
//       </div>

//       {/* Process Container */}
//       <div className="ml-14 max-w-[646px]"> {/* 480px */}
//         <p className="text-2xl mb-6">
//           {/* Cotton Group can meet your requirements of high-quality manufacturing
//           of knit garments in all categories, such as basics, casual and active
//           wear for men, women and children.{" "} */}
//           {
//             description
//           }
//         </p>
//         <h3 className="text-3xl font-bold mb-6">
//           {/* Here’s our process: */}
//           {
//             heading
//           }
//           </h3>
//         <ProcessFlow></ProcessFlow>
//       </div>
//     </div>
//   );
// };

// export default Process;

import ProcessFlow from "./ProcessFlow";
import TextCard from "./textCard";
import { content } from "../content/content.js"; 

const Process = () => {
  const { textCards, description, heading } = content.en.process;
  
  return (
    <div className="flex flex-col md:flex-row my-10 md:my-20 w-full md:w-[960px] mx-auto px-4 md:px-10">
      {/* Text Card Container - vertical on desktop, horizontal on mobile */}
      <div className="flex flex-row md:flex-col space-x-4 md:space-x-0 md:space-y-[36px] overflow-x-auto pb-6 md:pb-0">
        {textCards.map((card, index) => (
          <TextCard
            key={index}
            svg={card.svg}
            textBold={card.textBold}
            textSmall={card.textSmall}
          />
        ))}
      </div>

      {/* Process Container */}
      <div className="mt-10 md:mt-0 md:ml-14 max-w-full md:max-w-[646px]">
        <p className="text-xl md:text-2xl mb-4 md:mb-6">
          {description}
        </p>
        <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">
          {heading}
        </h3>
        <ProcessFlow />
      </div>
    </div>
  );
};

export default Process;
