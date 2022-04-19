module.exports = {
  root: true,
  extends: ['./src/recommended'],
  ignorePatterns: ['*.md'],
  overrides: [
    {
      files: ['*.js'],
      rules: {
        'sonarjs/no-duplicate-string': 'off'
      }
    }
  ]
}
