import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
      },
    ],
  },
]);
