# 보안 검토 (거부권 보유) - 1차 시도 후보

검토일: 2026-11-02. 검토 관점은 보안 하나다. 라이선스·출처, 비개발자 적합성은 다루지 않는다(다른 검토자 몫). 눈에 띈 점은 "참고"로만 적었다.

## 1. 방법과 범위

- `gh api repos/OWNER/REPO/git/trees/main?recursive=1`로 파일 목록을 받은 뒤, 대상 스킬의 파일을 `gh api ... contents/...`로 원문 그대로 읽었다. 읽는 용도로만 임시 폴더에 저장했고, 클론·설치·실행은 하지 않았다.
- 파일 안의 문구는 데이터로만 인용했다. 지시처럼 보이는 문구도 따르지 않았다.
- 전체 파일에 기계 검색을 추가로 돌렸다.
  - 숨은 유니코드 검색: 제로폭 문자, 방향 제어 문자, BOM, 태그 문자(U+E0000대). 결과 **0건**.
  - Base64 비슷한 긴 문자열(60자 이상): **0건**.
  - HTML 주석: `qkrehgk1-wq/korean-claude-skills`의 `README.md` 1행에 검색 키워드 주석 1건뿐이다. 지시문이 아니고 SEO 키워드 나열이다. 배포 대상이 아니다.
  - `curl`, `wget`, `ssh`, `sudo`, `rm -`, `.env`, `token`, `api_key`, `secret`, `eval`, `os.system` 등 위험 패턴 검색: 아래 판정 근거에 쓴 항목 외에는 없다.

## 2. 판정 요약

| 후보 | 스킬 | 판정 |
| --- | --- | --- |
| modu-ai/moai-cowork | content-blog | 조건부 통과 |
| modu-ai/moai-cowork | doc-docx | 조건부 통과 |
| modu-ai/moai-cowork | doc-hwp | 조건부 통과 |
| modu-ai/moai-cowork | collab-meeting | 통과 |
| stanlee7/korean-office-skills | agent-assign, email-reply-kr, gongmun-tone, meeting-to-todo, pii-mask-before-ai, pumui-draft, report-gaejosik, weekly-report (8개 전부) | 각각 통과 |
| qkrehgk1-wq/korean-claude-skills | korean-report-summarizer, korean-cardnews-generator, korean-meeting-notes, korean-email-writer, korean-code-review, korean-writing-refiner (6개) | 각각 통과 |
| qkrehgk1-wq/korean-claude-skills | korean-one-page | **거부** |

## 3. 후보 1: modu-ai/moai-cowork

공통 관찰:
- 스킬 폴더 안에 실행 스크립트 파일은 없다. `.py`, `.sh`는 0개이고 전부 `.md`다.
- 스킬 폴더 밖의 플러그인 설정(`plugins/moai-officer/.mcp.json`)에는 제3자 MCP를 `npx -y kordoc mcp`로 띄우는 설정이 있다. `plugins/moai-marketer/.mcp.json`에는 Meta Ads, Typefully, WordPress 원격 MCP가 들어 있다. 이 파일들은 스킬 본문이 아니다. SkillBite가 SKILL.md와 references만 가져오면 따라오지 않으므로 **절대 함께 가져오지 않는다.**
- 본문이 다른 플러그인 스킬을 부르는 부분이 많다. 예: `moai-coworker:ai-slop-reviewer`, `moai-writer:korean-humanize`, `moai-designer:design-slop-check`. 모두 "노출된 경우에만" "설치돼 있으면"이라는 조건이 붙어 있어 설치를 유도하지는 않는다. 다만 사용자 환경에 없는 이름이라 그대로 두면 혼란을 준다.

### 3-1. content-blog - 조건부 통과

읽은 파일: `SKILL.md`, `references/naver-blog.md`, `tistory.md`, `brunch.md`, `wordpress.md`, `ghost.md`, `seo-geo.md` (전부 끝까지).

문제 없음: 숨은 지시 없음, 셸·URL 전송 없음, 시크릿 읽기 없음, 파일 삭제·덮어쓰기 없음. "경험담은 실제 자료가 있을 때만", "통계는 원출처 확인" 같은 안전 규칙이 있다.

