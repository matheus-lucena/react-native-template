module.exports = {
  env: {
    es6: true,
    node: true,
  },
  plugins: ['import', 'react', '@typescript-eslint', '@typescript-eslint/eslint-plugin', 'redux-saga'],
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:redux-saga/recommended',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  rules: {
    'linebreak-style': ['error', 'windows'],
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'no-unused-expressions': ["error", { "allowTaggedTemplates": true }],
  },
  settings: {
    'import/resolver': {
      typescript: {}
    },
  },

};
