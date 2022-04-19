module.exports = {
  root: true,
  extends: ['./src/recommended', './src/react', './src/node'],
  ignorePatterns: ['*.md', '*.json'],
  overrides: [
    {
      files: ['*.js'],
      rules: {
        'sonarjs/no-duplicate-string': 'off',
      },
    },
  ],
};
