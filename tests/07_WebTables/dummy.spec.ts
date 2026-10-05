import {test,Locator,expect} from '@playwright/test';

test("Find dynamic element", async({page})=>
{
 page.goto("https://app.thetestingacademy.com/playwright/tables/webtable");
 let name:string="Luca Greco";
 let row;
 while(true)
 {
    row= page.locator('#employees-tbody tr').filter({hasText:name});
    if(await row .count())
    {
        break;
    }
    const next=page.getByTestId("next-page");
    if(await next.isDisabled())
    {
        throw new Error("NOT FOUND");
    }
    await next.click();
 }
    const email=await row.locator("td[data-col='email']").innerText();
    console.log(email);
   
    await page.pause();
});
