import ExpressLogo from "../../../assets/skill-logos/ExpressLogo";
import NodeLogo from "../../../assets/skill-logos/NodeLogo";
import Skill from "./Skill";
import SkillsCol from "./SkillsCol";
import SkillsColTitle from "./SkillsColTitle";

const BackendCol = () => {
  return (
    <SkillsCol>
      <SkillsColTitle title="Backend" />
      <Skill level={8} title="Node.js">
        <span className="w-7 h-7 bg-white rounded-full flex justify-center items-center">
          <NodeLogo classes="w-4 h-4" />
        </span>
      </Skill>
      <Skill level={9} title="Express.js" extraSmall={true}>
        <span className="w-10 h-7 bg-white rounded-lg flex justify-center items-center">
          <ExpressLogo classes="w-8 h-6" />
        </span>
      </Skill>
    </SkillsCol>
  );
};

export default BackendCol;
