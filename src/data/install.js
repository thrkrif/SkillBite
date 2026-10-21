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

export const restartNote = PENDING;

export const feedbackUrl = '';
