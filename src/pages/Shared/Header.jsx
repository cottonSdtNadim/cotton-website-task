import greenLeafSmallIcon from "../../assets/images/green-leaf-small-icon.png";
import leftGreenLeafVector from "../../assets/images/left-green-leaf-vector.png";
import rightGreenLeafVector from "../../assets/images/right-green-leaf-vector.png";
import AnimatedButton from "../../components/AnimatedButton";
import { content } from "../../content/content.js";
import Navbar from "./Navbar";

const Header = () => {
  const { bengaliText, englishText, aboutUsButton } = content.en.header;

  return (
    <div>
      <Navbar></Navbar>

      <div className="mt-[50px]">
        {" "}
        {/* xl:mt-12 2xl:mt-16 */}
        <img
          src={leftGreenLeafVector}
          alt=""
          className="absolute top-30 left-0 w-[200px] h-[600px]"
          // className="absolute xl:top-30 xl:left-0 xl:w-48 xl:h-screen 2xl:top-40 2xl:left-0 2xl:w-56 2xl:h-screen"
        />
        {/* Header Container */}
        <div className="relative xl:px-56 2xl:px-60">
          {" "}
          {/* px-[231px] */}
          <div className="relative">
            <img
              src={greenLeafSmallIcon}
              alt=""
              className="absolute top-[-10px] left-[-30px] w-8 h-8"
              //  className="absolute xl:-top-2.5 xl:-left-8 xl:w-8 xl:h-11 2xl:-top-5 2xl:-left-10 2xl:w-10 2xl:h-14"
            />
            {/* Bengali Text */}
            <h3
              className="text-3xl font-medium bengali-text"
              // className="lg:text-3xl xl:text-4xl font-medium bengali-text"
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