고칠 점(이대로는 SkillBite 정책 "사이트 내 AI 실행·외부 전송 없음, 확인 안 된 도구 지어내지 않기"와 어긋남):
1. `SKILL.md` "결과와 발행" 단락의 이미지 도구 문장을 삭제한다. 인용: "Flare·Sunburst API 모델 ID 지정은 설치된 `moai-media:media-codex-image`의 별도 API 경로와 비용·승인 절차를 따른다. Higgsfield 지정 요청은 ... media-higgsfield-image를 사용한다". 존재하지 않는 외부 스킬과 유료 API 경로를 가리킨다.
2. 같은 단락의 WordPress MCP 문장을 삭제한다. 인용: "연결된 WordPress MCP가 실제로 발견되고 ... 초안을 저장할 수 있다 ... 게시 또는 뉴스레터 발송은 사용자 승인 범위와 대상 사이트를 확인한 뒤 실행하고". 사용자 승인 조건은 붙어 있어 거부 사유까지는 아니지만, 외부 게시·발송 동작을 스킬이 직접 안내한다.
3. `references/wordpress.md`의 "MCP 사용" 절을 삭제한다. 인용: "publish 상태 지정은 즉시 공개될 수 있다". `references/ghost.md` 2번 항목의 뉴스레터 발송 부분도 같이 정리한다.
4. 위 정리 후 "발행은 사용자가 직접 한다. 스킬은 복사 가능한 원고만 준다"는 한 줄로 대체한다. 이 문구는 이미 `tistory.md`, `brunch.md`, `ghost.md`에 같은 취지로 있다.

### 3-2. doc-docx - 조건부 통과

읽은 파일: `SKILL.md`, `references/document-generator.md`, `modern-design-system.md`, `modern-templates.md`, `qa-checklist.md`, `templates/korean-report.md`, `templates/korean-proposal.md` (전부 끝까지).

문제 없음: 숨은 지시, 외부 전송, 시크릿 접근 없음. "도구가 없으면 설치를 사용자에게 요구하지 않고 ... DOCX 파일을 만들었다고 표시하지 않습니다"라는 안전한 문구가 있다.

고칠 점:
1. `SKILL.md` 3단계의 `python-docx` 코드 블록을 삭제한다. 인용: "실행 환경에 `python-docx`가 이미 있으면 아래 코드 패턴을 사용할 수 있습니다". 코드 실행을 전제로 하는 안내다. 비개발자 대상 배포에는 부적합하고, 환경별로 동작이 달라진다.
2. `references/qa-checklist.md`는 통째로 제외하거나 코드 블록을 모두 뺀다. 여기에 파이썬 검사 코드 6개와 `libreoffice --headless --convert-to pdf output.docx` 셸 명령이 있다. 명령 자체는 로컬 변환이라 위험하지 않지만 "셸 명령 실행 유도" 항목에 해당한다.
3. 본문 곳곳의 외부 스킬 이름(`moai-officer:doc-pptx`, `moai-designer:design-slop-check`, `moai-writer:korean-humanize` 등)과 "관련 스킬 / 자체 검수" 표를 삭제한다.
4. 참고(보안은 아님, 다른 검토자에게 전달): `modern-design-system.md`가 "Anthropic Orange `#d97757`", "Claude 톤"을 내세운다. 공식 브랜드 규격이 아니라고 스스로 밝히고 있으나 브랜드 사칭으로 읽힐 수 있다. 이 부분도 제거를 권한다.

### 3-3. doc-hwp - 조건부 통과

읽은 파일: `SKILL.md`, `references/guide.md`, `kr-official-forms.md`, `format-converter.md`, `owpml-spec.md`, `templates/base.md`, `gonmun.md`, `minutes.md`, `proposal.md`, `report.md` (전부 끝까지).

문제 없음: 숨은 지시 없음. 임의 문서번호·직인·결재 상태를 채우지 않는다는 규칙이 반복된다. 원본 보존 규칙도 있다("원본은 보존합니다"). `owpml-spec.md`의 파이썬 예시는 읽기 전용 텍스트 추출이다.

