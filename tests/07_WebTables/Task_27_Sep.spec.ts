// Navigate to Flipkart : https://www.flipkart.com/
// Search DSLR Camera
// Navigate all the pages by clicking on Next till Next is not visible
// and print names of all cameras and their prices.

import { test } from '@playwright/test';

test('Print DSLR camera names and prices from all Flipkart result pages', async ({ page }) => {
  test.setTimeout(180000);

  await page.goto('https://www.flipkart.com/', { waitUntil: 'domcontentloaded' });

  // Dismiss the login popup if it appears.
  await page.keyboard.press('Escape');
  const closePopup = page.locator('button:has-text("✕")').first();
  if (await closePopup.count() > 0 && await closePopup.isVisible()) {
    await closePopup.click();
  }

  const searchBox = page.locator("input[name='q']:not([readonly])");
  await searchBox.fill('DSLR Camera');
  await searchBox.press('Enter');

  const cards = page.locator('div[data-id]').filter({
    has: page.locator('.KzDlHZ, .s1Q9rs, a[title]'),
  });
  await cards.first().waitFor();

  let pageNumber = 1;

  while (true) {
    console.log(`\n===== Page ${pageNumber} =====`);

    const cardCount = await cards.count();
    for (let index = 0; index < cardCount; index++) {
      const card = cards.nth(index);
      const name = await card.locator('.KzDlHZ, .s1Q9rs, a[title]').first().innerText();
      const priceElement = card.locator('.Nx9bqj, ._30jeq3').first();
      const price =
        (await priceElement.count()) > 0
          ? await priceElement.innerText()
          : (await card.innerText())
              .split('\n')
              .map((line) => line.trim())
              .find((line) => line.startsWith('₹'));

      if (!price) {
        throw new Error(`Price not found for product: ${name.trim()}`);
      }
      console.log(`${index + 1}. ${name.trim()} - ${price.trim()}`);
    }

    const nextPage = page.getByRole('link', { name: 'Next', exact: true });
    if (!(await nextPage.isVisible())) {
      console.log('\nReached the last page.');
      break;
    }

    const currentUrl = page.url();
    await Promise.all([
      page.waitForURL((url) => url.href !== currentUrl),
      nextPage.click(),
    ]);
    await cards.first().waitFor();
    pageNumber++;
  }
});
