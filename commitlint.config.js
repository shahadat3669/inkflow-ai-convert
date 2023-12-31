module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'docs',
        'style',
        'refactor',
        'perf',
        'test',
        'build',
        'ci',
        'revert',
        'chore',
      ],
    ],
  },
  prompt: {
    messages: {
      type: 'Select the type of change you want to commit:',
      scope: 'Specify a scope for your commit (optional):',
      customScope: 'Enter a custom scope for your commit:',
      subject: 'Provide a short and concise description of the change:\n',
      body: 'Provide additional details about the change (optional). Use "|" for newlines:\n',
      breaking:
        'List any non-compatible breaking changes (optional). Use "|" for newlines:\n',
      footerPrefixesSelect: 'Select an associated issue prefix (optional):',
      customFooterPrefix: 'Enter a custom issue prefix:',
      footer: 'List related issues (optional), e.g., #31, #I3244:\n',
      confirmCommit: 'Do you want to commit or modify the commit message?',
    },
    types: [
      {
        value: '✨feat',
        name: '✨ Feature: Introducing new features or enhancements',
      },
      { value: '🔧fix', name: '🔧 Fix: Resolving bugs or issues' },
      {
        value: '📝docs',
        name: '📝 Documents: Documentation changes or improvements',
      },
      {
        value: '🎨style',
        name: '🎨 Style: Code formatting or style adjustments (does not affect functions, such as space, semicolon and other format corrections)',
      },
      {
        value: '♻️refactor',
        name: '♻️  Refactoring: Restructuring code (excluding bug fixes, new features)',
      },
      {
        value: '⚡️perf',
        name: '⚡️ Performance: Improving application performance',
        emoji: ':zap:',
      },
      {
        value: '🧪test',
        name: '🧪 Test: Add omission test or change existing test',
      },
      {
        value: '👷build',
        name: '👷 Build: build process, external dependency changes (such as upgrading npm packages, modifying vite configuration, etc.)',
      },
      {
        value: '💚ci',
        name: '💚 Integration: Modify CI configuration, script',
      },
      {
        value: '⏪️revert',
        name: '⏪️ Revert: rollback commit',
      },
      {
        value: '🚚chore',
        name: '🚚 Chore: Maintenance tasks, build tools, or library updates',
      },
    ],
    scopes: ['dependencies', 'linting', 'jest', 'ui'],
    useEmoji: true,
    emojiAlign: 'center',
    themeColorCode: '',
    allowCustomScopes: true,
    allowEmptyScopes: true,
    customScopesAlign: 'bottom',
    customScopesAlias: 'custom',
    emptyScopesAlias: 'empty',
    upperCaseSubject: false,
    markBreakingChangeMode: false,
    allowBreakingChanges: ['feat', 'fix'],
    breaklineNumber: 100,
    breaklineChar: '|',
    skipQuestions: [],
    issuePrefixes: [
      { value: 'closed', name: 'closed:   ISSUES has been processed' },
    ],
    customIssuePrefixAlign: 'top',
    emptyIssuePrefixAlias: 'skip',
    customIssuePrefixAlias: 'custom',
    allowCustomIssuePrefix: true,
    allowEmptyIssuePrefix: true,
    confirmColorize: true,
    maxHeaderLength: 80,
    maxSubjectLength: 80,
    minSubjectLength: 3,
  },
};
