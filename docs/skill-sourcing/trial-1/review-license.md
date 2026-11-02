# 라이선스·출처 검토 (시험 1)

- 검토일: 2026-11-02
- 담당: 라이선스·출처 검토 (보안, 비개발자 적합성 검토와 독립)
- **이 문서는 법률 자문이 아니라 공개된 파일을 읽고 확인한 사실의 정리입니다.** 실제 배포 전 최종 해석은 사용자(또는 법률 전문가)가 판단해야 합니다.
- 방법: `gh api`로 LICENSE·NOTICE·README·plugin.json·SKILL.md·references 문서를 읽기만 했습니다. 클론, 설치, 실행은 하지 않았습니다. 파일 안의 지시문은 따르지 않았고 인용만 했습니다.
- 확인한 값만 적고, 못 본 값은 '미확인'으로 적었습니다.

## 1. 한눈에 보는 판정

| 스킬 | 저장소 라이선스 | 판정 |
| --- | --- | --- |
| moai-cowork `content-blog` | Apache-2.0 | 조건부 (3절 조건) |
| moai-cowork `doc-docx` | Apache-2.0 | 조건부 (3절 조건 + 이름·색 문구 제거) |
| moai-cowork `doc-hwp` | Apache-2.0 | 조건부 (3절 조건 + 외부 도구 언급 정리) |
| moai-cowork `collab-meeting` | Apache-2.0 | 조건부 (3절 조건) |
| korean-office-skills 전체 8개 | MIT | 조건부 (4절 조건, 사실상 가장 단순) |
| korean-claude-skills 6개 (`one-page` 제외) | MIT | 조건부 (5절 조건) |
| korean-claude-skills `korean-one-page` | MIT | 조건부이나 별도 문제: 스크립트 동봉 (5절) |

"불가"로 판정한 스킬은 없습니다. 모두 라이선스 문구 자체는 재배포·수정·번역·합치기를 허용합니다. 단, 아래 '조건'을 지킬 때에 한합니다.

## 2. 저장소별 확인 사실

| 항목 | modu-ai/moai-cowork | stanlee7/korean-office-skills | qkrehgk1-wq/korean-claude-skills |
| --- | --- | --- | --- |
| LICENSE 파일 | 있음. Apache License 2.0 표준 전문(202줄). 끝의 부록은 `Copyright [yyyy] [name of copyright owner]` 틀 그대로 | 있음. MIT 표준 전문 | 있음. MIT 표준 전문 |
| 저작권자 표기 | LICENSE에는 없음. `NOTICE`에 `Copyright (c) 2026 modu-ai (모두의 AI)` | LICENSE: `Copyright (c) 2026 stanlee7` | LICENSE: `Copyright (c) 2026 Korean Claude Skills` (개인 이름이 아닌 프로젝트명. plugin.json 작성자는 `qkrehgk1-wq`) |
| GitHub 판정 | apache-2.0 | mit | mit |
| 파일과 이름의 일치 | 일치 (README "Apache License 2.0", plugin.json `"license": "Apache-2.0"`) | 일치 (README, plugin.json, 스킬 머리말 `license: MIT`) | 일치 (README "MIT License", plugin.json `"license": "MIT"`). 스킬 머리말에는 license 필드 없음 |
| 스킬 단위 라이선스 | 스킬 폴더에 별도 LICENSE 없음. 플러그인별 plugin.json도 `Apache-2.0` (marketer, coworker, officer 확인) | 스킬 폴더에 별도 LICENSE 없음. 머리말 `license: MIT` | 스킬 폴더에 별도 LICENSE 없음 |
| 저장소와 스킬 라이선스가 다른가 | 다르지 않음 | 다르지 않음 | 다르지 않음 |
| 이 저장소가 공개한 최신 커밋 | `e438597ec9fb92bfd72f2cf390bd0a1d8afe8c75`, 2026-10-09, "fix(mcp): bound relay buffers and prepare v1.2.8 release" | `ab6dff2648f2edd07e0eb723e0dbfaaeb00d374a`, 2026-10-13, "Add agent-assign skill..." | `ed693b9915cbeddab05355c4208bc0384729af1a`, 2026-10-26, "docs: 관련 블로그 글 링크 추가" |
| 유지보수 상태 | 보관(archived) 아님. 별 316, 열린 이슈 0, 저장소 생성 2026-02-15, 최신 릴리스 v1.2.8(2026-10-09) | 보관 아님. 별 0, 열린 이슈 0, 저장소 생성 2026-10-07, 커밋 3개(2026-10-07~13) | 보관 아님. 별 1, 열린 이슈 0, 저장소 생성 2026-05-30, 커밋 활발(최근 2026-10-18, 10-26) |
| 유의점 | 해당 없음 | 커밋 메시지 본문에 `Co-Authored-By: Claude Opus 5.5` 표기가 있음(AI와 함께 작성). 별 0이라 검증된 사용 사례가 적음 | 해당 없음 |

