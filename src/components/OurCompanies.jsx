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
    <div className="mb-32">
      <SectionTitle
        title={headingTitle}
        iconTop="-30px"
        iconLeft="470px"
        iconWidth="w-8"
        iconHeight="h-12"
      ></SectionTitle>
      
      {/* Text Card Container */}
      <div className="grid grid-cols-3 gap-24 px-28">
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
    </div>
  );
};

export default OurCompanies;