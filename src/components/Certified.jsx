import certified from "../assets/certified-images/certified.svg";

const Certified = () => {
  return (
    <div className="mt-28 flex justify-center items-center leading-relaxed">
      <p className="w-[512px] h-[348px] text-[#000000] text-3xl font-medium mr-7">
        We seek to empower communities of creators, customers and partners by
        crafting products of utmost quality while mitigating environmental
        footprints along the entire value chain in which we operate.
      </p>
      <img src={certified} alt="" />
    </div>
  );
};

export default Certified;
