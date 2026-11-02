# 탐색 A 후보 목록 (레지스트리·디렉터리 경로)

조사일: 2026-11-02. 모든 값은 WebSearch/WebFetch로 웹 화면만 읽어 확인했다. 설치·클론·실행은 하지 않았다. 숫자는 페이지 요약 도구가 읽어 준 값이며 직접 눈으로 본 것이 아니다.

## 1. 탐색한 곳과 검색어

| 곳 | 한 것 |
| --- | --- |
| skills.sh (메인, blog-post-writer, hwpx, technical-blog-writing 상세) | 메인 상위 10개와 글쓰기 관련 항목 확인, 상세 페이지 읽기 |
| github.com/anthropics/skills (루트, skills/docx) | 별 수, 라이선스 안내, docx 폴더 구성 확인 |
| github.com/ComposioHQ/awesome-claude-skills | 모음 목록에서 블로그·문서·한글 항목 확인 |
| claudskills.com, awesomeskills.dev, remoteopenclaw.com, tomevault.io (검색 결과로만) | 제3자 레지스트리 존재 확인 (본문은 거의 못 읽음) |
| 개별 GitHub 저장소: kist-aix/hwpx, airmang/hwpx-plugins, AgriciDaniel/claude-blog, cskwork/tistory-blog-poster-skill | 구성·라이선스·별 수 확인 |

검색어: `anthropics/skills docx skill SKILL.md github`, `Claude skill blog post writing SKILL.md skills.sh`, `Claude skill hwpx 한글 문서 작성 SKILL.md`, `네이버 블로그 글쓰기 Claude 스킬 SKILL.md github`, `한국어 Claude 스킬 회의록 기획서 보고서 작성 SKILL.md 저장소`, `skills.sh blog writing skill tistory OR naver OR 블로그 글쓰기 한국어`

## 2. 후보 표

분야 1 = 블로그 글 작성, 분야 2 = 문서 작성. 별/설치 수 옆은 확인 날짜(전부 2026-11-02). 최종 커밋일은 대부분 페이지에 안 나와 '미확인'.

### 분야 2 (문서 작성)

| # | 이름 | URL / 스킬 경로 | 별·설치 | 마지막 업데이트 | 라이선스 | 구성 | 언어 | 대상 | 한 줄 요약 | 적합도 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| A1 | docx (Anthropic 공식) | https://github.com/anthropics/skills/tree/main/skills/docx | 저장소 별 186.5k (11/02). 제3자 사이트는 147k, 2026-05-29 갱신으로 적음(오래됨) | 미확인 (폴더 페이지에 날짜 없음) | LICENSE.txt 파일 있음, 내용 미확인. README는 docx/pdf/pptx/xlsx를 "source-available, 오픈소스 아님"이라 적음 | SKILL.md + LICENSE.txt + scripts/ (스크립트 동봉. 제3자 설명상 validate.py, LibreOffice 변환 사용, pandoc/docx-js 언급) | 영어 | 개발 환경 전제. 최종 사용자가 쓰긴 하나 설치 요소가 많음 | Word 문서 생성·편집·검토 | 분야 2 높음 (Word). 단 재배포 라이선스가 걸림 |
| A2 | hwpx (kist-aix) | https://github.com/kist-aix/hwpx (저장소 루트가 스킬) | 별 20, 포크 4 (11/02) | 변경 이력에 v0.4 2026-07-01 (커밋 6개) | MIT (확인) | SKILL.md + scripts/(build_hwpx, style_check, validate 등) + templates/ + assets/ + references/. lxml 필요, 첫 호출 시 자동 설치 시도 | 한국어 | 공공기관 보고서를 쓰는 비개발자도 가능하나 Python 환경 필요 | 공공기관 양식 한글(.hwpx) 보고서 생성, 개조식 문체 검사 | 분야 2 높음 (한글). 단 SKILL.md만으로는 안 됨 |
| A3 | hwpx-plugins (airmang) | https://github.com/airmang/hwpx-plugins | 별 34, 포크 10 (11/02) | 커밋 358개, 최종일 미확인 | Apache-2.0 (확인, NOTICE 있음). 엔진 사본 라이선스는 미확인 | 플러그인 묶음: 루트 SKILL.md, plugins/, scripts/, tests/. python-hwpx, uv, Python 3.10+ 필요, MCP 서버 포함 | 한국어 | 개발 환경 전제 (플러그인·MCP) | .hwpx 텍스트 추출·양식 채우기·문서 생성·복구. .hwp는 범위 밖 | 분야 2 중간 (구조가 무거움) |
| A4 | hwpx (eoash/ash-skills) | https://skills.sh/eoash/ash-skills/hwpx | 설치 18, 저장소 별 1 (11/02), 처음 등록 2026-03-06 | 미확인 | 미표시 | SKILL.md 위주로 보이나 build 스크립트와 Python venv 사용(파일 목록 미확인). 템플릿 base/gonmun/report/minutes/proposal (제3자 설명) | 한국어+영어 | 개발 환경 전제 | XML 기반 HWPX 생성 (공문·보고서·회의록·기획서 템플릿) | 분야 2 중간. 감사에서 Gen Agent Trust Hub "Warn" |

