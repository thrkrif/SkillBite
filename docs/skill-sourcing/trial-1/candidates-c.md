# 후보 탐색 C (한국어·비개발자 관점)

- 탐색일: 2026-11-02
- 방법: WebSearch, WebFetch, 읽기 전용 `gh api`(저장소 정보·파일 목록·SKILL.md 앞부분 읽기)만 사용. 설치·클론·실행·다운로드 없음.
- 수치(별·갱신일)는 모두 2026-11-02 확인값이다. 라이선스는 저장소 API 값 또는 SKILL.md 머리말 값이다.

## 1. 탐색한 곳과 검색어

웹 검색(한국어)
- 클로드 스킬 SKILL.md 블로그 글쓰기 네이버 블로그 github
- 한글 hwp 클로드 코드 스킬 hwpx SKILL.md
- claude skills 비개발자 마케팅 기획 보고서 회의록 스킬 모음 한국
- github Claude Code skill 네이버 블로그 글 작성 SKILL.md
- anthropics/skills docx skill (영어, Word 문서)

GitHub 저장소 검색(`gh api search/repositories`)
- 블로그 스킬 claude 한국어 / tistory skill claude / korean writing skill claude SKILL.md / claude skills korean 한국어 스킬 모음 / 회의록 스킬 claude / 보고서 claude skill korean
- 이후 추가 검색은 GitHub API 호출 한도 초과로 중단됨(한계 참고).

저장소 내부 확인(파일 목록, SKILL.md 앞부분): k-skill, kist-aix/hwpx, airmang/hwpx-plugins, stanlee7/korean-office-skills, qkrehgk1-wq/korean-claude-skills, chrisjo-dev/k-maltu, cskwork/tistory-blog-poster-skill, parkjui92/paper-proofread, Good-Intention/gongyong-hwpx, anthropics/skills(docx).

## 2. 후보 표

공통: 모두 한국어 요청으로 쓸 수 있다. 별 수는 후보 추리용일 뿐 품질 보증이 아니다.

### 분야 1. 블로그 글 작성

| # | 이름 / URL / 스킬 경로 | 별 · 마지막 갱신 | 라이선스 | 구성 | 언어 · 대상 | 한 줄 요약 · 맞는 정도 |
|---|---|---|---|---|---|---|
| 1 | k-maltu — https://github.com/chrisjo-dev/k-maltu (루트 `SKILL.md`) | 0 · 2026-11-02 | MIT (API 확인) | SKILL.md + scripts(파이썬 표준 라이브러리 6개), registers, styles, vendor, tests 동봉 | 한국어 · 글 쓰는 사람 누구나 가능하나 폴더가 큼 | 이미 쓴 글을 블로그·스레드·디씨·공문서 말투로 바꾸고 AI 문체와 숨은 문자·이미지 메타데이터를 정리. 블로그 "초안 작성"보다 "말투 변환·정리". 맞는 정도 중간 |
| 2 | korean-writing-refiner — https://github.com/qkrehgk1-wq/korean-claude-skills (`skills/korean-writing-refiner/SKILL.md`) | 1 · 2026-10-26 | MIT (API 확인) | 스킬 폴더에 SKILL.md만 있음(하위 파일 목록 확인). 저장소에는 플러그인 설정, scripts, tests 별도 | 한국어 · 비개발자 가능 | 글 윤문 스킬(저장소 설명 기준). SKILL.md 본문은 미확인. 블로그 전용 아님. 맞는 정도 낮음~중간 |
| 3 | korean-humanizer (k-skill 안) — https://github.com/NomaDamas/k-skill (`korean-humanizer/`) | 8234 · 2026-11-02 | MIT (SKILL.md 머리말) | SKILL.md는 "npx로 지침을 받아 실행하라"는 안내문(스텁). 실제 지침은 `instruction.md`(389줄), references 폴더 | 한국어 · 비개발자 가능 | AI 티 나는 한국어 글(번역체, 상투어 등)을 사람 글처럼 고침, 글자 수 맞춤. 블로그 전용 아님. 아래 위험 신호 참고. 맞는 정도 중간 |
| 4 | tistory-seo-blog-poster — https://github.com/cskwork/tistory-blog-poster-skill (루트 `SKILL.md`) | 0 · 2026-10-21 | 미확인(API상 없음) | SKILL.md + references, scripts(파이썬), agents, docs. 브라우저 연결 필요 | 한국어 글 작성 + 티스토리 비공개 저장. 개발자 성향 | 한국어 글을 먼저 쓰고 티스토리 편집기에 기본 비공개로 저장. 맞는 정도 중간(티스토리, 자동 게시 중심) |
| 5 | tistory-blog-skill — https://github.com/Rafe-Giho/tistory-blog-skill | 0 · 2026-06-02 | NOASSERTION(불명확) | 미확인(본문 안 읽음) | 영어 설명 · CLI. 개발자용 | 티스토리 관리자 세션 자동화 CLI. 비개발자에게 부적합해 보임. 맞는 정도 낮음 |

