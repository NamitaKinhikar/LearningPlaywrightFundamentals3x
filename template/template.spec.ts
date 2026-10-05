import { test, expect, Locator } from '@playwright/test';

test('Verify the Test Case', async ({ page }) => {

    await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter");

    await page.pause();

});