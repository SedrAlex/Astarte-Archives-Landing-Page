import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../pages/MainLayouts/MainLayout";
import HomePage from "../pages/Client/HomePage/HomePage";

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
    ],
  },
]);
