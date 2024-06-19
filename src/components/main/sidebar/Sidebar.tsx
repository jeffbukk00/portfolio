import { useState } from "react";
import PageChangeButton from "./PageChageButton";
import Profile from "./Profile";
import { useLocation } from "react-router-dom";

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

  const select = (pageNum: number) => setIsSelected(pageNum);

  return (
    <aside className="w-full h-full border-r-2 border-l-gray-300 grid grid-rows-[2fr_8fr]">
      <header className="w-full h-full flex items-center">
        <Profile />
      </header>
      <div className="flex flex-col items-center pt-12 gap-8">
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
