import { ReactNode } from "react";

const Skill = ({
  title,
  level,
  children,
  extraSmall,
}: {
  level: number;
  title: string;
  children: ReactNode;
  extraSmall?: boolean;
}) => {
  const bgClasses: { [level: string]: string } = {
    1: `w-[80%] bg-main 
    bg-opacity-10
    p-2 rounded-full relative flex items-center justify-end border border-gray-600`,
    2: `w-[80%] bg-main 
    bg-opacity-20
    p-2 rounded-full relative flex items-center justify-end border border-gray-600`,
    3: `w-[80%] bg-main 
    bg-opacity-30
    p-2 rounded-full relative flex items-center justify-end border border-gray-600`,
    4: `w-[80%] bg-main 
    bg-opacity-40
    p-2 rounded-full relative flex items-center justify-end border border-gray-600`,
    5: `w-[80%] bg-main 
    bg-opacity-50
    p-2 rounded-full relative flex items-center justify-end border border-gray-600`,
    6: `w-[80%] bg-main 
    bg-opacity-60
    p-2 rounded-full relative flex items-center justify-end border border-gray-600`,
    7: `w-[80%] bg-main 
    bg-opacity-70
    p-2 rounded-full relative flex items-center justify-end border border-gray-600`,
    8: `w-[80%] bg-main 
    bg-opacity-80
    p-2 rounded-full relative flex items-center justify-end border border-gray-600`,
    9: `w-[80%] bg-main 
    bg-opacity-90
    p-2 rounded-full relative flex items-center justify-end border border-gray-600`,
    10: `w-[80%] bg-main 
    bg-opacity-100
    p-2 rounded-full relative flex items-center justify-end border border-gray-600`,
  };
  return (
    <div className={bgClasses[level]}>
      <span
        className={`font-medium ${
          extraSmall ? "text-[0.6rem]" : "text-xs"
        } text-white absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]`}
      >
        {title}
      </span>
      {children}
    </div>
  );
};

export default Skill;
