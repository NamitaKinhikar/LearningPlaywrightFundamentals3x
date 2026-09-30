# Taste

- Runs Playwright/TypeScript learning scripts directly with `npx tsx <file>` rather than through a test runner or a build step. Confidence: 0.6
- Manages Node dependencies with npm, invoking installs directly (e.g. `npm install <pkg> --save`) and expecting the package to be added to `package.json` dependencies. Confidence: 0.5
