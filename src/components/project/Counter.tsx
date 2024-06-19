import Book from "../../assets/vectors/Book";
import CounterVector from "../../assets/vectors/CounterVector";

import useScroll from "../useScroll";
import SkillStack from "./SkillStack";
import ReactLogo from "../../assets/skill-logos/ReactLogo";
import TypescriptLogo from "../../assets/skill-logos/TypescriptLogo";
import TanstackQueryLogo from "../../assets/skill-logos/TanstackQueryLogo";
import TailwindLogo from "../../assets/skill-logos/TailwindLogo";
import NodeLogo from "../../assets/skill-logos/NodeLogo";
import ExpressLogo from "../../assets/skill-logos/ExpressLogo";
import MongodbLogo from "../../assets/skill-logos/Mongodb";
import VercelLogo from "../../assets/skill-logos/VercelLogo";
import FlyioLogo from "../../assets/skill-logos/FlyioLogo";

import AppLink from "./AppLink";

const Counter = () => {
  const { scrollRef, scroll } = useScroll();

  const paragraphClasses =
    "text-sm indent-3 tracking-wide leading-6 text-gray-700";

  return (
    <div className="w-[60%] h-[80%]  border border-gray-300">
      <div className="w-full h-[13%] flex items-center gap-2 border-b-[1px] border-gray-300 relative">
        <span className="ml-4 w-10 h-10 rounded-full border border-gray-300 flex justify-center items-center">
          <Book classes="w-5 h-5 inline-block stroke-1 stroke-main" />
        </span>
        <h3 className="font-medium">
          카운터
          <span className="text-xs text-gray-300 ml-2">
            단순하고 명확한 목표 관리
          </span>
        </h3>
        <div
          ref={scrollRef}
          className={`h-1 bg-main absolute left-0 bottom-0 transition-colors duration-75`}
        ></div>
      </div>
      <div
        className="w-full h-[87%] overflow-y-scroll p-6 flex flex-col gap-5"
        onScroll={scroll}
      >
        <div className="w-full grid grid-cols-2 mt-8">
          <div className="w-full h-full flex justify-center items-center">
            <CounterVector classes="w-full h-[50%]" />
          </div>
          <div className="w-full h-full flex justify-center items-center">
            <div className="w-[80%] border border-gray-300 h-40 flex flex-col justify-center gap-4 px-6">
              <p>
                <span className="text-sm text-gray-300 font-medium mr-2">
                  어플리케이션 이름
                </span>
                <span className="text-sm font-medium">카운터</span>
              </p>
              <p>
                <span className="text-sm text-gray-300 font-medium mr-2">
                  개발 인원
                </span>
                <span className="text-sm font-medium">1명</span>
              </p>
              <p>
                <span className="text-sm text-gray-300 font-medium mr-2">
                  개발 기간
                </span>
                <span className="text-sm font-medium   tracking-wide">
                  24.4.10.수 ~ 24.6.10.월
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center items-center">
          <div className="w-[50%] flex flex-col justify-center items-center mt-8 mb-8 border border-gray-300 px-4 py-8 gap-4">
            <AppLink url="https://www.counter.today" title="서비스 링크" />
            <AppLink
              url="https://github.com/jeffbukk00/counter_client"
              title="깃허브(클라이언트) 링크"
              isGit={true}
            />
            <AppLink
              url="https://github.com/jeffbukk00/counter_server"
              title="깃허브(서버) 링크"
              isGit={true}
            />
          </div>
        </div>

        <div className="w-full border border-gray-300 p-4 flex items-center justify-center gap-4 flex-wrap mt-8 mb-8">
          <SkillStack title="Typescript">
            <span className="w-7 h-7 border-gray-600 rounded-full flex justify-center items-center">
              <TypescriptLogo classes="w-4 h-4" />
            </span>
          </SkillStack>
          <SkillStack title="React.js">
            <span className="w-7 h-7 border-gray-600 rounded-full flex justify-center items-center">
              <ReactLogo classes="w-4 h-4" />
            </span>
          </SkillStack>
          <SkillStack title="Tankstack Query" extraSmall={true}>
            <span className="w-7 h-7 border-gray-600 rounded-full flex justify-center items-center">
              <TanstackQueryLogo classes="w-4 h-4" />
            </span>
          </SkillStack>
          <SkillStack title="TailwindCss">
            <span className="w-7 h-7 border-gray-600 rounded-full flex justify-center items-center">
              <TailwindLogo classes="w-4 h-4" />
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
        <div className="w-full border border-gray-300 flex flex-col  gap-8 py-8 px-16 mt-8">
          <div className="w-full flex justify-center items-center">
            <div className="border border-gray-300 text-lg font-medium py-3 px-6 rounded-full">
              기획 경험
            </div>
          </div>

          <p className={paragraphClasses}>
            “갓생”이라는 단어가 최근 유행했습니다. 본업 뿐 아니라, 일상 전반에
            크고 작은 목표들을 세우고 하루하루 실천해나가는 삶을 의미합니다.
            그래서 요즘에는 퇴근 후에도 자기 계발하는 분들이 많은 것 같습니다.
          </p>
          <p className={paragraphClasses}>
            목표들의 수가 많아지고, 종류가 다양해지고 있습니다. 저는 이를 “목표
            포화” 상태라 이름 짓고 싶습니다. 긍정적인 변화일까요, 아니면
            부정적인 변화일까요. 실천해나가는 방식에 따라 다르다고 생각합니다
          </p>
          <p className={paragraphClasses}>
            일정표에 빼곡히 모든 목표들을 기록해두고, 연속되는 데드라인에 쫓기고
            쫓기다 보면, 결국엔 무너지기 마련입니다. ”카운터”라는 어플리케이션은
            이러한 “목표 포화” 상태를 긍정적으로 풀어나가기 위한 두가지 방향의
            목표 실천 방식을 제시합니다.
          </p>
          <p className={paragraphClasses}>
            목표 관리는 단순해야 합니다. “카운터”는 목표를 성취하기까지 숫자를
            올리고, 내리기만 합니다. 줄글로 적거나, 일일이 체크리스트를 만들어
            체크하는 것보다 클릭 한 번으로 단순하게 기록할 수 있습니다.
          </p>
          <p className={paragraphClasses}>
            데드 라인이 필요한 목표와 필요하지 않은 목표를 구분해야 합니다. 짧은
            기간 내 성과를 내야되는 목표들과는 다르게, 평생 꾸준히 실천하는게 더
            중요한 목표들도 있습니다. 그런 목표들에 대해서는 굳이 데드 라인을
            설정하지 않고, 성취 경험들을 누적시켜 나가는게 더욱 중요합니다.
          </p>
          <p className={paragraphClasses}>
            단순하며, 쫓기지 않는 목표 관리. “카운터”와 함께 하나하나 차근차근
            쌓아 나가보세요.
          </p>
        </div>
        <div className="w-full border border-gray-300 flex flex-col  gap-8 py-8 px-16 mt-8">
          <div className="w-full flex justify-center items-center">
            <div className="border border-gray-300 text-lg font-medium py-3 px-6 rounded-full">
              개발 경험
            </div>
          </div>
          <p className="text-base font-medium -mb-4">클라이언트 개발</p>
          <p className={paragraphClasses}>
            React.js로 만든 어플리케이션에서, 상태들이 이루는 구조가 곧
            어플리케이션의 구조임을 지난 번 프로젝트에서 깨달았습니다. 그래서,
            어플리케이션의 각 부분에서 어떤 상태들을 정의 해야 하는지 코드 작성
            전 미리 설계를 마쳤습니다
          </p>
          <p className={paragraphClasses}>
            설계를 할 때, 상태가 가진 수직적인 계층만을 고려했었습니다. 전역
            상태, 하나의 컴포넌트에서만 사용하는 상태, 전역적이지는 않지만 여러
            하위 컴포넌트들에 영향을 미치는 상태. 이렇게 3가지로 구분을
            했습니다.
          </p>
          <p className={paragraphClasses}>
            하지만, 이번 프로젝트를 통해 상태 구조를 사전에 설계 할 때
            필수적으로 고려해야 할 또 하나의 기준을 깨달았습니다. “해당 상태가
            비동기 요청과 연결 되어 있는지”입니다. 비동기 요청과 연결 되어 있는
            상태라면, 브라우저의 런타임에서만 상태를 업데이트할 뿐만 아니라
            서버로 비동기 요청을 전송하여 데이터베이스에 있는 동일한 데이터를
            같이 업데이트 해주어야 합니다. 또한, “비동기 요청 ⇒ 로딩 ⇒ 비동기
            요청 성공 혹은 비동기 요청 실패”라는 일련의 과정에서의 각 단계에
            대해 롤백 등의 후처리나 유저 피드백까지 마쳐야만 비로소 상태
            업데이트가 완료됩니다. 비동기 요청과 연결 되어 있지 않은 상태는 단순
            UI만 변경하는 것들이 많습니다. 비동기 요청과 상태가 연결 되는지에
            따라 개발자가 신경 써야하는 범위가 크게 차이나므로, 이 둘을 구분할
            필요가 있습니다.
          </p>
          <p className={paragraphClasses}>
            Tanstack-Query는 비동기 요청과 연결 된 상태를 간편하게 관리하는데
            특화된 라이브러리 같습니다. 아직 이 라이브러리 자체를 깊게
            이해하거나 성능 이슈를 파악할 수준은 아니지만, 이번 프로젝트를
            진행하면서 만족하면서 사용했습니다. 클라이언트 상에서의 캐싱 기능도
            제공하는데, 이를 통해 UX를 개선하는 도움을 받았습니다.
          </p>
          <p className={paragraphClasses}>
            낙관적 업데이트에 대해 큰 관심이 생겼습니다. 제가 만든
            어플리케이션은 모든 비동기 요청에 대한 서버의 응답이 완료된 후에만
            업데이트가 이루어집니다. 반면에, 제가 좋아하는 “노션”과 같은
            어플리케이션은 비용이 큰 요청을 제외하고는(예: 용량이 비교적 큰
            문서를 복제하기) 비동기 요청과 연결 된 클라이언트 상의 데이터
            업데이트가 즉각적으로 이루어집니다. “노션”을 언급하지 않더라도 모든
            모던한 어플리케이션 전부 그러한 것 같습니다. 그 수많은, 복잡한
            비동기 요청들이 만들어 낼 갖가지 변수들을 감안하고 이렇게 유연하게
            관리할 수 있는지 학습하고, 구현해보고 싶은 목표가 생겼습니다. 이러한
            주제에 대한 클라이언트 개발 상의 테크닉을 프론트엔드 개발자로서
            갖추고 싶어졌습니다
          </p>
          <p className={paragraphClasses}>
            지난 프로젝트에서 간과했던 반응형 디자인을 구현했습니다.
            TailwindCSS를 활용했습니다
          </p>
          <p className="text-base font-medium -mb-4">서버 개발</p>
          <p className={paragraphClasses}>
            API의 가짓 수를 늘리는 것은 어렵지 않았습니다. 저는 현재 들어오는
            요청만 처리하는 것을 목표로 하다보니 별다른 전문성이 필요하지
            않았습니다. 다만, 이번 어플리케이션은 그 수가 매우 작지만 실제
            유저에게 서비스를 해보았습니다. 유저가 늘어남에따라 봉착할 문제들과
            그 각각의 문제들을 해결할 방법들을 체계적으로 배워보고 싶은 목표가
            생겼습니다. 더불어, 클라이언트 개발 시 경험했던 것처럼 서버 상의
            어플리케이션은 어떤 식으로 설계가 이루어지며, 설계 상 주요하게
            고려해야 될 점들은 무엇인지 역시 학습을 하고 싶어졌습니다.
          </p>
          <p className={paragraphClasses}>
            Oauth2를 통한 인증 플로우를 직접 구현해보았습니다. 구글, 네이버,
            카카오 3개의 플랫폼을 활용했습니다. 이 중에서 네이버는
            어플리케이션이 “테스트” 상태 일때는 유저의 이름과 같은 기본적인
            정보도 제공하지 않는 정책을 가지고 있었습니다. 그래서, 직접 메일을
            보내 어플리케이션의 안전성을 심사 받는 경험을 했습니다.
          </p>
          <p className={paragraphClasses}>
            서버 상에서의 유저 식별 방식으로 기존에는 쿠키를 선택했었습니다.
            PC에 설치 된 브라우저에서는 오류가 없었으나, 모바일 브라우저에서는
            제대로 작동하지 않았습니다. 클라이언트와 서버의 URL을 분리한 SPA
            어플리케이션이다보니, third-party cookie로 여겨져 이런저런 제약이
            많은 것으로 보였습니다. 그래서, 로컬 스토리지를 활용한 유저 식별
            방식을 채택했습니다
          </p>
          <p className={paragraphClasses}>
            데이터베이스를 모델링할 때는 쿼리 시 실제 성능까지는 고려하지
            못하고, 제가 작성한 API 상의 로직에 어울리게 끼워 맞춘 경향이
            강했습니다. 개발을 하면서도 잘못된 습관이 자리 잡으면 어쩌나하는
            걱정이 늘 한켠에 있었습니다. 역시 본격적이고 체계적인 학습이
            필요합니다.
          </p>
        </div>
        <div className="w-full border border-gray-300 flex flex-col  gap-8 py-8 px-16 mt-8">
          <div className="w-full flex justify-center items-center">
            <div className="border border-gray-300 text-lg font-medium py-3 px-6 rounded-full">
              배포 경험
            </div>
          </div>
          <p className={paragraphClasses}>
            지난 프로젝트와 마찬가지로, 클라이언트 호스팅 서비스로는 vercel을,
            서버 어플리케이션 서버로는 fly.io를 선택했습니다.
          </p>
          <p className={paragraphClasses}>
            어플리케이션을 커뮤니티에 배포 하기 전, 테스트를 거쳤습니다.
            이로부터 얻은 피드백들 중 반영된 것들은 다음과 같습니다. “버킷
            안으로 들어가는 버튼 찾기가 어렵다.”, “목표 카운트를 달성하거나,
            카운트를 오르고 내릴 때 그 이력이 저장되었으면 좋겠으며 추가적인
            기록이 가능하면 좋겠다.”입니다. 피드백을 받아 개선하는 작업을
            처음으로 진행 해보았습니다
          </p>
          <p className={paragraphClasses}>
            커뮤니티에 배포했지만 현재 분석할만큼의 유의미한 수의 유저가
            서비스를 이용하고 있지는 않은 상태입니다. 보다 더 큰 커뮤니티에
            배포할 계획을 가지고 있습니다.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Counter;
