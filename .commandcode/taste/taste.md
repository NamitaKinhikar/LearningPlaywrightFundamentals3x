# Taste

- Runs Playwright/TypeScript learning scripts directly with `npx tsx <file>` rather than through a test runner or a build step. Confidence: 0.7
- Runs Playwright specs via the CLI (`npx playwright test <file>`) with `--reporter=list` rather than the default reporter. Confidence: 0.5
- Manages Node dependencies with npm, invoking installs directly (e.g. `npm install <pkg> --save`) and expecting the package to be added to `package.json` dependencies. Confidence: 0.5
- Organizes Playwright specs as sequentially numbered files grouped in topic folders (e.g. `tests/05_Allure_Reporting/233_...`); when adding new ones, expects the next number and the same structure/pattern as the existing sibling test. Confidence: 0.65
- Expects generated HTML reports to be opened/launched in the browser (e.g. the `tta-report` custom reporter output) as the final step, not just written to disk. Confidence: 0.5
