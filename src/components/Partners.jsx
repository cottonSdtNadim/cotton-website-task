import aldi from "../assets/images/partners-logo/aldi.png";
import auchan from "../assets/images/partners-logo/auchan.png";
import bestSeller from "../assets/images/partners-logo/bestseller.png";
import caLayer from "../assets/images/partners-logo/CA_layer.png";
import carreFour from "../assets/images/partners-logo/carrefour.png";
import eciLogo from "../assets/images/partners-logo/eci-logo.png";
import kiabiLondon from "../assets/images/partners-logo/kiabi-london.png";
import layoutSetLogo from "../assets/images/partners-logo/layout-set-logo.jpg";
import logoDaRedoute from "../assets/images/partners-logo/logo-da-redoute.png";
import newYorker from "../assets/images/partners-logo/newyorker.png";
import next from "../assets/images/partners-logo/next.jpg";
import nkd from "../assets/images/partners-logo/nkd.png";
import teamAthletics from "../assets/images/partners-logo/team-athletics.png";
import topPNG from "../assets/images/partners-logo/top-png.png";
import trueWorths from "../assets/images/partners-logo/true-worth.jpg";
import verbaudets from "../assets/images/partners-logo/verbaudet.png";
import vfAsia from "../assets/images/partners-logo/vf-asia.png";
import { content } from "../content/content";
import SectionTitle from "./SectionTitle.jsx";
import LogoAnimation from "./LogoAnimation.jsx";

const partners = [
  aldi,
  auchan,
  bestSeller,
  caLayer,
  carreFour,
  eciLogo,
  kiabiLondon,
  layoutSetLogo,
  logoDaRedoute,
  newYorker,
  next,
  nkd,
  teamAthletics,
  topPNG,
  trueWorths,
  verbaudets,
  vfAsia,
];

const Partners = () => {
  // Calculate the width needed to ensure one complete set is always visible
  // This approach uses CSS to create a continuous flow effect
  const { header } = content.en.ourPartners;
  return (
    <div className="mt-32">
      <SectionTitle
        // title={"Our Partners"}
        title={header}
        iconTop="-30px"
        iconLeft="495px"
        iconWidth="w-8"
        iconHeight="h-12"
      ></SectionTitle>

     <LogoAnimation 
     logos={partners}
     width={"w-40"}
     height={"h-16"}
     ></LogoAnimation>
    </div>
  );
};

export default Partners; 