주의: 위 커밋 해시와 날짜는 **저장소 전체의 최신 커밋**이며, 우리가 채택할 스킬 폴더만의 마지막 변경 커밋이 아닙니다. 폴더별 마지막 커밋은 확인하지 않았습니다(미확인). 채택 시점에 다시 해시를 고정해야 합니다.

## 3. modu-ai/moai-cowork (Apache-2.0)

### 3.1 읽은 근거

- `LICENSE`: Apache License 2.0 전문. 복제·파생 저작물 작성(Derivative Works)·재배포 허가가 들어 있음(2항, 4항).
- `README.md` 라이선스 절: "Apache License 2.0 — 상업적 사용·수정·재배포 자유. 저작권 고지와 변경 사항 표시가 필요합니다."
- `NOTICE`: "Copyright (c) 2026 modu-ai (모두의 AI)", "This product is licensed under the Apache License, Version 2.0."
- `LICENSE-OUTPUT.md`: 스킬을 쓰고 만든 **산출물**은 이용자 소유라는 문서. 저장소의 스킬 자체는 "Apache-2.0의 조건(저작권 고지 유지, 변경 사항 표시 등)을 따릅니다"라고 명시. 우리 재배포 조건과는 별개.
- `TRADEMARKS.md`(상표 정책): Apache 6항대로 상표 허락은 없음. "포크·수정본에 원래 이름을 그대로 쓰는 것"은 사전 서면 승인 필요. 보호 대상: "모두의 코워크", "MoAI-Cowork", "모두의 AI", "modu-ai", "MoAI", 마스코트, `modu-ai/moai-cowork` 식별자와 `moai-*` 플러그인 이름. 허용: "사실을 서술하기 위한 언급", "링크, 인용".

### 3.2 재배포·수정 허용 여부

- 한국어 고치기, 여러 파일 합치기(content-blog의 `SKILL.md` + `references/*.md` 6개를 하나로) 모두 Apache-2.0 상 "파생 저작물" 작성과 재배포로 허용됩니다. 합친 결과물에는 변경 사실 표시가 필요합니다.
- 상업 이용 제한 없음(README).

### 3.3 지켜야 할 구체적 조건 (Apache-2.0 4항 기준, 법률 해석 아님)

