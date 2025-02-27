import { Outlet } from "react-router";
import Header from "../pages/Shared/Header";
// import Navbar from "../pages/Shared/Navbar";

const MainLayout = () => {
  return (
    <div>
      {/* <Navbar></Navbar> */}
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;
