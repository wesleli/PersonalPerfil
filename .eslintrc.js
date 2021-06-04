module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  react: {
    version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'prettier',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'prettier',
    'react-hooks'
  ],
  rules: {
    "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
    "react-hooks/exhaustive-deps": "warn"
  },
  globals: { React: 'writable' },
};
