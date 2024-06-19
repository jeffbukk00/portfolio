import { ReactNode } from "react";

const SkillsCol = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-[65%] border border-gray-300 flex flex-col items-center gap-4 pt-4 pb-8">
      {children}
    </div>
  );
};

export default SkillsCol;
