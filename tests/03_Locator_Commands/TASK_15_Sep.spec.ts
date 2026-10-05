import{test,expect} from '@playwright/test';

test("Verify Katalon Cura Website is open", async({page})=>
{
    await page.goto("https://katalon-demo-cura.herokuapp.com/");
    let applink=page.locator("#btn-make-appointment");
    await applink.click();

    let userName= page.locator("#txt-username");
    await userName.fill("John Doe");

    //await page.locator("#txt-password").fill("password123");
    let pass= page.locator("#txt-password");
    await pass.fill("ThisIsNotAPassword");

    await page.locator("#btn-login").click();

    await expect(page.locator("h2")).toContainText("Make Appointment");


    await page.pause();
})