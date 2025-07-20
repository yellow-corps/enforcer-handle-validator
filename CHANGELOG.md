# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/)
and this project adheres to [Semantic Versioning](https://semver.org/).

## [Unreleased]

## [2.0.0] - 2025-07-20

### Added

- Embed current version into footer in production mode
- Specific handle comparison field, for focused validation

### Changed

- Reduce LOW threshold for duplicate rule from 80% to 75% similar
- Release script now triggers the deploy-app workflow
- Reformat all files

### Removed

- Remove automatic dispatch of deploy-app workflow

### Fixed

- Fix invalid character rule description
- Fix eslint config picking up dist files

## [1.1.0] - 2025-07-20

### Added

- Add hyphen to allowed characters
- Release script
- Changelog

### Changed

- No longer validate spaces in handles
- Upgraded dependencies

### Fixed

- Dependency issues

## [1.0.0] - 2025-07-20

- Initial version

[Unreleased]: https://github.com/yellow-corps/ibis/compare/v2.0.0...HEAD
[2.0.0]: https://github.com/yellow-corps/ibis/compare/v1.1.0...v2.0.0
[1.1.0]: https://github.com/yellow-corps/ibis/compare/v1.0.0...v1.1.0
[1.0.0]: https://github.com/yellow-corps/ibis/releases/tag/v1.0.0
