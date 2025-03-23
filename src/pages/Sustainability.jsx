import sustainability from "../assets/images/covers/sustainability.jpg";
import Cover from "./Shared/Cover";

const Sustainability = () => {
  return (
    <div>
      <Cover
        image={sustainability}
        subHeading="We believe in"
        heading={
          <>
            Doing well <br />
            by doing good
          </>
        }
        pagename="sustainability"
      ></Cover>
    </div>
  );
};

export default Sustainability;
