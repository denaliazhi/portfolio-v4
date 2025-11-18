import App from "./App";
import Home from "./pages/Home";
import About from "./pages/About";
import GroceryApp from "./pages/Project-Grocery-App";
import HaikuHunt from "./pages/Project-Haiku-Hunt";
import NotFound from "./pages/Not-Found";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
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
    ],
  },
];

export default routes;