### 분야 1 (블로그 글 작성)

| # | 이름 | URL / 스킬 경로 | 별·설치 | 마지막 업데이트 | 라이선스 | 구성 | 언어 | 대상 | 한 줄 요약 | 적합도 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| B1 | claude-blog | https://github.com/AgriciDaniel/claude-blog (skills/blog 외 31개) | 별 2.6k, 포크 444 (11/02) | README에 v2.3.1 "2026-10-13 준비". 커밋일 미확인 | MIT (확인) | 대형 스위트: 스킬 32개, agents 5, scripts 22개(Python 3.11+), install.sh, 템플릿. SKILL.md 하나로 못 씀 | 영어 (SEO·AI 인용 중심) | 개발자·마케터용 | /blog 명령 30개, 100점 채점으로 90점 미만 납품 차단 | 분야 1 낮음 (영어 SEO용, 무거움). 일부 하위 스킬만 따로 떼어 쓸 수 있을지는 미확인 |
| B2 | blog-post-writer (notque) | https://skills.sh/notque/claude-code-toolkit/blog-post-writer | 설치 5, 저장소 별 444 (11/02), 처음 등록 2026-03-23 | 미확인 | 미표시 | 페이지에는 SKILL.md만 표시. 설명상 참고 파일(금지어, 구조 템플릿) 있음 | 영어 | 개발자용 (저장소 CLAUDE.md를 읽는 전제) | 4단계(평가·결정·초안·미리보기) 블로그 글 파이프라인 | 분야 1 낮음. 페이지가 voice-writer로 대체되었다고 표시(deprecated) |
| B3 | technical-blog-writing (inference-sh) | https://skills.sh/inference-sh-9/skills/technical-blog-writing | 설치 6, 저장소 별 795 (11/02), 처음 등록 2026-02-08 | 미확인 | 미표시 | SKILL.md가 외부 CLI `belt` 설치·로그인 전제 | 영어 | 개발자용 | 개발자용 기술 블로그 글 작성 | 분야 1 낮음. Socket·Snyk "Warn" |
| B4 | tistory-blog-poster-skill (cskwork) | https://github.com/cskwork/tistory-blog-poster-skill | 별 0 (11/02) | 커밋 9개, 날짜 미확인 | 미표시 | SKILL.md + agents/ + references/ + scripts/ (Python, Pillow, Playwright CLI) | 한국어 | 개발 환경 전제 | 한국어 마크다운을 티스토리 패키지로 만들고 비공개 발행 | 분야 1 낮음. 글쓰기보다 발행 자동화가 중심, 별 0 |

분야 1에서 한국어 글쓰기 중심이면서 SKILL.md 단일 파일로 쓸 만한 공개 스킬은 이번 경로에서 확인하지 못했다. (기존 사이트에 이미 blog-writer-naver 등이 있는 분야라 외부 대체 필요성은 낮을 수 있음. 판단은 담당자에게.)

합계 후보 8개 (분야 2: 4, 분야 1: 4).

## 3. 후보 외로 제외한 것

