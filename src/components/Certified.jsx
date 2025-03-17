import certified from "../assets/certified-images/certified.svg";
import sedex from "../assets/certified-images/sedex.png";
import organic from "../assets/certified-images/organic.png";
import leftRightArrow from "../assets/certified-images/right-left-arrow.png";
import AFA from "../assets/certified-images/AFA.png";
import WRAP from "../assets/certified-images/WRAP.png";
import confidence from "../assets/certified-images/confidence.png";
import swedenTextile from "../assets/certified-images/sweden-textile.png";
import amfori from "../assets/certified-images/amfori.png";
import rso from "../assets/certified-images/rso.png";
import bci from "../assets/certified-images/bci.png";
import global from "../assets/certified-images/global.png";

const Certified = () => {
  return (
    <div className="mt-28 flex justify-center items-center">
      <p className="w-[512px] h-[348px] text-[#000000] text-3xl font-medium text-left mb-10">
        We seek to empower communities of creators, customers, and partners by
        crafting products of utmost quality while mitigating environmental
        footprints along the entire value chain in which we operate.
      </p>
      <div className="relative w-[400px] h-[400px] flex justify-center items-center ml-8 bottom-8">
        {/* Center Image */}
        <img src={certified} alt="Certified" className="absolute z-10 left-32"/>

        {/* Surrounding Images */}
        <img src={sedex} alt="Sedex" className="absolute top-[-5%] left-1/2 transform -translate-x-1/2" />
        <img src={organic} alt="Sweden Textile" className="absolute top-[10%] right-[15%]" />
        <img src={leftRightArrow} alt="Sweden Textile" className="absolute top-[25%] right-[1%]" />
        {/* <img src={organic} alt="Organic" className="absolute bottom-0 left-1/2 transform -translate-x-1/2" /> */}
        <img src={AFA} alt="AFA" className="absolute right-0 top-[52%] transform -translate-y-1/2" />
        <img src={WRAP} alt="WRAP" className="absolute right-4 top-72 transform -translate-y-1/2" />
        <img src={confidence} alt="Confidence" className="absolute top-[75%] right-[25%]" />
        <img src={swedenTextile} alt="Confidence" className="absolute top-[77%] right-[55%]" />
        <img src={amfori} alt="Amfori" className="absolute bottom-[20%] left-[8%]" />
        <img src={rso} alt="RSO" className="absolute bottom-[35%] left-[5%]" />
        <img src={bci} alt="RSO" className="absolute bottom-[55%] left-[5%]" />
        <img src={global} alt="RSO" className="absolute bottom-[75%] left-[8%]" />
      </div>
    </div>
  );
};

export default Certified;


