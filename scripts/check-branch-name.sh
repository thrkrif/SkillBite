#!/usr/bin/env bash
# 브랜치명 검사: main, dev, feature/*, release/*, hotfix/*
set -euo pipefail

branch="${1:-$(git rev-parse --abbrev-ref HEAD)}"
pattern='^(main|dev|(feature|release|hotfix)/[a-z0-9][a-z0-9._-]*)$'

if [[ ! "$branch" =~ $pattern ]]; then
  echo "잘못된 브랜치명입니다: $branch"
  echo "사용 가능: main, dev, feature/*, release/*, hotfix/* (소문자·숫자·.·_·- 만 허용)"
  echo "예: feature/skill-list, release/1.0.0, hotfix/download-link"
  exit 1
fi
