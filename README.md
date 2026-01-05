# GNBC Lint

ESLint configurations for React, Angular, React Native, and Node.js projects with TypeScript and **Prettier integration**.

**✨ Now supports ESLint Flat Config (v9+)** - the modern way to configure ESLint!  
**🎨 Prettier integration included** - consistent code formatting out of the box!

## 🚀 Quick Start

Install the package and the required peer dependencies based on your project type:

### React Projects

```bash
npm install --save-dev gnbc-lint eslint @eslint/js prettier eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-jsx-a11y
```

```javascript
// eslint.config.js
import config from "gnbc-lint/react";

export default config;
```

### React + TypeScript

```bash
npm install --save-dev gnbc-lint eslint @eslint/js prettier eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-jsx-a11y @typescript-eslint/eslint-plugin @typescript-eslint/parser
```

```javascript
// eslint.config.js
import reactConfig from "gnbc-lint/react";
import tsConfig from "gnbc-lint/typescript";

export default [...reactConfig, ...tsConfig];
```

### React Native Projects

```bash
npm install --save-dev gnbc-lint eslint @eslint/js prettier eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-jsx-a11y eslint-plugin-react-native
```

```javascript
// eslint.config.js
import config from "gnbc-lint/react-native";

export default config;
```

### Angular Projects

```bash
npm install --save-dev gnbc-lint eslint @eslint/js prettier eslint-plugin-prettier @angular-eslint/eslint-plugin @angular-eslint/template-parser @typescript-eslint/eslint-plugin @typescript-eslint/parser
```

```javascript
// eslint.config.js
import config from "gnbc-lint/angular";

export default config;
```

### Node.js Projects

```bash
npm install --save-dev gnbc-lint eslint @eslint/js prettier eslint-plugin-prettier eslint-plugin-import
```

```javascript
// eslint.config.js
import config from "gnbc-lint/node";

export default config;
```

### TypeScript Projects

```bash
npm install --save-dev gnbc-lint eslint @eslint/js prettier eslint-plugin-prettier @typescript-eslint/eslint-plugin @typescript-eslint/parser
```

```javascript
// eslint.config.js
import config from "gnbc-lint/typescript";

export default config;
```

### Basic JavaScript Projects

```bash
npm install --save-dev gnbc-lint eslint @eslint/js prettier eslint-plugin-prettier
```

```javascript
// eslint.config.js
import config from "gnbc-lint";

export default config;
```

## 📦 Available Configurations

| Configuration            | Description                                | File              |
| ------------------------ | ------------------------------------------ | ----------------- |
| `gnbc-lint`              | Base configuration for JavaScript projects | `index.js`        |
| `gnbc-lint/react`        | React-specific rules with hooks and a11y   | `react.js`        |
| `gnbc-lint/react-native` | React Native optimized rules               | `react-native.js` |
| `gnbc-lint/angular`      | Angular framework rules and templates      | `angular.js`      |
| `gnbc-lint/node`         | Node.js environment and import rules       | `node.js`         |
| `gnbc-lint/typescript`   | TypeScript-specific rules and parsing      | `typescript.js`   |

## 🔧 Configuration Details

npm install --save-dev gnbc-lint eslint prettier eslint-plugin-prettier @angular-eslint/eslint-plugin @angular-eslint/template-parser

````

