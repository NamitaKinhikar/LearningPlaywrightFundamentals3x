// Navigate to URL : https://opensource-demo.orangehrmlive.com/web/index.php/auth/login
// Login with
// Username : admin
// Password : admin123
// Add an employee
// Click PIM to view all employees again.
// Search the same employee which is added by navigating to different pages and delete it.

import { test, expect } from '@playwright/test';

test("Automate (Navigate) to URL : ", async ({ page }) => {
  await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
  await page.locator("//input[@name='username']").fill("Admin");
  await page.locator("//input[@placeholder='Password']").fill("admin123");
  await page.getByRole('button', { name: 'Login' }).click();

  //---------------------------------------------------------------------------
  console.log("i am on 2nd page");
  await page.getByRole('link', { name: 'PIM' }).click();

  await page.getByRole('button', { name: 'Add' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).fill('AAAAA');
  await page.getByRole('textbox', { name: 'Middle Name' }).fill('BBBBB');
  await page.getByRole('textbox', { name: 'Last Name' }).fill('CCCCC');

  // Employee Id field - target the input inside the "Employee Id" group, not by index.
  const empId = "E01235676";
  const empIdInput = page.locator('.oxd-input-group').filter({ hasText: 'Employee Id' }).locator('input');
  await empIdInput.fill(empId);

  await page.getByRole('button', { name: 'Save' }).click();
  await expect(page.getByText('Successfully Saved')).toBeVisible();

  //---------------------------------------------------------------------------
  console.log("i am on 3rd page");
  await page.getByRole('link', { name: 'Employee List' }).click();

  // Search by the exact Employee Id we saved.
  await empIdInput.fill(empId);
  await page.getByRole('button', { name: 'Search' }).click();

  const row = page.locator('.oxd-table-card').filter({ hasText: empId });
  await expect(row).toHaveCount(1);
  await row.locator('.oxd-checkbox-wrapper').click();
  await expect(row.getByRole('checkbox')).toBeChecked();

  // The trash action appears in the table header once a row is selected.
  await page.locator('button:has(.bi-trash)').click();
  await page.getByRole('button', { name: 'Yes, Delete' }).click();
  await expect(page.getByText('Successfully Deleted')).toBeVisible();
});
