import headOffice from "../assets/images/getInTouch/headOffice.png";
import AnimatedLink from "./AnimatedLink";
import factory from "../assets/images/getInTouch/factory.png";
import MultiStepContactForm from "./MultiStepContactForm";

const GetInTouch = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 py-9 px-20">
      {/* Head Office and Factory Container */}
      <div>
        {/* Head Office Container */}
        <div className="flex border-2">
          <div>
            <img src={headOffice} alt="" className="object-cover" />
          </div>
          <div className="ml-5">
            <h3 className="font-semibold text-xl mb-5">Head Office</h3>
            <div className="space-y-1 my-6">
              <p className="text-base">Cotton House</p>
              <p className="text-base">H# 2, R# 113/A</p>
              <p className="text-base">Gulshan 2</p>
              <p className="text-base">Dhaka 1212</p>
              <p className="text-base">Bangladesh</p>
            </div>
            <AnimatedLink
              content={"View location"}
              color={"#0B714C"}
            ></AnimatedLink>
          </div>
        </div>

        {/* Factory Container */}
        <div className="flex mt-7">
          <div>
            <img src={factory} alt="" className="object-cover" />
          </div>
          <div className="ml-5">
            <h3 className="font-semibold text-xl mb-5">Factory</h3>
            <div className="space-y-1 my-6">
              <p className="text-base">Village: Amtoli, Union: Habirbari</p>
              <p className="text-base">Post Office: Seed Store Bazar</p>
              <p className="text-base">Thana: Valuka, </p>
              <p className="text-base">District: Mymensingh</p>
              <p className="text-base">Bangladesh</p>
            </div>
            <AnimatedLink
              content={"View location"}
              color={"#0B714C"}
            ></AnimatedLink>
          </div>
        </div>
      </div>
      <MultiStepContactForm></MultiStepContactForm>
    </div>
  );
};

export default GetInTouch;


