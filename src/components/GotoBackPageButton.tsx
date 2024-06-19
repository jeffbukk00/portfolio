import { useNavigate } from "react-router-dom";
import DoubleArrowLeft from "../assets/vectors/DoubleArrowLeft";
import { useState } from "react";

const GogoBackPageButton = ({ path }: { path: string }) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  return (
    <button
      className={`mt-10 flex items-center gap-3 duration-500 transition-colors border pl-4 pr-10 py-2  rounded-full ${
        isHovered ? "border-main" : "border-gray-300"
      }`}
      onClick={() => navigate(path)}
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
    >
      <span
        className={`flex justify-center items-center duration-500 transition-colors `}
      >
        <DoubleArrowLeft
          classes={`w-6 h-6 inline-block stroke-1 stroke-default ${
            isHovered ? "stroke-main animate-bounceL" : "stroke-default"
          }`}
        />
      </span>
      <span
        className={`font-medium text-base ${
          isHovered ? "text-main" : "text-default"
        }`}
      >
        돌아가기
      </span>
    </button>
  );
};

export default GogoBackPageButton;
