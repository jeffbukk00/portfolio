import AboutMeButton from "./AboutMeButton";

const AboutMeMain = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="mb-8">
        <p className="text-lg text-gray-400">안녕하세요.</p>
        <div>
          <span className="text-2xl text-main font-bold mr-1">
            프론트엔드 개발자
          </span>
          <span className="text-base font-medium">왕준혁입니다.</span>
        </div>
      </div>
      <div className="mb-4">
        <p className="text-sm text-gray-300 tracking-wider">
          아래는 저에 대한 이야기들입니다. 읽으시려면 클릭해주세요.
        </p>
      </div>
      <div className="border border-gray-300 px-12 py-8 flex flex-col gap-8 items-center">
        <AboutMeButton
          title="개발자에 도전하기까지의 이야기"
          path="/about-me/chap1"
        />
        <AboutMeButton title="개발자로서의 이야기" path="/about-me/chap2" />
      </div>
    </div>
  );
};

export default AboutMeMain;
