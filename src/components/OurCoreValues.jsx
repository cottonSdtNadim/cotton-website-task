import image1 from "../assets/images/our-values/image-1.jpg";
import image2 from "../assets/images/our-values/image-2.jpg";
import image3 from "../assets/images/our-values/image-3.jpg";
import image4 from "../assets/images/our-values/image-4.jpg";
import image5 from "../assets/images/our-values/image-5.jpg";
import image6 from "../assets/images/our-values/image-6.jpg";
import { content } from "../content/content";
import ImageCardButtonGroup from "./ImageCardButtonGroup";
import SectionTitle from "./SectionTitle";

const OurCoreValues = () => {
  const { header } = content.en.ourStoryPage.ourCoreValues;

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

  return (
    <div>
      <SectionTitle
        title={header}
        iconPositionClass="-top-[30px] left-[18px] xl:left-[460px] 2xl:left-[595px]"
        iconWidth="w-8"
        iconHeight="h-12"
      />
      <ImageCardButtonGroup
        data={imageButtonCards}
        width={"w-[550px]"}
        height={"h-[190px]"}
      ></ImageCardButtonGroup>
    </div>
  );
};

export default OurCoreValues;

