import Chapter1 from "../../components/about-me/Chapter1";
import GogoBackPageButton from "../../components/GotoBackPageButton";

const Chapter1Page = () => {
  return (
    <div className="w-full h-full flex flex-col items-center gap-5">
      <GogoBackPageButton path="/main/about-me" />
      <Chapter1 />
    </div>
  );
};

export default Chapter1Page;
