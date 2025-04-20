import { content } from "../content/content";
import SectionTitle from "./SectionTitle";

const WorkCulture = () => {
    const {workCulture} = content.en.contactPage;

    return (
        <div className="my-30 flex flex-col items-center justify-center text-2xl xl:text-4xl font-extrabold text-center px-7 xl:px-32 2xl:px-48">
           <SectionTitle
           title={workCulture}
           iconPositionClass="-top-[15px] xl:-top-[30px] left-[1px] 2xl:left-[70px]"
           iconWidth="w-5 xl:w-8"
        iconHeight="h-7 xl:h-12"
           ></SectionTitle>
        </div>
    );
};

export default WorkCulture;