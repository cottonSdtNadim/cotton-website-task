// import { useQuery } from "@tanstack/react-query";
// import axios from "axios";
// import { content } from "../content/content.js";
// import AnimatedButton from "./AnimatedButton";
// import ImageCard from "./ImageCard";
// import SectionTitle from "./SectionTitle.jsx";

// const LatestNews = () => {
//   const { title, viewMoreButton } = content.en.latestNews;
//   const { data: latestNews = [] } = useQuery({
//     queryKey: ["latestNews"],
//     queryFn: async () => {
//       const res = await axios.get("/latestNewsData.json");
//       return res.data;
//     },
//   });

//   return (
//     <div className="mt-40">
//       <SectionTitle
//         title={title}
//         iconPositionClass="-top-[30px] left-[55px] xl:left-[500px] 2xl:left-[635px]"
//         iconWidth="w-7"
//         iconHeight="h-11"
//       ></SectionTitle>

//       {/* Looping Latest News with map() */}
//       <div className="grid grid-cols-3 gap-4 mx-[150px] 2xl:mx-[280px] mb-24">
//         {latestNews.map((singleNews, index) => (
//           <ImageCard key={index} singleNews={singleNews}></ImageCard>
//         ))}
//       </div>

//       <div className="flex justify-center">
//         <AnimatedButton
//           /*  label={"View More"}
//           labelColor={"white"}
//           bgColor={"#0B714C"} */
//           label={viewMoreButton.label}
//           labelColor={viewMoreButton.labelColor}
//           bgColor={viewMoreButton.bgColor}
//         ></AnimatedButton>
//       </div>
//     </div>
//   );
// };

// export default LatestNews;

// import { useQuery } from "@tanstack/react-query";
// import axios from "axios";
// import { content } from "../content/content.js";
// import AnimatedButton from "./AnimatedButton";
// import ImageCard from "./ImageCard";
// import SectionTitle from "./SectionTitle.jsx";

// const LatestNews = () => {
//   const { title, viewMoreButton } = content.en.latestNews;
//   const { data: latestNews = [] } = useQuery({
//     queryKey: ["latestNews"],
//     queryFn: async () => {
//       const res = await axios.get("/latestNewsData.json");
//       return res.data;
//     },
//   });

//   return (
//     <div className="mt-20 md:mt-40">
//       <SectionTitle
//         title={title}
//         iconPositionClass="-top-[13px] xl:-top-[30px] left-[95px] xl:left-[500px] 2xl:left-[635px]"
//         iconWidth="w-5 xl:w-8"
//         iconHeight="h-7 xl:h-12"
//       />

//       {/* Mobile swipeable horizontal scroll container */}
//       <div className="md:hidden px-4 mb-8 overflow-x-auto scrollbar-hide">
//         <div className="flex space-x-4 pb-4 w-max">
//           {latestNews.map((singleNews, index) => (
//             <div key={index} className="flex-shrink-0">
//               <ImageCard singleNews={singleNews} />
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Desktop grid layout - hidden on mobile */}
//       <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-4 md:mx-[150px] 2xl:mx-[280px] mb-12 md:mb-24">
//         {latestNews.map((singleNews, index) => (
//           <ImageCard key={index} singleNews={singleNews} />
//         ))}
//       </div>

//       <div className="flex justify-center">
//         <AnimatedButton
//           label={viewMoreButton.label}
//           labelColor={viewMoreButton.labelColor}
//           bgColor={viewMoreButton.bgColor}
//           url={"/news"}
//         />
//       </div>
//     </div>
//   );
// };

// export default LatestNews;

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useLocation } from "react-router"; // Add this import
import { content } from "../content/content.js";
import AnimatedButton from "./AnimatedButton";
import ImageCard from "./ImageCard";
import SectionTitle from "./SectionTitle.jsx";

const LatestNews = () => {
  const { title, viewMoreButton } = content.en.latestNews;
  const location = useLocation(); // Get current location
  const isHomePage = location.pathname === "/" || location.pathname === "/home";

  const { data: latestNews = [] } = useQuery({
    queryKey: ["latestNews"],
    queryFn: async () => {
      const res = await axios.get("/latestNewsData.json");
      return res.data;
    },
  });

  // Display either 3 or all items based on current page
  const displayedNews = isHomePage ? latestNews.slice(0, 3) : latestNews;

  return (
    <div className="mt-20 md:mt-40">
      <SectionTitle
        title={title}
        iconPositionClass="-top-[13px] xl:-top-[30px] left-[95px] xl:left-[500px] 2xl:left-[635px]"
        iconWidth="w-5 xl:w-8"
        iconHeight="h-7 xl:h-12"
      />

      {/* Mobile swipeable horizontal scroll container */}
      <div className="md:hidden px-4 mb-8 overflow-x-auto scrollbar-hide">
        <div className="flex space-x-4 pb-4 w-max">
          {displayedNews.map((singleNews, index) => (
            <div key={index} className="flex-shrink-0">
              <ImageCard singleNews={singleNews} />
            </div>
          ))}
        </div>
      </div>

      {/* Desktop grid layout - hidden on mobile */}
      <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-4 md:mx-[150px] 2xl:mx-[280px] mb-12 md:mb-24">
        {displayedNews.map((singleNews, index) => {
          const paths = ["/blogOne", "/blogTwo"];
          const path = paths[index] || "";

          return <ImageCard key={index} singleNews={singleNews} url={path} />;
        })}
      </div>

      {/* Only show the View More button on the home page */}
      {isHomePage && (
        <div className="flex justify-center">
          <AnimatedButton
            label={viewMoreButton.label}
            labelColor={viewMoreButton.labelColor}
            bgColor={viewMoreButton.bgColor}
            url={"/news"}
          />
        </div>
      )}
    </div>
  );
};

export default LatestNews;
