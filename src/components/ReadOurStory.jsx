import factoryInside from "../assets/images/factory-inside.jpg";
import AnimatedLink from "./AnimatedLink";

const ReadOurStory = () => {
  return (
    <div className="relative w-full mx-auto mt-24 max-w-6xl h-96 overflow-hidden rounded-lg">
      <div 
        className="w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(0deg, rgba(11, 113, 76, 0.60) 0%, rgba(11, 113, 76, 0.60) 100%), url(${factoryInside})`,
          backgroundColor: 'lightgray'
        }}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white"> 
          <h2 className="text-4xl font-bold text-center mb-2">
            We&apos;ve been here since 1991,
          </h2>
          <h2 className="text-4xl font-bold text-center mb-6">
            here&apos;s our story
          </h2>
          <AnimatedLink content={"Read the story"}></AnimatedLink>
        </div>
      </div>
    </div>
  );
};

export default ReadOurStory;