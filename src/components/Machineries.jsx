import buckner from "../assets/images/logos/buckner.png";
import comatex from "../assets/images/logos/comatex.jpg";
import corino from "../assets/images/logos/corino.jpg";
import dataColor from "../assets/images/logos/dataColor.jpg";
import duma from "../assets/images/logos/duma.jpg";
import elec from "../assets/images/logos/elec.jpg";
import gerber from "../assets/images/logos/gerber.jpg";
import hashima from "../assets/images/logos/hashima.jpg";
import ilsung from "../assets/images/logos/ilsung.jpg";
import james from "../assets/images/logos/james.jpg";
import juki from "../assets/images/logos/juki.png";
import kansai from "../assets/images/logos/kansai.png";
import lafer from "../assets/images/logos/lafer.jpg";
import mayer from "../assets/images/logos/mayer.png";
import santex from "../assets/images/logos/santex.jpg";
import sclavos from "../assets/images/logos/sclavos.jpg";
import tajima from "../assets/images/logos/tajima.jpg";
import textil from "../assets/images/logos/texttil.jpg";
import veit from "../assets/images/logos/veit.jpg";
import LogoAnimation from "./LogoAnimation.jsx";
import SectionTitle from "./SectionTitle";

const machineries = [
  buckner,
  comatex,
  corino,
  dataColor,
  duma,
  elec,
  gerber,
  hashima,
  ilsung,
  james,
  juki,
  kansai,
  lafer,
  mayer,
  santex,
  sclavos,
  tajima,
  textil,
  veit,
];

const Machineries = () => {
  return (
    <div className="mt-40 mb-48">
      <SectionTitle
        title={"Machineries we trust"}
        iconPositionClass="-top-[30px] left-[412px] 2xl:left-[545px]"
        iconWidth="w-8"
        iconHeight="h-12"
      ></SectionTitle>

      <LogoAnimation
        logos={machineries}
        width={"w-40"}
        height={"h-30"}
      ></LogoAnimation>
    </div>
  );
};

export default Machineries;
