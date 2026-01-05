/**
 * Base ESLint configuration for JavaScript projects with Prettier integration (Flat Config)
 * @author Gonzalo Benedi
 */

const js = require("@eslint/js");

module.exports = [
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        // Browser globals
        window: "readonly",
        document: "readonly",
        console: "readonly",
        // Node.js globals
        process: "readonly",
        Buffer: "readonly",
        __dirname: "readonly",
        __filename: "readonly",
        require: "readonly",
        module: "readonly",
        exports: "readonly",
        global: "readonly",
      },
    },
    plugins: {
      prettier: require("eslint-plugin-prettier"),
    },
    rules: {
      // Prettier integration
      "prettier/prettier": "error",

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

      // ES6+ (non-formatting)
      "no-duplicate-imports": "error",
      "prefer-template": "error",

      // Disable rules that conflict with Prettier
      indent: "off",
      "linebreak-style": "off", 
      quotes: "off",
      semi: "off",
      "comma-dangle": "off",
      "object-curly-spacing": "off",
      "array-bracket-spacing": "off",
      "space-before-blocks": "off",
      "keyword-spacing": "off",
      "space-infix-ops": "off",
      "no-trailing-spaces": "off",
      "eol-last": "off",
      "arrow-spacing": "off",
      "template-curly-spacing": "off",
    },
  },
];
