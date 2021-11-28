const { test, expect } = require('@playwright/test');
const { SingInPage } = require('./models/SingInPage');

test('test', async ({ page }) => {
	
  const singInPage = new SingInPage(page);
	
  await singInPage.navigateToHome();
  
  await singInPage.click('a:has-text("Sign up")');
  await singInPage.click('text=Username: Password: >> input[type="text"]');
  
  let username = singInPage.generateUsername();
  
  await singInPage.fillField('text=Username: Password: >> input[type="text"]', username);
  await singInPage.click('input[type="password"]');

  await singInPage.fillField('input[type="password"]', '1111');

  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  
  await singInPage.click('button:has-text("Sign up")');
  await singInPage.click('a:has-text("Log in")');
  
  await singInPage.click('text=Log in × Username: Password: Close Log in >> input[type="text"]');
  await singInPage.fillField('text=Log in × Username: Password: Close Log in >> input[type="text"]', username);

  await singInPage.click('#logInModal form div:has-text("Password:")');
  await singInPage.click('text=Log in × Username: Password: Close Log in >> input[type="password"]');
  await singInPage.fillField('text=Log in × Username: Password: Close Log in >> input[type="password"]', '1111');

  await Promise.all([
    page.waitForNavigation(),
    singInPage.click('button:has-text("Log in")')
  ]);
  
  await singInPage.click('text=Welcome ' + username);
  await expect(page).toHaveURL('https://www.demoblaze.com/index.html#');
  
  await singInPage.makeScreenshot();
});