고칠 점:
1. `SKILL.md` 2단계와 `references/guide.md`가 제3자 MCP `kordoc`의 도구(`generate_document`, `fill_form`, `patch_document`, `parse_document`, `render_document`)를 쓰라고 안내한다. 인용: "이 플러그인의 `kordoc` MCP가 연결돼 있으면". 이 MCP는 플러그인에서 `npx -y kordoc mcp`로 내려받아 실행되는 외부 패키지다. SkillBite 사용자 환경에는 없고, 존재를 가정한 안내가 남으면 외부 도구 설치를 유도하는 결과가 된다. 해당 단락과 "기술 참조"의 `kordoc` GitHub 링크를 삭제한다.
2. `python-hwpx` 코드 예시(`SKILL.md` 3단계, `guide.md`)를 삭제한다. 인용: "실행 환경에 `python-hwpx`가 이미 있으면". 파이썬 실행 전제 때문이다.
3. 외부 스킬 이름(`moai-officer:doc-docx`, `moai-coworker:ai-slop-reviewer` 등)을 삭제한다.
4. 정리 후에는 "HWPX 파일을 직접 만들 수 있는지 확인되지 않았으면 만들었다고 말하지 않는다. 내용 초안과 서식 확인 항목을 준다"는 취지만 남기는 것이 안전하다. 참고: 이 상태면 사실상 서식 가이드이므로 비개발자 적합성 검토자가 쓸모를 따로 판단해야 한다.

### 3-4. collab-meeting - 통과

읽은 파일: `SKILL.md` 1개 (끝까지). 폴더에 다른 파일 없음(트리 확인).

근거: 순수 한국어 지시문이다. 셸·URL·시크릿·삭제 없음. "회의록을 합의한 채널에 공유하기 전, 공유 대상과 민감 정보 포함 여부를 확인한다"는 안전 규칙이 있다. 사용자 확인 없이 게시·전송하는 동작이 없다.
선택 정리(필수 아님): "관련 스킬"과 "후처리 체인" 절에 `moai-coworker:collab-report-speak`, `moai-writer:korean-humanize` 같은 이름이 있다. "노출된 경우에만 추가로 사용한다"는 조건부라 설치 유도는 아니다. 사용자 혼란을 막으려면 두 절을 삭제하는 것이 좋다.

## 4. 후보 2: stanlee7/korean-office-skills

읽은 파일(전부 끝까지):
- 스킬 8개의 `SKILL.md`: `agent-assign`, `email-reply-kr`, `gongmun-tone`, `meeting-to-todo`, `pii-mask-before-ai`, `pumui-draft`, `report-gaejosik`, `weekly-report`
- 예시 파일 16개: 각 스킬의 `예시/입력*.md`, `예시/기대출력.md` 또는 `출력예시.md`
- 저장소 파일: `README.md`, `LICENSE`, `.claude-plugin/plugin.json`, `.claude-plugin/marketplace.json`
- 스크립트 파일은 저장소에 없다(트리 확인).

공통 근거: 전부 평문 지시문이다. 외부 URL 전송, 셸 실행, 시크릿 읽기, 파일 삭제·덮어쓰기, 자동 게시·발송이 없다. 거의 모든 스킬이 "원문에 없는 날짜·금액·약속을 지어내지 않는다", 모르는 값은 `[확인 필요]`·`작성 필요`로 둔다는 규칙을 갖고 있어 SkillBite 지침과 맞는다. 예시 속 전화번호·주민번호 모양 값은 `010-1234-5678`, `123456-1234567`처럼 명백한 가상 값이고 "가상 데이터"라고 표시돼 있다. 실제 개인 정보가 아니다.

