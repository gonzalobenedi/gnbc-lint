/**
 * Node.js ESLint configuration (Flat Config)
 * @author Gonzalo Benedi
 */

const baseConfig = require("./index.js");
const importPlugin = require("eslint-plugin-import");

module.exports = [
  ...baseConfig,
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: {
      import: importPlugin,
    },
    languageOptions: {
      sourceType: "module",
      globals: {
        // Node.js globals
        process: "readonly",
        Buffer: "readonly",
        __dirname: "readonly",
        __filename: "readonly",
        require: "readonly",
        module: "readonly",
        exports: "readonly",
        global: "readonly",
        setImmediate: "readonly",
        clearImmediate: "readonly",
        setTimeout: "readonly",
        clearTimeout: "readonly",
        setInterval: "readonly",
        clearInterval: "readonly",
      },
    },
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
  },
  {
    files: [
      "**/*.test.{js,mjs}",
      "**/*.spec.{js,mjs}",
      "test/**/*.{js,mjs}",
      "tests/**/*.{js,mjs}",
    ],
    languageOptions: {
      globals: {
        // Jest globals
        describe: "readonly",
        it: "readonly",
        test: "readonly",
        expect: "readonly",
        beforeEach: "readonly",
        afterEach: "readonly",
        beforeAll: "readonly",
        afterAll: "readonly",
        jest: "readonly",
        // Mocha globals
        suite: "readonly",
        setup: "readonly",
        teardown: "readonly",
      },
    },
    rules: {
      "no-unused-expressions": "off",
    },
  },
];
