// import sdg from "../assets/images/sdg-overview.png";
// import { content } from "../content/content";

// const SustainabilityOverview = () => {
//   const { heading, paragraph } = content.en.sustainabilityPage.overview;

//   return (
//       <div className="grid grid-cols-2 gap-96 px-[235px] py-36">
//         <div className="w-[524px] h-[403px]">
//           <h3 className="text-3xl font-medium mb-10">{heading}</h3>
//           <p className="text-lg font-light">{paragraph}</p>
//         </div>
//         <div className="flex justify-center items-center w-80">
//           <img src={sdg} alt="" className="w-full h-80" />
//         </div>
//       </div>
//   );
// };

// export default SustainabilityOverview;

import sdg from "../assets/images/sdg-overview.png";
import { content } from "../content/content";

const SustainabilityOverview = () => {
  const { heading, paragraph } = content.en.sustainabilityPage.overview;

  return (
    <div className="py-8 px-6 md:grid md:grid-cols-2 md:gap-96 md:px-[235px] md:py-36">
      {/* Text Content - Full width on mobile, left column on desktop */}
      <div className="mb-10 md:w-[524px] md:h-[403px]">
        <h3 className="text-2xl font-bold leading-tight mb-6 md:text-3xl md:font-medium md:mb-10">
          {heading}
        </h3>
        <p className="text-base leading-relaxed font-light md:text-lg">
          {paragraph}
        </p>
      </div>
      
      {/* SDG Diagram - Centered below content on mobile, right column on desktop */}
      <div className="flex justify-center items-center w-full mt-8 md:w-80 md:mt-0 mb-16 md:mb-0">
        <img 
          src={sdg} 
          alt="Sustainability Diagram showing People, Planet, and Prosperity" 
          className="w-60 h-60 md:w-full md:h-80" 
        />
      </div>
    </div>
  );
};

export default SustainabilityOverview;
 

// import sdg from "../assets/images/sdg-overview.png";
// import { content } from "../content/content";

// const SustainabilityOverview = () => {
//   const { heading, paragraph } = content.en.sustainabilityPage.overview;

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 px-6 py-16 md:px-10 md:py-36 bg-white border-2 border-green-500">
//       <div className="flex flex-col justify-center items-start space-y-6 border-2 border-blue-500">
//         <h3 className="text-4xl font-medium">{heading}</h3>
//         <p className="text-lg font-light leading-relaxed">{paragraph}</p>
//       </div>
//       <div className="flex justify-center items-center border-2 border-yellow-500">
//         <img src={sdg} alt="Sustainability SDG Overview" className="w-full md:w-96 h-auto" />
//       </div>
//     </div>
//   );
// };

// export default SustainabilityOverview;