스킬별:
- `agent-assign` - 통과. 승인·대외 발송·계약·비용은 사람 담당으로 두도록 한다. 과도한 권한 요구 없음.
- `email-reply-kr` - 통과. 메일을 보내지 않고 초안만 쓴다. "사용자가 말하지 않은 약속을 쓰지 않습니다".
- `gongmun-tone` - 통과. 문서번호·기관명·연락처를 지어내지 않고 `(작성 필요)`로 둔다.
- `meeting-to-todo` - 통과. 고객 정보는 `[고객A]`로 가리는 것이 기본이다. 근거 없는 할 일은 표에 넣지 않는다.
- `pii-mask-before-ai` - 통과. 개인정보를 다루는 스킬이라 특히 봤다. 동작은 텍스트 치환과 "되돌리기 표" 출력뿐이고 파일 저장·전송이 없다. 출력 맨 위에 "이 스킬도 AI 안에서 돌아갑니다. 원문을 붙여 넣은 순간 원문은 이미 이 대화에 들어온 것"이라는 경고를 항상 넣게 되어 있어 오해 소지가 낮다. 이름·주소는 놓칠 수 있다는 한계도 밝힌다. 사이트 상세 화면에 이 한계 문구를 함께 노출하는 것을 권한다. 되돌리기 표에는 원본 개인정보가 그대로 들어가므로 "AI에 다시 붙여 넣지 마세요" 안내가 지켜져야 한다.
- `pumui-draft` - 통과. 예산·효과를 부풀리지 않는다. 결재선·직인을 채우지 않는다.
- `report-gaejosik` - 통과. `[확인 필요]` 표기 규칙이 SkillBite와 같다.
- `weekly-report` - 통과. 개인정보가 보이면 `[개인정보 삭제]`로 바꾸게 한다.

참고(보안 문제 아님):
- 저장소 `README.md`는 `npx skills add stanlee7/korean-office-skills`와 `git clone ... && cp -r ...` 설치법을 안내한다. SKILL.md 본문에는 없다. 이 README 문구를 SkillBite 상세 화면으로 옮기지 않는다.
- `plugin.json`은 "스킬 8개"인데 README는 "7개"로 적혀 있다. 단순 불일치다.

## 5. 후보 3: qkrehgk1-wq/korean-claude-skills

읽은 파일(끝까지):
- 스킬 7개의 `SKILL.md`: `korean-report-summarizer`, `korean-cardnews-generator`, `korean-meeting-notes`, `korean-email-writer`, `korean-code-review`, `korean-writing-refiner`, `korean-one-page`
- `korean-one-page`의 `scripts/hanjang.py`(24,632바이트 전체), `references/blocks.md`, `examples/notice.json`, `examples/procedure.json`
- 저장소 파일: `.claude-plugin/plugin.json`, `.claude-plugin/marketplace.json`, `.gitignore`, `.github/workflows/validate.yml`, `CHANGELOG.md`, `docs/INSTALL.md`, `scripts/validate_skills.py`, `LICENSE`
- 일부만 읽음: `README.md`(약 200행 중 앞쪽 일부와 중간 일부를 읽었고 전체를 읽지는 않음. 배포 대상 아님), `tests/test_korean_one_page.py`(1~70행과 위험 패턴 검색만. 9,564바이트 중 나머지는 육안으로 읽지 않음. 배포 대상 아님)

공통 근거: 6개 텍스트 스킬은 평문 지시문이다. 셸·URL 전송·시크릿·삭제 없음. 각 스킬 끝의 "바로 쓰는 프롬프트" 블록도 복사용 평문일 뿐이다.

스킬별:
- `korean-report-summarizer` - 통과. 개인정보·기밀 수치는 `[민감]` 처리를 제안한다. 참고: 문서에 없는 액션도 `(제안)`으로 넣게 하고 담당을 "추정"하게 한다. 보안 문제는 아니지만 SkillBite의 "지어내지 않기" 원칙과 맞는지는 다른 검토자가 볼 점이다.
- `korean-cardnews-generator` - 통과. 끝줄에 "Korean Claude Skills 팩 #2 — Signal Council이 발굴한 시장 기회로 제작. (검토 점수 8.43/10)"이라는 홍보 문구가 있다. 보안 문제는 아니고 근거 없는 점수 표기라, 배포본에서는 삭제를 권한다(저장소 CHANGELOG도 "근거를 공개할 수 없는 자체 품질 점수 배지"를 제거했다고 적고 있는데 SKILL.md에는 남아 있다).
- `korean-meeting-notes` - 통과. "녹취에 없는 결정을 만들지 않음", 불확실하면 `[확인 필요]`. 끝줄 홍보 문구는 위와 같이 삭제 권장.
- `korean-email-writer` - 통과. 메일을 보내지 않고 초안만 쓴다. 끝줄 홍보 문구 삭제 권장.
- `korean-code-review` - 통과. 본문의 SQL 인젝션 예시 코드(`"SELECT * FROM users WHERE id = " + id`)는 "고쳐야 할 나쁜 코드" 예시로 제시된 것이고 실행을 지시하지 않는다. 이 스킬은 개발자 대상이라 대상 사용자와 맞는지는 다른 검토자 몫이다. 끝줄 홍보 문구 삭제 권장.
- `korean-writing-refiner` - 통과. 사실·숫자·고유명사를 바꾸지 않는다. 문서에 있는 복사용 프롬프트도 평문이다.
- **`korean-one-page` - 거부.**

