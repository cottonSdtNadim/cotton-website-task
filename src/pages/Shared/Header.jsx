import greenLeafSmallIcon from "../../assets/images/green-leaf-small-icon.png";
import leftGreenLeafVector from "../../assets/images/left-green-leaf-vector.png";
import rightGreenLeafMobile from "../../assets/images/right-green-leaf-mobile.png";
import rightGreenLeafVector from "../../assets/images/right-green-leaf-vector.png";
import AnimatedButton from "../../components/AnimatedButton";
import { content } from "../../content/content.js";
import Navbar from "./Navbar";

const Header = () => {
  const { bengaliText, englishText, aboutUsButton } = content.en.header;
  const {
    firstText,
    secondText,
    thirdText,
    fourthText,
    fifthText,
    sixthText,
    seventhText,
  } = content.en.header.englishTextMobile;

  return (
    <div>
      <Navbar></Navbar>

      <div className="mt-12 2xl:mt-16">
        {" "}
        {/* mt-[50px] */}
        <img
          src={leftGreenLeafVector}
          alt=""
          // className="absolute top-30 left-0 w-[200px] h-[600px]"
          className="absolute top-28 left-0  w-48 h-[600px] hidden lg:block" /* 2xl:left-[185px] */
        />
        {/* Header Container */}
        <div className="relative pl-5 pr-10 xl:px-56">
          {/* px-[231px] */}
          <div className="relative">
            <img
              src={greenLeafSmallIcon}
              alt=""
              // className="absolute top-[-10px] left-[-30px] w-8 h-8"
              className="absolute -top-7 -left-7 w-8 h-11 hidden lg:block"
            />
            {/* Bengali Text */}
            <h3 className="text-4xl font-medium bengali-text hidden lg:block">
              {bengaliText}
            </h3>
          </div>
          {/* English Text */}
          <h1 className="font-extrabold text-3xl xl:text-4xl 2xl:text-5xl mb-9 leading-tight tracking-tight z-30 relative">
            <span className="block lg:hidden">
              {firstText} <br /> {secondText} <br /> {thirdText}
              <br /> {fourthText}
              <br /> {fifthText}
              <br /> {sixthText}
              <br /> {seventhText}
            </span>
            <span className="hidden lg:block">{englishText}</span>
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
          src={rightGreenLeafMobile}
          alt=""
          className="absolute top-25 right-0 w-24 h-60 block lg:hidden z-10"
        />
        <img
          src={rightGreenLeafVector}
          alt=""
          // className="absolute top-100 right-0 w-[100px] h-[272px] "
          className="absolute top-100 right-0  w-28 h-72 hidden lg:block"
        /> {/* 2xl:right-[185px] */}
      </div>
    </div>
  );
};

export default Header;
