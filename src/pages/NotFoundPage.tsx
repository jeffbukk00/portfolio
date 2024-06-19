import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/main/about-me");
  }, [navigate]);
  return <></>;
};

export default NotFoundPage;
