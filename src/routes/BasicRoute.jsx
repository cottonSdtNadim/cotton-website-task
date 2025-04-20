import { BrowserRouter, Route, Routes } from "react-router";
import MainLayout from "../layouts/MainLayout";
import PageLayout from "../layouts/PageLayout";
import AboutCotton from "../pages/AboutCotton";
import Home from "../pages/HomePage/Home";
import Work from "../pages/Work";
import Sustainability from "../pages/Sustainability";
import Order from "../pages/Order";
import Contact from "../pages/Contact";
import PrivacyPolicy from "../pages/PrivacyPolicy";

const BasicRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Main Layout */}
        <Route path="/" element={<MainLayout></MainLayout>}>
          <Route index element={<Home></Home>}></Route> {/* path="/" */}
        </Route>

        {/* Other's Page Layout */}
        <Route path="/" element={<PageLayout></PageLayout>}>
          <Route
            path="/aboutCotton"
            element={<AboutCotton></AboutCotton>}
          ></Route>
          <Route path="/work" element={<Work></Work>}></Route>
          <Route path="/sustainability" element={<Sustainability></Sustainability>}></Route>
          <Route path="/order" element={<Order></Order>}></Route>
          <Route path="/contact" element={<Contact></Contact>}></Route>
          <Route path="/privacy-policy" element={<PrivacyPolicy></PrivacyPolicy>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default BasicRoute;
