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
      className={`w-[70%] flex justify-center items-center gap-4  rounded-full py-3 duration-500 transition-colors border ${
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
            classes={`w-6 h-6 stoke-1 duration-500 transition-colors ${
              isHovered ? "stroke-main" : "stroke-default"
            }`}
          />
        ) : (
          <LinkVector
            classes={`w-6 h-6 stoke-1 duration-500 transition-colors ${
              isHovered ? "stroke-main" : "stroke-default"
            }`}
          />
        )}
      </span>
      <span
        className={`tracking-wider  duration-500 transition-colors font-medium text-sm ${
          isHovered ? "text-main" : "text-default"
        }`}
      >
        {title}
      </span>
    </a>
  );
};

export default AppLink;
