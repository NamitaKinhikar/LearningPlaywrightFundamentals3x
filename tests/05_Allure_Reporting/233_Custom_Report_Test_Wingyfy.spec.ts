import { test, expect } from "@playwright/test";

// Load the saved session

test.use(
    {
        storageState: './user-session.json',
        //screenshot: 'only-on-failure',
    });

test("go directly to dashboard — Test1", async ({ page }) => {
    await page.goto("https://app.wingify.com/#/dashboard?accountId=1281316");
    await expect(page).toHaveURL(/dashboard/);
    console.log("Dashboard loaded — no login needed ✅");
    await page.waitForTimeout(3000);
});

test("go directly to dashboard2 — Test2", async ({ page }) => {
    await page.goto("https://app.wingify.com/#/dashboard?accountId=1281316");
    await expect(page).toHaveURL(/dashboard/);
    console.log("Dashboard loaded — no login needed ✅");
    await page.waitForTimeout(3000);
});

test("go directly to dashboard3 — Test3", async ({ page }) => {
    await page.goto("https://app.wingify.com/#/dashboard?accountId=1281316");
    await expect(page).toHaveURL(/dashboard/);
    console.log("Dashboard loaded — no login needed ✅");
    await page.waitForTimeout(3000);
});
//to run all test cases at a time-parallel execution--
//  npx playwright test tests/04_Session_Storage/232_TestWingify.spec.ts --reporter=list
//  npx playwright show-report
//npx tsx tests/04_Session_Storage/231_SessionStorage.ts

//---Allure Report in terminal-npm install --save-dev @playwright/test allure-playwright--
//playwrite.config.ts=> in that u change "html" to ["allure-playwright"]]
//then again run all test(like-reporter=list) and then run this command 
// 1-->npm i allure-commandline
// npx allure serve allure-results

//-----------**Custom TTA Report----------------
//npm install tta-report --save-dev
//playwrite.config.ts=> in that u change "html" to ["./utils/CustomReporter.ts"]]
//then again run all test(like-reporter=list) and then run this command
//npx playwright test tests/05_Allure_Reporting/233_Custom_Report_Test_Wingyfy.spec.ts --reporter=./utils/CustomReporter.ts
//o/p=>C:\Users\LENOVO\Desktop\PLayWright with TS\WorkSpace\LearningPlaywrightFundamentals3x\tta-report