import { Outlet } from "react-router";
import Footer from "../pages/Shared/Footer";
import Cover from "../pages/Shared/Cover";

const PageLayout = () => {
    return (
        <div>
            <Cover></Cover>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default PageLayout;