1. **라이선스 사본 제공**: 받는 사람에게 Apache License 사본을 줘야 합니다. 링크만으로 충분한지는 미확인(보수적으로는 사이트에 전문을 두고 연결, 또는 다운로드에 포함).
2. **변경 표시**: 수정한 파일에 "변경했다"는 눈에 띄는 고지를 넣어야 합니다. 번역, 합치기, 문구 삭제를 적습니다.
3. **저작권·고지 유지**: 원본의 저작권, 특허, 상표, 귀속 고지를 파생물의 소스 형태에서 유지합니다. `Copyright (c) 2026 modu-ai (모두의 AI)` 표기를 보존합니다.
4. **NOTICE 처리**: 원본에 `NOTICE` 파일이 있으므로, 그 안의 귀속 고지를 (a) 함께 배포하는 NOTICE 파일, (b) 소스·문서, (c) 화면 표시 중 한 곳에 읽을 수 있게 둡니다. 우리 스킬 4개는 NOTICE 3절 이하의 개별 파일 목록에 **나오지 않으므로**(아래 3.4) 실제로 옮길 제3자 고지는 없었습니다. 그래도 NOTICE의 저작권 문구는 상세 페이지에 옮깁니다.
5. **상표**: 스킬 이름과 본문에서 "모두의 코워크", "MoAI", `moai-*`를 우리 서비스의 이름이나 보증처럼 쓰지 않습니다. 출처를 사실대로 밝히는 문장은 허용됩니다. 본문에 남은 `moai-media:media-codex-image`, `moai-coworker:ai-slop-reviewer`, `moai-writer:korean-humanize` 같은 플러그인 식별자는 비개발자에게도 맞지 않으므로 고칠 때 제거합니다.
6. **보증 없음 문구**: 원본 무보증 조항(7, 8항)은 우리 쪽 책임 면책에 영향. 필요하면 사이트에 '원본 그대로 제공' 문구 유지(선택).
7. 우리 쪽 변경 부분에 우리 저작권을 따로 적는 것은 허용(4항: "You may add Your own copyright statement to Your modifications"). 필수는 아님.

### 3.4 하위 폴더·제3자 저작물

- 읽은 `NOTICE`의 제3자 목록(MIT 8건, Noto CJK 폰트, 외부 API 규격, 브랜드 디자인 참고 자료)이 가리키는 파일 경로에 **content-blog, doc-docx, doc-hwp, collab-meeting은 들어 있지 않습니다.** NOTICE 5절에 `airmang/python-hwpx — 사무관 — 한글 문서(HWPX) 처리`가 "라이선스 고지 의무가 없는 참고 출처"로 있고, doc-hwp가 이 도구를 언급합니다. python-hwpx의 라이선스 자체는 내가 확인하지 않았습니다(미확인). 코드는 가져오지 않고 링크만 있어 현재 의무는 보이지 않습니다.
- 각 스킬 폴더의 `references/`는 파일 이름과 일부 문구만 확인했고 **전체를 정독하지는 않았습니다.** 본문 안에 인용된 제3자 글이 있는지는 완전히 배제하지 못합니다(미확인). 배포 직전 합친 본문을 한 번 더 읽어야 합니다.
- `doc-docx`:
  - `references/modern-design-system.md`와 본문에 "Anthropic Orange `#d97757`", "Anthropic Blue `#6a9bcc`", "Anthropic Green `#788c5d`" 색 이름과 색상값이 있습니다. 색상값 자체는 저작물이 아니지만 제3자(Anthropic) 이름이 붙은 문구이므로 우리 사이트에는 '브랜드 이름 없는 중립 팔레트'로 바꾸는 편이 안전합니다(의견).
  - 폰트 이름 "Pretendard", "맑은 고딕", "굴림", "Lora"는 이름만 언급되고 폰트 파일은 포함되지 않았습니다(`NOTICE`도 폰트 파일은 doc-pdf에 한정, 저장소에 바이너리 미포함이라고 적음).
  - 인용 링크: python-docx 문서, 행정안전부 사이트(링크만).
- `doc-hwp`: `kordoc`(github.com/chrisryugj/kordoc, MIT로 candidates-b에서 확인), `python-hwpx` MCP·라이브러리를 쓰도록 안내합니다. 도구를 번들하지 않고 링크만이므로 라이선스 의무는 보이지 않으나, 우리 사이트가 이를 설치 지시하면 `[확인 필요]`로 표시되어야 합니다.
- `collab-meeting`: 폴더에 SKILL.md 한 파일뿐. `## 출처` 절은 "일반적인 진행 예시다"라는 서술이고 외부 저작물 인용이 아님. 다만 다른 스킬(`moai-coworker:ai-slop-reviewer`, `moai-writer:korean-humanize`)을 언급합니다. 후자는 NOTICE 1.8에서 `epoko77-ai/im-not-ai`(MIT) 기반이라고 밝힌 스킬이며, 우리가 그 스킬을 가져오지 않으면 영향 없음.

