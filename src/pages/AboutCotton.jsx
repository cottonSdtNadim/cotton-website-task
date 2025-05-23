import image from '../assets/images/factory-inside.jpg'
import Certified from '../components/Certified';
import OurCompanies from '../components/OurCompanies';
import Cover from './Shared/Cover';
import ImageCardTimelineSlider from "../components/ImageCardTimelineSlider.jsx"
import OurMessage from '../components/OurMessage.jsx';
// import ImageCardButtonGroup from '../components/ImageCardButtonGroup.jsx';
import OurVisionaries from '../components/OurVisionaries.jsx';
import OurAwards from '../components/OurAwards.jsx';
import SisterConcerns from '../components/SisterConcerns.jsx';
import { content } from '../content/content.js';
import OurCoreValues from '../components/OurCoreValues.jsx';

const AboutCotton = () => {
    const {header} = content.en.ourStoryPage;

    return (
        <div>
           <Cover image={image} heading={header}></Cover>
           <Certified></Certified>
           <OurCompanies></OurCompanies>
           <ImageCardTimelineSlider></ImageCardTimelineSlider>
           <OurMessage></OurMessage>
           {/* <ImageCardButtonGroup></ImageCardButtonGroup> */}
           <OurCoreValues></OurCoreValues>
           <OurVisionaries></OurVisionaries>
           <OurAwards></OurAwards>
           <SisterConcerns></SisterConcerns>
        </div>
    );
};

export default AboutCotton;