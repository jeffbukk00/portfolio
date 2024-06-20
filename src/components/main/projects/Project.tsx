import { useState } from "react";
import Book from "../../../assets/vectors/Book";
import { useNavigate } from "react-router-dom";

const Project = ({
  title,
  subTitle,
  order,
  path,
}: {
  title: string;
  subTitle: string;
  order: string;
  path: string;
}) => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div>
      <button
        onClick={() => navigate(path)}
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
        className={`w-full h-28 flex justify-center items-center relative duration-500 transition-colors border ${
          isHovered ? "border-main" : "border-grey-300"
        }`}
      >
        <span
          className={`absolute top-3 left-4 text-main sm:text-xs text-[9px] font-medium sm:py-2 sm:px-4 py-1 px-2 rounded-full border duration-500 transition-colors ${
            isHovered ? "border-main" : "border-gray-300"
          }`}
        >
          {order} 프로젝트
        </span>
        <span
          className={`absolute top-[50%] translate-y-[-50%] right-6 sm:p-2 p-1 rounded-full border duration-500 transition-colors ${
            isHovered ? "border-main" : "border-gray-300"
          }`}
        >
          <Book
            classes={`sm:w-6 sm:h-6 w-4 h-4 duration-500 transition-colors ${
              isHovered ? "stroke-main" : "stroke-default"
            }`}
          />
        </span>
        <div className="flex flex-col items-center gap-1">
          <span
            className={`sm:text-xl text-sm font-medium duration-500 transition-colors ${
              isHovered ? "text-main" : "text-default"
            }`}
          >
            {title}
          </span>
          <span
            className={`sm:text-sm text-xs  duration-500 transition-colors ${
              isHovered ? "text-main" : "text-gray-400"
            }`}
          >
            {subTitle}
          </span>
        </div>
      </button>
    </div>
  );
};

export default Project;
