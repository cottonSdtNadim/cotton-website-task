import chairman from "../assets/images/visionaries/chairman.jpg";
import director from "../assets/images/visionaries/director.jpg";
import ed from "../assets/images/visionaries/ED.jpg";
import md from "../assets/images/visionaries/MD.jpg";
import SectionTitle from "../components/SectionTitle.jsx";
import VisionaryPersonCard from "./VisionaryPersonCard.jsx";

const visionaries = [
  {
    id: 1,
    name: "Shaheen Mahmud",
    designation: "Founder and Chairman",
    image: chairman,
  },
  {
    id: 2,
    name: "Tasmin Mahmud",
    designation: "Director",
    image: director,
  },
  {
    id: 3,
    name: "Mohammad Hasan",
    designation: "Managing Director",
    image: md,
  },
  {
    id: 4,
    name: "Mir Azizul Karim",
    designation: "Executive Director",
    image: ed,
  },
];

const OurVisionaries = () => {
  return (
    <div>
      <SectionTitle
        title={"Meet Our Visionaries"}
        iconTop="-30px"
        iconLeft="415px"
        iconWidth="w-8"
        iconHeight="h-12"
      ></SectionTitle>

      <div className="grid grid-cols-4 gap-12 px-16">
        {visionaries.map((person) => (
          <VisionaryPersonCard
            key={person.id}
            person={person}
          ></VisionaryPersonCard>
        ))}
      </div>
    </div>
  );
};

export default OurVisionaries;
