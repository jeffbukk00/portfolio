import { ReactNode } from "react";

const SkillStack = ({
  title,
  children,
  extraSmall,
}: {
  title: string;
  children: ReactNode;
  extraSmall?: boolean;
}) => {
  return (
    <div
      className={`p-1 rounded-full relative flex items-center justify-end border border-gray-600
        w-36
       h-8`}
    >
      <span
        className={`
          ${extraSmall ? "text-[0.5rem]" : "text-[0.6rem]"}
          font-medium
       text-default absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]`}
      >
        {title}
      </span>
      {children}
    </div>
  );
};

export default SkillStack;
