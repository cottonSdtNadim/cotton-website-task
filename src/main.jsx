import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import GridWithLines from "./components/GridWithLine.jsx";
import "./index.css";
import BasicRoute from "./routes/BasicRoute.jsx";

// Create a client
const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    <QueryClientProvider client={queryClient}>
      {/* <GridWithLines></GridWithLines>
      <BasicRoute></BasicRoute> */}
        <div className="mx-auto w-full max-w-screen-xl 2xl:max-w-screen-2xl">
        <GridWithLines />
        <BasicRoute />
      </div>
    </QueryClientProvider>
  </StrictMode>
);
