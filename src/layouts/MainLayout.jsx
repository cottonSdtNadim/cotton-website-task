import { Outlet } from "react-router";
import Header from "../pages/Shared/Header";
import Footer from "../pages/Shared/Footer";
// import Navbar from "../pages/Shared/Navbar";

const MainLayout = () => {
  return (
    <div>
      {/* <Navbar></Navbar> */}
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
