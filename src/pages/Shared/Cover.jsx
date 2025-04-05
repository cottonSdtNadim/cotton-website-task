import PropTypes from "prop-types";
import Navbar from "./Navbar";

const Cover = ({ image, heading, subHeading = "" }) => {
  return (
    <div className="relative overflow-hidden">
      <div
        className="w-full h-[585px]" /* w-full h-screen */
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
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          {subHeading && (
            <h2 className="text-3xl text-white mb-4 text-center font-normal mt-24">
              {subHeading}
            </h2>
          )}
          <h1 className="text-5xl font-extrabold text-[#F8FBFA] text-center leading-20">
            {heading}
          </h1>
        </div>
      </div>
    </div>
  );
};

Cover.propTypes = {
  image: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  subHeading: PropTypes.string,
  pageName: PropTypes.string,
};

export default Cover;
