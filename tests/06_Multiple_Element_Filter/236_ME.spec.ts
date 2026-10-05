import { test, expect, Locator } from '@playwright/test';

test('Basic verify how to handle multiple elements ', async ({ page }) => {

    await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter");
    const rightPanelLinksTexts: Locator[] =  await page.locator('a.list-group-item').all
    console.log(rightPanelLinksTexts.length); //13

    for (const link of rightPanelLinksTexts) 
    {
        console.log(await link.getAttribute('href'));
    }

    await page.pause();

});
//allInnerText() VS all()
//allInnerText() => will return the string[] & all()=> will return the locator[]


//text content VS innerText()
// text content() ==> is method that returns all elements including hidden elements, 
// which means it will return elements that are not visible on the page. it return=>string[]

// innerText() ==>It will return only small part of that perticular selelction
// and it returns only visible elements. it return =>string[]

//npx playwright test tests/06_Multiple_Element_Filter/235_ME.spec.ts --reporter=./utils/CustomReporter.ts
