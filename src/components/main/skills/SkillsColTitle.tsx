const SkillsColTitle = ({ title }: { title: string }) => {
  return (
    <div className="flex items-center mb-4 border border-gray-300 py-3 px-6 rounded-lg mt-3">
      <span className="w-2 h-2 bg-main rounded-full mr-3"></span>
      <p className="text-sm font-medium">{title}</p>
    </div>
  );
};

export default SkillsColTitle;
