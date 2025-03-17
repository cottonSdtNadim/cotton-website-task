import image from '../assets/images/factory-inside.jpg'
import Certified from '../components/Certified';
import OurCompanies from '../components/OurCompanies';
import Cover from './Shared/Cover';
import ImageCardTimelineSlider from "../components/ImageCardTimelineSlider.jsx"

const AboutCotton = () => {
    return (
        <div>
           <Cover image={image} heading={"Our Story"}></Cover>
           <Certified></Certified>
           <OurCompanies></OurCompanies>
           <ImageCardTimelineSlider></ImageCardTimelineSlider>
        </div>
    );
};

export default AboutCotton;