import greenLeafSmallIcon from "../../assets/images/green-leaf-small-icon.png";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div>
      <Navbar></Navbar>

      {/* Header Container */}
      <div className="px-[231px]">
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
        <h1 className="font-extrabold text-5xl">
          We are a leading sustainability-inspired, 100% export-oriented
          readymade garments powerhouse
        </h1>

        <button className="text-white bg-[#0B714C] px-[20px] py-[8px] rounded-s-lg mt-[50px]">
          <span className="text-base font-semibold">About us</span>
        </button>
      </div>
    </div>
  );
};

export default Header;
