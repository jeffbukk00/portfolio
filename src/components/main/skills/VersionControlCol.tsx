import GithubLogo from "../../../assets/skill-logos/GithubLogo";
import GitLogo from "../../../assets/skill-logos/GitLogo";
import Skill from "./Skill";
import SkillsCol from "./SkillsCol";
import SkillsColTitle from "./SkillsColTitle";

const VersionControlCol = () => {
  return (
    <SkillsCol>
      <SkillsColTitle title="Version Control" />
      <Skill level={6} title="Git">
        <span className="w-7 h-7 bg-white rounded-full flex justify-center items-center">
          <GitLogo classes="w-4 h-4" />
        </span>
      </Skill>
      <Skill level={3} title="Github">
        <span className="w-7 h-7 bg-white rounded-full flex justify-center items-center">
          <GithubLogo classes="w-4 h-4" />
        </span>
      </Skill>
    </SkillsCol>
  );
};

export default VersionControlCol;