### 3.5 스킬별 판정

| 스킬 | 판정 | 근거(파일, 인용) | 추가 조건 |
| --- | --- | --- | --- |
| `content-blog` | 조건부 | `plugins/moai-marketer/plugin.json` `"license": "Apache-2.0"`. SKILL.md 머리말에 license/author 필드는 없음(`metadata: version: "1.1.5"`만) | 3.3의 1~5. 합칠 때 `references/` 6개(naver-blog, tistory, brunch, wordpress, ghost, seo-geo)를 변경 표시와 함께 본문에 흡수. 외부 링크(네이버 고객센터, wordpress.com 안내)는 링크만이라 문제 없음 |
| `doc-docx` | 조건부 | `plugins/moai-officer/plugin.json` `"license": "Apache-2.0"` | 3.3의 1~5. `Anthropic` 이름이 붙은 색 이름 제거, `moai-*` 식별자 제거 |
| `doc-hwp` | 조건부 | 같은 `moai-officer` 플러그인, Apache-2.0 | 3.3의 1~5. `kordoc`, `python-hwpx` 같은 외부 도구는 우리 원칙(확인되지 않은 값은 지어내지 않음)에 맞게 처리. 라이선스 면에서는 링크만 있어 의무 없음 |
| `collab-meeting` | 조건부 | `plugins/moai-coworker/plugin.json` `"license": "Apache-2.0"`, 폴더에 SKILL.md만 있음 | 3.3의 1~5. 가장 단순 |

## 4. stanlee7/korean-office-skills (MIT)

### 4.1 근거

- `LICENSE`: MIT 표준 전문, "Copyright (c) 2026 stanlee7". 핵심 허가: "use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies". 유일한 조건: "The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software."
- `README.md`: "MIT. 회사와 개인 모두 자유롭게 쓰고 고칠 수 있습니다."
- 스킬 8개(`agent-assign`, `email-reply-kr`, `gongmun-tone`, `meeting-to-todo`, `pii-mask-before-ai`, `pumui-draft`, `report-gaejosik`, `weekly-report`) 모두 머리말 `license: MIT`. 각 폴더는 `SKILL.md` + `예시/`(입력, 기대 출력)만 있고 스크립트 없음.
- `.claude-plugin/plugin.json`: `author: stanlee7`, `license: MIT`, 버전 1.2.0.

### 4.2 허용 여부와 조건

- 수정, 번역, 합치기, 상업적 배포 모두 허용. 이미 한국어라 번역은 필요 없음.
- 조건은 하나: **저작권 문구(`Copyright (c) 2026 stanlee7`)와 MIT 허가 문구를 사본 또는 상당 부분에 포함.** 변경 표시 의무는 없음(선택).
- 스킬 하나를 단독 파일로 내려받게 할 경우, 그 파일 안(또는 함께 받는 곳)에 저작권 문구와 MIT 문구를 넣는 것이 가장 안전합니다. 사이트 상세 페이지에만 두는 방식이 충분한지는 미확인.
- 제3자 저작물 포함: 읽은 범위에서 외부 자료 인용 없음. README의 외부 링크(vercel-labs/skills, Claude Code 공식 문서)는 설치 안내·형식 근거를 위한 링크. 하위 폴더 별도 라이선스 없음.
- 예시 파일: `pii-mask-before-ai/예시/기대출력.md`가 "가상 데이터로 만든 예시"라고 밝힘(실제 개인정보 아님. 단, 전체 예시를 다 읽지는 않았으므로 보안 검토가 필요).

### 4.3 판정

