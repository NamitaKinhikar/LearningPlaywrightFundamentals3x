// Navigate to Flipkart : https://www.flipkart.com/
// Search DSLR Camera
// Navigate all the pages by clicking on Next till last page (until Next is not visible)
// and print names of all camera and it's price

import { test } from '@playwright/test';

test('Navigate to Flipkart', async ({ page }) => {
  test.setTimeout(600000);

  await page.goto('https://www.flipkart.com/', { waitUntil: 'domcontentloaded' });

  // Login popup opens on load - dismiss it so it doesn't block the search box.
  await page.keyboard.press('Escape').catch(() => { });

  const searchBox = page.locator("input[name='q']:not([readonly])");
  await searchBox.fill('DSLR Camera');
  await searchBox.press('Enter');

  await page.locator('div[data-id]').first().waitFor();

  let pageNo = 1;

  while (true) {
    console.log(`\n===== Page ${pageNo} =====`);

    const cards = page.locator('div[data-id]');
    const count = await cards.count();

    for (let i = 0; i < count; i++) {
      const card = cards.nth(i);

      // Product name: image alt text (falls back to the title div).
      const name =
        (await card.locator('img[alt]').first().getAttribute('alt', { timeout: 3000 }).catch(() => null)) ??
        (await card.locator('.RG5Slk').first().innerText({ timeout: 3000 }).catch(() => 'N/A'));

      // Price: the first text node that is only a rupee amount (e.g. "₹78,990").
      const price = await card.getByText(/^₹[\d,]+$/).first().innerText({ timeout: 3000 }).catch(() => 'N/A');

      console.log(`${i + 1}. ${name.trim()} - ${price.trim()}`);
    }

    // "Next" is gone on the last page -> stop there.
    const next = page.locator('a:has-text("Next")').last();
    const hasNext = (await next.count()) > 0 && (await next.isVisible().catch(() => false));
    if (!hasNext) {
      console.log('\nReached the last page (Next is not visible).');
      break;
    }

    const href = await next.getAttribute('href');
    if (!href) break;

    await page.goto(new URL(href, page.url()).href, { waitUntil: 'domcontentloaded' });
    await page.locator('div[data-id]').first().waitFor();
    pageNo++;
  }
});
