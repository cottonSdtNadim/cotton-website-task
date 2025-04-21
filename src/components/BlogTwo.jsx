import { Link } from "react-router";
import image10 from "../assets/images/blogs/image-10.png";
import image6 from "../assets/images/blogs/image-6.png";
import image7 from "../assets/images/blogs/image-7.png";
import image8 from "../assets/images/blogs/image-8.png";
import image9 from "../assets/images/blogs/image-9.png";
import gerber from "../assets/images/gerber.png";
import sdg from "../assets/images/sdg.png";
import { useMediaQuery } from "../hooks/useMediaQuery";
import Cover from "../pages/Shared/Cover";
import AnimatedButton from "./AnimatedButton";
import ParagraphOne from "./blogContent/ParagraphOne";
import ParagraphTwo from "./blogContent/ParagraphTwo";
import CatalogButton from "./CatalogButton";

const NavigateToThePrevBlog = () => {
  return (
    <Link to={"/blogOne"}>
      <div className="flex w-full max-w-md overflow-hidden rounded-2xl shadow-md">
        {/* Left side with SDG logo */}
        <div className="w-3/6 bg-white p-2 flex items-center justify-center">
          <img
            src={sdg}
            alt="Crafting Sustainable Fashion"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Right side with text content */}
        <div className="bg-emerald-800 text-white flex flex-col justify-between p-4 w-5/6 text-right">
          <h2 className="text-xl font-extrabold">
            Crafting Sustainable <br /> Fashion
          </h2>
          <p className="text-base font-semibold mt-auto">Previous Post</p>
        </div>
      </div>
    </Link>
  );
};

const NavigateToThePrevBlogMobile = () => {
  return (
    <AnimatedButton
      label={"Previous Post"}
      labelColor={"white"}
      bgColor={"#0B714C"}
      url={"/blogOne"}
    ></AnimatedButton>
  );
};

const BlogTwo = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <div>
      <Cover
        image={gerber}
        heading={"Behind the Seams"}
        tagLine="The Technology Driving Premium Quality at Pacific Cotton Group"
      ></Cover>
      <div className="mt-12 xl:mt-28 mx-6 xl:mx-60 mb-20 xl:mb-32">
        <p className="text-lg font-light">
          In the ever-evolving world of fashion, where style meets substance,
          Pacific Cotton Group stands as a beacon of innovation and excellence.
          Nestled behind the seams of this renowned garment manufacturer lies a
          fascinating world of cutting-edge technology that not only defines the
          premium quality of their apparel but also sets new standards for the
          entire industry.
        </p>
        <ParagraphOne
          header={"The Technological Tapestry"}
          paragraph={
            "At the heart of Pacific Cotton Group's commitment to delivering top-notch products is a sophisticated technological tapestry. Imagine a seamless blend of precision, efficiency, and ingenuity, where every thread is woven with care and every garment tells a story of innovation."
          }
        ></ParagraphOne>

        <ParagraphTwo
          subHeader={"1. Automated Precision Cutting:"}
          paragraph={
            "Begin the journey with the precision-cutting process, where advanced automated systems ensure that each fabric panel is cut with the utmost accuracy. This not only minimizes waste but also sets the stage for impeccable garment construction."
          }
          image={image6}
        ></ParagraphTwo>

        <ParagraphTwo
          subHeader={"2. Smart Stitching Solutions:"}
          paragraph={
            "Move on to the stitching phase, where state-of-the-art machines meticulously sew together the fabric pieces. Explore how technology has revolutionized traditional stitching methods, resulting in stronger seams and enhanced durability."
          }
          image={image7}
        ></ParagraphTwo>

        <ParagraphOne
          header={"Beyond the Threads: The Impact on Premium Quality"}
          paragraph={
            "Pacific Cotton Group's technological prowess extends beyond the manufacturing floor. It infiltrates every aspect of their operations, influencing design, sustainability, and customer satisfaction."
          }
        ></ParagraphOne>

        <ParagraphTwo
          subHeader={"3. Design Innovation:"}
          paragraph={
            "Dive into how technology sparks design innovation, allowing Pacific Cotton Group to stay ahead of fashion trends. From 3D modeling to virtual prototyping, technology empowers designers to bring their creative visions to life with unparalleled precision."
          }
          image={image8}
        ></ParagraphTwo>

        <ParagraphTwo
          subHeader={"4. Sustainable Practices:"}
          paragraph={
            "Unveil the eco-friendly side of technology, showcasing how Pacific Cotton Group uses sustainable practices in conjunction with cutting-edge technology. From water-saving dyeing processes to energy-efficient machinery, technology becomes a tool for environmental stewardship."
          }
          image={image9}
        ></ParagraphTwo>

        <ParagraphOne
          header={"A Future-Woven Legacy"}
          paragraph={
            "As we unravel the layers of technology at Pacific Cotton Group, it becomes clear that this isn't just about producing clothing; it's about shaping the future of fashion. The commitment to excellence, coupled with a forward-thinking approach to technology, has positioned Pacific Cotton Group as a leader in the industry."
          }
        ></ParagraphOne>

        <ParagraphTwo
          header={"5. Looking Ahead:"}
          paragraph={
            "Conclude the journey by looking ahead to the future. Discuss ongoing research and development, emerging technologies, and Pacific Cotton Group's dedication to staying at the forefront of the garment industry."
          }
          image={image10}
        ></ParagraphTwo>

        <p className="text-lg font-light my-10">
          In the realm where threads meet technology, Pacific Cotton Group
          stands tall, weaving a legacy that goes beyond fashion—it&apos;s a
          story of innovation, quality, and a commitment to a better tomorrow.
        </p>
      </div>
      {isMobile ? (
          <div className="flex justify-center items-center mb-20">
         <NavigateToThePrevBlogMobile></NavigateToThePrevBlogMobile>
        </div>
      ) : (
        <div className="ml-28">
          <NavigateToThePrevBlog></NavigateToThePrevBlog>
        </div>
      )}
      <CatalogButton></CatalogButton>
    </div>
  );
};

export default BlogTwo;