| 스킬 | 판정 | 비고 |
| --- | --- | --- |
| `report-gaejosik` | 조건부 | MIT 고지 포함 |
| `weekly-report` | 조건부 | 동일 |
| `meeting-to-todo` | 조건부 | 동일 |
| `pumui-draft` | 조건부 | 동일 |
| `gongmun-tone` | 조건부 | 동일 |
| `email-reply-kr` | 조건부 | 동일 |
| `pii-mask-before-ai` | 조건부 | 동일. 내용상 개인정보 취급 스킬이므로 보안 검토 결과를 우선 |
| `agent-assign` | 조건부 | 동일 |

### 4.4 신뢰도 관련 사실 (라이선스 밖)

- 별 0, 커밋 3개, 저장소 생성 2026-10-07로 신생. 커밋 메시지에 Claude와 공동 작성 표기. 저작권자 주장 자체는 MIT 문구에 따라 `stanlee7`이므로 라이선스 상 의무는 같습니다. 지속 유지보수 여부는 미확인.

## 5. qkrehgk1-wq/korean-claude-skills (MIT)

### 5.1 근거

- `LICENSE`: MIT 표준 전문, "Copyright (c) 2026 Korean Claude Skills".
- `README.md`: "MIT License — 개인·상업적 사용, 수정, 재배포 모두 자유롭습니다."
- `plugin.json`: `author: qkrehgk1-wq`, `license: MIT`, 버전 1.3.0.
- 스킬 머리말에는 license/author 필드가 없어서, **스킬 파일만 따로 떼면 라이선스 정보가 사라집니다.** 우리 쪽에서 반드시 붙여야 합니다.
- 스킬 7개: `korean-cardnews-generator`, `korean-code-review`, `korean-email-writer`, `korean-meeting-notes`, `korean-one-page`, `korean-report-summarizer`, `korean-writing-refiner`.
- 하위 폴더 별도 라이선스 없음. 스킬 본문 안에서 외부 저작물 인용은 발견하지 못했음(머리말과 앞부분, 링크·출처 키워드 검색만 확인. 전체 정독은 하지 않음).

### 5.2 허용 여부와 조건

- 수정, 번역, 합치기, 재배포 모두 허용. 조건은 4.2와 같음: 저작권 문구 `Copyright (c) 2026 Korean Claude Skills`와 MIT 허가 문구 포함.
- 저작권자 이름이 개인이 아닌 프로젝트명이라, 우리 기록에는 **LICENSE 표기 그대로** 적고 작성자 `qkrehgk1-wq`를 함께 병기합니다.

### 5.3 판정

| 스킬 | 판정 | 비고 |
| --- | --- | --- |
| `korean-meeting-notes` | 조건부 | 폴더에 SKILL.md만 있음. MIT 고지 포함 |
| `korean-report-summarizer` | 조건부 | 동일 |
| `korean-email-writer` | 조건부 | 동일 |
| `korean-writing-refiner` | 조건부 | 동일 |
| `korean-cardnews-generator` | 조건부 | 동일 (분야는 SNS 카드뉴스) |
| `korean-code-review` | 조건부 | 동일 (분야 밖일 수 있음. 적합성은 다른 검토자 몫) |
| `korean-one-page` | 조건부 | 라이선스는 동일하나 폴더에 `scripts/hanjang.py`, `references/blocks.md`, `examples/*.json`이 있고, 머리말이 "번들된 파이썬 스크립트가 배치·인쇄 서식을 맡는다"고 함. "SKILL.md 하나만" 원칙과 맞지 않아 그대로 채택은 어렵고 보안 검토 대상 |

### 5.4 신뢰도 관련 사실

- 별 1, 저장소 생성 2026-05-30, 최근 커밋 2026-10-26. 커밋 메시지에 "지휘관", "Signal Council" 같은 내부 운영 용어와 홍보용 파일(`landing/LAUNCH-KIT.md` 언급)이 있음. 제품화·홍보 목적의 저장소로 보임(의견이 아닌 커밋 메시지 사실). 우리 SKILL.md에는 이런 용어를 옮기지 않아야 합니다.

## 6. 우리 쪽 기록 방법 제안

