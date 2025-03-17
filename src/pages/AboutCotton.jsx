import image from '../assets/images/factory-inside.jpg'
import Certified from '../components/Certified';
import OurCompanies from '../components/OurCompanies';
import Cover from './Shared/Cover';

const AboutCotton = () => {
    return (
        <div>
           <Cover image={image} heading={"Our Story"}></Cover>
           <Certified></Certified>
           <OurCompanies></OurCompanies>
        </div>
    );
};

export default AboutCotton;