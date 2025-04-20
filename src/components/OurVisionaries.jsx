// import chairman from "../assets/images/visionaries/chairman.jpg";
// import director from "../assets/images/visionaries/director.jpg";
// import ed from "../assets/images/visionaries/ED.jpg";
// import md from "../assets/images/visionaries/MD.jpg";
// import SectionTitle from "../components/SectionTitle.jsx";
// import VisionaryPersonCard from "./VisionaryPersonCard.jsx";

// const visionaries = [
//   {
//     id: 1,
//     name: "Shaheen Mahmud",
//     designation: "Founder and Chairman",
//     image: chairman,
//   },
//   {
//     id: 2,
//     name: "Tasmin Mahmud",
//     designation: "Director",
//     image: director,
//   },
//   {
//     id: 3,
//     name: "Mohammad Hasan",
//     designation: "Managing Director",
//     image: md,
//   },
//   {
//     id: 4,
//     name: "Mir Azizul Karim",
//     designation: "Executive Director",
//     image: ed,
//   },
// ];

// const OurVisionaries = () => {
//   return (
//     <div>
//       <SectionTitle
//         title={"Meet Our Visionaries"}
//          iconPositionClass="-top-[13px] xl:-top-[30px] left-[40px] xl:left-[415px] 2xl:left-[550px]"
//         iconWidth="w-5 xl:w-8"
//         iconHeight="h-7 xl:h-12"
//       ></SectionTitle>

//       <div className="grid grid-cols-4 gap-12 px-16 2xl:px-40">
//         {visionaries.map((person) => (
//           <VisionaryPersonCard
//             key={person.id}
//             person={person}
//           ></VisionaryPersonCard>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default OurVisionaries;


import { useMediaQuery } from "../hooks/useMediaQuery.jsx"
import chairman from "../assets/images/visionaries/chairman.jpg"
import director from "../assets/images/visionaries/director.jpg"
import ed from "../assets/images/visionaries/ED.jpg"
import md from "../assets/images/visionaries/MD.jpg"
import SectionTitle from "../components/SectionTitle.jsx"
import VisionaryPersonCard from "./VisionaryPersonCard.jsx"
import MobileVisionaryCarousel from "./MobileVisionaryCarousel.jsx"

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
]

const OurVisionaries = () => {
  const isMobile = useMediaQuery("(max-width: 768px)")

  return (
    <div>
      <SectionTitle
        title={"Meet Our Visionaries"}
        iconPositionClass="-top-[13px] xl:-top-[30px] left-[40px] xl:left-[415px] 2xl:left-[550px]"
        iconWidth="w-5 xl:w-8"
        iconHeight="h-7 xl:h-12"
      />

      {/* Mobile Carousel */}
      <MobileVisionaryCarousel visionaries={visionaries} />

      {/* Desktop Grid - Only show on non-mobile */}
      {!isMobile && (
        <div className="grid grid-cols-4 gap-12 px-16 2xl:px-40">
          {visionaries.map((person) => (
            <VisionaryPersonCard key={person.id} person={person} />
          ))}
        </div>
      )}
    </div>
  )
}

export default OurVisionaries
