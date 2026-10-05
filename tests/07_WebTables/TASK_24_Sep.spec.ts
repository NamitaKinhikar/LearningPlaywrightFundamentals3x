// Navigate to URL : https://app.thetestingacademy.com/playwright/webtable
// Search Rohan Mehta and click on the checkbox before his name 

import { test, expect } from '@playwright/test';

test("Test to find ROHAN MEHTA and click on the checkbox before his name", async({ page })=>{
        await page.goto("https://app.thetestingacademy.com/playwright/webtable");

        //tbody[@id='employee-body']/tr[3]/td[1]
        const firstPart="//tbody[@id='employee-body']/tr[";
        const secondPart="]/td[";
        const thirdPart="]";
        
        const rows=await page.locator("//tbody[@id='employee-body']/tr").count();
        console.log("total Rows =", rows);

        const cols=await page.locator("//tbody[@id='employee-body']/tr[1]/td").count();
        console.log("total columns =", cols);
        //-------------------------------------------------------------------------------

       for (let i = 1; i <= rows; i++) {

        for (let j = 1; j <= cols; j++) {

            const dynamicPath = `${firstPart}${i}${secondPart}${j}${thirdPart}`;
            //console.log(dynamicPath);
            const data = await page.locator(dynamicPath).innerText();
            console.log(data);

            if (data.includes('Rohan.Mehta')) 
            {
                const checkBoxPath = `${dynamicPath}/preceding-sibling::td`;
                await page.locator(checkBoxPath).click();
            }
        }
   }

   await page.pause();
});
