import PropTypes from "prop-types";

const ProcessStep = ({ icon, label }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-12 h-12 rounded-full bg-[#0B714C] flex items-center justify-center mb-2 z-20 relative">
        <img
          src={icon}
          alt={label}
          className="w-6 h-6"
          style={{ filter: "brightness(0) invert(1)" }} // This makes the icon white
        />
      </div>
      <p className="text-base font-semibold text-center text-[#0B714C]">
        {label}
      </p>
    </div>
  );
};

ProcessStep.propTypes = {
  icon: PropTypes.string.isRequired, // expects a string for the icon image path
  label: PropTypes.string.isRequired, // expects a string for the label text
};

export default ProcessStep;
