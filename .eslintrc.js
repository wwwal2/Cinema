module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  parser: "babel-eslint",
  extends: [
    'airbnb-base',
    "airbnb/rules/react",
		'airbnb/hooks',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'no-param-reassign': 0,
    'react/forbid-prop-types': 0,
    'arrow-body-style': 0,
    'no-underscore-dangle': 0,
    'class-methods-use-this': 0,
    'consistent-return': 0,
    'react/no-array-index-key': 0,
    'no-case-declarations': 0,
    'no-shadow': 0,
    'no-unused-expressions': 0,
    'no-restricted-syntax': 0,
    'react-hooks/exhaustive-deps': 0,
  },
};