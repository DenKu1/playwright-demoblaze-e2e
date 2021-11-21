const { test, expect } = require('@playwright/test');
test('test', async ({ page }) => {
  // Go to https://www.demoblaze.com/#
  await page.goto('https://www.demoblaze.com/#');
  // Click text=Laptops
  await page.click('text=Laptops');
  await expect(page).toHaveURL('https://www.demoblaze.com/#');
  // Click text=MacBook air
  await page.click('text=MacBook air');
  await expect(page).toHaveURL('https://www.demoblaze.com/prod.html?idp_=11');
  // Click text=Add to cart
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.click('text=Add to cart');
  await expect(page).toHaveURL('https://www.demoblaze.com/prod.html?idp_=11#');
  // Click text=Cart
  await page.click('text=Cart');
  await expect(page).toHaveURL('https://www.demoblaze.com/cart.html');
  // Click button:has-text("Place Order")
  await page.click('button:has-text("Place Order")');
  // Click text=Total: 700 Name: Country: City: Credit card: Month: Year: >> input[type="text"]
  await page.click('text=Total: 700 Name: Country: City: Credit card: Month: Year: >> input[type="text"]');
  // Click text=Total: 700 Name: Country: City: Credit card: Month: Year: >> input[type="text"]
  await page.click('text=Total: 700 Name: Country: City: Credit card: Month: Year: >> input[type="text"]');
  // Fill text=Total: 700 Name: Country: City: Credit card: Month: Year: >> input[type="text"]
  await page.fill('text=Total: 700 Name: Country: City: Credit card: Month: Year: >> input[type="text"]', 'test');
  // Click #country
  await page.click('#country');
  // Fill #country
  await page.fill('#country', 'test');
  // Click #city
  await page.click('#city');
  // Fill #city
  await page.fill('#city', 'test');
  // Click #card
  await page.click('#card');
  // Fill #card
  await page.fill('#card', 'test');
  // Click #month
  await page.click('#month');
  // Fill #month
  await page.fill('#month', '3');
  // Click #year
  await page.click('#year');
  // Fill #year
  await page.fill('#year', '2001');
  // Click text=Purchase
  await page.click('text=Purchase');
  // Click button:has-text("OK")
  await page.click('button:has-text("OK")');
  await page.screenshot({ path: 'buylaptopsuccess.png' });
});