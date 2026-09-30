# Taste

- Runs Playwright/TypeScript learning scripts directly with `npx tsx <file>` rather than through a test runner or a build step. Confidence: 0.7
- Runs Playwright specs via the CLI (`npx playwright test <file>`) with `--reporter=list` rather than the default reporter. Confidence: 0.5
- Manages Node dependencies with npm, invoking installs directly (e.g. `npm install <pkg> --save`) and expecting the package to be added to `package.json` dependencies. Confidence: 0.5
