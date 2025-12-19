/**
 * Base ESLint configuration for JavaScript projects
 * @author Gonzalo Benedi
 */

module.exports = {
  env: {
    browser: true,
    es2022: true,
    node: true,
  },
  extends: ["eslint:recommended"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    // Possible Errors
    "no-console": "warn",
    "no-debugger": "error",
    "no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
      },
    ],

    // Best Practices
    curly: ["error", "all"],
    eqeqeq: ["error", "always"],
    "no-eval": "error",
    "no-implied-eval": "error",
    "no-new-func": "error",
    "no-return-assign": "error",
    "no-sequences": "error",
    "no-throw-literal": "error",
    "no-var": "error",
    "prefer-const": "error",
    "prefer-arrow-callback": "error",

    // Stylistic Issues
    indent: ["error", 2, { SwitchCase: 1 }],
    "linebreak-style": ["error", "unix"],
    quotes: ["error", "single", { avoidEscape: true }],
    semi: ["error", "always"],
    "comma-dangle": ["error", "always-multiline"],
    "object-curly-spacing": ["error", "always"],
    "array-bracket-spacing": ["error", "never"],
    "space-before-blocks": "error",
    "keyword-spacing": "error",
    "space-infix-ops": "error",
    "no-trailing-spaces": "error",
    "eol-last": "error",

    // ES6+
    "arrow-spacing": "error",
    "no-duplicate-imports": "error",
    "prefer-template": "error",
    "template-curly-spacing": ["error", "never"],
  },
};
