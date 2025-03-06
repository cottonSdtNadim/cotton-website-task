import SectionTitle from './Sectiontitle';
import aldi from '../assets/images/partners-logo/aldi.png';
import auchan from "../assets/images/partners-logo/auchan.png";

const partners = [aldi, auchan]

const Partners = () => {
    return (
        <div className='mt-32'>
            <SectionTitle title={"Our Partners"}></SectionTitle>

            {/* Looping partners array with map() */}
            <div>
                {
                    partners.map(partner => <>
                    <img src={partner} alt='' className='w-[150px] h-[70px]'  />    
                    </>)
                }
            </div>
        </div>
    );
};

export default Partners;