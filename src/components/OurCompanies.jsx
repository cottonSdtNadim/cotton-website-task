// import SectionTitle from "../components/SectionTitle.jsx";
// import { content } from "../content/content.js";

// const OurCompanies = () => {
//   const { headingTitle } = content.en.ourStoryPage.ourCompanies;
//   const companies = [
//     {
//       id: 1,
//       name: "Cotton Dyeing and Finishing Mills Ltd.",
//       establishedDate: "est. 1994",
//     },
//     {
//       id: 2,
//       name: "Pacific Cotton Limited.",
//       establishedDate: "est. 2001",
//     },
//     {
//       id: 3,
//       name: "Everlast Trims and Accessories Ltd.",
//       establishedDate: "est. 2023",
//     },
//   ];

//   return (
//     <div className="mb-32">
//       <div className="hidden md:block">
//         <SectionTitle
//           title={headingTitle}
//           iconPositionClass="-top-[30px] left-[465px] 2xl:left-[600px]"
//           iconWidth="w-8"
//           iconHeight="h-12"
//         ></SectionTitle>
//       </div>

//       {/* Text Card Container */}
//       <div className="grid grid-cols-3 gap-24 px-28">
//         {companies.map((company) => (
//           <div
//             key={company.id}
//             className="flex items-center bg-[#0B714C] rounded-xl p-6"
//             style={{ boxShadow: "0px 15px 25px 0px rgba(0, 0, 0, 0.09)" }}
//           >
//             <div className="flex justify-center items-center bg-white text-[#0B714C] text-4xl font-extrabold rounded-full w-16 h-16 min-w-16 mr-4">
//               {company.id}
//             </div>
//             <div>
//               <h3 className="text-white font-semibold text-lg leading-tight">
//                 {company.name}
//               </h3>
//               <p className="text-white text-sm font-light mt-1">
//                 {company.establishedDate}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default OurCompanies;

import SectionTitle from "../components/SectionTitle.jsx";
import { content } from "../content/content.js";

const OurCompanies = () => {
  const { headingTitle } = content.en.ourStoryPage.ourCompanies;
  const companies = [
    {
      id: 1,
      name: "Cotton Dyeing and Finishing Mills Ltd.",
      establishedDate: "est. 1994",
    },
    {
      id: 2,
      name: "Pacific Cotton Limited.",
      establishedDate: "est. 2001",
    },
    {
      id: 3,
      name: "Everlast Trims and Accessories Ltd.",
      establishedDate: "est. 2023",
    },
  ];

  return (
    <div className="mb-20 md:mb-32">
      {/* Section Title - Hidden on mobile, visible on larger screens */}
      <div className="hidden md:block">
        <SectionTitle
          title={headingTitle}
          iconPositionClass="-top-[30px] left-[465px] 2xl:left-[600px]"
          iconWidth="w-8"
          iconHeight="h-12"
        />
      </div>
      
      {/* Mobile Title */}
      <div className="md:hidden px-6 mb-8">
        <h2 className="text-2xl font-bold text-center">{headingTitle}</h2>
      </div>

      {/* Desktop Grid Layout */}
      <div className="hidden md:grid grid-cols-3 gap-24 px-28">
        {companies.map((company) => (
          <div
            key={company.id}
            className="flex items-center bg-[#0B714C] rounded-xl p-6"
            style={{ boxShadow: "0px 15px 25px 0px rgba(0, 0, 0, 0.09)" }}
          >
            <div className="flex justify-center items-center bg-white text-[#0B714C] text-4xl font-extrabold rounded-full w-16 h-16 min-w-16 mr-4">
              {company.id}
            </div>
            <div>
              <h3 className="text-white font-semibold text-lg leading-tight">
                {company.name}
              </h3>
              <p className="text-white text-sm font-light mt-1">
                {company.establishedDate}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Swipeable Container */}
      <div className="md:hidden overflow-x-auto scrollbar-hide px-6">
        <div className="flex space-x-4 pb-4 w-max">
          {companies.map((company) => (
            <div
              key={company.id}
              className="flex items-center bg-[#0B714C] rounded-xl p-5 w-[280px] flex-shrink-0"
              style={{ boxShadow: "0px 15px 25px 0px rgba(0, 0, 0, 0.09)" }}
            >
              <div className="flex justify-center items-center bg-white text-[#0B714C] text-3xl font-extrabold rounded-full w-14 h-14 min-w-14 mr-4">
                {company.id}
              </div>
              <div>
                <h3 className="text-white font-semibold text-base leading-tight">
                  {company.name}
                </h3>
                <p className="text-white text-xs font-light mt-1">
                  {company.establishedDate}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurCompanies;