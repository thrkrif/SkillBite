# README 다이어그램 생성 기록

두 이미지는 내장 image_gen 도구로 생성한 설명용 그림입니다. 실제 화면이나 운영 배포 완료 증거가 아닙니다. 원본 프롬프트는 다음과 같습니다.

## 아키텍처 — architecture.png

```text
Use case: infographic-diagram.
Create a crisp documentation architecture diagram for the Korean static website "SkillBite". Wide landscape 1536x1024. Flat professional engineering infographic, readable Korean sans serif, warm #FAFAF7 background, white panels, ink #1F1F1F, thin #DAD9D2 borders, blue #2F6BFF arrows, green #E8F5EC note, amber #FFF4E0 pending indicator. Generous whitespace, simple line icons, consistent straight connectors, no perspective, no shadows, no gradients, no invented company logos, no watermark. Exact main title "SkillBite 아키텍처".
Three clearly labeled horizontal stages left to right: "소스" then "정적 빌드" then "정적 배포".
In Source panel include three stacked input nodes: "skills.json" subtitle "스킬 정보"; "Astro · CSS" subtitle "목록과 상세 화면"; "SKILL.md" subtitle "배포할 지침 파일". An arrow from SKILL.md goes to separate small node "ZIP 패키징" and then "public/downloads". From skills.json and Astro CSS arrows converge into node "Astro 빌드". public/downloads also flows into that build. Label the build command "npm run build". Build output node "dist/" subtitle "HTML · CSS · JS · ZIP".
Next a dashed arrow from dist/ goes to node "Cloudflare Workers" subtitle "정적 파일 제공". Above the dashed arrow a small amber label "운영 반영 확인 필요". This dashed arrow is INTENDED deployment path, not proof deployment succeeded. No solid automatic GitHub deployment arrow.
Then solid arrow between Workers and simple browser icon node "사용자 브라우저" labeled "페이지 조회 · 파일 다운로드".
At bottom small separate lane "GitHub Actions" with text "브랜치명 · 커밋 메시지 검사"; do NOT draw this lane as a deploy pipeline.
Footer note exact "사이트에는 백엔드·DB·로그인·AI 실행이 없습니다.".
Small legend "실선: 구성 흐름 / 점선: 배포 확인 필요".
Do not show Claude as a website service, no database cylinders, no API server, no payment, no tokens, no private account identifiers, no literal machine paths. Every arrow must follow the specified flow. Spell labels verbatim. Keep typography clear at README display widths.
```

## 사용자 흐름 — user-flow.png

```text
Use case: infographic-diagram.
Create a crisp Korean user journey diagram for "SkillBite", landscape 1536x1024. Documentation infographic, not a screenshot. Flat editorial design, #FAFAF7 background, white panels, ink #1F1F1F, blue #2F6BFF connectors, neutral #DAD9D2 lines, pale blue #EEF3FF group, pale green #E8F5EC successful outcome. Readable Korean sans serif, restrained line icons, no logos, no watermark, gradients or shadows.
Main title exact "SkillBite 사용자 흐름". Subtitle "사이트에서 고르고, 내 Claude에서 사용합니다.".
Top row grouped inside a pale blue outlined container labeled "SkillBite 웹사이트": three left to right numbered cards with arrows: "01 스킬 고르기" subtitle "목록에서 카드 선택"; "02 상세 확인" subtitle "설명 · 준비물 · 설치 안내"; "03 ZIP 다운로드" subtitle "가입 없이 파일 받기".
Arrow from top right down to lower journey, clearly labeled transition "다운로드 후 사이트 밖에서 진행".
Bottom main row grouped inside a neutral outlined container labeled "사용자의 Claude 환경": "04 압축 풀기" then "05 스킬 추가" then "06 명령어 입력" then green outcome "글 초안 받기". Under step06 exact small monospace "/blog-writer-naver 주제". Choose snake progression clearly with arrows from top right to bottom left via clean outer connector so flow order is unambiguous. Keep bottom row arrows all left to right.
Small separate optional branch from "글 초안 받기" on the lower edge, dashed arrow to amber or neutral box "선택: 자동 게시" with caption "브라우저 연결 + 네이버 로그인 필요". This branch is optional and conditional, not a guaranteed outcome.
Footer two small clear notes: "Claude 유료 구독이 필요합니다." and "윈도우 설치 경로: 확인 필요".
Do not invent installation duration, Windows path, fake success statistics, login step on SkillBite, AI generation inside SkillBite, or automatic publication without browser connection. Exact spelling, clear numbered order, strong website versus user's environment boundary.
```