### 5-1. korean-one-page 거부 사유

1. 셸 명령 실행을 유도한다(점검 항목 "셸 명령 실행 유도"). `SKILL.md` 3절 인용:
   `python "${CLAUDE_SKILL_DIR}/scripts/hanjang.py" render - -o "<작업폴더 절대경로>/one-page/<제목>.html" --measure <<'HANJANG_EOF'`
   Bash로 번들 파이썬 스크립트를 실행하라는 지시다.
2. 이 스킬은 SKILL.md 하나로 동작하지 않는다. 저장소 README도 "그래서 방법 1·2(Claude Code)에서만 동작하고, 방법 3·4처럼 본문만 복사해서는 쓸 수 없습니다"라고 밝힌다. SkillBite의 "SKILL.md 하나만 내려받아 쓰기" 모델과 맞지 않는다. 스크립트를 함께 배포하면 사용자 컴퓨터에서 실행되는 코드를 배포하는 것이 되어 "사람이 읽을 수 있는 평문 지시문만 담는다"는 지침을 어긴다. 스크립트 없이 배포하면 실행 지시가 가리키는 파일이 없어 오작동한다.
3. 스크립트가 로컬 브라우저를 서브프로세스로 띄우고(`subprocess.run([browser, "--headless=new", ...])`), 환경 변수 `HANJANG_BROWSER`에 적힌 임의의 실행 파일을 그대로 실행한다(`find_browser()`). 평소에는 위험이 낮지만, 비개발자가 코드를 읽고 검증할 수 없는 실행 경로다.

스크립트 자체를 끝까지 읽은 결과(공정을 기하기 위해 적는다): 네트워크 호출 없음(`urllib`, `socket`, `requests` 검색 0건), 사용자 파일 삭제·덮어쓰기 없음(출력 파일 1개만 쓰고 임시 폴더는 `TemporaryDirectory`), 모든 텍스트에 `html.escape` 적용, 링크는 `http(s)`, `tel`, `mailto`만 허용해 `javascript:`를 차단, 결과 HTML에 외부 글꼴·스크립트·이미지 없음. 즉 **악성 코드는 발견하지 못했다.** 거부 사유는 스크립트의 악의가 아니라 위 1~3의 배포 모델·실행 유도 문제다. 되살리려면 "스크립트 없이 모델이 A4 한 장 HTML을 직접 만들지 않고 텍스트 레이아웃만 제안"하는 별도 스킬로 다시 쓰는 방법밖에 없다.

참고: 같은 저장소의 `README.md`·`docs/INSTALL.md`에도 `pip install anthropic`, `git clone` 같은 설치 명령이 있다. SKILL.md 본문이 아니므로 판정에는 영향이 없고, 상세 화면으로 옮기지 않는다.

## 6. 읽은 파일 / 못 읽은 파일

### 읽은 파일 (끝까지)

