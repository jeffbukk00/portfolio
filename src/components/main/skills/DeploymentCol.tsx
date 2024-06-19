import FirebaseLogo from "../../../assets/skill-logos/FirebaseLogo";
import FlyioLogo from "../../../assets/skill-logos/FlyioLogo";
import VercelLogo from "../../../assets/skill-logos/VercelLogo";
import Skill from "./Skill";
import SkillsCol from "./SkillsCol";
import SkillsColTitle from "./SkillsColTitle";

const DeploymentCol = () => {
  return (
    <SkillsCol>
      <SkillsColTitle title="Deployment" />
      <Skill level={8} title="Vercel">
        <span className="w-7 h-7 bg-white rounded-full flex justify-center items-center">
          <VercelLogo classes="w-3 h-3" />
        </span>
      </Skill>
      <Skill level={7} title="Fly.io">
        <span className="w-7 h-7 bg-white rounded-full flex justify-center items-center">
          <FlyioLogo classes="w-4 h-4" />
        </span>
      </Skill>
      <Skill level={4} title="Firebase">
        <span className="w-7 h-7 bg-white rounded-full flex justify-center items-center">
          <FirebaseLogo classes="w-4 h-4" />
        </span>
      </Skill>
    </SkillsCol>
  );
};

export default DeploymentCol;
