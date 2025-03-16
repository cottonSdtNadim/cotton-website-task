import { BrowserRouter, Route, Routes } from "react-router";
import MainLayout from "../layouts/MainLayout";
import PageLayout from "../layouts/PageLayout";
import Home from "../pages/HomePage/Home";
import Sustainability from "../pages/Sustainability/Sustainability";
import AboutCotton from "../pages/AboutCotton";

const BasicRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Main Layout */}
        <Route path="/" element={<MainLayout></MainLayout>}>
          <Route index element={<Home></Home>}></Route> {/* path="/" */}
          <Route
            path="/sustainability"
            element={<Sustainability></Sustainability>}
          ></Route>
        </Route>

        <Route path="/" element={<PageLayout></PageLayout>}>
          <Route path="/aboutCotton" element={<AboutCotton></AboutCotton>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default BasicRoute;
