module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:prettier/recommended',
    'prettier/react',
    'plugin:jest-dom/recommended',
  ],
  plugins: ['react', '@typescript-eslint', 'jest', 'import'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
  rules: {
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    ],

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

    'no-confusing-arrow': 'off',
    'implicit-arrow-linebreak': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['src/server.tsx'],
      },
    ],
    'react/prop-types': 'off',
    'max-len': ['error', 100],
    'no-var': 'error',
  },

  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-unused-vars': [2, { args: 'none' }],
        'react/jsx-props-no-spreading': 0,
        'react/no-array-index-key': 0,
        'no-plusplus': 0,
        'no-use-before-define': 'off',
        'func-names': 'off',
      },
    },
  ],
};
