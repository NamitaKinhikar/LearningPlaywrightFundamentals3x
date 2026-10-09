import { test, expect } from '@playwright/test';

test.describe("Simple Alert", () => 
{
  test.beforeEach(async ({ page }) => 
    {
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
   });

  test("accepts the JS alert", async ({ page }) => 
    {
    // 1. Set up the dialog listener callback before clicking
    page.on('dialog', async (dialog) => 
    {
      expect(dialog.message()).toBe("I am a JS Alert");
      await dialog.accept();
    });

    // 2. Click the button to trigger the alert
    // Using exact text match ensures you target the correct button precisely
    await page.getByRole('button', { name: 'Click for JS Alert', exact: true }).click();
  });
});