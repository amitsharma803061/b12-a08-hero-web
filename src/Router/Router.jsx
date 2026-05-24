import { createBrowserRouter } from "react-router";
import MainLayouts from "../MainLayouts/MainLayouts";
import Home from "../Pages/Home";
import Apps from "../Pages/Apps";
import Installation from "../Pages/Installation";
import ErrorPages from "../Pages/ErrorPages";



const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    errorElement: <ErrorPages />,
    hydrateFallbackElement: <p>Loading.............</p>,
    children: [
      
        {
            index: true,
            element: <Home />
        },
        {
            path: "/apps",
            element: <Apps />
        },
        {
            path: "/installation",
            element: <Installation />
        }
    ]
  },
]);

console.log(router);
export default router