const path = require('path');
const cwd = process.cwd();

module.exports = {
  extends: ['airbnb'],
  plugins: ['prettier', 'react', 'jsx-a11y', 'import'],
  parser: 'babel-eslint',
  rules: {
    'prettier/prettier': [
      'error',
      {
        printWidth: 100,
        singleQuote: true,
        trailingComma: 'es5',
        bracketSpacing: true,
        jsxBracketSameLine: false,
        parser: 'babylon',
        semi: true,
      },
    ],
    'react/jsx-filename-extension': 'off',
    'react/forbid-prop-types': ['warn', { forbid: ['any'] }],
    'comma-dangle': 'off',
  },
  globals: {
    document: 1,
    window: 1,
  },
  settings: {
    'import/resolver': {
      alias: [['@', path.resolve(cwd, 'src')]],
    },
  },
};
