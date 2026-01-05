## [2.0.1](https://github.com/gonzalobenedi/gnbc-lint/compare/v2.0.0...v2.0.1) (2026-01-05)


### Bug Fixes

* add id-token permission in release workflow ([74b691e](https://github.com/gonzalobenedi/gnbc-lint/commit/74b691efa34608cb0ec77e43846c66f987a66d1d))

# [2.0.0](https://github.com/gonzalobenedi/gnbc-lint/compare/v1.0.0...v2.0.0) (2026-01-05)


### Features

* integrate prettier by default in all eslint configurations ([962ce6a](https://github.com/gonzalobenedi/gnbc-lint/commit/962ce6ab8f12907a5fef6cb157ccab04368ffe1c))


### BREAKING CHANGES

* prettier is now a required peer dependency

# 1.0.0 (2026-01-05)


### Bug Fixes

* enhance ESLint configuration validation to check syntax and export types ([c940344](https://github.com/gonzalobenedi/gnbc-lint/commit/c9403444a789ecf7b3a30e4880b63dd4f24dede5))
* standardize import quotes in README examples ([9dd25c9](https://github.com/gonzalobenedi/gnbc-lint/commit/9dd25c96388cc5d21ffec87bd31651bf810bb565))
* standardize quote styles in configuration files and clean up whitespace ([287e7ad](https://github.com/gonzalobenedi/gnbc-lint/commit/287e7adf9c00f9169d98c697d73ed71ff80061d3))
* update CI workflow to improve caching and dependency installation ([c70911f](https://github.com/gonzalobenedi/gnbc-lint/commit/c70911f919a8dc524c5c7fe82ba406d09a9b6b00))
* update Node.js version requirements in CI workflow and package.json ([2c03f5f](https://github.com/gonzalobenedi/gnbc-lint/commit/2c03f5f3ea8058821b8cac8ba9841273dfda9a12))
* update Node.js version to 22.x in release workflow ([1f3a052](https://github.com/gonzalobenedi/gnbc-lint/commit/1f3a052812729f7d9bc71e6e9c05b92891a68819))
* update release workflow and configuration for npm provenance ([2c4c111](https://github.com/gonzalobenedi/gnbc-lint/commit/2c4c111f9d1aeef87e2bb7762c5df4f1dfd8ddd9))
* update repository URLs in package.json ([b6536be](https://github.com/gonzalobenedi/gnbc-lint/commit/b6536be9a54994795673030e636acff25dcd4391))


### Features

* add automated release pipeline with semantic-release ([62af596](https://github.com/gonzalobenedi/gnbc-lint/commit/62af596a92079d25ccb030419229a0ea083321f1))
* add commitlint with conventional commits support ([0449183](https://github.com/gonzalobenedi/gnbc-lint/commit/0449183cd316822bc9d57d66f9671b57ef55941a))
* enhance README with ESLint Flat Config support and installation instructions ([016a2e9](https://github.com/gonzalobenedi/gnbc-lint/commit/016a2e90d03cfd2a8fe8f9d2f60f9751e3f55732))
* implement CI workflow and ESLint flat configuration validation ([fca8ffc](https://github.com/gonzalobenedi/gnbc-lint/commit/fca8ffccef8adc5d789b6cf41687108b82b3458d))
* update ESLint configurations to use flat config structure ([2949391](https://github.com/gonzalobenedi/gnbc-lint/commit/29493911c35f44cf93efa5dfe90fb16fc61c5d9b))


### BREAKING CHANGES

* Requires Node.js >= 18.0.0 for ESLint v9 compatibility

# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2025-12-19

### Added

- Initial release of GNBC Lint
- Base JavaScript/ES2022 configuration
- React configuration with hooks and accessibility rules
- React Native configuration with platform-specific optimizations
- Angular configuration with template linting
- Node.js configuration with import management
- TypeScript configuration with modern TS features
- Comprehensive documentation and examples
- Peer dependencies strategy for minimal installation footprint

### Features

- Modular configuration system
- Framework-specific rule sets
- TypeScript support across all configurations
- Accessibility rules for web frameworks
- Import organization and management
- Modern JavaScript best practices
- Comprehensive code style enforcement
