import { content } from "../content/content";
import AnimatedLink from "./AnimatedLink";


const WhyCotton = () => {

    const {header, paragraph, animatedLink} = content.en.contactPage.whyCotton;
    const {title} = animatedLink;

    return (
        <div className="max-w-7xl mx-auto px-48 pb-10">
            <h2 className="text-3xl font-medium">{header}</h2>
            <p className="text-lg font-light mt-10 leading-relaxed mb-10">{paragraph}</p>
            <AnimatedLink
            fontSize={"text-xl"}
            content={title}
            color={"#0B714C"}
            ></AnimatedLink>
        </div>
    );
};

export default WhyCotton;