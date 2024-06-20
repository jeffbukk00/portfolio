import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootPage from "./pages/RootPage";
import MainPage from "./pages/MainPage";
import AboutMePage from "./pages/AboutMePage";
import SkillsPage from "./pages/SkillsPage";
import ProjectsPage from "./pages/ProjectsPage";
import CareerPage from "./pages/CareerPage";
import Chapter1Page from "./pages/about-me/Chapter1Page";
import Chapter2Page from "./pages/about-me/Chapter2Page";
import ProjectCounterPage from "./pages/project/ProjectCounterPage";
import Project3WordsPage from "./pages/project/Project3WordsPage";
import NotFoundPage from "./pages/NotFoundPage";
import AboutMeRootPage from "./pages/about-me/AboutMeRootPage";
import ProjectRootPage from "./pages/project/ProjectRootPage";

const router = createBrowserRouter([
  {
    errorElement: <NotFoundPage />,
    path: "/",
    element: <RootPage />,
    children: [
      {
        path: "/main",
        element: <MainPage />,
        children: [
          { path: "/main/about-me", element: <AboutMePage /> },
          { path: "/main/skills", element: <SkillsPage /> },
          { path: "/main/projects", element: <ProjectsPage /> },
          { path: "/main/career", element: <CareerPage /> },
        ],
      },
      {
        path: "/about-me",
        element: <AboutMeRootPage />,
        children: [
          { path: "/about-me/chap1", element: <Chapter1Page /> },
          { path: "/about-me/chap2", element: <Chapter2Page /> },
        ],
      },
      {
        path: "/project",
        element: <ProjectRootPage />,
        children: [
          { path: "/project/counter", element: <ProjectCounterPage /> },
          { path: "/project/3words", element: <Project3WordsPage /> },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
