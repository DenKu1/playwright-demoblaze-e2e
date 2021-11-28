export class SingInPage {
	
  constructor(page) {
    this.page = page;
  }
  
  async navigateToHome() {
    await this.page.goto('https://www.demoblaze.com/index.html');
  }
  
  async click(text) {
    await this.page.click(text);
  }
  
  async fillField(key, value) {
    await this.page.fill(key, value);
  }  

  async makeScreenshot() {
    await this.page.screenshot({ path: 'test-results/signupandlogin-test-chromium/signinsuccess.png' });
  }    
  
  generateUsername() {
    return 'testuser0' + (Math.random() + 1).toString(36).substring(7);
  }
}