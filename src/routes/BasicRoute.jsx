import { BrowserRouter, Route, Routes } from "react-router";
import MainLayout from "../layouts/MainLayout";
import PageLayout from "../layouts/PageLayout";
import AboutCotton from "../pages/AboutCotton";
import Contact from "../pages/Contact";
import Home from "../pages/HomePage/Home";
import News from "../pages/News";
import Order from "../pages/Order";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import Sustainability from "../pages/Sustainability";
import Work from "../pages/Work";
import BlogOne from "../components/BlogOne";

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
          <Route
            path="/sustainability"
            element={<Sustainability></Sustainability>}
          ></Route>
          <Route path="/order" element={<Order></Order>}></Route>
          <Route path="/contact" element={<Contact></Contact>}></Route>
          <Route
            path="/privacy-policy"
            element={<PrivacyPolicy></PrivacyPolicy>}
          ></Route>
          <Route path="/blogOne" element={<BlogOne></BlogOne>}></Route>
        </Route>

        <Route path="/news" element={<News></News>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default BasicRoute;
