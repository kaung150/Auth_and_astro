import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import NotFound from "./components/NotFound";
import App from "./App";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "/landingpage",
        element: <App />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
