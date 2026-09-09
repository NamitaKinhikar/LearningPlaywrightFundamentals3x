# Learning Playwright Fundamentals 3.x

A hands-on project for learning end-to-end testing with **Playwright Test (3.x)** using TypeScript.

## Prerequisites

- [Node.js](https://nodejs.org/) 18 or newer (includes `npm`)
- [Git](https://git-scm.com/)

Verify your setup:

```bash
node -v
npm -v
git --version
```

## Installing Playwright

### 1. Create a new project (skip if cloning this repo)

```bash
npm init -y
```

### 2. Install the Playwright test runner

```bash
npm init playwright@latest
```

The installer will ask you a few questions:

- **Choose TypeScript or JavaScript** — this repo uses TypeScript
- **Name of your tests folder** — default is `tests`
- **Add a GitHub Actions workflow?** — optional, choose yes to run tests in CI
- **Install Playwright browsers?** — choose yes

It creates the `playwright.config.ts` config file, a `tests/` folder with an example spec, and a `.gitignore`.

> Already cloned this repo? Just run `npm install` and then install the browsers below.

### 3. Install browsers (optional — the installer may ask you)

```bash
npx playwright install
```

To install a specific browser only:

```bash
npx playwright install chromium
npx playwright install firefox
npx playwright install webkit
```

## Setting Up the Basic Project

After installation you should have a structure like this:

```text
LearningPlaywrightFundamentals3x/
├── node_modules/
├── playwright-report/
├── test-results/
├── tests/
│   ├── example.spec.ts
│   └── tta-check.spec.ts
├── .gitignore
├── package.json
├── playwright.config.ts
└── README.md
```

Key files:

| File | Purpose |
| --- | --- |
| `playwright.config.ts` | Central configuration: test directory, browsers, reporters, timeouts |
| `tests/` | Where all your spec files live |
| `package.json` | Dependencies and scripts |

### Config overview

`playwright.config.ts` is generated with sensible defaults — test directory `./tests`, the Chromium project preconfigured, and the HTML reporter enabled:

```ts
export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  reporter: 'html',
  use: {
    headless: false,
    trace: 'on-first-retry',
  },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
  ],
});
```

## Running Tests

Run all tests (headed mode since `headless: false`):

```bash
npx playwright test
```

Run a single test file:

```bash
npx playwright test tests/example.spec.ts
```

Run tests in a specific browser project:

```bash
npx playwright test --project=chromium
```

Debug a test with the Playwright debugger / inspector:

```bash
npx playwright test --debug
```

Run tests in UI mode (watch tests with a live browser):

```bash
npx playwright test --ui
```

## Viewing the HTML Report

After a run, open the generated report:

```bash
npx playwright show-report
```

## Using Codegen to Record Tests

Playwright ships a **codegen** tool that records your browser actions and generates the test code automatically.

### Launch codegen

```bash
npx playwright codegen
```

### Record against a specific URL

```bash
npx playwright codegen https://example.com
```

### Open codegen in a specific browser

```bash
npx playwright codegen --browser=chromium https://example.com
npx playwright codegen --browser=firefox https://example.com
npx playwright codegen --browser=webkit https://example.com
```

### How to use it

1. Codegen opens a browser window plus the Playwright inspector panel.
2. Interact with the page — click, type, navigate.
3. Every action is recorded and written into the inspector as a test script.
4. Copy the generated code into a spec file (e.g. `tests/my-test.spec.ts`) and run it.
5. Use the inspector to copy **selectors** for specific elements or generate **assertions** like `await expect(page).toHaveTitle(...)`.

The file `tests/tta-check.spec.ts` in this repo was created with codegen against the Testing Academy practice app.

## Example Test

```ts
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});
```

## Helpful Links

- [Playwright Documentation](https://playwright.dev/docs/intro)
- [Test Configuration](https://playwright.dev/docs/test-configuration)
- [Codegen](https://playwright.dev/docs/codegen)
- [Playwright API Reference](https://playwright.dev/docs/api/class-playwright)
