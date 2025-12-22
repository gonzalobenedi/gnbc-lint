/**
 * React Native ESLint configuration (Flat Config)
 * @author Gonzalo Benedi
 */

const reactConfig = require("./react.js");
const reactNative = require("eslint-plugin-react-native");

module.exports = [
  ...reactConfig,
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    plugins: {
      "react-native": reactNative,
    },
    languageOptions: {
      globals: {
        __DEV__: "readonly",
        fetch: "readonly",
        FormData: "readonly",
        navigator: "readonly",
        window: "readonly",
        // React Native globals
        Alert: "readonly",
        Dimensions: "readonly",
        Platform: "readonly",
      },
    },
    rules: {
      // React Native specific rules
      "react-native/no-unused-styles": "error",
      "react-native/split-platform-components": "error",
      "react-native/no-inline-styles": "warn",
      "react-native/no-color-literals": "warn",
      "react-native/no-raw-text": "off", // Can be restrictive
      "react-native/no-single-element-style-arrays": "error",

      // Disable browser-specific accessibility rules that don't apply to React Native
      "jsx-a11y/anchor-has-content": "off",
      "jsx-a11y/anchor-is-valid": "off",
      "jsx-a11y/iframe-has-title": "off",
      "jsx-a11y/media-has-caption": "off",

      // React Native doesn't need these React web rules
      "react/no-unknown-property": "off",
      "react/style-prop-object": "off",
    },
  },
];
