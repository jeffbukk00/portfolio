import { Outlet, useNavigate } from "react-router-dom";
import GogoBackPageButton from "../../components/GotoBackPageButton";
import { useEffect } from "react";

const AboutMeRootPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/about-me") {
      navigate("/main/about-me");
    }
  }, [navigate]);
  return (
    <div className="w-full h-full flex flex-col items-center gap-5">
      <GogoBackPageButton path="/main/about-me" />
      <div className="xl:w-[35%] lg:w-[40%] md:w-[50%] semiSm:w-[60%] sm:w-[75%] w-[90%] h-[75vh] border border-gray-300 ">
        <Outlet />
      </div>
    </div>
  );
};

export default AboutMeRootPage;
