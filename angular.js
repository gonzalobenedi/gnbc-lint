/**
 * Angular ESLint configuration
 * @author Gonzalo Benedi
 */

module.exports = {
  extends: [
    "./index.js",
    "@angular-eslint/recommended",
    "@angular-eslint/template/process-inline-templates",
  ],
  env: {
    browser: true,
    es6: true,
    node: false,
  },
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["@angular-eslint"],
  rules: {
    // Angular specific rules
    "@angular-eslint/directive-selector": [
      "error",
      {
        type: "attribute",
        prefix: "app",
        style: "camelCase",
      },
    ],
    "@angular-eslint/component-selector": [
      "error",
      {
        type: "element",
        prefix: "app",
        style: "kebab-case",
      },
    ],
    "@angular-eslint/no-empty-lifecycle-method": "error",
    "@angular-eslint/no-host-metadata-property": "error",
    "@angular-eslint/no-input-rename": "error",
    "@angular-eslint/no-inputs-metadata-property": "error",
    "@angular-eslint/no-output-native": "error",
    "@angular-eslint/no-output-on-prefix": "error",
    "@angular-eslint/no-output-rename": "error",
    "@angular-eslint/no-outputs-metadata-property": "error",
    "@angular-eslint/use-lifecycle-interface": "error",
    "@angular-eslint/use-pipe-transform-interface": "error",

    // Angular best practices
    "@angular-eslint/component-class-suffix": "error",
    "@angular-eslint/directive-class-suffix": "error",
    "@angular-eslint/pipe-prefix": "error",
    "@angular-eslint/prefer-on-push-component-change-detection": "warn",
  },
  overrides: [
    {
      files: ["*.html"],
      extends: ["@angular-eslint/template/recommended"],
      rules: {
        // Angular template rules
        "@angular-eslint/template/banana-in-box": "error",
        "@angular-eslint/template/eqeqeq": "error",
        "@angular-eslint/template/no-distracting-elements": "error",
        "@angular-eslint/template/no-negated-async": "error",
        "@angular-eslint/template/use-track-by-function": "warn",
        "@angular-eslint/template/accessibility-alt-text": "error",
        "@angular-eslint/template/accessibility-elements-content": "error",
        "@angular-eslint/template/accessibility-label-has-associated-control":
          "error",
        "@angular-eslint/template/accessibility-table-scope": "error",
        "@angular-eslint/template/accessibility-valid-aria": "error",
        "@angular-eslint/template/click-events-have-key-events": "error",
        "@angular-eslint/template/mouse-events-have-key-events": "error",
        "@angular-eslint/template/no-autofocus": "error",
        "@angular-eslint/template/no-positive-tabindex": "error",
      },
    },
  ],
};
