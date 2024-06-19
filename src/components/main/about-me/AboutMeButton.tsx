import { useState } from "react";
import Book from "../../../assets/vectors/Book";
import { useNavigate } from "react-router-dom";

const AboutMeButton = ({ title, path }: { title: string; path: string }) => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
    >
      <button
        onClick={() => navigate(path)}
        className={`border rounded-full px-9 py-[0.85rem] flex justify-between items-center gap-6 duration-500 transition-colors ${
          isHovered ? "border-main" : "border-gray-300"
        }`}
      >
        <span
          className={`font-medium text-base duration-500 transition-colors ${
            isHovered ? "text-main" : "text-default"
          }`}
        >
          {title}
        </span>
        <span
          className={`flex justify-center items-center border  w-8 h-8 rounded-full duration-500 transition-colors ${
            isHovered ? "border-main" : "border-gray-300"
          }`}
        >
          <Book
            classes={`w-4 h-4 inline-block stroke-1 duration-500 transition-colors ${
              isHovered ? "stroke-main" : "stroke-default"
            }`}
          />
        </span>
      </button>
    </div>
  );
};

export default AboutMeButton;
