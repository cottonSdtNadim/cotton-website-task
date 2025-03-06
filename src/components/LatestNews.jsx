import { useQuery } from "@tanstack/react-query";
import axios from "axios";
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
      <div>{latestNews.length}</div>
    </div>
  );
};

export default LatestNews;
