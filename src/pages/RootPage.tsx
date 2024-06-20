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

  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: "instant",
    });
  }, [location.pathname]);
  return (
    <div className="w-full md:h-screen">
      <Outlet />
    </div>
  );
};

export default RootPage;
