// import factory from "../assets/images/getInTouch/factory.svg";
// import headOffice from "../assets/images/getInTouch/headOffice.svg";
// import AnimatedLink from "./AnimatedLink";
// import MultiStepContactForm from "./MultiStepContactForm";

// const GetInTouch = () => {
//   return (
//     <div className="container mx-auto px-10  py-9">
//       <div className="grid grid-cols-1 lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-12 gap-8">
//         {/* Head Office and Factory Container */}
//         <div className="lg:col-span-2 xl:col-span-2 2xl:col-span-4 min-h-[574px] my-10">
//           {/* Head Office Container */}
//           <div className="flex flex-col md:flex-row p-4 rounded-lg">
//             <div className="w-[120px] bg-[#0B714C] flex items-center justify-center p-6 rounded-l-xl">
//               <img
//                 src={headOffice}
//                 alt="Head Office"
//                 className="object-cover w-10 h-10"
//               />
//             </div>
//             <div className="md:ml-5 mt-3 md:mt-0">
//               <h3 className="font-medium text-3xl">Head Office</h3>
//               <div className="text-lg my-4 font-light"> {/*   */}
//                 <p>Cotton House</p>
//                 <p>H# 2, R# 113/A</p>
//                 <p>Gulshan 2</p>
//                 <p>Dhaka 1212</p>
//                 <p>Bangladesh</p>
//               </div>
//               <AnimatedLink
//                 fontSize="text-xl"
//                 content={"View location"}
//                 color={"#0B714C"}
//                 fontWeight={"font-light"}
//               />
//             </div>
//           </div>

//           {/* Factory Container */}
//           <div className="flex flex-col md:flex-row p-4 rounded-lg">
//           <div className="w-[120px] bg-[#B2D4C9] flex items-center justify-center p-6 rounded-l-xl">
//               <img
//                 src={factory}
//                 alt="Factory"
//                 className="object-cover w-10 h-10"
//               />
//             </div>
//             <div className="md:ml-5 mt-3 md:mt-0">
//               <h3 className="font-medium text-3xl mb-3">Factory</h3>
//               <div className="my-4 text-lg font-light">
//                 <p>Village: Amtoli, Union: Habirbari</p>
//                 <p>Post Office: Seed Store Bazar</p>
//                 <p>Thana: Valuka, </p>
//                 <p>District: Mymensingh</p>
//                 <p>Bangladesh</p>
//               </div>
//               <AnimatedLink
//                 fontSize="text-xl"
//                 content={"View location"}
//                 color={"#0B714C"}
//                 fontWeight={"font-light"}
//               />
//             </div>
//           </div>
//         </div>

//         {/* Contact Form */}
//         <div className="lg:col-span-3 xl:col-span-3 2xl:col-span-8 max-w-[1200px]">
//           <MultiStepContactForm />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default GetInTouch;

import factory from "../assets/images/getInTouch/factory.svg"
import headOffice from "../assets/images/getInTouch/headOffice.svg"
import AnimatedLink from "./AnimatedLink"
import MultiStepContactForm from "./MultiStepContactForm"

const GetInTouch = () => {
  return (
    <div className="container mx-auto px-4 md:px-10 py-6 md:py-9">
      <div className="grid grid-cols-1 lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-12 gap-8">
        {/* Head Office and Factory Container */}
        <div className="lg:col-span-2 xl:col-span-2 2xl:col-span-4 my-4 md:my-10">
          {/* Head Office Container */}
          <div className="flex flex-row p-4 rounded-lg shadow-sm mb-6">
            <div className="w-[60px] md:w-[120px] bg-[#0B714C] flex items-center justify-center p-4 md:p-6 rounded-l-xl">
              <img
                src={headOffice || "/placeholder.svg"}
                alt="Head Office"
                className="object-cover w-8 h-8 md:w-10 md:h-10"
              />
            </div>
            <div className="ml-4 md:ml-5">
              <h3 className="font-medium text-xl md:text-3xl">Head Office</h3>
              <div className="text-base md:text-lg my-2 md:my-4 font-light text-gray-800">
                <p>Cotton House</p>
                <p>H# 2, R# 113/A</p>
                <p>Gulshan 2, Dhaka 1212,</p>
                <p>Bangladesh</p>
              </div>
              <AnimatedLink
                fontSize="text-base md:text-xl"
                content={"View location"}
                color={"#0B714C"}
                fontWeight={"font-light"}
              />
            </div>
          </div>

          {/* Factory Container */}
          <div className="flex flex-row p-4 rounded-lg shadow-sm">
            <div className="w-[60px] md:w-[120px] bg-[#B2D4C9] flex items-center justify-center p-4 md:p-6 rounded-l-xl">
              <img src={factory || "/placeholder.svg"} alt="Factory" className="object-cover w-8 h-8 md:w-10 md:h-10" />
            </div>
            <div className="ml-4 md:ml-5">
              <h3 className="font-medium text-xl md:text-3xl">Factory</h3>
              <div className="text-base md:text-lg my-2 md:my-4 font-light text-gray-800">
                <p>Village: Amtoli,</p>
                <p>Union: Habirbari</p>
                <p>Post Office: Seed Store Bazar</p>
                <p>Thana: Valuka,</p>
                <p>District: Mymensingh</p>
              </div>
              <AnimatedLink
                fontSize="text-base md:text-xl"
                content={"View location"}
                color={"#0B714C"}
                fontWeight={"font-light"}
              />
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-3 xl:col-span-3 2xl:col-span-8 max-w-[1200px]">
          <MultiStepContactForm />
        </div>
      </div>
    </div>
  )
}

export default GetInTouch

