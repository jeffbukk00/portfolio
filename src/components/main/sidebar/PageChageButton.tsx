import { useNavigate } from "react-router-dom";
import DoubleArrowRight from "../../../assets/vectors/DoubleArrowRight";
import { useState } from "react";

const PageChangeButton = ({
  page,
  path,
  pageNum,
  isSelected,
  select,
}: {
  page: string;
  path: string;
  pageNum: number;
  isSelected: number;
  select: (pageNum: number) => void;
}) => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  const isSelectedBoolean = isSelected === pageNum;

  return (
    <button
      onClick={() => {
        select(pageNum);
        navigate(path);
      }}
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
      className={`border w-[70%] lg:h-16 h-14 flex justify-between items-center rounded-full px-6 ${
        isSelectedBoolean ? "border-main border-2" : "border-gray-300"
      } ${!isSelectedBoolean ? "duration-500 transition-colors" : ""}
       ${
         !isSelectedBoolean && isHovered
           ? "border-main border-2"
           : "border-gray-300"
       }`}
    >
      <span
        className={` ${
          isSelectedBoolean ? "text-main font-bold" : "text-default"
        } ${!isSelectedBoolean ? "duration-500 transition-colors" : ""}
       ${
         !isSelectedBoolean && isHovered
           ? "text-main font-bold"
           : "text-default font-medium"
       } lg:text-base text-sm`}
      >
        {page}
      </span>
      <span>
        <DoubleArrowRight
          classes={`lg:w-7 lg:h-7 w-6 h-6 inline-block stroke-1 ${
            isSelectedBoolean ? "stroke-main stroke-2" : "stroke-default"
          } ${!isSelectedBoolean ? "duration-500 transition-colors" : ""}
       ${
         !isSelectedBoolean && isHovered
           ? "stroke-main animate-bounceR stroke-2"
           : "stroke-default"
       } `}
        />
      </span>
    </button>
  );
};

export default PageChangeButton;
