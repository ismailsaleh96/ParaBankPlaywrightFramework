# Playwright Conversion of ParaBank Selenium Framework

This project is a TypeScript-based Playwright conversion of the ParaBank Selenium framework with support for:
- Page Object Model (POM)
- Login and Registration Flows
- Cucumber BDD Integration

## 📦 Installation

Make sure you have [Node.js](https://nodejs.org/) installed (preferably version 18+).

```bash
npm install
```

 Run Tests

### 1. Run Standard Playwright Tests
```bash
npm run test
```

### 2. Run BDD Tests (Cucumber)
```bash
npm run bdd
```

Project Structure

```
├── pages/                   # Page Object classes
├── tests/                   # Playwright test specs
├── step-definitions/       # Cucumber step definitions
├── features/               # Gherkin feature files
├── world.ts                # Shared context for BDD
├── playwright.config.ts    # Playwright test configuration
├── cucumber.tsconfig.json  # TS config for Cucumber
└── package.json            # NPM dependencies and scripts
```

 Notes
- The test project launches the ParaBank demo site: https://parabank.parasoft.com
- Credentials and selectors should be adjusted for your real environment if needed.
- Add more page objects under `pages/` and tests under `tests/` or Cucumber steps as required.

 Contributions
Contributions and improvements are welcome!

 Tested with
- Node.js 18+
- Playwright 1.44+
- Cucumber.js 9+