import { useState } from "react";
import LinkVector from "../../assets/vectors/LinkVector";
import GithubLogo from "../../assets/skill-logos/GithubLogo";

const AppLink = ({
  url,
  title,
  isGit,
}: {
  url: string;
  title: string;
  isGit?: boolean;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <a
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
      className={`sm:w-[70%] w-[90%] flex justify-center items-center gap-4  rounded-full py-3 duration-500 transition-colors border ${
        isHovered ? "border-main" : "border-grey-300"
      }`}
      href={url}
    >
      <span
        className={`flex justify-center items-center ${
          isGit &&
          `border rounded-full ${isHovered ? "border-main" : "border-gray-600"}`
        }`}
      >
        {isGit ? (
          <GithubLogo
            classes={`sm:w-6 sm:h-6 w-4 h-4 stoke-1 duration-500 transition-colors ${
              isHovered ? "stroke-main" : "stroke-default"
            }`}
          />
        ) : (
          <LinkVector
            classes={`sm:w-6 sm:h-6 w-4 h-4 stoke-1 duration-500 transition-colors ${
              isHovered ? "stroke-main" : "stroke-default"
            }`}
          />
        )}
      </span>
      <span
        className={`tracking-wider  duration-500 transition-colors font-medium  ${
          isHovered ? "text-main" : "text-default"
        } sm:text-sm text-xs`}
      >
        {title}
      </span>
    </a>
  );
};

export default AppLink;
