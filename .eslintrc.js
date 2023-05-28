module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['jsx-a11y', '@typescript-eslint', 'react-hooks', 'react-refresh'],
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:import/typescript',
    'prettier',
  ],
  ignorePatterns: ['node_modules/'],
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
      typescript: {},
    },
  },
  rules: {
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
    '@typescript-eslint/no-explicit-any': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/extensions': 'off',
    'import/prefer-default-export': 'off',
    '@typescript-eslint/no-inferrable-types': 'off',
    'react/jsx-filename-extension': ['error', { extensions: ['.tsx'] }],
    'react-refresh/only-export-components': 'warn',
    'react/react-in-jsx-scope': 'off',
  },
}
