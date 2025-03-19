import image from '../assets/images/factory-inside.jpg'
import Certified from '../components/Certified';
import OurCompanies from '../components/OurCompanies';
import Cover from './Shared/Cover';
import ImageCardTimelineSlider from "../components/ImageCardTimelineSlider.jsx"
import OurMessage from '../components/OurMessage.jsx';
import ImageCardButtonGroup from '../components/ImageCardButtonGroup.jsx';
import OurVisionaries from '../components/OurVisionaries.jsx';
import OurAwards from '../components/OurAwards.jsx';

const AboutCotton = () => {
    return (
        <div>
           <Cover image={image} heading={"Our Story"}></Cover>
           <Certified></Certified>
           <OurCompanies></OurCompanies>
           <ImageCardTimelineSlider></ImageCardTimelineSlider>
           <OurMessage></OurMessage>
           <ImageCardButtonGroup></ImageCardButtonGroup>
           <OurVisionaries></OurVisionaries>
           <OurAwards></OurAwards>
        </div>
    );
};

export default AboutCotton;