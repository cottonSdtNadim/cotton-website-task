import ClientCollaborationHeader from "../../components/ClientCollaborationHeader";
import CustomerFirstMessage from "../../components/CustomerFirstMessage";
import ImageSlider from "../../components/ImageSlider";
import LatestNews from "../../components/LatestNews";
import Partners from "../../components/Partners";
import Process from "../../components/Process";
import ReadOurStory from "../../components/ReadOurStory";
import TrendSetterPopup from "../../components/TrendSetterPopUp";
import VideoModule from "../../components/VideoModule";

const Home = () => {
  return (
    <>
      <div>
        <div className="my-9 xl:my-64 2xl:my-52">
          <TrendSetterPopup></TrendSetterPopup>
          <ImageSlider></ImageSlider>
          <Process></Process>
          <VideoModule></VideoModule>
        </div>
        <div>
          <ClientCollaborationHeader></ClientCollaborationHeader>
        </div>
        <div className="my-9 xl:my-64 2xl:my-52">
          {/*  */}
          <CustomerFirstMessage></CustomerFirstMessage>
          <LatestNews></LatestNews>
          <Partners></Partners>
          <ReadOurStory></ReadOurStory>
        </div>
      </div>
    </>
  );
};

export default Home;