```json
// .eslintrc.json
{
  "extends": ["gnbc-lint/angular"]
}
````

### Node.js Projects

```bash
npm install --save-dev gnbc-lint eslint prettier eslint-plugin-prettier eslint-plugin-import
```

```json
// .eslintrc.json
{
  "extends": ["gnbc-lint/node"]
}
```

### Node.js + TypeScript

```bash
npm install --save-dev gnbc-lint eslint prettier eslint-plugin-prettier eslint-plugin-import @typescript-eslint/eslint-plugin @typescript-eslint/parser
```

```json
// .eslintrc.json
{
  "extends": ["gnbc-lint/node", "gnbc-lint/typescript"]
}
```

## 📦 Available Configurations

| Configuration            | Description                 | Extends                   |
| ------------------------ | --------------------------- | ------------------------- |
| `gnbc-lint`              | Base JavaScript rules + Prettier | `eslint:recommended` + Prettier      |
| `gnbc-lint/react`        | React + JSX + Accessibility + Prettier | Base + React plugins + Prettier      |
| `gnbc-lint/react-native` | React Native optimized + Prettier      | React config + RN plugins + Prettier |
| `gnbc-lint/angular`      | Angular + Templates + Prettier         | Base + Angular plugins + Prettier    |
| `gnbc-lint/node`         | Node.js + Import rules + Prettier      | Base + Import plugin + Prettier      |
| `gnbc-lint/typescript`   | TypeScript rules + Prettier            | Base + TS plugins + Prettier         |

## 🎨 Prettier Integration

All configurations include **Prettier integration by default**:

- **Automatic formatting**: Code is formatted according to Prettier rules
- **Conflict resolution**: ESLint formatting rules are disabled to prevent conflicts
- **Included configuration**: A sensible `.prettierrc` configuration is included
- **Plugin integration**: Uses `eslint-plugin-prettier` for seamless integration

### Prettier Configuration

The included `.prettierrc` provides these defaults:

```json
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": false,
  "printWidth": 80,
  "tabWidth": 2,
  "useTabs": false,
  "bracketSpacing": true,
  "arrowParens": "avoid",
  "endOfLine": "lf"
}
```

**You can override these settings** by creating your own `.prettierrc` in your project root.

## 🛠 Configuration Examples

### Full-Stack TypeScript Project

```json
{
  "extends": ["gnbc-lint/node", "gnbc-lint/typescript"],
  "overrides": [
    {
      "files": ["src/client/**/*"],
      "extends": ["gnbc-lint/react", "gnbc-lint/typescript"]
    }
  ]
}
```

### Expo React Native + TypeScript

```json
{
  "extends": ["gnbc-lint/react-native", "gnbc-lint/typescript"],
  "env": {
    "react-native/react-native": true
  },
  "globals": {
    "__DEV__": "readonly"
  }
}
```

### Angular + TypeScript

```json
{
  "extends": ["gnbc-lint/angular", "gnbc-lint/typescript"],
  "overrides": [
    {
      "files": ["*.ts"],
      "parserOptions": {
        "project": ["tsconfig.json"]
      }
    }
  ]
}
```

## 🎯 Philosophy

This ESLint configuration focuses on:

- **Consistency**: Uniform code style across all your projects
- **Modern Standards**: ES2022+ features and best practices
- **Framework-Specific**: Tailored rules for each technology
- **Developer Experience**: Reasonable defaults, not too strict
- **Performance**: Optimized rules that don't slow down your editor

## 🔧 Customization

You can override any rules in your project's `.eslintrc.json`:

```json
{
  "extends": ["gnbc-lint/react"],
  "rules": {
    "quotes": ["error", "double"],
    "react/prop-types": "error"
  }
}
```

## 📚 Rules Overview

### Base Rules

- **Code Quality**: Prevent common errors and enforce best practices
- **Style**: Consistent formatting (2-space indent, single quotes, trailing commas)
- **ES6+**: Modern JavaScript features and patterns

### React Rules

- **JSX**: Proper JSX formatting and patterns
- **Hooks**: React Hooks best practices
- **Accessibility**: WCAG compliance rules

### Angular Rules

- **Components**: Angular-specific component patterns
- **Templates**: HTML template linting
- **Accessibility**: Angular accessibility guidelines

### TypeScript Rules

- **Type Safety**: Strict type checking
- **Modern TS**: Latest TypeScript features
- **Imports**: Type-only imports when possible

## 🤝 Contributing

Found a rule that doesn't work well? Open an issue or submit a PR!

This project uses [Conventional Commits](https://www.conventionalcommits.org/) and automated releases:

- **feat**: New features trigger minor releases
- **fix**: Bug fixes trigger patch releases  
- **BREAKING CHANGE**: Breaking changes trigger major releases
- **docs/style/refactor/test/chore**: No release, documentation/maintenance only

## 🚀 Releases

This project uses automated releases with [semantic-release](https://github.com/semantic-release/semantic-release):

- **Automatic versioning** based on conventional commits
- **Changelog generation** with release notes
- **npm publishing** on every release with provenance
- **GitHub releases** with assets

See [CHANGELOG.md](CHANGELOG.md) for version history and [NPM_TOKEN_SETUP.md](NPM_TOKEN_SETUP.md) for release configuration.

## 📄 License

MIT © Gonzalo Benedi

## 🔗 Related

- [ESLint](https://eslint.org/)
- [TypeScript ESLint](https://typescript-eslint.io/)
- [React ESLint](https://github.com/jsx-eslint/eslint-plugin-react)
- [Angular ESLint](https://github.com/angular-eslint/angular-eslint)
