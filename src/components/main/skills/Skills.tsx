import BackendCol from "./BackendCol";
import DatabaseCol from "./DatabaseCol";
import DeploymentCol from "./DeploymentCol";
import FrontendCol from "./FrontendCol";
import LanguageCol from "./LaguageCol";
import VersionControlCol from "./VersionControlCol";

const Skills = () => {
  return (
    <div className="w-full grid grid-cols-3 px-[5%] py-[8%] gap-y-36">
      <div className="flex justify-center">
        <LanguageCol />
      </div>
      <div className="flex justify-center">
        <FrontendCol />
      </div>
      <div className="flex justify-center">
        <BackendCol />
      </div>
      <div className="flex justify-center">
        <DatabaseCol />
      </div>
      <div className="flex justify-center">
        <VersionControlCol />
      </div>
      <div className="flex justify-center">
        <DeploymentCol />
      </div>
    </div>
  );
};

export default Skills;