SDD 규칙상 스키마를 바꾸려면 `docs/HANDOFF.md`를 먼저 고쳐야 합니다. 아래는 제안이며 아직 반영하지 않았습니다.

### 6.1 `src/data/skills.json` 항목에 둘 필드 (제안)

```
"source": {
  "name": "modu-ai/moai-cowork",
  "url": "https://github.com/modu-ai/moai-cowork/tree/<커밋해시>/plugins/moai-marketer/skills/content-blog",
  "commit": "<채택 시점에 고정한 전체 해시>",
  "retrievedAt": "2026-11-02",
  "license": "Apache-2.0",
  "licenseUrl": "https://github.com/modu-ai/moai-cowork/blob/<커밋해시>/LICENSE",
  "copyright": "Copyright (c) 2026 modu-ai (모두의 AI)",
  "changes": "한국어 문구 정리, references 6개를 본문에 합침, 플러그인 식별자 제거"
}
```

- 링크는 `main` 대신 **커밋 해시로 고정**합니다(원본이 바뀌거나 지워져도 근거가 유지).
- `changes`는 Apache-2.0에서는 필수에 가깝고 MIT에서는 선택이지만, 같은 형식으로 통일하면 관리가 쉽습니다.
- 사이트에는 이 값을 상세 페이지의 '출처' 칸에 그대로 표시합니다(화면 변경은 `DESIGN.md`에 먼저).

### 6.2 다운로드 파일 안

- 스킬 파일(`.md`) 끝에 `## 출처와 라이선스` 한 절(평문): 원본 이름, URL, 저작권 문구, 라이선스 이름, "한국어로 고치고 합쳤습니다" 한 줄. MIT는 허가 문구 전문도 함께.
- 파일에 전문을 넣는 것이 길면, 같은 사이트의 `/licenses/` 사본 링크로 대신할 수 있을지는 미확인(위 3.3의 1번과 같은 사유).

### 6.3 저장소 문서

- 새 문서가 필요하다면 `docs/`에 `THIRD_PARTY_NOTICES.md` 같은 한 장(원본별로 저작권 문구와 라이선스 전문)을 두는 방식을 제안합니다. 이 파일은 `HANDOFF.md`의 문서 위치 표에 먼저 추가해야 합니다.
- 채택 결정 기록(어떤 해시를 언제 가져왔고 무엇을 바꿨는지)은 `docs/skill-sourcing/` 아래에 두고, 폴더별 마지막 커밋 해시를 이때 확정합니다.

## 7. 공통 위험과 확인하지 못한 것

- 폴더별 마지막 커밋 해시: 확인하지 않음. 저장소 최신 커밋만 확인.
- moai-cowork `references/` 전체 정독 안 함. 제3자 인용 포함 여부는 합치기 전에 재확인 필요.
- `python-hwpx`, `kordoc`의 라이선스는 이번에 직접 확인하지 않음(kordoc은 candidates-b의 기록상 MIT).
- Apache-2.0의 "라이선스 사본 제공"을 링크로 충족하는지, MIT의 "사본 또는 상당 부분에 포함"을 상세 페이지 표시로 충족하는지는 법률 해석이 필요한 부분이라 단정하지 않았습니다. 보수적으로는 다운로드 파일에 고지를 함께 넣는 쪽입니다.
- AI가 쓴 글의 저작권 귀속(stanlee7 커밋의 Claude 공동 작성 표기)은 판단하지 않았습니다. 라이선스 조건은 LICENSE 문구대로 적용하면 됩니다.
- 상표: 우리 서비스 이름 `SkillBite`와 원본 상표가 겹치지 않음. moai 상표 규칙만 유의하면 됨.
- GitHub 저장소가 나중에 삭제되거나 라이선스가 바뀌면 이미 가져온 해시 시점의 라이선스가 적용된다고 보는 것이 일반적이지만, 이 역시 법률 해석이라 단정하지 않음. 그래서 해시와 라이선스 전문 사본을 우리 쪽에 보관하는 것을 권합니다.
