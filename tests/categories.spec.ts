const { test, expect } = require('@playwright/test');
const { CategoriesPage } = require('./models/CategoriesPage');

test('test', async ({ page }) => {
	
	const categoriesPage = new CategoriesPage(page);
	
	await categoriesPage.navigateToHome();
	
	await categoriesPage.click('text=Laptops');
	await expect(page).toHaveURL('https://www.demoblaze.com/#');
	
	await categoriesPage.click('text=MacBook air');
	await expect(page).toHaveURL('https://www.demoblaze.com/prod.html?idp_=11');
	
	page.once('dialog', dialog => {
		console.log(`Dialog message: ${dialog.message()}`);
		dialog.dismiss().catch(() => {});
	});
	
	await categoriesPage.click('text=Add to cart');
	await expect(page).toHaveURL('https://www.demoblaze.com/prod.html?idp_=11#');
	
	await categoriesPage.click('text=Cart');
	await expect(page).toHaveURL('https://www.demoblaze.com/cart.html');
	
	await categoriesPage.click('button:has-text("Place Order")');	
	await categoriesPage.click('text=Total: 700 Name: Country: City: Credit card: Month: Year: >> input[type="text"]');
	await categoriesPage.fillField('text=Total: 700 Name: Country: City: Credit card: Month: Year: >> input[type="text"]', 'test');
	
	await categoriesPage.click('#country');
	await categoriesPage.fillField('#country', 'test');

	await categoriesPage.click('#city');
	await categoriesPage.fillField('#city', 'test');
	
	await categoriesPage.click('#card');
	await categoriesPage.fillField('#card', 'test');
	
	await categoriesPage.click('#month');
	await categoriesPage.fillField('#month', '3');
	
	await categoriesPage.click('#year');
	await categoriesPage.fillField('#year', '2001');
	
	await categoriesPage.click('text=Purchase');
	await categoriesPage.click('button:has-text("OK")');
	
	await categoriesPage.makeScreenshot();
});