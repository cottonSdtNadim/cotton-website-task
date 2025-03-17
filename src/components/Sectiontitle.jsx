// import greenLeafSmallIcon from "../assets/images/green-leaf-small-icon.png";
// import PropTypes from 'prop-types';

// const SectionTitle = ({ title }) => {
//     return (
//       <div className="relative mb-20">
//         <img src={greenLeafSmallIcon}
//          alt="Green Leaf Small Icon"
//          className="absolute top-[-25px] left-[495px] w-7 h-11"
//          />
//         <h1 className="text-center text-4xl font-extrabold">{title}</h1>
//       </div>
//     );
//   };

//   SectionTitle.propTypes = {
//     title: PropTypes.string.isRequired
//   }
  
//   export default SectionTitle;


import greenLeafSmallIcon from "../assets/images/green-leaf-small-icon.png";
import PropTypes from 'prop-types';

const SectionTitle = ({ title, iconTop, iconLeft, iconWidth, iconHeight }) => {
  return (
    <div className="relative mb-20">
      <img
        src={greenLeafSmallIcon}
        alt="Green Leaf Small Icon"
        className="absolute"
        style={{
          top: iconTop,
          left: iconLeft,
          width: iconWidth,
          height: iconHeight,
        }}
      />
      <h1 className="text-center text-4xl font-extrabold">{title}</h1>
    </div>
  );
};

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
  iconTop: PropTypes.string,        
  iconLeft: PropTypes.string,       
  iconWidth: PropTypes.string,      
  iconHeight: PropTypes.string,    
};

SectionTitle.defaultProps = {
  iconTop: '-25px',
  iconLeft: '495px',
  iconWidth: 'w-7',
  iconHeight: 'h-11',
};

export default SectionTitle;

  