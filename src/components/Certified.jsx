// import certified from "../assets/certified-images/certified.svg";
// import sedex from "../assets/certified-images/sedex.png";
// import organic from "../assets/certified-images/organic.png";
// import leftRightArrow from "../assets/certified-images/right-left-arrow.png";
// import AFA from "../assets/certified-images/AFA.png";
// import WRAP from "../assets/certified-images/WRAP.png";
// import confidence from "../assets/certified-images/confidence.png";
// import swedenTextile from "../assets/certified-images/sweden-textile.png";
// import amfori from "../assets/certified-images/amfori.png";
// import rso from "../assets/certified-images/rso.png";
// import bci from "../assets/certified-images/bci.png";
// import global from "../assets/certified-images/global.png";
// import { content } from "../content/content";

// const Certified = () => {
//   const {certifiedContent} = content.en.ourStoryPage;
//   return (
//     /* Parent Container */
//     <div className="mt-28 flex justify-center items-center">
//       <p className="w-[512px] h-[348px] text-[#000000] text-3xl font-medium text-left mb-10">
//         {certifiedContent}
//       </p>

//       {/* Image Container */}
//       <div className="relative w-[400px] h-[400px] flex justify-center items-center ml-8 bottom-8">
//         {/* Center Image */}
//         <img src={certified} alt="Certified" className="absolute z-10 left-32"/>

//         {/* Surrounding Images */}
//         <img src={sedex} alt="Sedex" className="absolute top-[-5%] left-1/2 transform -translate-x-1/2" />
//         <img src={organic} alt="Sweden Textile" className="absolute top-[10%] right-[15%]" />
//         <img src={leftRightArrow} alt="Sweden Textile" className="absolute top-[25%] right-[1%]" />
//         <img src={AFA} alt="AFA" className="absolute right-0 top-[52%] transform -translate-y-1/2" />
//         <img src={WRAP} alt="WRAP" className="absolute right-4 top-72 transform -translate-y-1/2" />
//         <img src={confidence} alt="Confidence" className="absolute top-[75%] right-[25%]" />
//         <img src={swedenTextile} alt="Confidence" className="absolute top-[77%] right-[55%]" />
//         <img src={amfori} alt="Amfori" className="absolute bottom-[20%] left-[8%]" />
//         <img src={rso} alt="RSO" className="absolute bottom-[35%] left-[5%]" />
//         <img src={bci} alt="RSO" className="absolute bottom-[55%] left-[5%]" />
//         <img src={global} alt="RSO" className="absolute bottom-[75%] left-[8%]" />
//       </div>
//     </div>
//   );
// };

// export default Certified;


import certified from "../assets/certified-images/certified.svg";
import sedex from "../assets/certified-images/sedex.png";
import organic from "../assets/certified-images/organic.png";
import leftRightArrow from "../assets/certified-images/right-left-arrow.png";
import AFA from "../assets/certified-images/AFA.png";
import WRAP from "../assets/certified-images/WRAP.png";
import confidence from "../assets/certified-images/confidence.png";
import swedenTextile from "../assets/certified-images/sweden-textile.png";
import amfori from "../assets/certified-images/amfori.png";
import rso from "../assets/certified-images/rso.png";
import bci from "../assets/certified-images/bci.png";
import global from "../assets/certified-images/global.png";
import { content } from "../content/content";

const Certified = () => {
  const {certifiedContent} = content.en.ourStoryPage;
  
  return (
    /* Parent Container */
    <div className="mt-16 md:mt-28 flex flex-col md:flex-row justify-center items-center px-6 md:px-0">
      {/* Text Content - Full width on mobile */}
      <p className="w-full md:w-[512px] text-[#000000] text-xl md:text-3xl font-medium text-left mb-12 md:mb-10">
        {certifiedContent}
      </p>

      {/* Image Container - Responsive positioning */}
      <div className="relative w-full h-[420px] md:w-[400px] md:h-[400px] flex justify-center items-center md:ml-8 md:bottom-8">
        {/* Center Image */}
        <img 
          src={certified} 
          alt="Certified" 
          className="absolute z-10 w-36 md:w-auto left-1/2 md:left-32 transform -translate-x-1/2 md:-translate-x-0"
        />

        {/* Surrounding Images - Repositioned for mobile */}
        <img 
          src={sedex} 
          alt="Sedex" 
          className="absolute w-16 md:w-auto top-[5%] md:top-[-5%] left-1/2 transform -translate-x-1/2" 
        />
        <img 
          src={organic} 
          alt="Organic" 
          className="absolute w-14 md:w-auto top-[12%] md:top-[10%] right-[20%] md:right-[15%]" 
        />
        <img 
          src={leftRightArrow} 
          alt="Left Right Arrow" 
          className="absolute w-14 md:w-auto top-[25%] right-[3%] md:right-[1%]" 
        />
        <img 
          src={AFA} 
          alt="AFA" 
          className="absolute w-14 md:w-auto right-[-3%] md:right-0 top-[48%] md:top-[52%] transform -translate-y-1/2" 
        />
        <img 
          src={WRAP} 
          alt="WRAP" 
          className="absolute w-16 md:w-auto right-[5%] md:right-4 top-[65%] md:top-72 transform -translate-y-1/2" 
        />
        <img 
          src={confidence} 
          alt="Confidence" 
          className="absolute w-14 md:w-auto top-[70%] md:top-[75%] right-[20%] md:right-[25%]" 
        />
        <img 
          src={swedenTextile} 
          alt="Sweden Textile" 
          className="absolute w-14 md:w-auto top-[73%] md:top-[77%] md:right-[55%]" 
        />
        <img 
          src={amfori} 
          alt="Amfori" 
          className="absolute w-16 md:w-auto bottom-[20%] left-[15%] md:left-[8%]" 
        />
        <img 
          src={rso} 
          alt="RSO" 
          className="absolute w-14 md:w-auto bottom-[35%] left-[7%] md:left-[5%]" 
        />
        <img 
          src={bci} 
          alt="BCI" 
          className="absolute w-16 md:w-auto bottom-[55%] left-[5%] md:left-[5%]" 
        />
        <img 
          src={global} 
          alt="Global" 
          className="absolute w-16 md:w-auto bottom-[75%] left-[15%] md:left-[8%]" 
        />
      </div>
    </div>
  );
};

export default Certified;