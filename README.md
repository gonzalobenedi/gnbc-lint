# GNBC Lint

ESLint configurations for React, Angular, React Native, and Node.js projects with TypeScript support.

## 🚀 Quick Start

Install the package and the required peer dependencies based on your project type:

### React Projects

```bash
npm install --save-dev gnbc-lint eslint eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-jsx-a11y
```

```json
// .eslintrc.json
{
  "extends": ["gnbc-lint/react"]
}
```

### React + TypeScript

```bash
npm install --save-dev gnbc-lint eslint eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-jsx-a11y @typescript-eslint/eslint-plugin @typescript-eslint/parser
```

```json
// .eslintrc.json
{
  "extends": ["gnbc-lint/react", "gnbc-lint/typescript"]
}
```

### React Native Projects

```bash
npm install --save-dev gnbc-lint eslint eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-jsx-a11y eslint-plugin-react-native
```

```json
// .eslintrc.json
{
  "extends": ["gnbc-lint/react-native"]
}
```

### Angular Projects

```bash
npm install --save-dev gnbc-lint eslint @angular-eslint/eslint-plugin @angular-eslint/template-parser
```

```json
// .eslintrc.json
{
  "extends": ["gnbc-lint/angular"]
}
```

### Node.js Projects

```bash
npm install --save-dev gnbc-lint eslint eslint-plugin-import
```

```json
// .eslintrc.json
{
  "extends": ["gnbc-lint/node"]
}
```

### Node.js + TypeScript

```bash
npm install --save-dev gnbc-lint eslint eslint-plugin-import @typescript-eslint/eslint-plugin @typescript-eslint/parser
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
| `gnbc-lint`              | Base JavaScript rules       | `eslint:recommended`      |
| `gnbc-lint/react`        | React + JSX + Accessibility | Base + React plugins      |
| `gnbc-lint/react-native` | React Native optimized      | React config + RN plugins |
| `gnbc-lint/angular`      | Angular + Templates         | Base + Angular plugins    |
| `gnbc-lint/node`         | Node.js + Import rules      | Base + Import plugin      |
| `gnbc-lint/typescript`   | TypeScript rules            | Base + TS plugins         |

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

## 📄 License

MIT © Gonzalo Benedi

## 🔗 Related

- [ESLint](https://eslint.org/)
- [TypeScript ESLint](https://typescript-eslint.io/)
- [React ESLint](https://github.com/jsx-eslint/eslint-plugin-react)
- [Angular ESLint](https://github.com/angular-eslint/angular-eslint)
