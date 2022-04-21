module.exports = {
  root: true,
  extends: ['./src/recommended', './src/react', './src/node', './src/fp'],
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
