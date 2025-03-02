const textCard = ({ svg, textBold, textSmall }) => {
  return (
    <div className="bg-[#0B714C] rounded-2xl">
      {/* Svg */}
      <img src={svg} alt="" className="w-[65px] h-[65px]" />

      {/* Text Container */}
      <div>
        <h2 className="text-4xl ">{textBold}</h2>
        <p>{textSmall}</p>
      </div>
    </div>
  );
};

export default textCard;
