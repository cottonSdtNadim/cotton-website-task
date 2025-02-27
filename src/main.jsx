import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import GridWithLines from "./components/GridWithLine.jsx";
import "./index.css";
import BasicRoute from "./routes/BasicRoute.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    <BasicRoute></BasicRoute>
    <GridWithLines></GridWithLines>
  </StrictMode>
);
