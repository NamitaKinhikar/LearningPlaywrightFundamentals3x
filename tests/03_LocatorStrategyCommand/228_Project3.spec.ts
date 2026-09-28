import { test, expect} from '@playwright/test';

test("Verfiy the error message in the wingify free trial", async({ page})=>
{
    await page.goto("https://wingify.com/free-trial/");
    let inputBox = page.locator("//input[@id='free-trial-step1-email']");
    await inputBox.fill("abccd");

    await page.locator("#free-trial-step1-gdpr-consent-checkboxcu-marketing-consent-checkbox").click();
    await page.locator("[data-qa='free-trial-step1-gdpr-consent-checkboxgdpr-consent-checkbox']").click();
//because of click() we need to add await -it return promices

    let error_message = page.locator("//div[contains(@class,'invalid-reason')]").first();
    
    await page.locator("//button[@data-qa='page-su-submit']").first().click();


    let error_message_text = await error_message.textContent();

    expect(error_message_text).toContain("The email address you entered is incorrect.");

    await page.pause();
});

//Function says that there are certain functions you can also use, which I am going to give you 
// **Contains()**//tag_name[**contains**(@attribute,'value_of_attribute')]
//- **Starts-with()**//tag_name[**starts-with**(@attribute,'Part_of_Attribute_value')]
// - **Text()**//tag_name[text()='Text of the element']
