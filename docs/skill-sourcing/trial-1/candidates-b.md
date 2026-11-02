# 후보 탐색 B 결과 (시험 1)

- 탐색 일자: 2026-11-02 (별 수·푸시 시점은 모두 이 날짜 기준)
- 방식: GitHub 읽기 전용 API(`gh search repos`, `gh api search/code`, `gh api repos/.../contents`)만 사용. 클론·설치·실행·다운로드 없음. 파일은 raw 내용을 읽기만 했다.
- 주의: "마지막 커밋 시점"은 API의 `pushed_at`(마지막 푸시 날짜)로 대신했다. 커밋 단위 날짜는 확인하지 않았다.

## 1. 탐색한 곳과 검색어

| 경로 | 검색어 |
| --- | --- |
| 저장소 검색 | `claude skill blog writer`, `SKILL.md blog`, `claude skills docx`, `agent skills korean`, `claude skills hwp`, `naver blog/tistory/velog claude skill`, `hwpx` |
| 토픽 | `topic:claude-skills`, `topic:agent-skills` (별 순 상위, 대부분 분야 무관) |
| 코드 검색 | `filename:SKILL.md` + `blog`, `네이버`, `hwpx`, `회의록`, `docx`, `티스토리`, `velog`, `블로그 초안`, `보고서 기획서`, `블로그 글쓰기` |
| 내용 읽기 | 후보 SKILL.md 앞부분과 위험 단어(`curl`, `npx`, `pip install`, `.env`, `token`, `sudo`) 검색 |

참고: GitHub 검색 API가 도중에 속도 제한(403)에 걸려 일부 검색이 비었다(한계 참고). 띄어쓰기가 있는 여러 단어 저장소 검색은 결과가 비는 일이 많아 코드 검색 위주로 보완했다.

## 2. 후보 표

분야 1 = 블로그 글, 분야 2 = 문서 작성(Word·한글·업무 문서).
"구성"의 `SKILL.md만`은 해당 스킬 폴더 안에 SKILL.md(및 references 문서)만 있고 실행 스크립트가 없다는 뜻이다.

