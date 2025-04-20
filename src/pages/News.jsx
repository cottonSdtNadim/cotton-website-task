import ImageSlider from "../components/ImageSlider";
import LatestNews from "../components/LatestNews";
import Footer from "./Shared/Footer";
import Navbar from "./Shared/Navbar";



const News = () => {
    return (
        <div>
            <Navbar></Navbar>
            <ImageSlider></ImageSlider>
            <LatestNews></LatestNews>
            <Footer></Footer>
        </div>
    );
};

export default News;