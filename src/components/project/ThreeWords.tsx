import ExpressLogo from "../../assets/skill-logos/ExpressLogo";
import FlyioLogo from "../../assets/skill-logos/FlyioLogo";
import JavascriptLogo from "../../assets/skill-logos/JavascriptLogo";
import MongodbLogo from "../../assets/skill-logos/Mongodb";
import NodeLogo from "../../assets/skill-logos/NodeLogo";
import ReactLogo from "../../assets/skill-logos/ReactLogo";
import VercelLogo from "../../assets/skill-logos/VercelLogo";
import Book from "../../assets/vectors/Book";
import ThreeWordsVector from "../../assets/vectors/ThreeWordsVector";
import useScroll from "../useScroll";
import AppLink from "./AppLink";
import SkillStack from "./SkillStack";

const Threewords = () => {
  const { scrollRef, scroll } = useScroll();

  const paragraphClasses =
    "sm:text-sm text-xs indent-3 tracking-wide leading-6 text-gray-700";

  return (
    <>
      <div className="w-full h-[10vh] flex items-center gap-2 border-b-[1px] border-gray-300 relative">
        <span className="ml-4 w-10 h-10 rounded-full border border-gray-300 flex justify-center items-center">
          <Book classes="w-5 h-5 inline-block stroke-1 stroke-main" />
        </span>
        <h3 className="font-medium">
          3words
          <span className="text-xs text-gray-300 ml-2">
            3개의 단어로 하는 상상
          </span>
        </h3>
        <div
          ref={scrollRef}
          className={`h-1 bg-main absolute left-0 bottom-0 transition-colors duration-75`}
        ></div>
      </div>
      <div
        className="w-full h-[70vh] overflow-y-scroll p-6 flex flex-col gap-5"
        onScroll={scroll}
      >
        <div className="w-full grid md:grid-cols-2 md:grid-rows-1 grid-rows-2 mt-8">
          <div className="w-full h-full flex justify-center items-center">
            <ThreeWordsVector classes="md:w-full semiSm:W-[70%] sm:w-[80%] w-[100%] h-[50%]" />
          </div>
          <div className="w-full h-full flex justify-center items-center">
            <div className="w-[80%] border border-gray-300 h-40 flex flex-col justify-center gap-4 px-6">
              <p>
                <span className="sm:text-sm text-xs text-gray-300 font-medium mr-2">
                  어플리케이션 이름
                </span>
                <span className="sm:text-sm text-xs font-medium">3words</span>
              </p>
              <p>
                <span className="sm:text-sm text-xs text-gray-300 font-medium mr-2">
                  개발 인원
                </span>
                <span className="sm:text-sm text-xs font-medium">1명</span>
              </p>
              <p>
                <span className="sm:text-sm text-xs text-gray-300 font-medium mr-2">
                  개발 기간
                </span>
                <span className="sm:text-sm text-[9px] font-medium   tracking-wide">
                  24.01.08.월 ~ 24.01.19.금
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center items-center">
          <div className="semiSm:w-[50%] sm:w-[70%] w-[80%] flex flex-col justify-center items-center mt-8 mb-8 border border-gray-300 px-4 py-8 gap-4">
            <AppLink url="https://www.3words.today" title="서비스 링크" />
            <AppLink
              url="https://github.com/jeffbukk00/3words"
              title="깃허브 링크"
              isGit={true}
            />
          </div>
        </div>
        <div className="w-full border border-gray-300 p-4 flex items-center justify-center gap-4 flex-wrap mt-8 mb-8">
          <SkillStack title="Javacript">
            <span className="w-7 h-7 border-gray-600 rounded-full flex justify-center items-center">
              <JavascriptLogo classes="w-4 h-4" />
            </span>
          </SkillStack>
          <SkillStack title="React.js">
            <span className="w-7 h-7 border-gray-600 rounded-full flex justify-center items-center">
              <ReactLogo classes="w-4 h-4" />
            </span>
          </SkillStack>
          <SkillStack title="Node.js">
            <span className="w-7 h-7 border-gray-600 rounded-full flex justify-center items-center">
              <NodeLogo classes="w-4 h-4" />
            </span>
          </SkillStack>
          <SkillStack title="Express.js">
            <span className="w-7 h-7 border-gray-600 rounded-full flex justify-center items-center">
              <ExpressLogo classes="w-7 h-4" />
            </span>
          </SkillStack>
          <SkillStack title="MongoDB">
            <span className="w-7 h-7 border-gray-600 rounded-full flex justify-center items-center">
              <MongodbLogo classes="w-4 h-4" />
            </span>
          </SkillStack>
          <SkillStack title="Vercel">
            <span className="w-7 h-7 border-gray-600 rounded-full flex justify-center items-center">
              <VercelLogo classes="w-3 h-3" />
            </span>
          </SkillStack>
          <SkillStack title="Fly.io">
            <span className="w-7 h-7 border-gray-600 rounded-full flex justify-center items-center">
              <FlyioLogo classes="w-4 h-4" />
            </span>
          </SkillStack>
        </div>
        <div className="w-full border border-gray-300 flex flex-col  gap-8 py-8 sm:px-16 px-8 mt-8">
          <div className="w-full flex justify-center items-center">
            <div className="border border-gray-300 text-lg font-medium py-3 px-6 rounded-full">
              기획 경험
            </div>
          </div>
          <p className={paragraphClasses}>
            직접 기획해서 만드는 첫번째 어플리케이션입니다. 어떤 당위성도
            부여하지 않은 채, 그저 재미로 만들어보고자 했습니다.
          </p>
          <p className={paragraphClasses}>
            대학교 1학년 때, 토론 동아리에 가입했었습니다. 디지털에 둘러 싸여
            자랐지만, 아날로그를 사랑하는 사람들이었습니다. 몇 명의 친한 형들과
            서울 근교로 여행을 갔습니다. 한적한 시골 동네를 산책하면서 가볍게
            했던 놀이는 주어진 3단어를 글감으로 자유롭게 상상하여 이야기 짓기.
            바로 해당 어플리케이션 “3words”와 같습니다.
          </p>
          <p className={paragraphClasses}>
            참 재밌었습니다. 아무런 걱정도 없이 3가지 단어 사이에서만 생각이
            이리저리 옮겨다니니, 마음이 자연스레 여유로워졌습니다. 같은 대상에
            대해 다르게 생각하길 좋아하는 사람들이다보니, 누군가가 예상치도 못한
            방식으로 이야기를 전개해나가면 다들 살짝 짜릿해하기도 했습니다.
          </p>
          <p className={paragraphClasses}>
            소박한 소통. 때묻지 않은 상상. 소중한 순간으로 기억에 남아 있습니다.
            뇌에 충격을 주듯이 자극적이며, 같은 내용으로 반복되는 콘텐츠를 자주
            접하는 요즘. 이러한 형태의 교감이 그리워지곤 합니다. 만약, 같은
            그리움을 가진 사람들이 모일 수 있다면 하고 바라던 순간,
            어플리케이션으로 구현해보고자 마음 먹었습니다.
          </p>
        </div>
        <div className="w-full border border-gray-300 flex flex-col  gap-8 py-8 sm:px-16 px-8 mt-8">
          <div className="w-full flex justify-center items-center">
            <div className="border border-gray-300 text-lg font-medium py-3 px-6 rounded-full">
              개발 경험
            </div>
          </div>
          <p className={paragraphClasses}>
            클라이언트와 서버와 데이터베이스. 어플리케이션의 기본 뼈대를 이루는
            이 3가지 영역을 각자 구축하고 연결하여 완성해보고 싶었습니다.
            퀄리티를 떠나서, 일단 매듭을 지은 다음, 스스로 배포를 해보고
            싶었습니다.
          </p>
          <p className={paragraphClasses}>
            React.js의 Custom Hook을 유연하게 사용하고자 노력했습니다. 정돈된
            코드를 작성하는 핵심이라고 생각했습니다. 특정 컴포넌트에만 귀속되지
            않는 기능들(비동기 요청, 사용자 폼, 드래그 앤 드롭, 무한 스크롤)을
            Custom Hook으로 구현했습니다.
          </p>
          <p className={paragraphClasses}>
            React.js의 전역 상태 관리를 이해하고자 노력했습니다. 외부 상태 관리
            라이브러리를 사용하지 않고, 내재된 Context API를 사용했습니다.
            인증과 어플리케이션의 모드(Read, Write, Admin 등)와 관련된 상태를
            전역적으로 관리해보았습니다. 단순히 사용법만 숙지한 것이 아닌, 서로
            다른 계층의 상태들이 구조를 이루고, 그 구조가 곧 어플리케이션과
            같다는 생각을 했습니다. 그만큼 상태 관리는 가장 핵심이 되는
            영역이며, 보다 깊은 학습이 필요함을 느꼈습니다.
          </p>
          <p className={paragraphClasses}>
            누군가가 제시한 설계 없이는 처음으로 직접, REST API와 데이터베이스의
            모델을 구축해보았습니다. 무엇이 좋은 설계인가에 대한 기준이 아직
            없었습니다. 어플리케이션이 말그대로 “돌아갈 수 있는” 수준에서만
            구현해 보았습니다.
          </p>
          <p className={paragraphClasses}>
            텍스트 에디터를 구현해보았습니다. textarea 요소로는 요소 내 모든
            텍스트에 대해서 같은 스타일만 적용이 가능했습니다. 찾아본 결과,
            “contentEditable=true”라는 속성을 적용한 일부 HTML 요소는 input이나
            textarea요소가 아니더라도 유저의 텍스트 입력을 받을 수 있었습니다.
            이를 통해 텍스트 입력을 받고, 유저가 일부 텍스트에만 스타일을
            적용하고자 한다면, 그것들을 새롭게 생성한 자식 요소로 감싼 다음, 그
            자식 요소에만 다른 스타일을 적용하고자 설계했습니다. 설계한대로는
            구현했으나, 또다른 문제를 만나게되었고, 현재는 미완성 상태입니다.
          </p>
        </div>
        <div className="w-full border border-gray-300 flex flex-col  gap-8 py-8 sm:px-16 px-8 mt-8">
          <div className="w-full flex justify-center items-center">
            <div className="border border-gray-300 text-lg font-medium py-3 px-6 rounded-full">
              배포 경험
            </div>
          </div>
          <p className={paragraphClasses}>
            클라이언트는 처음에는 firebase를 이용해 배포했습니다. Next.js 강의를
            듣던 중, vercel이라는 호스팅 서비스를 알게되었습니다. github
            레포지토리의 연결된 브랜치에 푸쉬하면 자동으로 최신 커밋으로
            재배포를 해준다는 장점이 마음에 들었습니다. 그래서, 교체를 했습니다.
            전체적으로 간단하며, 모든 배포 과정들이 자동으로 진행되었습니다.
            제가 특별하게 신경쓸 부분이 없었습니다. 또한, 처음으로 도메인을
            구매해, 연결해보았습니다.
          </p>
          <p className={paragraphClasses}>
            서버는 fly.io를 통해 배포했습니다. 이 역시, 자동으로 진행되었습니다.
            불편함 없이 배포에 성공했지만, 단 한가지 애먹던 점은 환경 변수
            설정법이 특이하다는 것이었습니다. 예민한 정보를 담고 있을거라
            추측되는 환경 변수에 대해서는 배포 명령을 내리는 로컬의 터미널에서
            특정 명령어를 입력해야만 설정을 할 수 있었습니다.
          </p>
        </div>
      </div>
    </>
  );
};

export default Threewords;
