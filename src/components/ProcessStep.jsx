import PropTypes from "prop-types"

const ProcessStep = ({ icon, label, isActive }) => {
  return (
    <div className="flex flex-col items-center">
      <div
        className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 z-20 relative ${
          isActive ? "bg-[#0B714C]" : "bg-white border-2 border-[#0B714C]"
        }`}
      >
        <img
          src={icon || "/placeholder.svg"}
          alt={label}
          className="w-6 h-6"
          style={{
            filter: isActive
              ? "brightness(0) invert(1)"
              : "brightness(0) saturate(100%) invert(24%) sepia(98%) saturate(466%) hue-rotate(118deg) brightness(94%) contrast(103%)",
          }}
        />
      </div>
      <p className="text-base font-semibold text-center text-[#0B714C]">{label}</p>
    </div>
  )
}

ProcessStep.propTypes = {
  icon: PropTypes.string.isRequired, // expects a string for the icon image path
  label: PropTypes.string.isRequired, // expects a string for the label text
  isActive: PropTypes.bool, // indicates if the step is active/completed
}

ProcessStep.defaultProps = {
  isActive: false,
}

export default ProcessStep



