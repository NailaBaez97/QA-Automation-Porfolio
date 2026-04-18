const { test, expect } = require('@playwright/test');

test('La tienda Pet Store carga correctamente', async ({ page }) => {

  // 1. Navegar a la tienda
  await page.goto('https://petstore.octoperf.com/actions/Catalog.action');

  // 2. Verificar título
  await expect(page).toHaveTitle(/JPetStore/);

  // 3. Verificar URL
  await expect(page).toHaveURL(/Catalog.action/);
});