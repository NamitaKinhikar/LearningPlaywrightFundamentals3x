import { test, expect, Locator } from '@playwright/test';

test('Verify the TestCase', async ({ page }) => 
{
   await page.goto("https://awesomeqa.com/webtable1.html");

   const rows = page.locator('table[summary="Sample Table"] tbody tr');
   console.log("Total rows:=", await rows.count()); //4
   //... tbody tr → 4 (data only)
  //...  thead tr → 1
  //...  tfooter tr → 1

   const rowCount = await rows.count();

   for(let i=0; i<=rowCount-1;i++)
    {
      // const colsheader = await rows.nth(1).locator('th').allInnerTexts();
      const rowsData = await rows.nth(i).locator('td').allInnerTexts();
      console.log(`Row ${i + 1}:`, rowsData); 
   }

   await page.pause();
});