// Navigate to  QA Profile Form practice page
// URL:  https://app.thetestingacademy.com/playwright/tables/practice#page
// Fill the fields of the form like 
// Personal information, Professional details, Technical skills
// Save the form and verify if the filled data is reflected in the 
// Submission Output

import {test, expect, Locator } from '@playwright/test';
test("Navigate to  QA Profile Form practice page", async({page})=>
{
 await page.goto("https://app.thetestingacademy.com/playwright/tables/practice#page");
// -------------------------Personal information--------------------
 await page.getByTestId('first-name').fill("Aarav");
 await page.getByTestId('last-name').fill("Sharma");
  await page.getByTestId('gender-male').first().click();

 //-----------------------Professional details--------------------
 await page.locator('#years-experience').click();
 await page.selectOption("#years-experience","4");
 await page.getByRole('textbox',{name: "Date"}).fill("1998-04-06");
 await page.getByTestId('profession-automation').click();

 //----------------------Technical skills------------------------
 await page.getByRole('checkbox',{name:"Selenium Webdriver"}).check();
 await page.getByRole('checkbox',{name:"Asia"}).check();
 await page.getByTestId('continent-south-america').check();
 await page.locator("#profile-submit").click();

 await page.pause();
});

//npx playwright codegen https://
