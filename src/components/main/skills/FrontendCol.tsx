import NextLogo from "../../../assets/skill-logos/NextLogo";
import ReactLogo from "../../../assets/skill-logos/ReactLogo";
import ReduxLogo from "../../../assets/skill-logos/ReduxLogo";
import TailwindLogo from "../../../assets/skill-logos/TailwindLogo";
import TanstackQueryLogo from "../../../assets/skill-logos/TanstackQueryLogo";
import WebpackLogo from "../../../assets/skill-logos/WebpackLogo";
import Skill from "./Skill";
import SkillsCol from "./SkillsCol";
import SkillsColTitle from "./SkillsColTitle";

const FrontendCol = () => {
  return (
    <SkillsCol>
      <SkillsColTitle title="Frontend" />
      <Skill level={10} title="React.js">
        <span className="w-7 h-7 bg-white rounded-full flex justify-center items-center">
          <ReactLogo classes="w-4 h-4" />
        </span>
      </Skill>
      <Skill level={6} title="Next.js">
        <span className="w-8 h-7 bg-white flex justify-center items-center rounded-lg">
          <NextLogo classes="w-6 h-6" />
        </span>
      </Skill>
      <Skill level={5} title="Redux">
        <span className="w-7 h-7 bg-white flex justify-center items-center rounded-full">
          <ReduxLogo classes="w-4 h-4" />
        </span>
      </Skill>
      <Skill level={7} title="Tanstack Query" extraSmall={true}>
        <span className="w-7 h-7 bg-white flex justify-center items-center rounded-full">
          <TanstackQueryLogo classes="w-4 h-4" />
        </span>
      </Skill>
      <Skill level={3} title="Webpack">
        <span className="w-7 h-7 bg-white flex justify-center items-center rounded-full">
          <WebpackLogo classes="w-5 h-5" />
        </span>
      </Skill>
      <Skill level={7} title="TailwindCSS" extraSmall={true}>
        <span className="w-7 h-7 bg-white flex justify-center items-center rounded-full">
          <TailwindLogo classes="w-5 h-4" />
        </span>
      </Skill>
    </SkillsCol>
  );
};

export default FrontendCol;