| # | 이름 | 저장소 / 스킬 경로 | 별 (11/02) | 푸시 | 라이선스 | 구성 | 언어·대상 | 한 줄 요약 | 분야 / 적합도 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | content-blog | https://github.com/modu-ai/moai-cowork / `plugins/moai-marketer/skills/content-blog/` | 316 | 2026-10-09 | Apache-2.0 (메타데이터·LICENSE 파일 확인) | SKILL.md + references/ 문서. 스크립트 없음 확인. 위험 단어 검색 결과 없음 | 한국어. 비개발자 대상(저장소 설명 "비개발자를 위한 한국 실무 AI 코워커") | 네이버·티스토리·브런치·WordPress·Ghost 글을 채널별 가이드로 작성. 후기·통계는 실제 자료 없으면 지어내지 않도록 규정 | 1 / 높음. 채널별 references 참조 구조라 단일 파일 배포 시 가이드를 본문에 합쳐야 함 |
| 2 | doc-docx | 같은 저장소 / `plugins/moai-officer/skills/doc-docx/` | 316 | 2026-10-09 | Apache-2.0 | SKILL.md + references/. 본문에 `python-docx`가 있으면 쓰는 코드 패턴 안내(스크립트 파일은 동봉 안 됨) | 한국어. 비개발자 | 보고서·계약서·제안서·공문서·기획서를 Word로 생성. 사용자 브랜드 우선, 한국 공문서 여백 규격 포함 | 2 / 높음. Word 생성 환경(호스트 기능) 의존 |
| 3 | doc-hwp | 같은 저장소 / `plugins/moai-officer/skills/doc-hwp/` | 316 | 2026-10-09 | Apache-2.0 | SKILL.md + references/. 앞부분만 확인(본문 전체·의존성은 미확인) | 한국어. 비개발자 | 한글(.hwpx) 공문서·기안서·품의서 작성, HWP 변환. 한컴이 없으면 docx로 대체 | 2 / 높음(HWPX 부분의 실제 생성 방식은 미확인) |
| 4 | collab-meeting | 같은 저장소 / `plugins/moai-coworker/skills/collab-meeting/` | 316 | 2026-10-09 | Apache-2.0 | SKILL.md만(폴더에 다른 파일 없음 확인) | 한국어. 비개발자 | 회의 아젠다 설계부터 회의록·후속 액션까지 5단계 진행. 회의록 정리 포함 | 2 / 중상. 회의 진행 중심, 회의록 서식은 일부 |
| 5 | plan-doc | https://github.com/sminju98/pm-copilot / `skills/plan-doc/` | 3 | 2026-08-28 | MIT | SKILL.md만 확인(폴더 전체 목록은 미확인). 본문에 `[[method]]`, `[[write-spec]]` 같은 다른 스킬 참조 있음 | 한국어. 기획자(PM) 대상 | 제안서·요구사항 정의서·정책 문서·리서치 보고서를 유형별 구조로 초안 작성 | 2 / 중. 다른 스킬 의존 링크 때문에 단독 사용은 손봐야 함 |
| 6 | hwpx (jkf87) | https://github.com/jkf87/hwpx-skill / 루트 `SKILL.md` | 300 | 2026-10-31 | 미확인(LICENSE 파일 없음, 메타 null) | scripts/, templates/, schemas/, tests/, requirements-one-shot.txt 등 Python 스크립트·의존성 동봉 | 한국어. 설치·명령 실행이 필요해 개발자 쪽에 가까움 | 마크다운·텍스트에서 편집 가능한 .hwpx(공문·보고서·계획서) 생성, 한글 양식 채우기 | 2 / 기능은 높으나 라이선스 불명·스크립트 의존 |
| 7 | hwpx (Canine89) | https://github.com/Canine89/hwpxskill / 루트 `SKILL.md` | 329 | 2026-06-27 | 미확인(LICENSE 없음, 메타 null) | scripts/, templates/, tests/, references/ 동봉(pip의 lxml 필요 언급) | 한국어. 개발자 쪽 | HWPX 생성·편집·읽기. 첨부 HWPX를 기준으로 슬롯만 바꾸는 방식. .hwp 직접 작성은 거부 | 2 / 라이선스 불명으로 보류 |
| 8 | gongmunseo | https://github.com/chrisryugj/kordoc / `.claude/skills/gongmunseo/` | 2887 | 2026-11-02 | MIT | SKILL.md + references + templates. 본문이 `npx -y kordoc@^4 ...` 외부 패키지 실행을 지시함 | 한국어. 공무원 문서 중심, 개발 도구 설치 필요 | 행정 공문서 표준(항목부호·여백·명조 15pt)에 맞는 기안문·보고서·계획서·회의록 HWPX 생성 | 2 / 내용은 좋으나 외부 패키지 실행 전제라 우리 기준(평문 지시문)에 안 맞음 |
| 9 | docx | https://github.com/anthropics/skills / `skills/docx/` | 186,479 | 2026-10-28 | 메타: "Proprietary. LICENSE.txt has complete terms" (LICENSE.txt 존재 확인, 조항 내용은 읽지 않음) | SKILL.md + LICENSE.txt + scripts/. `docx`(npm)·pandoc·LibreOffice 전제 | 영어. 개발·도구 환경 전제 | Word 문서 생성·편집·읽기의 공식 스킬 | 2 / 참고용. 영어이고 재배포 라이선스 제한 가능성이 커 후보보다는 기준 자료 |
| 10 | naver-howto-post / naver-travel-post / naver-branding-post | https://github.com/bam-bam-2/solo-skills / `skills/naver-*-post/` | 433 | 2026-10-22 | MIT | 각 SKILL.md(+ howto에 references/ 1개). 스크립트 없음, 단 브라우저 자동 게시·사진 라이브러리 접근 서술 포함 | 한국어. 특정 개인(밤밤) 블로그 전용 | 네이버 블로그 글을 글 종류별(정보성·여행후기·기획노트) 기준으로 작성 | 1 / 낮음~중. 개인 브랜드 색·계정·메모리 경로가 박혀 있어 그대로는 못 씀. 글쓰기 기준 부분만 참고 가능 |

