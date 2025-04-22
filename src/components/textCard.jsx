import PropTypes from "prop-types";

const TextCard = ({ svg, textBold, textSmall }) => {
  return (
    <div className="bg-[#0B714C] rounded-2xl flex justify-start items-center p-3.5 w-64 h-36 text-white"> {/* border-2 p-2 */}
      {/* Svg */}
      <img src={svg} alt="" className="w-[65px] h-[65px]" />

      {/* Text Container */}
      <div className="ml-2">
        <h2 className="text-4xl font-bold">{textBold}</h2>
        <p className="text-xs font-semibold uppercase">{textSmall}</p>
      </div>
    </div>
  );
};

// PropTypes for validation
TextCard.propTypes = {
  svg: PropTypes.string.isRequired, // expects a string for the image source URL
  textBold: PropTypes.string.isRequired, // expects a string for the bold text
  textSmall: PropTypes.string.isRequired, // expects a string for the small text
};

export default TextCard;
