const { test, expect } = require('@playwright/test');
test('test', async ({ page }) => {
  // Go to https://www.demoblaze.com/index.html
  await page.goto('https://www.demoblaze.com/index.html');
  // Click a:has-text("Sign up")
  await page.click('a:has-text("Sign up")');
  // Click text=Username: Password: >> input[type="text"]
  await page.click('text=Username: Password: >> input[type="text"]');
  
  const username = generateUsername();
  
  // Fill text=Username: Password: >> input[type="text"]
  await page.fill('text=Username: Password: >> input[type="text"]', username);
  // Click input[type="password"]
  await page.click('input[type="password"]');
  // Fill input[type="password"]
  await page.fill('input[type="password"]', '1111');
  // Click button:has-text("Sign up")
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.click('button:has-text("Sign up")');
  // Click a:has-text("Log in")
  await page.click('a:has-text("Log in")');
  // Click text=Log in × Username: Password: Close Log in >> input[type="text"]
  await page.click('text=Log in × Username: Password: Close Log in >> input[type="text"]');
  // Fill text=Log in × Username: Password: Close Log in >> input[type="text"]
  await page.fill('text=Log in × Username: Password: Close Log in >> input[type="text"]', username);
  // Click #logInModal form div:has-text("Password:")
  await page.click('#logInModal form div:has-text("Password:")');
  // Click text=Log in × Username: Password: Close Log in >> input[type="password"]
  await page.click('text=Log in × Username: Password: Close Log in >> input[type="password"]');
  // Fill text=Log in × Username: Password: Close Log in >> input[type="password"]
  await page.fill('text=Log in × Username: Password: Close Log in >> input[type="password"]', '1111');
  // Click button:has-text("Log in")
  await Promise.all([
    page.waitForNavigation(/*{ url: 'https://www.demoblaze.com/index.html' }*/),
    page.click('button:has-text("Log in")')
  ]);
  
  const welcomeText = 'text=Welcome ' + username;
  
  // Click text=Welcome testuser
  await page.click(welcomeText);
  await expect(page).toHaveURL('https://www.demoblaze.com/index.html#');
  
  await page.screenshot({ path: 'signinsuccess.png' });
});

function generateUsername() {
    return "testuser0" + (Math.random() + 1).toString(36).substring(7);
}