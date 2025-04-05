import { content } from "../content/content";
import SectionTitle from "./SectionTitle";

const WorkCulture = () => {
    const {workCulture} = content.en.contactPage;

    return (
        <div className="my-30 flex flex-col items-center justify-center text-4xl font-extrabold text-center px-48">
           <SectionTitle
           title={workCulture}
           iconTop="-30px"
           iconLeft="62px"
           iconWidth="w-7"
           iconHeight="h-11"
           ></SectionTitle>
        </div>
    );
};

export default WorkCulture;