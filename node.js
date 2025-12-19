/**
 * Node.js ESLint configuration
 * @author Gonzalo Benedi
 */

module.exports = {
  extends: ["./index.js"],
  env: {
    node: true,
    browser: false,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["import"],
  rules: {
    // Node.js specific rules
    "no-process-exit": "error",
    "no-console": "off", // Console is expected in Node.js
    "global-require": "error",
    "handle-callback-err": "error",
    "no-new-require": "error",
    "no-path-concat": "error",
    "no-process-env": "off", // process.env is common in Node.js
    "no-sync": "warn",

    // Import rules for Node.js
    "import/no-unresolved": "error",
    "import/named": "error",
    "import/default": "error",
    "import/namespace": "error",
    "import/export": "error",
    "import/no-named-as-default": "warn",
    "import/no-named-as-default-member": "warn",
    "import/no-duplicates": "error",
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        mjs: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      },
    ],
    "import/order": [
      "error",
      {
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
        ],
        "newlines-between": "always",
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
      },
    ],
    "import/newline-after-import": "error",
    "import/no-default-export": "off",
    "import/prefer-default-export": "off",

    // Security rules for Node.js
    "no-eval": "error",
    "no-implied-eval": "error",
    "no-new-func": "error",
    "no-script-url": "error",

    // Performance and best practices
    "no-extend-native": "error",
    "no-iterator": "error",
    "no-proto": "error",
    "prefer-rest-params": "error",
    "prefer-spread": "error",
  },
  overrides: [
    {
      files: ["*.test.js", "*.spec.js", "test/**/*.js", "tests/**/*.js"],
      env: {
        jest: true,
        mocha: true,
      },
      rules: {
        "no-unused-expressions": "off",
      },
    },
  ],
};
