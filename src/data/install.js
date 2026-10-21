// 설치 안내에 쓰는 값. 직접 설치해 확인한 값만 적는다. 미확인은 PENDING.
export const PENDING = '[확인 필요]';

// 맥: ~/.claude/skills 에 확인됨. 윈도우는 미확인.
export const mac = {
  skillsDir: '~/.claude/skills',
  makeDirCommand: 'mkdir -p ~/.claude/skills',
  goToFolderKeys: '⇧ + ⌘ + G',
  showHiddenKeys: '⇧ + ⌘ + .',
};

export const windows = null;

// Claude Code에서 직접 확인함: 세션을 초기화하지 않아도 바로 사용 가능. 데스크톱 앱은 미확인.
export const restartNote = {
  claudeCode: '다시 켜지 않아도 폴더를 넣자마자 바로 쓸 수 있습니다.',
  desktopApp: PENDING,
};

export const feedbackUrl = '';
