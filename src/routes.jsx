import Home from "./pages/Home";
import GroceryApp from "./pages/Project-Grocery-App";
import HaikuHunt from "./pages/Project-Haiku-Hunt";

const routes = [
  {
    path: "/",
    element: <Home />,
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
