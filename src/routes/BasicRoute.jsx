import { BrowserRouter, Route, Routes } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/HomePage/Home";
import Sustainability from "../pages/Sustainability/Sustainability";

const BasicRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout></MainLayout>}>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/sustainability" element={<Sustainability></Sustainability>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default BasicRoute;