네이버 블로그 글쓰기 전용 공개 스킬은 이번 탐색에서 못 찾았다(아래 제외 항목의 naver-blog-research는 글쓰기가 아니라 검색·수집). 벨로그 전용도 못 찾았다.

### 분야 2. 문서 작성 (Word, 한글, 업무 문서)

| # | 이름 / URL / 스킬 경로 | 별 · 마지막 갱신 | 라이선스 | 구성 | 언어 · 대상 | 한 줄 요약 · 맞는 정도 |
|---|---|---|---|---|---|---|
| 6 | korean-office-skills — https://github.com/stanlee7/korean-office-skills (`report-gaejosik/`, `weekly-report/`, `meeting-to-todo/`, `pumui-draft/`, `gongmun-tone/` 등) | 별 수 미확인 · 2026-10-13 | MIT (API 확인) | 스킬마다 `SKILL.md`와 `예시` 폴더. 스크립트 없는 순수 지시문으로 보임 | 한국어 · 비개발자 대상(한국 직장인) | 개조식 보고서, 주간보고, 회의 메모→할 일 표, 품의서, 공문 말투. 읽은 `report-gaejosik`는 "지어내지 않고 [확인 필요] 표시" 규칙이 있어 우리 지침과 결이 맞음. 맞는 정도 높음 |
| 7 | korean-meeting-notes 외 — https://github.com/qkrehgk1-wq/korean-claude-skills (`skills/korean-meeting-notes`, `korean-report-summarizer`, `korean-one-page`, `korean-email-writer` 등 7종) | 1 · 2026-10-26 | MIT (API 확인) | 스킬 폴더에 SKILL.md만 있는 구조로 보임(일부만 확인) | 한국어 · 비개발자 대상 | 회의록(결정사항·액션 아이템 분리), 보고서 요약, 한 장 문서 등. 맞는 정도 높음 |
| 8 | hwpx (kist-aix) — https://github.com/kist-aix/hwpx (루트 `SKILL.md`) | 20 · 2026-07-01 | MIT (API 확인) | SKILL.md + scripts(파이썬 8개), templates, references, requirements.txt. 환경 점검 단계 있음 | 한국어 · 공공기관 보고서 양식. 파이썬 환경 필요해 비개발자에게는 설치 부담 | 한글(.hwpx) 보고서 생성·편집·읽기. 한글 분야에 정확히 맞으나 스크립트·의존성 있음(우리 "SKILL.md 하나만" 기준에 불리) |
| 9 | hwpx (airmang) — https://github.com/airmang/hwpx-plugins (루트 `SKILL.md`, `plugins/`) | 34 · 2026-11-02 | Apache-2.0 (API 확인) | SKILL.md + plugins, scripts, packaging, tests 등 큼. python-hwpx 엔진 사용 | 한국어 · 가정통신문·공문·양식 편집. 설치 부담 있음 | .hwpx 편집·추출·메일머지 등 폭넓음. .hwp 바이너리 직접 편집은 범위 밖(검색 결과 기준). 한글 분야 맞음, 단일 파일 아님 |
| 10 | gongyong-hwpx — https://github.com/Good-Intention/gongyong-hwpx (`gongyong-hwpx/`) | 1 · 2026-11-02 | MIT (API 확인) | 스킬 폴더 내부 미확인, 예시 보고서 포함 | 한국어 · 공무원 한글 보고서 | 견본 한글 양식대로 보고서·계획서 작성. 내부 구성 미확인. 맞는 정도 중간 |
| 11 | docx (Anthropic 공식) — https://github.com/anthropics/skills (`skills/docx/`) | 저장소 186,479 · 2026-10-28 | 독점(Proprietary, SKILL.md 머리말, LICENSE.txt에 조건) | SKILL.md + scripts. 자바스크립트 `docx` 패키지 사용(제3자 설명) | 영어 지침 · Word 문서(보고서·메모 포함) | Word 문서 생성·편집의 사실상 표준. 라이선스가 재배포 제한 가능성이 커 그대로 배포 불가로 보이며, 참고용. 맞는 정도 높음(Word) |

