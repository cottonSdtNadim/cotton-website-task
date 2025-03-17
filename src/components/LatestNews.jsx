import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { content } from "../content/content.js";
import AnimatedButton from "./AnimatedButton";
import ImageCard from "./ImageCard";
import SectionTitle from "./SectionTitle.jsx";

const LatestNews = () => {
  const { title, viewMoreButton } = content.en.latestNews;
  const { data: latestNews = [] } = useQuery({
    queryKey: ["latestNews"],
    queryFn: async () => {
      const res = await axios.get("/latestNewsData.json");
      return res.data;
    },
  });

  return (
    <div className="mt-[164px]">
      <SectionTitle
        // title={"Latest News"}
        title={title}
        iconTop="-30px"
        iconLeft="495px"
        iconWidth="w-7"
        iconHeight="h-11"
      ></SectionTitle>

      {/* Looping Latest News with map() */}
      <div className="grid grid-cols-3 gap-4 mx-[141px] mb-24">
        {latestNews.map((singleNews, index) => (
          <ImageCard key={index} singleNews={singleNews}></ImageCard>
        ))}
      </div>

      <div className="flex justify-center">
        <AnimatedButton
          /*  label={"View More"}
          labelColor={"white"}
          bgColor={"#0B714C"} */
          label={viewMoreButton.label}
          labelColor={viewMoreButton.labelColor}
          bgColor={viewMoreButton.bgColor}
        ></AnimatedButton>
      </div>
    </div>
  );
};

export default LatestNews;
