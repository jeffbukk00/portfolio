import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

const RootPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/") {
      navigate("/main/about-me");
    }
  }, [navigate, location.pathname]);
  return (
    <div className="w-full h-screen">
      <Outlet />
    </div>
  );
};

export default RootPage;
