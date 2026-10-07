import { test, expect, Locator } from '@playwright/test';

test('Verify Hover for Drag and Drop', async ({ page }) => 
{
   await page.goto('https://app.thetestingacademy.com/playwright/widgets/dnd');

   const columnA = page.locator('#column-a');
   const columnB = page.locator('#column-b');

   await columnA.dragTo(columnB, { force:  true});

   await page.pause();
});
/*
import { test, expect } from '@playwright/test';

test('Verify hover for the SpiceJet Flight Status link', async ({ page }) => {
  await page.goto('https://www.spicejet.com/');

  const flightStatusLink = page.getByRole('link', { name: 'Flight Status' });
  await expect(flightStatusLink).toBeVisible();
  await flightStatusLink.hover();

  await expect.poll(() =>
    flightStatusLink.evaluate((element) => element.matches(':hover'))
  ).toBe(true);
});
*/