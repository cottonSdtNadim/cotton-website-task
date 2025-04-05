import factory from "../assets/images/covers/factory.jpg"
import GetInTouch from "../components/GetInTouch";
import WhyCotton from "../components/WhyCotton";
import WorkCulture from "../components/WorkCulture";
import { content } from "../content/content";
import Cover from "./Shared/Cover";

const Contact = () => {
    const {firstHeader, secondHeader} = content.en.contactPage;
    return (
        <div>
            <Cover
            image={factory}
            heading={<>{firstHeader}<br/>{secondHeader}</>}
            ></Cover>
            <WorkCulture></WorkCulture>
            <WhyCotton></WhyCotton>
            <GetInTouch></GetInTouch>
        </div>
    );
};

export default Contact;