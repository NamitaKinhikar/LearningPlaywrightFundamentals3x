// Task: Login & URL Validation
// Task: Invalid Login & URL Validation
// Open: https://app.thetestingacademy.com/playwright/multiple_element_filter
// Enter an invalid/dummy User ID.
// Enter an invalid/dummy Password.
// Select the Remember Me checkbox.
// Click the Login button.
// Verify that the user is not logged in.
// Verify that the URL remains the same after clicking Login.

import{test,expect} from '@playwright/test';

test("LOGIN & URL Validation", async ({page})=>
{
    await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter");
    let username=page.locator("//input[@id='email']");
    await username.fill("abc@123gmail.com");

    await page.locator("//input[@id='password']").fill("abc123@#");
    await page.locator("//input[@name='remember']").click();
    await page.locator("//button[@class='login-btn']").click();

    console.log("Page Title:-", await page.title());
    await expect(page).toHaveTitle("Multiple Element Filter Login — The Testing Academy");
    await page.pause();
})