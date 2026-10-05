// Navigate to URL: https://app.thetestingacademy.com/playwright/widgets/hover-menu
// Hover over Add-ons and then Wif-fi
// Click on Wi-fi and verify it is reflected in Submission Output.
// Sir’s repository as some of you asked for it:
//  https://github.com/PramodDutta/LearningPlaywrightFundamentals3x

import { test, expect } from '@playwright/test';

test("Mouse Hover", async ({ page }) => 
{
    await page.goto("https://app.thetestingacademy.com/playwright/widgets/hover-menu");

    // Hover over Add-ons to open its submenu, then hover Wi-Fi
    await page.getByTestId('nav-add-ons').hover();
    await page.getByTestId('test-id-Wifi').hover();

    // Click Wi-Fi and verify it is reflected in Submission Output
    await page.getByTestId('test-id-Wifi').click();
    const testOutput= page.getByTestId('hover-output');
    await expect(testOutput).toContainText("Wi-Fi");
    //await expect(page.getByTestId('hover-output')).toContainText('Wi-Fi');

    await page.pause();
});
//npx playwright show-report
//npx allure generate allure-results --clean -o allure-report