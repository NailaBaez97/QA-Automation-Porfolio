const { test, expect } = require('@playwright/test');

test('Navegar a la categoria FISH', async ({ page }) => {

  await page.goto('https://petstore.octoperf.com/actions/Catalog.action');

  await page.locator('#QuickLinks a[href*="categoryId=FISH"]').click();

  await expect(page.getByRole('heading', { name: 'Fish' })).toBeVisible();
});


test('Navegar a la categoria DOGS', async ({ page }) => {

  await page.goto('https://petstore.octoperf.com/actions/Catalog.action');

  await page.locator('#QuickLinks a[href*="categoryId=DOGS"]').click();

  await expect(page.getByText('Dogs')).toBeVisible();
});