후보 합계: 11개 (분야 1: 5개, 분야 2: 6개).

## 3. 제외한 것과 이유

- k-skill의 `naver-blog-research` — 네이버 블로그 검색·본문·이미지 수집용이라 글쓰기가 아님. 스텁 구조도 동일.
- k-skill의 `hwp`(kordoc), `rhwp-edit` — 파싱·변환 중심이고 npx 의존. `hwp`는 후보 8·9와 겹침.
- eoash/ash-skills(hwpx) — 별 1, 라이선스 없음, 개인 스킬 모음.
- 회의록 소형 저장소들(talkingbeer, SOPA5, Bejoowon, leesunjung0115-design, hongminchoi, daht-mad, noheunyu1126-spec) — 별 0, 라이선스 불명, 복제본 의심. 후보 6·7이 더 낫다고 판단해 본문은 안 읽음.
- parkjui92/paper-proofread — 한국어 원고 교정(별 6, MIT)은 좋아 보이나 논문·공문 교정이 목적이라 이번 두 분야와 거리가 있음. 스크립트와 `.skill` 패키지 동봉.
- previtlab/suno-lyrics-skill, much607-web/claude-skills — 분야 밖이거나 내용 미확인.
- 영어 마케팅 스킬 모음(Corey Haines Marketing Skills, 205개 모음 등) — 블로그 글쓰기 스킬이 섞여 있을 수 있으나 이번엔 원문을 확인하지 못함.

## 4. 의심 문구와 위험 신호

- 외부 페이지·파일에서 에이전트에게 지시하는 형태의 악성 문구는 발견하지 못했다. 다만 읽은 범위는 일부 SKILL.md의 앞부분과 키워드 검색(`ignore`, `curl`, `sudo`, `token`, `password`)뿐이다.
- k-skill의 SKILL.md는 본문이 아니라 "이 명령을 실행하고 그 출력이 기본 지침이다"라는 스텁이다. 인용: `npx -y @nomadamas/k-skill@0 instruct korean-humanizer`. 실행할 때마다 외부 패키지가 내려받는 지침으로 바뀌고 `update` 명령도 안내한다. SKILL.md 한 파일 배포와 맞지 않고 보안 지침(외부 스크립트 확인 전 실행 금지)과도 충돌한다. 악의적이라는 뜻은 아니며 구조적 위험이다. 인용만 하고 따르지 않았다.
- 티스토리 자동 게시 스킬 두 개는 로그인된 브라우저·세션을 다룬다. cskwork 쪽은 "비밀번호·2FA·쿠키를 요구하지 말 것", "기본 비공개 저장"이라고 명시하고 있어 신중한 편이다. Rafe-Giho 쪽은 라이선스가 불명확하고 본문을 읽지 않았다.
- 후보 8·9·10은 파이썬 스크립트·외부 패키지(python-hwpx 등)가 있어, 배포 전에 스크립트를 전부 읽어야 한다.
- Anthropic docx는 독점 라이선스다. 내용을 복사해 우리 사이트에서 배포하면 안 될 가능성이 크다.
- 별 0~1짜리 신생 저장소가 대부분이라 품질·지속 관리가 검증되지 않았다.

## 5. 이번 탐색의 한계

- GitHub 검색 API 한도가 초과되어 블로그(네이버·벨로그) 저장소 추가 검색, `hwpx` 변형어 검색 등을 하지 못했다. 네이버·벨로그 전용 스킬이 실제로 없다고 단정할 수 없다.
- 후보 대부분은 SKILL.md 앞부분만 읽었고, 전문과 스크립트 내용은 읽지 않았다. 후보 2, 5, 10은 본문 미확인.
- 후보 6의 별 수는 확인하지 않았다(미확인). 후보 7의 폴더 구조는 일부만 봤다.
- 후보 11의 구성·`docx` 패키지 사용 설명은 제3자 정리글 기준이며, 라이선스 표기는 SKILL.md 머리말에서 직접 확인했다.
- 설치 경로·앱 재시작 여부 등은 확인하지 않았다.
- 조회 수 기반 인기 지표(국내 커뮤니티 글, 브런치, GPTers 등)는 열어보지 못했고 검색 결과 제목만 봤다. 국내 커뮤니티 글에서 추천하는 스킬 이름은 수집하지 못했다.
- 다른 두 탐색 결과는 참고하지 않았다.
