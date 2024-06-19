import Skill from "./Skill";
import SkillsCol from "./SkillsCol";
import SkillsColTitle from "./SkillsColTitle";

import JavascriptLogo from "../../../assets/skill-logos/JavascriptLogo";
import TypescriptLogo from "../../../assets/skill-logos/TypescriptLogo";

const LanguageCol = () => {
  return (
    <SkillsCol>
      <SkillsColTitle title="Language" />
      <Skill level={10} title="Javascript">
        <span className="w-7 h-7 bg-white rounded-full flex justify-center items-center">
          <JavascriptLogo classes="w-4 h-4" />
        </span>
      </Skill>
      <Skill level={7} title="Typescript">
        <span className="w-7 h-7 bg-white rounded-full flex justify-center items-center">
          <TypescriptLogo classes="w-4 h-4" />
        </span>
      </Skill>
    </SkillsCol>
  );
};

export default LanguageCol;
