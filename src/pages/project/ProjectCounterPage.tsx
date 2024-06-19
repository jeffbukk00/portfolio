import GogoBackPageButton from "../../components/GotoBackPageButton";
import Counter from "../../components/project/Counter";

const ProjectCounterPage = () => {
  return (
    <div className="w-full h-full flex flex-col items-center gap-5">
      <GogoBackPageButton path="/main/projects" />
      <Counter />
    </div>
  );
};

export default ProjectCounterPage;
