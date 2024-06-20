import { useState } from "react";
import PageChangeButton from "./PageChageButton";
import Profile from "./Profile";
import { useLocation } from "react-router-dom";
import Menu from "../../../assets/vectors/Menu";

const Sidebar = () => {
  const location = useLocation();

  const pageNum: { [path: string]: number } = {
    "about-me": 0,
    skills: 1,
    projects: 2,
    career: 3,
  };

  const initial = pageNum[location.pathname.split("/")[2]];

  const [isSelected, setIsSelected] = useState(initial);
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  const select = (pageNum: number) => setIsSelected(pageNum);

  return (
    <aside className="w-full md:h-full  border-b-2 md:border-r-2 border-l-gray-300 md:grid md:grid-rows-[2fr_8fr] md:pb-0 pb-6">
      <header className="w-full h-full flex items-center justify-between md:mt-0 mt-3">
        <Profile />
        <button
          onClick={() => setIsMenuOpened((prev) => !prev)}
          className="md:hidden block mr-8 border border-gray-300 p-3 rounded-lg transition-color duration-500 hover:border-main active:border-main"
        >
          <Menu classes="w-9 h-9 transition-color duration-500 hover:stroke-main active:stroke-main" />
        </button>
      </header>
      <div
        className={` flex-col items-center pt-12 gap-8 md:flex ${
          isMenuOpened ? "flex animate-slideToR" : "hidden"
        } bg-white `}
      >
        <PageChangeButton
          page="About Me"
          pageNum={pageNum["about-me"]}
          isSelected={isSelected}
          path="/main/about-me"
          select={select}
        />
        <PageChangeButton
          page="Skils"
          pageNum={pageNum.skills}
          isSelected={isSelected}
          path="/main/skills"
          select={select}
        />
        <PageChangeButton
          page="Projects"
          pageNum={pageNum.projects}
          isSelected={isSelected}
          path="/main/projects"
          select={select}
        />
        <PageChangeButton
          page="Career"
          pageNum={pageNum.career}
          isSelected={isSelected}
          path="/main/career"
          select={select}
        />
      </div>
    </aside>
  );
};

export default Sidebar;
