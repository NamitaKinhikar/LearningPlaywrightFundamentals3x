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

## Setup

From the repository root, install the dependencies and the Chromium browser used by the project:

```bash
npm install
npx playwright install chromium
```

Tests are organized in topic folders under `tests/`, including basics, annotations, locator commands, and session storage. The Playwright configuration uses the Chromium project, runs headed by default, and writes an HTML report.

## Session Storage Credentials

The session-storage example reads `VWO_USER` and `VWO_PASS` from a root-level `.env` file. Create it locally with your credentials:

```dotenv
VWO_USER=your_username
VWO_PASS=your_password
```

`.env` is ignored by Git. The example saves authenticated browser state to `user-session.json`; treat that file as sensitive and do not commit or share it.

## Running Tests

Run all tests (headed mode since `headless: false`):

```bash
npx playwright test
```

Run a single test file:

```bash
npx playwright test tests/03_Locator_Commands/227_Fresh.spec.ts
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

The file `tests/01_Basics/219_tta-check.spec.ts` in this repo was created with codegen against the Testing Academy practice app.

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
