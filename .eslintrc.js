module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: ['@typescript-eslint', 'prettier', 'react'],
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended'
  ],
  rules: {
    'prettier/prettier': 'error'
  }
};
