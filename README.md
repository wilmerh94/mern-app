# Creating for first time Vite and React Projects

Prettier, eslint, react router, toastify, jsconfig configuration

```CLI
pnpm i vite@latest
pnpm create vite@latest
pnpm i react-router-dom react-toastify prettier eslint @babel/eslint-parser eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-module-resolver eslint-plugin-import eslint-import-resolver-babel-module babel-plugin-module-resolver husky lint-staged eslint-plugin-jest babel/preset-react -D sax

```

## Package.json

```JSON
{
  "name": "tacos",
  "private": true,
  "version": "0.0.0",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "eslint": "eslint . --ext .js,.jsx,.ts,.tsx --fix",
    "prettier": "prettier \"*.{js,jsx}\" \"src/**/*.jsx\" --write",
    "lint": "pnpm run prettier && pnpm run eslint"
  },
  "dependencies": {
    "@babel/preset-react": "^7.17.12",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.3.0"
  },
  "devDependencies": {
    "@babel/eslint-parser": "^7.18.2",
    "@types/react": "^18.0.14",
    "@types/react-dom": "^18.0.5",
    "@vitejs/plugin-react": "^1.3.2",
    "babel-plugin-module-resolver": "^4.1.0",
    "eslint": "^8.18.0",
    "eslint-import-resolver-babel-module": "^5.3.1",
    "eslint-plugin-import": "^2.26.0",
    "eslint-plugin-jest": "^26.5.3",
    "eslint-plugin-module-resolver": "^1.4.0",
    "eslint-plugin-react": "^7.30.1",
    "eslint-plugin-react-hooks": "^4.6.0",
    "husky": "^8.0.1",
    "lint-staged": "^13.0.2",
    "prettier": "^2.7.1",
    "sax": "^1.2.4",
    "vite": "^2.9.12"
  },
  "lint-staged": {
    "*.jsx": [
      "prettier --write",
      "eslint --fix"
    ]
  }
}
```

## .eslintrc.js

```JS
const alias = require('./importAliases');

const unusedVarsIgnorePattern = '^_[0-9]+$';

module.exports = {
  settings: {
    react: {
      version: 'detect'
    },
    'import/ignore': ['react-native'],
    'import/resolver': {
      'babel-module': {
        extensions: ['.js', '.jsx'],
        alias
      }
    }
  },
  env: {
    browser: true,
    node: true,
    es6: true
  },
  root: true,
  plugins: ['react', 'module-resolver'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:import/errors',
    'plugin:import/warnings'
  ],
  globals: {
    Atomics: 'readonly'
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    sourceType: 'module',
    babelOptions: {
      parserOpts: {
        plugins: ['jsx']
      }
    }
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [
      1,
      { extensions: ['.js', '.jsx'] }
    ],
    'brace-style': ['error', '1tbs', { allowSingleLine: false }],
    'no-multiple-empty-lines': ['error', { max: 1 }],
    'no-case-declarations': 0,
    'no-return-await': 'error',
    'import/no-unresolved': 0,
    'import/order': [
      'error',
      {
        'newlines-between': 'never',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true
        }
      }
    ],
    'react/jsx-closing-tag-location': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'react-hooks/rules-of-hooks': 'error',
    semi: ['error', 'always'],
    quotes: ['error', 'single', { avoidEscape: true }],
    curly: ['error', 'multi-or-nest', 'consistent'],
    'linebreak-style': ['error', 'unix'],
    'no-duplicate-imports': [
      'error',
      {
        includeExports: true
      }
    ],
    'react/prop-types': 0,
    'react/display-name': 0,
    'rest-spread-spacing': ['error', 'never'],
    'no-inline-comments': [
      'error',
      {
        // https://github.com/prettier/prettier/issues/7884#issuecomment-760175877
        ignorePattern: '_prettier-hack'
      }
    ],
    'jsx-quotes': ['error', 'prefer-double'],
    'prefer-spread': ['error'],
    'prefer-const': 'error',
    'no-useless-call': ['error'],
    'no-trailing-spaces': ['error'],
    'space-before-blocks': ['error', 'always'],
    'no-unused-vars': [
      'error',
      {
        varsIgnorePattern: unusedVarsIgnorePattern,
        argsIgnorePattern: unusedVarsIgnorePattern,
        caughtErrorsIgnorePattern: unusedVarsIgnorePattern
      }
    ],
    'no-floating-decimal': ['error'],
    'comma-dangle': ['error', 'never'],
    'array-bracket-spacing': ['error', 'never'],
    'object-curly-spacing': ['error', 'always'],
    'switch-colon-spacing': [
      'error',
      {
        after: true,
        before: false
      }
    ],
    'space-unary-ops': [
      'error',
      {
        words: true,
        nonwords: false
      }
    ],
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'always',
        asyncArrow: 'always'
      }
    ],
    'keyword-spacing': [
      'error',
      {
        before: true,
        after: true
      }
    ],
    'space-in-parens': ['error', 'never'],
    'block-spacing': 'error',
    'key-spacing': [
      'error',
      {
        singleLine: {
          beforeColon: false,
          afterColon: true,
          mode: 'strict'
        },
        multiLine: {
          beforeColon: false,
          afterColon: true,
          mode: 'strict'
        }
      }
    ],
    'generator-star-spacing': [
      'error',
      {
        before: false,
        after: true
      }
    ],
    eqeqeq: 'error',
    'no-empty': 'error'
  }
};

```

## .prettierr.js

```JS
module.exports = {
  tabWidth: 2,
  printWidth: 69,
  useTabs: false,
  semi: true,
  singleQuote: true,
  trailingComma: 'none',
  bracketSpacing: true,
  bracketSameLine: false,
  jsxSingleQuote: false,
  quoteProps: 'as-needed',
  arrowParens: 'avoid',
  insertPragma: false,
  parser: 'babel'
};

```

## .babel.config.js

```JS
const alias = require('./importAliases');

[
  // .. other plugins
  '@babel/plugin-syntax-jsx'[
    // start here
    ('module-resolver',
    {
      root: ['./src'],
      alias,
      extensions: ['.jsx', 'js']
    })
  ]
  // end here
];

```

## .jsconfig.json

```JSON
{
   "exclude": ["node_modules"],
   "compilerOptions": {
     "baseUrl": ".",
     "paths": {
       "*": ["src/*"]
     }
   },
  "extends": "./jsconfig.paths.json",
  {
    "compilerOptions": {
      "types": ["vite/client"]
    }
  }
 }

```

## .jsconfig.paths.json

```JSON
{
 "compilerOptions": {
  "baseUrl": ".",
  "paths": {
   "@components/*": ["src/components/*"],
   "@services/*": ["src/services/*"]
  }
 }
}


```
