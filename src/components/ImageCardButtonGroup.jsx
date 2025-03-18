import { useState } from "react";
import image1 from "../assets/images/our-values/image-1.jpg";
import image2 from "../assets/images/our-values/image-2.jpg";
import image3 from "../assets/images/our-values/image-3.jpg";
import image4 from "../assets/images/our-values/image-4.jpg";
import image5 from "../assets/images/our-values/image-5.jpg";
import image6 from "../assets/images/our-values/image-6.jpg";
import { content } from "../content/content";
import SectionTitle from "./SectionTitle";
import { motion } from "motion/react";

const ImageCardButtonGroup = () => {
  const { header } = content.en.ourStoryPage.ourCoreValues;
  const [activeButton, setActiveButton] = useState("Customer Value");

  const imageButtonCards = [
    {
      buttonName: "Customer Value",
      image: image1,
      textContent:
        "Our customers are the reason for our existence and the only guarantee to our future. We recognize them as our partners and are committed to listen and respond positively to their needs.",
    },
    {
      buttonName: "Empowerment",
      image: image2,
      textContent:
        "We take care of our own and foster a team spirit while encouraging initiative and risk-taking.",
    },
    {
      buttonName: "Excellence",
      image: image3,
      textContent:
        "We are passionate about maintaining the highest level of excellence in our employees, products and services we provide for our customers, which drives our quest for excellence.",
    },
    {
      buttonName: "Openness",
      image: image4,
      textContent:
        "Exploring new ways to continually grow our business through teamwork creates channels for growth. We are open to change and new ideas from our employees, customers and others to develop innovative solutions based on trust and mutual respect.",
    },
    {
      buttonName: "Respect",
      image: image5,
      textContent:
        "We value the diversity of talents, perspectives and experiences of others, and seek to treat one another the way we want to be treated. Respect is earned, not given.",
    },
    {
      buttonName: "Integrity",
      image: image6,
      textContent:
        "Integrity is the hallmark of our business. To be fair, honest and ethical in our conduct is of utmost importance to us.",
    },
  ];

  const activeCard = imageButtonCards.find(
    (card) => card.buttonName === activeButton
  );

  // Calculate the fixed height based on the number of buttons
  // Each button is approximately 64px (py-4 = 2rem = 32px top + bottom) plus gaps
  const buttonCount = imageButtonCards.length;
  const totalButtonsHeight = buttonCount * 64 + (buttonCount - 1) * 16; // 64px per button + 16px gap between

  return (
    <div className="mx-40">
      <SectionTitle
        title={header}
        iconTop="-30px"
        iconLeft="305px"
        iconWidth="w-8"
        iconHeight="h-12"
      />

      <div className="flex flex-col md:flex-row gap-6 mb-60">
        {/* Left column - Buttons */}
        <div className="md:w-1/3 flex flex-col gap-4">
          {imageButtonCards.map((item) => (
            <button
              key={item.buttonName}
              className={`py-4 px-6 text-center rounded-xl transition-all duration-300 border-2 ${
                activeButton === item.buttonName
                  ? "bg-emerald-700 text-white border-emerald-700"
                  : "bg-white text-gray-800 border-gray-200 hover:bg-gray-50"
              }`}
              onClick={() => setActiveButton(item.buttonName)}
            >
              <span className="font-medium text-lg">{item.buttonName}</span>
            </button>
          ))}
        </div>

        {/* Right column - Content Card with fixed height */}
        <div className="md:w-2/3">
          <motion.div
            className="bg-emerald-700 rounded-xl overflow-hidden text-white px-9 pt-10 flex flex-col"
            style={{ height: `${totalButtonsHeight}px` }}
            layout
          >
            <>
              {activeCard && (
                <motion.div
                  key={activeButton}
                  initial={{ opacity: 0, }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col"
                >
                  {activeCard.image && (
                    <motion.div 
                      className="mb-4 flex justify-center"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <img
                        src={activeCard.image}
                        alt={activeCard.buttonName}
                        className="w-[550px] h-[190px] rounded-md object-cover"
                      />
                    </motion.div>
                  )}
                  <motion.p 
                    className="text-lg leading-relaxed mb-20 mt-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    {activeCard.textContent}
                  </motion.p>
                </motion.div>
              )}
            </>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ImageCardButtonGroup;