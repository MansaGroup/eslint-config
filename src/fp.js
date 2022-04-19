module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
  },
  plugins: ['fp'],
  extends: [
    'plugin:fp/recommended',
  ],
  overrides: [
    {
      files: ["features/**/*", "*InMem.ts", "test/*", "*.spec.ts"],
      rules: {
        "fp/no-class": 0,
        "fp/no-this": 0,
        "fp/no-unused-expression": 0,
        "fp/no-nil": 0,
        "fp/no-let": 0,
        "fp/no-mutation": 0,
        "fp/no-mutating-methods": 0,
        "fp/no-throw": 0,
      },
    },
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: 'tsconfig.json',
      },
    },
  },
};