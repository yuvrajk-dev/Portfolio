import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import Hero from "./Hero";
import Contact from "./Contact";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      { path: "/", element: <Hero /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
]);

export default routes;
