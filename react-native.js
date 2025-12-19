/**
 * React Native ESLint configuration (extends React config)
 * @author Gonzalo Benedi
 */

module.exports = {
  extends: ["./react.js"],
  env: {
    "react-native/react-native": true,
  },
  globals: {
    __DEV__: "readonly",
    fetch: "readonly",
    FormData: "readonly",
    navigator: "readonly",
    window: "readonly",
  },
  plugins: ["react-native"],
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
};
