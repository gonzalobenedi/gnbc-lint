const js = require('@eslint/js');

module.exports = [
  js.configs.recommended,
  {
    files: ['*.js'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        require: 'readonly',
        module: 'readonly',
        process: 'readonly',
        console: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly'
      }
    },
    rules: {
      'no-unused-vars': ['error', { 
        varsIgnorePattern: '^_',
        argsIgnorePattern: '^_' 
      }]
    }
  },
  {
    files: ['test-configs.js'],
    languageOptions: {
      sourceType: 'commonjs'
    }
  }
];