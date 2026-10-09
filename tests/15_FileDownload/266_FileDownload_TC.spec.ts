import { test, expect, Locator } from '@playwright/test';

test.describe('File Upload Demo - TestingAcademy', () =>  
{
   test.beforeEach(async ({ page }) => 
   {
      await page.goto('https://app.thetestingacademy.com/playwright/widgets/upload-download');
   });

   test('demo: Download setInputFiles', async ({ page }) => 
   {
         const [staticDownload] = await Promise.all([
               page.waitForEvent('download'),
               page.getByTestId('download-static').click()
         ]);
//we need to follow this scenario
//1st click then start action download(reverse)
         await staticDownload.saveAs('./out/'+ staticDownload.suggestedFilename());
        await page.pause();
   });

});