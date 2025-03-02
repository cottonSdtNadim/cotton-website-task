import greenLeafSmallIcon from "../../assets/images/green-leaf-small-icon.png";
import leftGreenLeafVector from "../../assets/images/left-green-leaf-vector.png";
import rightGreenLeafVector from "../../assets/images/right-green-leaf-vector.png";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div>
      <Navbar></Navbar>

      <div className="mt-[50px]">
        <img
          src={leftGreenLeafVector}
          alt=""
          className="absolute top-30 left-0 w-[200px] h-[600px] "
        />

        {/* Header Container */}
        <div className="relative px-[231px]">
          <div className="relative">
            <img
              src={greenLeafSmallIcon}
              alt=""
              className="absolute top-[-10px] left-[-30px] w-8 h-8"
            />
            {/* Bengali Text */}
            <h3
              className="text-3xl font-medium bengali-text"
              //   style={{ fontFamily: '"Noto Sans Bengali", sans-serif' }}
            >
              স্বাগতম
            </h3>
          </div>

          {/* English Text */}
          <h1
            className="font-extrabold text-5xl"
            // style={{ fontFamily: "Poppins" }}
          >
            We are a leading sustainability-inspired, 100% export-oriented
            readymade garments powerhouse
          </h1>

          {/* About Us Button */}
          <button className="text-white bg-[#0B714C] px-[20px] py-[8px] rounded-lg mt-[50px]">
            <span className="text-base font-semibold">About us</span>
          </button>
        </div>

        <img
          src={rightGreenLeafVector}
          alt=""
          className="absolute top-100 right-0 w-[100px] h-[272px] "
        />
      </div>
    </div>
  );
};

export default Header;
