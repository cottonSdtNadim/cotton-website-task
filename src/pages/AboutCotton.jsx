import image from '../assets/images/factory-inside.jpg'
import Certified from '../components/Certified';
import Cover from './Shared/Cover';

const AboutCotton = () => {
    return (
        <div>
           <Cover image={image} heading={"Our Story"}></Cover>
           <Certified></Certified>
        </div>
    );
};

export default AboutCotton;