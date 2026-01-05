/**
 * React ESLint configuration with Prettier integration (Flat Config)
 * @author Gonzalo Benedi
 */

const baseConfig = require("./index.js");
const react = require("eslint-plugin-react");
const reactHooks = require("eslint-plugin-react-hooks");
const jsxA11y = require("eslint-plugin-jsx-a11y");

module.exports = [
  ...baseConfig,
  {
    files: ["**/*.{js,jsx}"],
    plugins: {
      prettier: require("eslint-plugin-prettier"),
      react,
      "react-hooks": reactHooks,
      "jsx-a11y": jsxA11y,
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        // Browser globals for React
        window: "readonly",
        document: "readonly",
        console: "readonly",
        React: "readonly",
      },
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      // React Rules
      "react/jsx-uses-react": "error",
      "react/jsx-uses-vars": "error",
      "react/no-deprecated": "error",
      "react/no-unsafe": "error",
      "react/prop-types": "off", // Better to use TypeScript
      "react/react-in-jsx-scope": "off", // Not needed in React 17+
      "react/display-name": "off",
      "react/jsx-no-target-blank": "error",
      "react/jsx-no-useless-fragment": "error",
      "react/jsx-pascal-case": "error",
      "react/no-array-index-key": "warn",
      "react/self-closing-comp": "error",
      "react/void-dom-elements-no-children": "error",

      // React Hooks Rules
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",

      // JSX Accessibility Rules
      "jsx-a11y/alt-text": "error",
      "jsx-a11y/anchor-has-content": "error",
      "jsx-a11y/anchor-is-valid": "error",
      "jsx-a11y/aria-props": "error",
      "jsx-a11y/aria-role": "error",
      "jsx-a11y/aria-unsupported-elements": "error",
      "jsx-a11y/heading-has-content": "error",
      "jsx-a11y/iframe-has-title": "error",
      "jsx-a11y/img-redundant-alt": "error",
      "jsx-a11y/no-access-key": "error",
      "jsx-a11y/no-distracting-elements": "error",
      "jsx-a11y/no-redundant-roles": "error",
      "jsx-a11y/role-has-required-aria-props": "error",
      "jsx-a11y/role-supports-aria-props": "error",

      // JSX Style Rules
      "react/jsx-closing-bracket-location": ["error", "line-aligned"],
      "react/jsx-closing-tag-location": "error",
      "react/jsx-curly-spacing": ["error", "never"],
      "react/jsx-equals-spacing": ["error", "never"],
      "react/jsx-indent": ["error", 2],
      "react/jsx-indent-props": ["error", 2],
      "react/jsx-max-props-per-line": [
        "error",
        { maximum: 1, when: "multiline" },
      ],
      "react/jsx-tag-spacing": [
        "error",
        {
          closingSlash: "never",
          beforeSelfClosing: "always",
          afterOpening: "never",
          beforeClosing: "never",
        },
      ],
    },
  },
];
