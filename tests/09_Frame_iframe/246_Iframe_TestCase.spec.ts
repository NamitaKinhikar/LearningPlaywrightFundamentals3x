import { test, expect, Locator, FrameLocator } from '@playwright/test';

test('Verify Advance Custom DropDowns', async ({ page }) => 
{
  await page.goto('https://app.thetestingacademy.com/playwright/frames/');
  let vechileFrame: FrameLocator = await page.frameLocator("#frame-one");

  await vechileFrame.locator('#RESULT_TextField-1').fill('Hyundai i10');
  await vechileFrame.locator('#RESULT_TextField-2').fill('Pramod Dutta');
  await vechileFrame.locator('#RESULT_TextField-3').fill('2012');
  await vechileFrame.locator('#RESULT_RadioButton-1').selectOption('Hatchback');

  await vechileFrame.locator('#RESULT_TextField-4').fill('2015');

  await vechileFrame.locator('#RESULT_TextArea-1').fill('Amazing car with amazing family car in a budget');

  await vechileFrame.getByText('Submit registration', { exact: true }).click();

  let output = await vechileFrame.locator("#vehicle-output").innerText();
  console.log(output);
  await page.pause();
});

test("verify frame for testing purpose",async({page})=>
{
  await page.goto('https://app.thetestingacademy.com/playwright/frames/');
  
  let frameOne:FrameLocator= page.frameLocator("#frame-one");
  const headerTXt=await frameOne.locator('h1').innerText();
  console.log(headerTXt);

  let Vframe: FrameLocator = page.frameLocator("#frame-one");
  await Vframe.locator("#RESULT_TextField-1").fill("Scoda");
  await Vframe.locator("#RESULT_TextField-2").fill("Namita");
  await Vframe.locator("#RESULT_TextField-3").fill("MH-12-QB-1626");
  await Vframe.locator("#RESULT_RadioButton-1").selectOption('Sedan');
  await page.pause();

});
//npx playwright test 
//tests/09_Frame_iframe/246_Iframe_TestCase.spec.ts --list.
  

