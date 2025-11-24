import App from "./App";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/Not-Found";
import GroceryApp from "./pages/Project-Grocery-App";
import HaikuHunt from "./pages/Project-Haiku-Hunt";
import ResearchStartup from "./pages/Project-Research-Startup";
import OdinProject from "./pages/The-Odin-Project";

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
      {
        path: "/Research-Startup",
        element: <ResearchStartup />,
      },
      {
        path: "/The-Odin-Project",
        element: <OdinProject />,
      },
    ],
  },
];

export default routes;
