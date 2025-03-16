import PropTypes from "prop-types";
import Navbar from "./Navbar";

const Cover = ({ image, heading, subHeading = "" }) => {
  return (
    <div className="relative">
      <div
        className="w-full h-screen"
        style={{
          backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.40) 0%, rgba(0, 0, 0, 0.40) 100%), url(${image})`,
          backgroundPosition: "50%",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute top-0 left-0 right-0 z-10">
          <Navbar nonActiveTextColor="#F8FBFA" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-6xl font-bold text-white">{heading}</h1>
          {subHeading && (
            <h2 className="text-3xl text-white mt-4 text-center">{subHeading}</h2>
          )}
        </div>
      </div>
    </div>
  );
};

Cover.propTypes = {
  image: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  subHeading: PropTypes.string.isRequired,
};

export default Cover;
