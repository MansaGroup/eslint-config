module.exports = {
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.js', '*.jsx'],
      env: {
        node: true,
      },
      rules: {
        'import/no-restricted-paths': [
          'error',
          {
            zones: [
              {
                target: './src/domain',
                from: './src/driven',
                message: "Domain components can't import driven components.",
              },
              {
                target: './src/domain',
                from: './src/usecase',
                message: "Domain components can't import usecase components.",
              },
              {
                target: './src/domain',
                from: './src/driving',
                message: "Domain components can't import driving components.",
              },
              {
                target: './src/domain',
                from: './src/infra',
                message: "Domain components can't import infra components.",
              },
              {
                target: './src/usecase',
                from: './src/driven',
                message: "Usecase components can't import driven components.",
              },
              {
                target: './src/usecase',
                from: './src/driving',
                message: "Usecase components can't import driving components.",
              },
              {
                target: './src/usecase',
                from: './src/infra',
                message: "Usecase components can't import infra components.",
              },
              {
                target: './src/driven',
                from: './src/driving',
                message: "Driven components can't import driving components.",
              },
              {
                target: './src/driven',
                from: './src/infra',
                message: "Driven components can't import infra components.",
              },
              {
                target: './src/driving',
                from: './src/infra',
                message: "Driving components can't import infra components.",
              },
            ],
          },
        ],
        '@typescript-eslint/no-restricted-imports': [
          'error',
          {
            patterns: [
              {
                group: ['**/domain/**', '!@app/domain/**'],
                message: "Import from '@app/domain' instead.",
              },
              {
                group: ['**/driven/**', '!@app/driven/**'],
                message: "Import from '@app/driven' instead.",
              },
              {
                group: ['**/usecase/**', '!@app/usecase/**'],
                message: "Import from '@app/usecase' instead.",
              },
              {
                group: ['**/driving/**', '!@app/driving/**'],
                message: "Import from '@app/driving' instead.",
              },
              {
                group: ['**/test/**'],
                message: "Import from '@app/testing' instead.",
              },
            ],
          },
        ],
      },
    },
  ],
};
