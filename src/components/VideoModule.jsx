import video from "../assets/images/video-module.png";
import AnimatedButton from "./AnimatedButton";

const VideoModule = () => {
  return (
    <div>
      <img src={video} alt="A woman in the factory" className="px-[102px]" />

      {/* Text Container */}
      <div className="bg-[#0B714C] w-[377px] h-[550px] p-[38px]"
      style={{borderRadius: '0px 15px 15px 0px'}}
      >
        <h2 className="text-3xl text-white font-bold w-[309px]">Sustainability is integral to the way we do business.</h2>
        <p className="text-white mt-4">We see sustainability as more of an opportunity than an obligation. An opportunity to become more efficient, implement best practices in management and maintenance, contribute to a better quality of life in our communities and to help our partners meet their sustainability goals.</p>
        <AnimatedButton 
        label={"Learn More"}
        labelColor="#0B714C"
        bgColor="white"
        ></AnimatedButton>
      </div>
    </div>
  );
};

export default VideoModule;
