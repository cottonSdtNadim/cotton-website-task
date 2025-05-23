import PropTypes from "prop-types";

const AwardCard = ({ award }) => {
  const { awardName, awardYear, medal } = award;
  
  return (
    <div className="bg-white rounded-xl w-[300px] h-[250px] relative p-6 shadow-md"> {/* w-[341px] h-[271px] */}
      <h2 className="text-lg font-bold text-[#0B714C] pr-10">{awardName}</h2>
      <p className="text-lg font-normal text-[#0B714C] absolute bottom-6 left-6">{awardYear}</p>
      <img 
        src={medal} 
        alt="Award medal" 
        className="absolute top-0 right-0 w-14 h-14" 
      />
    </div>
  );
};

AwardCard.propTypes = {
  award: PropTypes.object.isRequired,
};

export default AwardCard;