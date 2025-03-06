import ClientCollaborationHeader from "../../components/ClientCollaborationHeader";
import CustomerFirstMessage from "../../components/CustomerFirstMessage";
import ImageSlider from "../../components/ImageSlider";
import LatestNews from "../../components/LatestNews";
import Process from "../../components/Process";
import VideoModule from "../../components/VideoModule";

const Home = () => {
  return (
    <div className="my-52">
      <ImageSlider></ImageSlider>
      <Process></Process>
      <VideoModule></VideoModule>
      <ClientCollaborationHeader></ClientCollaborationHeader>
      <CustomerFirstMessage></CustomerFirstMessage>
      <LatestNews></LatestNews>
    </div>
  );
};

export default Home;
