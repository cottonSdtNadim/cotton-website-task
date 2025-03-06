import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import ImageCard from "./ImageCard";
import SectionTitle from "./Sectiontitle";

const LatestNews = () => {
  const { data: latestNews = [] } = useQuery({
    queryKey: ["latestNews"],
    queryFn: async () => {
      const res = await axios.get("/latestNewsData.json");
      return res.data;
    },
  });

  return (
    <div className="mt-[164px]">
      <SectionTitle title={"Latest News"}></SectionTitle>
      <div className="grid grid-cols-3 gap-4 mx-[141px]">
        {latestNews.map((singleNews, index) => (
          <ImageCard key={index} singleNews={singleNews}></ImageCard>
        ))}
      </div>
    </div>
  );
};

export default LatestNews;
