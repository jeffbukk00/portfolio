import MongodbLogo from "../../../assets/skill-logos/Mongodb";
import Skill from "./Skill";
import SkillsCol from "./SkillsCol";
import SkillsColTitle from "./SkillsColTitle";

const DatabaseCol = () => {
  return (
    <SkillsCol>
      <SkillsColTitle title="Database" />
      <Skill level={8} title="Mongodb">
        <span className="w-7 h-7 bg-white rounded-full flex justify-center items-center">
          <MongodbLogo classes="w-7 h-5" />
        </span>
      </Skill>
    </SkillsCol>
  );
};

export default DatabaseCol;