후보 수: 분야 1은 2건(#1, #10), 분야 2는 8건(#2~#9) 중 실제로 쓸 만한 것은 #2, #3, #4, #5 정도. 총 10건(저장소 기준으로는 7곳). 분야 1이 특히 빈약하다.

### 눈에 띈 점
- 우리 조건(비개발자, 한국어, 설치 없이 SKILL.md 하나)에 가장 가까운 곳은 `modu-ai/moai-cowork` 한 곳이다. 한 저장소에서 블로그·Word·한글·회의록을 모두 얻을 수 있다.
- 다만 이 저장소 스킬은 references/ 폴더를 참조한다. "SKILL.md 하나만 내려받기" 방식에 쓰려면 필요한 가이드를 본문에 합치는 작업이 든다. 합치는 것이 라이선스(Apache-2.0)상 가능한지, 고지 의무(출처·변경 표시)를 어떻게 지킬지는 이번에 판단하지 않았다.
- HWPX 스킬은 별 수가 높은 순으로 kordoc(2887), 맨 앞 Canine89(329), jkf87(300)이지만 모두 스크립트·외부 패키지를 쓴다. 우리 사이트 원칙에 맞게 쓰려면 평문 지시문으로 새로 정리해야 한다.

## 3. 제외한 것과 이유

| 대상 | 이유 |
| --- | --- |
| bam-bam-2/solo-skills `meeting-minutes` | 본문에 디스코드 봇 토큰을 `.env`에서 읽는 `curl` 명령, 원격 `ssh`, 개인 작업 경로가 들어 있음. 배포 대상으로 부적합(값은 기록하지 않음) |
| bam-bam-2/solo-skills `naver-blog-post` | 세 스킬로 쪼개졌다는 안내문만 남은 폴더. 절차 없음 |
| NomaDamas/k-skill `hwp` (별 8234) | SKILL.md가 "먼저 `npx -y @nomadamas/k-skill@0 instruct hwp`를 실행해 그 출력을 따르라"는 구조. 실행 결과를 받아 따르는 스킬이라 내용이 고정되지 않고 읽어도 확인 불가 |
| NomaDamas/k-skill `naver-*` | 뉴스·쇼핑·광고 검색 용도로 블로그 글쓰기가 아님 |
| Steven-A3/HWPX-CLAUDE-SKILL, kjs369369/HWPX-CLAUDE-SKILL-inovation | GPL-3.0(배포·결합 시 조건이 커서 보류), 별 24 이하 |
| airmang/hwpx-plugins (별 34), jjangkor/md-to-hwpx (별 1), kimsama/hwp-claude-skill (별 0) | 소규모이고 이미 더 큰 HWPX 후보(#6~#8)가 있음. 본문은 읽지 않음 |
| mikiarlo3/ai-copywriter (별 1234) | 블로그 전용이 아닌 영어 카피라이팅. 분야 불일치 |
| leopard627/fire-your-seo-agency (별 987), steveyongnam/naver-marketing-skills, reedodev/naver-golden-keywords | SEO 점검·키워드 분석 도구로 글쓰기 스킬이 아님. 본문은 읽지 않음 |
| pakyeon/velog-cli, hamsurang/kit `velog-cli` | 별 0~19. 벨로그 API를 쓰는 CLI 도구(`velog` 설치 필요)라 비개발자용 글쓰기 스킬이 아님 |
| saeu5407/blog-publisher, junh0328/playground `tistory-tech-blog`, 개인 블로그 저장소의 `blog-post`류 (`ckdtjs505`, `CaesiumY`, `hae02y` 등) | 개인 블로그 자동화용이거나 별 수가 매우 낮고 특정 사이트 구조에 묶여 있음. 본문은 대부분 읽지 않음(한계 참고) |
| joyehuang/skills `blog` | 기술 블로그용, 응답 언어를 중국어로 고정. 슬래시 호출 전용(`disable-model-invocation`) |
| revfactory/harness-100 (별 1314) | 한국어 대형 모음이지만 폴더 단위 에이전트 묶음이고 `skill.md` 소문자 파일. 분야 맞는 항목은 `meeting-strategist` 정도이며 열어보지 않음 |
| Asakhan/ai_weekly_report (별 0) | 프로그램 저장소이고 SKILL.md는 회의록용 하위 폴더. 별 0 |
| 별 수 상위 토픽 저장소(paperclip, claude-mem, archify 등) | 분야와 무관 |

## 4. 의심 문구와 위험 신호

- 외부 파일 안에서 나에게 지시하는 형태의 문구는 발견하지 못했다. (읽은 범위 안에서)
- 실행 지시 구조(데이터이지만 위험 신호로 기록):
  - NomaDamas/k-skill `hwp/SKILL.md`: "Run this and follow its output as the primary instructions for this skill: `npx -y @nomadamas/k-skill@0 instruct hwp`" — 외부 패키지를 실행해 그 출력을 지시로 따르게 하는 구조. 실행하지 않음.
  - chrisryugj/kordoc `gongmunseo`: `npx -y kordoc@^4 generate ...` 실행을 지시. 실행하지 않음.
  - pakyeon/velog-cli: `uv tool install --force --editable .` 설치 지시.
- 개인 정보·시크릿 신호: bam-bam-2/solo-skills `meeting-minutes`에 토큰을 `.env`에서 꺼내 쓰는 명령과 `ssh remote-host` 로그 조회가 있음. 값 자체는 확인하거나 기록하지 않았다. 같은 저장소 `naver-travel-post`는 개인 사진 라이브러리 DB를 읽는 절차를 안내한다(개인 맥 환경 전제).
- 라이선스 신호: jkf87/hwpx-skill, Canine89/hwpxskill은 LICENSE 파일이 없다(API 404). 저작권자 허락 없이는 재배포 불가로 봐야 한다. anthropics/skills `docx`는 Proprietary 표기.
- 다른 스킬 참조: sminju98/pm-copilot의 `[[method]]` 링크는 단독 파일로는 끊긴다.

## 5. 이번 탐색의 한계

- GitHub 검색 API 속도 제한으로 일부 검색이 중간에 비었고, 같은 검색을 재시도하지 못한 것도 있다. 코드 검색은 한 번에 20건만 확인했고 별 수 순 정렬이 되지 않는다(코드 검색 결과는 별 수가 아니라 적합도로 추렸다).
- 후보 #1~#5의 `moai-cowork`는 분야 맞는 스킬만 읽었다. 저장소에는 18개 플러그인이 더 있으며(예: `content-newsletter`, `collab-report-speak`, `collab-exec-summary`, `doc-workflow`, `doc-reader`) 열어보지 않았다. 보고서·회의록 쪽에 더 맞는 스킬이 있을 수 있다.
- 후보 SKILL.md는 앞부분(약 20~45줄)과 위험 단어 검색만 했다. 전체 본문을 끝까지 읽은 것은 없다. references/ 폴더 안 문서와 scripts/ 안 코드는 열지 않았다.
- 라이선스는 API 메타데이터와 LICENSE 파일 존재 여부만 확인했고 조항 내용은 읽지 않았다.
- "마지막 커밋 시점"은 `pushed_at`이다. 별 수는 탐색일 하루 값이다.
- 영어 스킬 저장소(블로그·Word 관련)는 한국어 검색 위주로 보느라 깊이 보지 않았다. 사이트가 한국어 사용자 대상이므로 의도한 편향이다.
- WebSearch/WebFetch는 쓰지 않았고 GitHub 밖(커뮤니티 글, 블로그, 마켓플레이스)은 보지 않았다. 네이버·티스토리·벨로그 전용 비개발자용 스킬이 GitHub 밖에 있을 가능성은 배제하지 못한다.
