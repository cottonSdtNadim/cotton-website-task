import AnimatedButton from "./AnimatedButton";
import SectionTitle from "./SectionTitle";

const CatalogButton = () => {
  return (
    <div className="xl:mt-52 xl:mb-36 mb-20">
      <SectionTitle
        title={"Want to learn more? Download our catalog."}
        iconPositionClass="-top-[13px] xl:-top-[30px] left-[45px] xl:left-[200px] 2xl:left-[340px]"
        iconWidth="w-5 xl:w-8"
        iconHeight="h-7 xl:h-12"
        marginBottom="mb-11"
      ></SectionTitle>
      <div className="flex flex-col xl:flex-row justify-center items-center gap-4 xl:gap-16">
        <AnimatedButton
          label={"Download Catalog"}
          labelColor={"white"}
          bgColor={"#0B714C"}
        ></AnimatedButton>
        <AnimatedButton
          label={"Learn More About Cotton"}
          labelColor={"#0B714C"}
          bgColor={"#B2D4C9"}
          url={"/aboutCotton"}
        ></AnimatedButton>
      </div>
    </div>
  );
};

export default CatalogButton;