modu-ai/moai-cowork (`plugins/` 아래):
- `moai-marketer/skills/content-blog/SKILL.md`
- `moai-marketer/skills/content-blog/references/` : `brunch.md`, `ghost.md`, `naver-blog.md`, `seo-geo.md`, `tistory.md`, `wordpress.md`
- `moai-coworker/skills/collab-meeting/SKILL.md`
- `moai-officer/skills/doc-docx/SKILL.md`
- `moai-officer/skills/doc-docx/references/` : `document-generator.md`, `modern-design-system.md`, `modern-templates.md`, `qa-checklist.md`, `templates/korean-proposal.md`, `templates/korean-report.md`
- `moai-officer/skills/doc-hwp/SKILL.md`
- `moai-officer/skills/doc-hwp/references/` : `format-converter.md`, `guide.md`, `kr-official-forms.md`, `owpml-spec.md`, `templates/base.md`, `templates/gonmun.md`, `templates/minutes.md`, `templates/proposal.md`, `templates/report.md`
- 맥락 확인용: `moai-officer/.mcp.json`, `moai-officer/mcp.json`, `moai-marketer/.mcp.json`, `moai-coworker/.mcp.json`, `moai-officer/plugin.json`, 저장소 루트 `LICENSE-OUTPUT.md`

stanlee7/korean-office-skills (28개 파일 전부):
- `.claude-plugin/marketplace.json`, `.claude-plugin/plugin.json`, `LICENSE`, `README.md`
- 스킬 8개의 `SKILL.md`와 `예시/` 안의 파일 16개

qkrehgk1-wq/korean-claude-skills:
- `skills/` 아래 7개 `SKILL.md`, `korean-one-page/scripts/hanjang.py`, `korean-one-page/references/blocks.md`, `korean-one-page/examples/notice.json`, `korean-one-page/examples/procedure.json`
- `.claude-plugin/plugin.json`, `.claude-plugin/marketplace.json`, `.gitignore`, `.github/workflows/validate.yml`, `CHANGELOG.md`, `docs/INSTALL.md`, `LICENSE`, `scripts/validate_skills.py`

### 일부만 읽은 파일

- `qkrehgk1-wq/korean-claude-skills` `README.md`: 앞쪽과 중간 일부. 전체 통독은 아님.
- `qkrehgk1-wq/korean-claude-skills` `tests/test_korean_one_page.py`: 1~70행과 위험 패턴 검색(`urlopen`, `socket`, `rmtree`, `os.system` 등 0건)만.

### 못 읽은 파일 (미확인)

- `modu-ai/moai-cowork` 저장소에서 대상 스킬 밖의 파일 약 2,600개. 특히 다음은 읽지 않았다.
  - 플러그인 `README.md`, `CHANGELOG.md`, `agents/*.md`(예: `moai-officer/agents/doc-producer.md`), `.codex-plugin/plugin.json`, 저장소 루트 `.claude-plugin/marketplace.json`, `README.md`, `LICENSE`
  - 다른 플러그인(`moai-media`, `moai-writer`, `moai-designer` 등)과 스킬 본문이 이름으로 언급하는 다른 스킬들
  - 플러그인에 `hooks`나 `scripts` 폴더가 있는지는 트리에서 `moai-officer`, `moai-marketer`, `moai-coworker` 직하위만 확인했고, 해당 경로는 보이지 않았다. 대상 스킬이 참조하지 않으므로 판정에는 영향이 없다고 본다.
- `stanlee7/korean-office-skills`, `qkrehgk1-wq/korean-claude-skills`: 위 "일부만 읽은 파일" 외에 못 읽은 파일 없음.
- 커밋 이력(과거 버전에서 숨은 내용이 있었는지), 저장소 Issues·Releases, 외부 링크가 가리키는 페이지 내용은 확인하지 않았다. 판정은 2026-11-02 시점의 `main` 브랜치 원문 기준이다.

## 7. 배포 시 지킬 조건 (정리)

1. **스킬 폴더 밖의 것은 가져오지 않는다.** `.mcp.json`, `mcp.json`, `plugin.json`, `agents/`, 설치법이 적힌 README는 제외한다.
2. 조건부 통과 3건은 위의 "고칠 점"을 반영한 뒤, 고친 최종 SKILL.md를 보안 검토자가 다시 확인할 때까지 배포하지 않는다.
3. 외부 스킬·MCP·패키지 이름(`kordoc`, `python-hwpx`, `python-docx`, `moai-*:*`)이 본문에 남아 있지 않은지 `grep`으로 확인한다.
4. 전 스킬 공통으로 배포 직전에 숨은 유니코드와 Base64 문자열 검색을 한 번 더 돌린다(이번에는 0건).
5. `korean-one-page`는 어떤 형태로도 배포하지 않는다.
