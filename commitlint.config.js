export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    // 한국어 제목을 쓰므로 대소문자 규칙은 끈다
    'subject-case': [0],
    'type-enum': [
      2,
      'always',
      ['feat', 'fix', 'docs', 'style', 'refactor', 'perf', 'test', 'build', 'ci', 'chore', 'revert'],
    ],
  },
};
