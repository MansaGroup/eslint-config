module.exports = {
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.js', '*.jsx'],
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:sonarjs/recommended',
        'plugin:import/recommended',
        'plugin:import/typescript',
      ],
      plugins: ['sonarjs', 'import', 'unused-imports'],
      settings: {
        'import/resolver': {
          typescript: {
            alwaysTryTypes: true,
            project: 'tsconfig.json',
          },
        },
      },
      rules: {
        'import/order': [
          'error',
          {
            groups: [
              'builtin',
              'external',
              'internal',
              'parent',
              'sibling',
              'index',
              'object',
              'type',
            ],
            alphabetize: { order: 'asc', caseInsensitive: true },
            'newlines-between': 'always',
          },
        ],
        'import/newline-after-import': 'error',
        'import/no-unused-modules': 'error',
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': [
          'warn',
          {
            varsIgnorePattern: '^_',
            argsIgnorePattern: '^_',
          },
        ],
        'unused-imports/no-unused-imports-ts': ['error'],
        'unused-imports/no-unused-vars-ts': [
          'warn',
          {
            varsIgnorePattern: '^_',
            argsIgnorePattern: '^_',
          },
        ],
      },
    },
    {
      files: ['*.*spec.ts', '*.*spec.tsx', '*.*spec.js', '*.*spec.tsx'],
      rules: {
        '@typescript-eslint/unbound-method': 'off',
        'sonarjs/no-duplicate-string': 'warn',
      },
    },
    {
      files: [
        '*.ts',
        '*.tsx',
        '*.js',
        '*.jsx',
        '*.md',
        '*.mdx',
        '*.yml',
        '*.yaml',
        '*.html',
        '*.css',
        '*.json',
      ],
      extends: ['plugin:prettier/recommended'],
      plugins: ['prettier'],
    },
  ],
};
