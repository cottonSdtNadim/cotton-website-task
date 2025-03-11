import greenLeafSmallIcon from "../../assets/images/green-leaf-small-icon.png";
import leftGreenLeafVector from "../../assets/images/left-green-leaf-vector.png";
import rightGreenLeafVector from "../../assets/images/right-green-leaf-vector.png";
import AnimatedButton from "../../components/AnimatedButton";
import { content } from "../../content/content";
import Navbar from "./Navbar";

const Header = () => {
  const {bengaliText, englishText, aboutUsButton} = content.header;

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
              {/* স্বাগতম */}
              {bengaliText}
            </h3>
          </div>

          {/* English Text */}
          <h1
            className="font-extrabold text-5xl mb-9"
            // style={{ fontFamily: "Poppins" }}
          >
            {/* We are a leading sustainability-inspired, 100% export-oriented
            readymade garments powerhouse */}
            {englishText}
          </h1>
          {/* About Us Button */}
          <AnimatedButton
            /* label={"About us"}
            labelColor={"white"}
            bgColor={"#0B714C"} */
            label={aboutUsButton.label}
            labelColor={aboutUsButton.labelColor}
            bgColor={aboutUsButton.bgColor}
          ></AnimatedButton>
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
