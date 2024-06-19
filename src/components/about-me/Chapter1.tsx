import Book from "../../assets/vectors/Book";

import s1 from "../../assets/before/s1.jpg";
import s2 from "../../assets/before/s2.jpg";
import s3 from "../../assets/before/s3.jpg";
import s4 from "../../assets/before/s4.jpg";
import s5 from "../../assets/before/s5.jpg";
import s6 from "../../assets/before/s6.jpg";
import s7 from "../../assets/before/s7.jpg";
import s8 from "../../assets/before/s8.jpg";
import useScroll from "../useScroll";

const Chapter1 = () => {
  const { scrollRef, scroll } = useScroll();
  const paragraphClasses =
    "text-sm indent-3 tracking-wide leading-6 text-gray-700";
  return (
    <div className="w-[35%] h-[75%] border border-gray-300">
      <div className="w-full h-[13%] flex items-center gap-2 border-b-[1px] border-gray-300 relative">
        <span className="ml-4 w-10 h-10 rounded-full border border-gray-300 flex justify-center items-center">
          <Book classes="w-5 h-5 inline-block stroke-1 stroke-main" />
        </span>
        <h3 className="font-medium">개발자에 도전하기까지의 이야기</h3>
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
          저는 중앙대학교에서 광고홍보학을 전공했습니다. 대학 생활은 기획의
          연속이었습니다. 제품을 기획하지는 않았습니다. 이미 만들어져
          있었습니다. 커뮤니케이션만을 기획했습니다.
        </p>
        <p className="text-xs text-gray-400 text-center mt-4">
          그 때의 고민들과, 그 때의 경험들입니다.
        </p>
        <div className="border border-gray-500 p-3">
          <div className=" flex flex-col items-center text-xs mb-8">
            <p className="mb-4">
              “어떻게 커뮤니케이션해야만, 소비자가 생각하게 만들까?”
            </p>
            <p className="mb-2 text-gray-400">소비자가 제품에 대해서,</p>
            <p className="font-medium text-xs mb-1">
              기업이 원하는 방식으로 바라볼 수 있게 만들고 싶었습니다.
            </p>
            <p className="font-medium text-xs">
              기업이 의도한 방식으로 이해할 수 있게 만들고 싶었습니다.
            </p>
          </div>
          <div className="flex justify-center items-center">
            <span className="w-2 h-2 bg-main rounded-full"></span>
          </div>
          <div className=" flex flex-col items-center text-xs mt-8">
            <p className="mb-4">
              “어떻게 커뮤니케이션해야만, 소비자가 행동하게 만들까?”
            </p>
            <p className="mb-2 text-gray-400">소비자가 제품에 대해서,</p>
            <p className="font-medium text-xs mb-1">
              스스로 찾아보고, 구매하고, 리뷰를 남기고, 만족하여 다시 구매하고.
            </p>
            <p className="font-medium text-xs">
              더 나아가 궁극적으로는 브랜드의 팬(fan)이 될 수 있게 만들고
              싶었습니다.
            </p>
          </div>
        </div>
        <div className="mt-4 p-5 border border-gray-500 grid grid-cols-4 grid-rows-2 gap-y-4 mb-3">
          <span className="flex justify-center items-center">
            <img src={s1} className="w-24 h-12 border border-gray-300" />
          </span>
          <span className="flex justify-center items-center">
            <img src={s2} className="w-24 h-12 border border-gray-300" />
          </span>
          <span className="flex justify-center items-center">
            <img src={s3} className="w-24 h-12 border border-gray-300" />
          </span>
          <span className="flex justify-center items-center">
            <img src={s4} className="w-24 h-12 border border-gray-300" />
          </span>
          <span className="flex justify-center items-center">
            <img src={s5} className="w-24 h-12 border border-gray-300" />
          </span>
          <span className="flex justify-center items-center">
            <img src={s6} className="w-24 h-12 border border-gray-300" />
          </span>
          <span className="flex justify-center items-center">
            <img src={s7} className="w-24 h-12 border border-gray-300" />
          </span>
          <span className="flex justify-center items-center">
            <img src={s8} className="w-24 h-12 border border-gray-300" />
          </span>
        </div>
        <p className={paragraphClasses}>
          갈증이 있었습니다. 직접 제품을 만들고 싶었습니다. 커뮤니케이션은
          포장지와 같습니다. 열어봐서 실망스럽다면, 실망스러울 뿐입니다. 저는 그
          안에서 보다 본질적인 일을 하고 싶었습니다.
        </p>
        <p className={paragraphClasses}>
          직접 제품을 만드는 직업들은 많습니다. 그 중, 개발자에 도전하기로
          했습니다. 개방적인 문화에 매력을 느꼈습니다. 개발자 커뮤니티는 열려
          있습니다. 이 안에서는 배울 기회가 누구에게나 주어 지는 것 같습니다.
          덕분에 새로운 길에 자신 있게 나설 수 있었습니다.
        </p>
      </div>
    </div>
  );
};

export default Chapter1;
