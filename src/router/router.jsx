import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../pages/MainLayouts/MainLayout";
import HomePage from "../pages/Client/HomePage/HomePage";
import ExperiencesPage from "../pages/Client/ExperiencesPage/ExperiencesPage";
import ImactFundPage from "../pages/Client/ImpactFundPage/ImactFundPage";
import Project from "../pages/Client/ProjectByIdPage/Project";
import UploadNft from "../pages/Admin/UploadNft/UploadNft";
import SearchPage from "../pages/Client/SearchPage/SearchPage";
import ExperiencePage from "../pages/Client/ExperiencePage/ExperiencePage";
import SignInPage from "../pages/SignInPage/SignInPage";
import NFTDetailsPage from "../pages/Client/NFTDetailsPage/NFTDetailsPage";
import NFTDetailsMainPage from "../pages/Client/NFTDetailsPage/NFTDetailsPage";

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
        path: "sign-in",
        element: <SignInPage />,
      },
      {
        path: "experiences",
        children: [
          {
          path: "",
          element: <ExperiencesPage />,
          },
          {
            path: ":id",
            element: <ExperiencePage />,
            },
        ]
      },
      {
        path: "upload-nft",
        element: <UploadNft />,
      },
      {
        path: "nft-details",
        element: <NFTDetailsMainPage />,
      },
      {
        path: "search-page",
        element: <SearchPage />,
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
