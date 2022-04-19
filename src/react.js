module.exports = {
  extends: [
    'plugin:import/react',
    'plugin:react/recommended',
    'plugin:jest-dom/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:react-hooks/recommended',
    'plugin:testing-library/react',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    node: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  overrides: [
    {
      files: ['*.tsx', '*.jsx'],
      rules: {
        'import/named': 'off',
        'react/prop-types': 'off',
        'react/display-name': 'off',
      },
    },
  ],
};