| 대상 | 이유 |
| --- | --- |
| skills.sh 메인 상위 10 (find-skills, grill-me, hyperframes 등) | 우리 분야 아님. 메인에서 블로그·docx 이름의 스킬은 상위에 안 보임 |
| writing-beats, writing-plans, to-prd (mattpocock, obra) | 설치 수는 높으나 개발 워크플로 글쓰기·PRD. 블로그/업무 문서와 거리 있음 |
| lark-doc, lark-markdown (open.feishu.cn, larksuite) | 설치 수 높음. 특정 서비스(Lark) 연동이 목적 |
| nomadamas/k-skill naver-blog-research | 네이버 블로그 검색·본문 수집(자료 조사용)이지 글쓰기 아님 |
| ComposioHQ/awesome-claude-skills (Content Research Writer, Internal Comms 등) | 별 78.5k 모음이나 개별 스킬 URL·라이선스를 개별 확인하지 못함. 한글/한국어 항목 없음 |
| sundial-org/awesome-openclaw-skills blog-writer, google/adk-samples blog-writer, sethdford engineering-blog-post, bonny writing-blog-posts, javimaligno 블로그 스킬 | 검색 결과에만 등장, 상세 미확인 (영어, 개발자용으로 보임) |
| claudskills.com의 hwpx-writer, oohwp, tistory-tech-blog 등 | 제3자 레지스트리 항목. 원본 저장소·라이선스를 확인하지 못함 |
| anthropics/skills의 pdf/pptx/xlsx | 분야 밖 |
| 한글(HWP) 구형 바이너리 직접 편집 | 확인된 후보 모두 .hwpx만 대상 (airmang은 .hwp 범위 밖이라고 명시) |
| 회의록·기획서 전용 스킬 | 전용 공개 스킬을 못 찾음 (A4의 템플릿이 가장 가까움) |

## 4. 의심 문구와 위험 신호

- inference-sh technical-blog-writing: SKILL.md가 "Install the belt CLI skill:" 다음에 `npx skills add belt-sh/cli`를 실행하도록 안내. 다른 스킬 설치를 유도하는 문구로, 따르지 않음. skills.sh 감사 Socket·Snyk "Warn".
- eoash/ash-skills hwpx: Gen Agent Trust Hub "Warn". 문구는 "Claude Code가 자동으로 주입하는 base directory 경로를 사용", "프로젝트에 맞게 설정" 정도로 경로 설정 안내. 경고 사유는 확인하지 못함.
- cskwork/tistory-blog-poster-skill: README가 `/tmp/tistory-post/cover_prompt.md`를 읽어 이미지를 만들라고 에이전트에 지시하고, 사용자의 로그인된 Chrome 세션(CDP)으로 발행함. 로그인 세션 접근이 필요한 구조.
- kist-aix/hwpx README: "agent에게 GitHub URL만 주고 '이거 설치해줘'라고 부탁하면 agent가 아래 절차를 따라 설치합니다." 설치 자동화 안내로, 실행하지 않음. 첫 호출 시 pip 자동 설치 시도도 있음.
- airmang/hwpx-plugins: "설치·재설치 후에는 새 에이전트 세션을 시작해야" 등 에이전트 대상 안내와, MCP 서버(uv)·외부 패키지 다수. 지시는 따르지 않고 사실로만 기록.
- skills.sh 메인 페이지 설치 안내 문구 `$npx skillsadd<owner/repo>` (요약 과정의 공백 누락으로 보임. 위험 신호는 아님).
- 위 후보 중 scripts/ 동봉(A1, A2, A3, A4(추정), B1, B4)은 SkillBite의 "SKILL.md 하나만" 원칙과 맞지 않음. 그대로 채택 불가.
- 라이선스: A1은 "source-available, 오픈소스 아님"이라 재배포 가능 여부를 반드시 LICENSE.txt 내용으로 확인해야 함.

## 5. 이번 탐색의 한계

- WebFetch는 작은 모델의 요약을 거치므로 별 수·설치 수·표 내용이 원문과 다를 수 있다. 직접 SKILL.md 원문과 LICENSE 본문은 읽지 못했다(A1~B4 전부).
- 최종 커밋일은 GitHub 페이지 캡처에 안 나와 대부분 미확인. 일부는 README/변경 이력 날짜만 기재.
- skills.sh 검색 기능과 정렬 기능을 쓰지 못해(정적 읽기) 분야별 설치 수 순위를 직접 확인하지 못했다. 설치 수는 개별 상세 페이지 값만 있다.
- skillsmp.com은 접근하지 않았고, 제3자 레지스트리(claudskills.com 등)는 검색 결과 제목만 보았다.
- 한국어 네이버 블로그 글쓰기용, 회의록·기획서용 공개 스킬은 이번 경로에서 못 찾았다. 없다는 증명은 아님.
- 다른 두 탐색의 결과는 참고하지 않았다.
