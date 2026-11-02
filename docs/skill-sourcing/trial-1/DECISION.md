# 시험 적용 1 결론: 외부 스킬 소싱 (블로그·문서 작성)

대상 분야: 블로그 글 작성(네이버·벨로그·티스토리), 문서 작성(Word·한글).
절차: 탐색 3(A 레지스트리, B GitHub, C 한국어) → 1차 관문(라이선스·형식·대상) → 검토 3(보안·라이선스·적합성) → 판정.
근거 문서: `candidates-a|b|c.md`, `review-security.md`, `review-license.md`, `review-fit.md`.
검토 3명의 판정이 갈린 항목은 없어 논의 라운드는 생략했다.

## 한 줄 결론
- 블로그·Word·한글: 외부 후보가 기존 스킬(`blog-writer-*`, `doc-writer-*`)을 대체하지 못한다. **기존 유지**, 외부 규칙 일부만 참고.
- 우리에게 없는 업무 문서 형식(보고서·메일·회의·공문): **외부 스킬을 한국어로 고쳐 채택**할 후보가 있다.

## 판정표 (보안 거부권 적용 후)
| 출처 | 스킬 | 보안 | 라이선스 | 적합성 | 최종 |
| --- | --- | --- | --- | --- | --- |
| stanlee7/korean-office-skills (MIT) | email-reply-kr | 통과 | 조건부 | 5 | 채택(수정 거의 없음) |
| 〃 | report-gaejosik, weekly-report, pumui-draft, gongmun-tone | 통과 | 조건부 | 4 | 고쳐서 채택 |
| 〃 | meeting-to-todo | 통과 | 조건부 | 4 | 고쳐서 채택('정확히 3줄' 제한 해제) |
| 〃 | pii-mask-before-ai | 통과 | 조건부 | 3 | 후순위(한계 문구 유지) |
| 〃 | agent-assign | 통과 | 조건부 | 2 | 참고만 |
| qkrehgk1-wq/korean-claude-skills (MIT) | korean-writing-refiner | 통과 | 조건부 | 4 | 고쳐서 채택 |
| 〃 | korean-cardnews-generator | 통과 | 조건부 | 3 | 후순위 |
| 〃 | korean-meeting-notes, korean-email-writer, korean-report-summarizer | 통과 | 조건부 | 2~3 | 참고만(더 나은 대안 있음) |
| 〃 | korean-one-page | **거부** | 조건부 | 1 | 제외(스크립트 실행 전제) |
| 〃 | korean-code-review | 통과 | 조건부 | 1 | 제외(개발자 대상) |
| modu-ai/moai-cowork (Apache-2.0) | collab-meeting | 통과 | 조건부 | 3 | 고쳐서 채택 |
| 〃 | content-blog, doc-docx, doc-hwp | 조건부 | 조건부 | 2 | 참고만(기존 스킬 유지) |
| 그 외 | Anthropic docx, k-skill, kordoc, solo-skills, 라이선스 없는 HWPX 스킬 | — | — | — | 1차 관문 제외 |

## 채택 시 공통 작업
1. 영어 문장은 한국어(존댓말, 쉬운 말)로 직접 고친다.
2. 이모지·홍보 문구·"검토 점수" 문구·중복 프롬프트 블록 삭제.
3. 예시 폴더·references 참조는 본문에 인라인(파일 하나로).
4. 빈 값 표기는 `[확인 필요]`로 통일. 입력이 없을 때 처리, 첫 질문, 기본값 추가.
5. 로마자 이름(gaejosik, pumui)은 쉬운 한글 이름으로 바꾼다.
6. 라이선스: 저작권·허가 문구 유지(MIT), Apache-2.0은 사본·NOTICE·변경 사실 표시. moai 이름은 쓰지 않는다. 출처 URL·커밋 해시를 문서에 기록한다.
7. 채택 전 같은 입력으로 시험 실행(새 에이전트)한다.

## 남은 불확실
- 검토자가 못 읽은 파일이 있고 스킬을 직접 실행해 보지 않았다.
- 폴더별 커밋 해시, moai references 전체, `doc-hwp`가 링크한 도구의 라이선스는 미확인.
- stanlee7 저장소는 신생(별 0, 커밋 3개)이라 유지보수가 불확실하다. 가져온 뒤에는 우리가 유지한다.
- GitHub 검색 속도 제한으로 일부 검색이 비었다. 네이버·벨로그 전용 스킬이 '없다'고 단정하지 않는다.

## 절차에 대한 시사점
- 인기(별 수)는 적합성과 무관했다. 별 8천 개인 k-skill은 `npx` 스텁이라 1차 관문에서 탈락했다.
- 대상 분야 후보가 많아 보여도 적합한 것은 한국어·업무 문서 쪽에 몰렸다. 블로그·Word·한글은 직접 제작이 맞았다.
- 탐색 3개의 결과가 같은 후보를 가리켰다. 다음 시험에서는 탐색 경로를 달리 나눌 필요가 있다.
