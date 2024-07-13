import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../pages/MainLayouts/MainLayout";
import HomePage from "../pages/Client/HomePage/HomePage";
import ExperiencesPage from "../pages/Client/ExperiencesPage/ExperiencesPage";
import ImactFundPage from "../pages/Client/ImpactFundPage/ImactFundPage";
import Project from "../pages/Client/ProjectByIdPage/Project";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <p>error</p>,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "experiences",
        element: <ExperiencesPage />,
      },
      {
        path: "impact-fund",
        children: [
          {
          path: "",
          element: <ImactFundPage />,
          },
          {
            path: ":id",
            element: <Project />,
            },
        ]
      },
    ],
  },
]);
