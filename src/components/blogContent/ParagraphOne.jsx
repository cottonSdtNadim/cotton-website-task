import PropTypes from "prop-types";


const ParagraphOne = ({ header, paragraph }) => {
    return (
      <>
        <h2 className="text-2xl font-semibold my-10">{header}</h2>
        <p className="text-lg font-light">{paragraph}</p>
      </>
    );
  };

  ParagraphOne.propTypes = {
    header: PropTypes.string.isRequired,
    paragraph: PropTypes.string.isRequired,
  };

  export default ParagraphOne;