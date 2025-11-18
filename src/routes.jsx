import Home from "./pages/Home";
import About from "./pages/About";
import GroceryApp from "./pages/Project-Grocery-App";
import HaikuHunt from "./pages/Project-Haiku-Hunt";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/About",
    element: <About />,
  },
  {
    path: "/ESL-Grocery-Shop",
    element: <GroceryApp />,
  },
  {
    path: "/Haiku-Hunt",
    element: <HaikuHunt />,
  },
];

export default routes;
