import PropTypes from "prop-types";
import greenLeafSmallIcon from "../assets/images/green-leaf-small-icon.png";

const SectionTitle = ({
  title,
  iconPositionClass,
  iconWidth,
  iconHeight,
  marginBottom = "mb-20",
}) => {
  return (
    <div className={`relative ${marginBottom}`}>
      <img
        src={greenLeafSmallIcon}
        alt="Green Leaf Small Icon"
        className={`absolute ${iconPositionClass} ${iconWidth} ${iconHeight}`}
      />
      <h1 className="text-center text-2xl xl:text-4xl font-extrabold">{title}</h1>
    </div>
  );
};

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
  iconWidth: PropTypes.string,
  iconHeight: PropTypes.string,
  iconPositionClass: PropTypes.string,
  marginBottom: PropTypes.string,
};


SectionTitle.defaultProps = {
  iconPositionClass: '-top-[25px] left-[495px] 2xl:left-[605px]',
  iconWidth: 'w-7',
  iconHeight: 'h-11',
  marginBottom: 'mb-20',
};

export default SectionTitle;
