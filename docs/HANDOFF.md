# HANDOFF — 구현 인수인계

## 기술 스택
React + Vite (또는 Astro), 정적 빌드, Cloudflare Pages 배포. 백엔드·DB·로그인 없음.

## 폴더 구조 (안)
```text
repo/
├─ public/
│  ├─ downloads/blog-writer-naver.zip
│  ├─ icons/ (스킬 카드 아이콘 SVG)
│  ├─ images/ (예시 결과물, 설치 스크린샷)
│  └─ video/ (설치 쇼츠)
├─ src/
│  ├─ data/skills.json
│  ├─ components/ (SkillCard, SkillGrid, SafetyBox, Steps, FeatureTable, Faq ...)
│  └─ pages/
│     ├─ index        (목록 /)
│     └─ skills/[id]  (상세 /skills/:id)
└─ skills/blog-writer-naver/SKILL.md   ← 배포 원본
```

## 스킬 데이터 스키마 (`skills.json`)
지금은 1개지만 늘려도 화면 수정이 없도록 데이터로 분리한다.

```json
{
  "id": "blog-writer-naver",
  "title": "네이버 블로그 글 자동 작성",
  "summary": "주제만 입력하면 블로그 글을 쓰고 게시까지 도와줍니다",
  "icon": "/icons/blog-writer-naver.svg",
  "category": "글쓰기",
  "tags": ["쉬움", "브라우저 필요"],
  "command": "/blog-writer-naver 주제",
  "downloadUrl": "/downloads/blog-writer-naver.zip",
  "requirements": ["Claude 유료 요금제", "Claude 데스크톱 앱 또는 터미널", "Claude in Chrome 등 브라우저 제어 도구"],
  "capabilities": [
    {"label": "글 초안 작성", "needs": "없음"},
    {"label": "자동 게시", "needs": "브라우저 연결 + 네이버 로그인"}
  ],
  "exampleImages": ["/images/example-1.png"],
  "faqs": [{"q": "...", "a": "..."}]
}
```

## 구현 시 주의
- ZIP은 `blog-writer-naver/SKILL.md` 폴더 구조를 유지한다. 설치 경로(`~/.claude/skills/` 아래)와 앱 재시작 필요 여부는 **직접 설치해 확인한 값만** 안내문에 쓴다. 미확인이면 `[확인 필요]`.
- 설치 안내의 경로·명령어는 하드코딩하지 말고 데이터/상수 한 곳에서 관리한다.
- 카드 전체가 하나의 `<a>`. 호버/포커스 규격은 `DESIGN.md` 참고.
- 다운로드·FAQ 클릭만 익명 이벤트로 측정한다(선택).
- 배포: main 브랜치 push → 자동 빌드·배포. 상세 경로(`/skills/:id`) 새로고침 시 404가 나지 않는지 확인(SPA fallback 또는 정적 페이지 생성).
