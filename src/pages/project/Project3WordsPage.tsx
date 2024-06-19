import GogoBackPageButton from "../../components/GotoBackPageButton";
import Threewords from "../../components/project/ThreeWords";

const Project3WordsPage = () => {
  return (
    <div className="w-full h-full flex flex-col items-center gap-5">
      <GogoBackPageButton path="/main/projects" />
      <Threewords />
    </div>
  );
};

export default Project3WordsPage;
