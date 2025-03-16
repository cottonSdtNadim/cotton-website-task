import { Outlet } from "react-router";
import Footer from "../pages/Shared/Footer";


const PageLayout = () => {
    return (
        <div>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default PageLayout;