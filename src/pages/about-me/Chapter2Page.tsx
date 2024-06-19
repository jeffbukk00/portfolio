import Chapter2 from "../../components/about-me/Chapter2";
import GogoBackPageButton from "../../components/GotoBackPageButton";

const Chapter2Page = () => {
  return (
    <div className="w-full h-full flex flex-col items-center gap-5">
      <GogoBackPageButton path="/main/about-me" />
      <Chapter2 />
    </div>
  );
};

export default Chapter2Page;
