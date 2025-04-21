import PropTypes from "prop-types";
import imgOne from "../assets/images/blogs/image-1.png";
import imgTwo from "../assets/images/blogs/image-2.png";
import imgThree from "../assets/images/blogs/image-3.png";
import imgFour from "../assets/images/blogs/image-4.png";
import imgFive from "../assets/images/blogs/image-5.png";
import sdgCover from "../assets/images/covers/sdg-cover.png";
import gerber from "../assets/images/gerber.png";
import { useMediaQuery } from "../hooks/useMediaQuery";
import Cover from "../pages/Shared/Cover";
import AnimatedButton from "./AnimatedButton";
import CatalogButton from "./CatalogButton";

const ParagraphOne = ({ header, paragraph }) => {
  return (
    <>
      <h2 className="text-2xl font-semibold my-10">{header}</h2>
      <p className="text-lg font-light">{paragraph}</p>
    </>
  );
};

const ParagraphTwo = ({ subHeader, paragraph, image }) => {
  return (
    <>
      <h4 className="text-lg font-semibold mt-10">{subHeader}</h4>
      <p className="text-lg font-light mb-10">{paragraph}</p>
      <img src={image} alt="" />
    </>
  );
};

const NavigateToTheNextBlog = () => {
  return (
    <div className="flex w-full max-w-md overflow-hidden rounded-2xl shadow-md">
      {/* Left side with text content */}
      <div className="bg-emerald-800 text-white flex flex-col justify-between p-4 w-5/6">
        <h2 className="text-2xl font-extrabold">Behind the Seams</h2>
        <p className="text-base font-semibold mt-auto">Next Post</p>
      </div>

      {/* Right side with image */}
      <div className="w-3/6 bg-gray-800">
        <img
          src={gerber}
          alt="Gerber XLS50 Spreader"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

const NavigateToTheNextBlogMobile = () => {
  return (
    <AnimatedButton
      label={"Next Post"}
      labelColor={"white"}
      bgColor={"#0B714C"}
    ></AnimatedButton>
  );
};

const BlogOne = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <div>
      <Cover
        image={sdgCover}
        heading={"Crafting Sustainable Fashion"}
        tagLine="How Pacific Cotton Group Champions SDGs in the Garment Industry"
      ></Cover>
      <div className="mt-12 xl:mt-28 mx-6 xl:mx-60 mb-20 xl:mb-32">
        <p className="text-lg font-light">
          In a world where fashion and sustainability often seem at odds,
          Pacific Cotton Group emerges as a trailblazer, proving that style and
          responsibility can seamlessly coexist. As the fashion industry
          grapples with its environmental footprint, Pacific Cotton Group stands
          tall, weaving a narrative of sustainable practices and commitment to
          the United Nations&apos; Sustainable Development Goals (SDGs).
        </p>
        <ParagraphOne
          header="A Stitch in Time: Pacific Cotton Group' Sustainable Practices"
          paragraph="At the core of Pacific Cotton Group' mission is a dedication to
          crafting garments that not only meet high-quality standards but also
          align with the broader goal of sustainability."
        ></ParagraphOne>
        <ParagraphTwo
          subHeader={"1. Eco-Friendly Materials:"}
          paragraph="Dive into the use of eco-friendly materials, exploring how Pacific
          Cotton Group carefully selects and sources fabrics that minimize
          environmental impact. This could include organic cotton, recycled
          materials, or other sustainable alternatives."
          image={imgOne}
        ></ParagraphTwo>
        <ParagraphTwo
          subHeader={"2. Water-Saving Techniques:"}
          paragraph="Highlight Pacific Cotton Group' commitment to water conservation
          by detailing the implementation of water-saving techniques in the
          dyeing and finishing processes. Showcasing how technology and
          innovation reduce water usage without compromising on color vibrancy."
          image={imgTwo}
        ></ParagraphTwo>
        <ParagraphOne
          header={"Threads of Responsibility: SDGs Compliance"}
          paragraph="Pacific Cotton Group isn't just creating clothing; they're
          contributing to a global agenda for a better and more sustainable
          future."
        ></ParagraphOne>
        <ParagraphTwo
          subHeader={"3. SDG Integration:"}
          paragraph="Explore how Pacific Cotton Group aligns its operations with specific
          Sustainable Development Goals. Whether it's ensuring fair labor
          practices, reducing carbon emissions, or promoting gender equality,
          the blog can spotlight the company's role in addressing key SDGs."
          image={imgThree}
        ></ParagraphTwo>
        <ParagraphTwo
          subHeader={"4. Supply Chain Transparency:"}
          paragraph="Delve into the transparency of Pacific Cotton Group's supply
          chain. Showcase how the company tracks and discloses information about
          the journey of raw materials from source to the final product,
          instilling confidence in consumers about the ethical and sustainable
          practices employed."
          image={imgFour}
        ></ParagraphTwo>
        <ParagraphOne
          header={"Sustainable Fashion in Action: From Factory to Wardrobe"}
          paragraph=" The true impact of Pacific Cotton Group's commitment to
          sustainability is felt not only within the confines of their
          production units but also in the hands of consumers."
        ></ParagraphOne>
        <ParagraphTwo
          subHeader={"5. Ethical Manufacturing:"}
          paragraph="Illustrate how Pacific Cotton Group ensures ethical manufacturing
          practices, emphasizing fair wages, safe working conditions, and the
          overall well-being of their factory employees. This human-centric
          approach adds a personal touch to the sustainability narrative."
          image={imgFive}
        ></ParagraphTwo>
        <ParagraphTwo
          subHeader={"6.  Consumer Empowerment:"}
          paragraph={
            "Conclude by emphasizing the role of consumers in this sustainable journey. Encourage readers to make informed choices, supporting companies like Pacific Cotton Group that prioritize sustainability. Include tips on how individuals can contribute to a more sustainable fashion industry."
          }
          image={imgFive}
        ></ParagraphTwo>
        <ParagraphOne
          header={"The Fabric of a Greener Tomorrow"}
          paragraph="
As we unravel the threads of Pacific Cotton Group's commitment to sustainable fashion, a narrative of responsibility, innovation, and hope emerges. It's a story of a company weaving not just garments but a fabric that binds us to a greener and more sustainable tomorrow.
"
        ></ParagraphOne>
      </div>
      {isMobile ? (
        <div className="flex justify-center items-center mb-20">
          <NavigateToTheNextBlogMobile></NavigateToTheNextBlogMobile>
        </div>
      ) : (
        <div className="flex justify-end mr-28">
          <NavigateToTheNextBlog></NavigateToTheNextBlog>
        </div>
      )}
      <CatalogButton></CatalogButton>
    </div>
  );
};

// Adding prop types for ParagraphOne component
ParagraphOne.propTypes = {
  header: PropTypes.string.isRequired,
  paragraph: PropTypes.string.isRequired,
};

// Adding prop types for ParagraphTwo component
ParagraphTwo.propTypes = {
  subHeader: PropTypes.string.isRequired,
  paragraph: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default BlogOne;
