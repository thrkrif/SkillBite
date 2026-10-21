#!/usr/bin/env bash
# 브랜치명 검사: main, dev, 그리고 <접두사>/<설명> 형식
set -euo pipefail

branch="${1:-$(git rev-parse --abbrev-ref HEAD)}"
pattern='^(main|dev|(feature|feat|bugfix|fix|hotfix|release|chore|docs|refactor|test|perf|style|build|ci)/[a-z0-9][a-z0-9._-]*)$'

if [[ ! "$branch" =~ $pattern ]]; then
  echo "잘못된 브랜치명입니다: $branch"
  echo -e "사용 가능: main, dev, 또는 아래 접두사/설명\n  feature, feat, bugfix, fix, hotfix, release, chore, docs, refactor, test, perf, style, build, ci\n(설명은 소문자·숫자·.·_·- 만 허용)"
  echo "예: feature/skill-list, release/1.0.0, hotfix/download-link"
  exit 1
fi
