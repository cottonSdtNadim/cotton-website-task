import greenLeafSmallIcon from "../assets/images/green-leaf-small-icon.png";
import PropTypes from 'prop-types';

const SectionTitle = ({ title }) => {
    return (
      <div className="relative">
        <img src={greenLeafSmallIcon}
         alt="Green Leaf Small Icon"
         className="absolute top-[-25px] left-[495px] w-7 h-11"
         />
        <h1 className="text-center text-4xl font-extrabold">{title}</h1>
      </div>
    );
  };

  SectionTitle.propTypes = {
    title: PropTypes.string.isRequired
  }
  
  export default SectionTitle;
  