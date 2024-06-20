import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Sidebar from "../components/main/sidebar/Sidebar";

const MainPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/main") {
      navigate("/main/about-me");
    }
  }, [navigate, location.pathname]);
  return (
    <main className="w-full h-full md:grid md:grid-cols-[25fr_75fr] relative">
      <Sidebar />
      <section className="md:overflow-y-scroll relative">
        <Outlet />
      </section>
    </main>
  );
};

export default MainPage;
