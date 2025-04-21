import PropTypes from "prop-types";

const ParagraphTwo = ({ subHeader, paragraph, image }) => {
  return (
    <>
      <h4 className="text-lg font-semibold mt-10">{subHeader}</h4>
      <p className="text-lg font-light mb-10">{paragraph}</p>
      <img src={image} alt="" />
    </>
  );
};

ParagraphTwo.propTypes = {
  subHeader: PropTypes.string.isRequired,
  paragraph: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default ParagraphTwo;
