module.exports = {
  plugins: ['fp'],
  extends: ['plugin:fp/recommended'],
  overrides: [
    {
      files: ['features/**/*', '*InMem.ts', 'test/*', '*.*spec.ts'],
      rules: {
        'fp/no-class': 0,
        'fp/no-this': 0,
        'fp/no-unused-expression': 0,
        'fp/no-nil': 0,
        'fp/no-let': 0,
        'fp/no-mutation': 0,
        'fp/no-mutating-methods': 0,
        'fp/no-throw': 0,
      },
    }
  ],
};
