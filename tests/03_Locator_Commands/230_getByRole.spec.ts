import { test, expect} from '@playwright/test';

test("Verfiy the error message in the wingify free trial", async({ page})=>{

    await page.goto("https://katalon-demo-cura.herokuapp.com/");
    let mainButton = page.getByRole("link",{ name: "Make Appointment", exact :true});
    await mainButton.click();
    await page.pause();

});
//-----------codegen data------------
// import { test, expect } from '@playwright/test';

// test('test', async ({ page }) => {
//   await page.goto('https://katalon-demo-cura.herokuapp.com/');
//   await page.getByRole('link', { name: 'Make Appointment' }).click();
// });