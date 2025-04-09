import factory from "../assets/images/getInTouch/factory.png";
import headOffice from "../assets/images/getInTouch/headOffice.png";
import AnimatedLink from "./AnimatedLink";
import MultiStepContactForm from "./MultiStepContactForm";

const GetInTouch = () => {
  return (
    <div className="container mx-auto px-4 lg:px-20 py-9">
      <div className="grid grid-cols-1 lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-12 gap-8">
        {/* Head Office and Factory Container */}
        <div className="lg:col-span-2 xl:col-span-2 2xl:col-span-4">
          {/* Head Office Container */}
          <div className="flex flex-col md:flex-row p-4 rounded-lg">
            <div className="md:w-1/3 max-w-[120px]">
              <img
                src={headOffice}
                alt="Head Office"
                className="object-cover w-full h-auto"
              />
            </div>
            <div className="md:ml-5 mt-3 md:mt-0">
              <h3 className="font-medium text-3xl mb-3">Head Office</h3>
              <div className="my-4 text-lg font-light">
                <p>Cotton House</p>
                <p>H# 2, R# 113/A</p>
                <p>Gulshan 2</p>
                <p>Dhaka 1212</p>
                <p>Bangladesh</p>
              </div>
              <AnimatedLink
                fontSize="text-xl"
                content={"View location"}
                color={"#0B714C"}
                fontWeight={"font-light"}
              />
            </div>
          </div>

          {/* Factory Container */}
          <div className="flex flex-col md:flex-row mt-8 p-4 rounded-lg">
            <div className="md:w-1/3 max-w-[120px]">
              <img
                src={factory}
                alt="Factory"
                className="object-cover w-full h-auto"
              />
            </div>
            <div className="md:ml-5 mt-3 md:mt-0">
              <h3 className="font-medium text-3xl mb-3">Factory</h3>
              <div className="my-4 text-lg font-light">
                <p>Village: Amtoli, Union: Habirbari</p>
                <p>Post Office: Seed Store Bazar</p>
                <p>Thana: Valuka, </p>
                <p>District: Mymensingh</p>
                <p>Bangladesh</p>
              </div>
              <AnimatedLink
                fontSize="text-xl"
                content={"View location"}
                color={"#0B714C"}
                fontWeight={"font-light"}
              />
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-3 xl:col-span-3 2xl:col-span-8 max-w-[1200px]">
          <MultiStepContactForm />
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
