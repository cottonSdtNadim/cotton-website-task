import fintra from "../assets/images/sister-concerns/Fintra.png";
import bengalCommercialBank from "../assets/images/sister-concerns/bengal-commercial-bank.png";
import bestInsurance from "../assets/images/sister-concerns/best-insurance.png";
import bgtel from "../assets/images/sister-concerns/bgTel.png";
import jamunaBank from "../assets/images/sister-concerns/jamuna-bank.png";

const SisterConcerns = () => {
  return (
    <div className="mt-36 mb-44">
      <p className="text-2xl font-light px-[230px] mb-40 leading-relaxed">
        Cotton Group&apos;s influence spans across pivotal industries, with our
        Board members holding director-level positions in Banking, Insurance,
        Telecom, and Securities Brokerage. This strategic leadership defines our
        role in shaping and impacting these interconnected sectors of
        Bangladesh, emphasizing our dynamic presence and substantial
        contributions.
      </p>

      {/* Sister Concerns Container */}

      {/* Best Insurance, Jamuna bank, BG Tel */}
      <div className="grid grid-cols-3 gap-x-10 px-48 mb-10">
        <div className="flex justify-center items-center">
          <img
            src={bestInsurance}
            alt="Best Life Insurance"
            className="w-[201px] h-[216px] object-contain"
          />
        </div>
        <div className="flex justify-center items-center">
          <img
            src={jamunaBank}
            alt="Jamuna Bank"
            className="w-[370px] h-[55px] object-contain"
          />
        </div>
        <div className="flex justify-center items-center">
          <img
            src={bgtel}
            alt="BG Tel"
            className="w-[153px] h-[180px] object-contain"
          />
        </div>
      </div>

      {/* Bengal Commercial Bank, Fintra */}
      <div className="grid grid-cols-2 gap-x-16 px-56 mt-8">
        <div className="flex justify-end items-center">
          <img
            src={bengalCommercialBank}
            alt="Bengal Commercial Bank"
            className="w-[302px] h-[250px] object-contain"
          />
        </div>
        <div className="flex justify-start items-center">
          <img
            src={fintra}
            alt="Fintra Securities Limited"
            className="w-[281px] h-[220px] object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default SisterConcerns;
