import healthAndSociety from "../assets/images/sustainability/health-and-safety.png";
import socialDistancing from "../assets/images/sustainability/social-distaining.png";
import operations from "../assets/images/sustainability/operations.png";
import cleaning from "../assets/images/sustainability/cleaning.png";
import communication from "../assets/images/sustainability/communication.png";
import ImageCardButtonGroup from "./ImageCardButtonGroup";
import { content } from "../content/content";

const SupportingOurPeople = () => {

  const {heading, paragraph} = content.en.sustainabilityPage.supportingOurPeople;

  const imageButtonCards = [
    {
      buttonName: "Health and safety",
      image: healthAndSociety,
      textContent:
        "Our employees, suppliers and visitors must wear personal protective equipment on site, and we continue to train our teams on operating procedures to help enforce safety measures.",
    },
    {
      buttonName: "Social Distaining",
      image: socialDistancing,
      textContent:
        "We have mandated that our employees physically distance themselves to limit the spread of COVID-19 – this means we keep a distance of at least 1m from each other and avoid spending time in crowded places or in groups.",
    },
    {
      buttonName: "Operations",
      image: operations,
      textContent:
        "We have reviewed our operating systems to ensure optimal performance.",
    },
    {
      buttonName: "Cleaning",
      image: cleaning,
      textContent:
        "We are cleaning common and high-traffic areas more frequently.",
    },
    {
      buttonName: "Communication",
      image: communication,
      textContent:
        "We continue to communicate with our facilities regularly on our procedures, new protocols, and any COVID-19 case detection."
    }
  ];

  return (
    <div className="mt-40 px-40">
      <h2 className="text-3xl uppercase">{heading}</h2>
      <p className="text-lg mt-5 font-light mb-40">
        {paragraph}
      </p>
      <ImageCardButtonGroup data={imageButtonCards} width={"w-36"} height={"h-36"}></ImageCardButtonGroup>
    </div>
  );
};

export default SupportingOurPeople;
