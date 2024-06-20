import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import GogoBackPageButton from "../../components/GotoBackPageButton";

const ProjectRootPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/project") {
      navigate("/main/projects");
    }
  }, [navigate]);
  return (
    <div className="w-full h-full flex flex-col items-center gap-5">
      <GogoBackPageButton path="/main/projects" />
      <div className="xl:w-[60%] lg:w-[70%] md:w-[80%] w-[95%] h-[80vh]  border border-gray-300">
        <Outlet />
      </div>
    </div>
  );
};

export default ProjectRootPage;
