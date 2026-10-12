// Navigate to URL : 
// https://app.thetestingacademy.com/playwright/multiple_element_filter
// Try to practice as many assertions as possible on Student Login form

import {test, expect} from '@playwright/test';

test("Assertion practice", async({page})=>
{
    await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter");
    const title="Multiple Element Filter Login — The Testing Academy";
    console.log("Title of the page is=", await page.title() + " URL= "+await page.url());
    await expect(page).toHaveTitle(title);

    const email=page.locator("//input[@id='email']");
    await expect(email).toBeEditable();
    if(true)
    {
      await email.fill("student@thetestingacademy.com");
   }
   await page.getByPlaceholder('Enter your password').fill("std123@");
   await page.getByText('Login to Practice Account').click();
   
//    const loginBtn= page.getByTestId('login-button');
//    await expect(loginBtn).toHaveValue('Login to Practice Account');
//    loginBtn.click();

    await page.pause();
})