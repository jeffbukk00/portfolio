import Book from "../../assets/vectors/Book";
import devops from "../../assets/devops.jpg";
import useScroll from "../useScroll";

const Chapter2 = () => {
  const { scroll, scrollRef } = useScroll();
  const paragraphClasses =
    "sm:text-sm text-xs indent-3 tracking-wide leading-6 text-gray-700";
  return (
    <>
      <div className="w-full h-[13%] flex items-center gap-2 border-b-[1px] border-gray-300 relative">
        <span className="ml-4 w-10 h-10 rounded-full border border-gray-300 flex justify-center items-center">
          <Book classes="w-5 h-5 inline-block stroke-1 stroke-main" />
        </span>
        <h3 className="font-medium">개발자로서의 이야기</h3>
        <div
          ref={scrollRef}
          className={`h-1 bg-main absolute left-0 bottom-0 transition-colors duration-75`}
        ></div>
      </div>
      <div
        className="w-full h-[87%] overflow-y-scroll p-6 flex flex-col gap-8"
        onScroll={scroll}
      >
        <p className={paragraphClasses}>
          두번째 어플리케이션을 완성하고 배포하면서, 이 길이 더욱 좋아졌습니다.
          계속 걸어가보고 싶다는 확신이 강해졌습니다. 그래서, 이제는 더 나아가
          개발자로서의 "나"에 대해서 진지하게 생각해봅니다.
        </p>
        <div className="border border-gray-500 p-3">
          <div className="flex flex-col items-center mb-6">
            <p className="font-medium text-default mb-2 sm:text-base text-sm">
              지금 현재, 개발이 정말 재미있습니다.
            </p>
            <p className="font-light text-gray-500 sm:text-base text-sm">
              개발을 더 잘하기 위한 학습도 물론 재미있습니다.
            </p>
          </div>
          <div className="flex justify-center items-center">
            <span className="w-2 h-2 bg-main rounded-full"></span>
          </div>
          <div className="flex flex-col items-center mt-6">
            <p className="sm:text-sm text-xs font-light text-gray-500 mb-1">
              유저 한 명을 확보하는 것이 얼마나 어려운지도 새삼 느끼게 됩니다.
            </p>
            <p className="sm:text-sm text-xs font-medium text-default">
              그만큼, 그 한 명이 얼마나 소중한지도 동시에 느낍니다.
            </p>
          </div>
        </div>

        <p className={paragraphClasses}>
          이 이상은 무언가 명확하게 얘기하기가 어렵습니다. 어떤 개발자가 되고
          싶은지, 어떤 어플리케이션을 만들고 싶은지 등. 아직 이러한 질문들에
          답하기 위해 제가 가지고 있는 기준들이 너무나도 적거나, 없다시피합니다.
        </p>
        <p className={paragraphClasses}>
          하지만, 경험하고 싶습니다. 개발은 특히, 무엇이든 직접 만들어 봐야만
          비로소 이해할 수 있는 분야 같습니다. 저는 프론트엔드 개발자라는
          포지션에 지원할 예정입니다. 하지만, 개발자의 역할은 칼로 무 베듯
          명확히 나누어지지 않는 것 같습니다. 말 그대로 “개발자”로서,
          소프트웨어에 관한 경험의 범위를 가리지 않고 확장해나가고 싶습니다.
        </p>
        <div className="border border-gray-500 p-2">
          <img src={devops} />
        </div>
      </div>
    </>
  );
};

export default Chapter2;
