export class CategoriesPage {
	
  constructor(page) {
    this.page = page;
  }
  
  async navigateToHome() {
    await this.page.goto('https://www.demoblaze.com/#');
  }
  
  async click(text) {
    await this.page.click(text);
  }
  
  async fillField(key, value) {
    await this.page.fill(key, value);
  }  

  async makeScreenshot() {
    await this.page.screenshot({ path: 'test-results/categories-test-chromium/buylaptopsuccess.png' });
  }    
}