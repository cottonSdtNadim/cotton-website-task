import { content } from "../content/content";

const OurMessage = () => {
    const {ourMessage} = content.en.ourStoryPage;

    return (
        <div className="mt-28 mb-20 mx-58">
            <p className="text-2xl font-light">{ourMessage}</p>
        </div>
    );
};

export default OurMessage;