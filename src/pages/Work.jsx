import Cover from "./Shared/Cover";
import image from "../assets/images/covers/machines.png"
import { content } from "../content/content";

const Work = () => {
    const {header} = content.en.workPage;

    return (
        <div>
            <Cover image={image} heading={header}></Cover>
        </div>
    );
};

export default Work;