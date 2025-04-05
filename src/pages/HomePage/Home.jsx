import ClientCollaborationHeader from "../../components/ClientCollaborationHeader";
import CustomerFirstMessage from "../../components/CustomerFirstMessage";
import ImageSlider from "../../components/ImageSlider";
import LatestNews from "../../components/LatestNews";
import Partners from "../../components/Partners";
import Process from "../../components/Process";
import ReadOurStory from "../../components/ReadOurStory";
import VideoModule from "../../components/VideoModule";

const Home = () => {
  return (
    <div className="my-64 2xl:my-52">
      <ImageSlider></ImageSlider>
      <Process></Process>
      <VideoModule></VideoModule>
      <ClientCollaborationHeader></ClientCollaborationHeader>
      <CustomerFirstMessage></CustomerFirstMessage>
      <LatestNews></LatestNews>
      <Partners></Partners>
      <ReadOurStory></ReadOurStory>
    </div>
  );
};

export default Home;
