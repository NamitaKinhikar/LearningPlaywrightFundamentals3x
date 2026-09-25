import { test, expect } from '@playwright/test';

test.describe('Login Page', () =>
    {

    test('valid credentials', async ({ page }) =>//valid
    {
        await page.goto("https://app.thetestingacademy.com/playwright/");
    });

    test('invalid password', async ({ page }) => //invalid
    {
        await page.goto("https://app.thetestingacademy.com/playwright/");
    });

    test.fixme('1checkout with PayPal', async ({ page }) => 
    {
        // never executes
    });

    test.skip('checkout with PayPal', async ({ page }) => 
    {
        // never executes
    });
    // test.only('checkout with PayPal2', async ({ page }) => {
    //     // which
    // });
})

// npx playwright test -g "Login Page"