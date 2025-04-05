import Cover from "./Shared/Cover";
import cotton from "../assets/images/covers/cotton.jpg"
import { content } from "../content/content";
import MultiStepForm from "../components/MultiStepForm";


const Order = () => {
    const {heading} = content.en.orderPage;
    
    return (
        <div>
            <Cover
            image={cotton}
            heading={heading}
            ></Cover>
            <MultiStepForm></MultiStepForm>
        </div>
    );
};

export default Order;