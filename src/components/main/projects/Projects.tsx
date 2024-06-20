import Project from "./Project";

const Projects = () => {
  return (
    <div className="flex flex-col sm:p-12 p-6 gap-12">
      <p className="sm:text-sm text-xs text-gray-300 tracking-wider mb-2">
        제가 만든 프로젝트들입니다. 들여다 보시려면 클릭해주세요.
      </p>
      <Project
        title="카운터"
        subTitle="단순하고 명확한 목표 관리"
        order="두번째"
        path="/project/counter"
      />
      <Project
        title="3words"
        subTitle="3개의 단어로 하는 상상"
        order="첫번째"
        path="/project/3words"
      />
    </div>
  );
};

export default Projects;
