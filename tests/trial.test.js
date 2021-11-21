const puppeteer = require('puppeteer');

describe('first pptr trial', () => {
  it('should launch browser', async () => {
    const browser = await puppeteer.launch({ headless: true, slowMo: 500 });
    const page = await browser.newPage();
    await page.goto('https://www.hiddenlevers.com');
    await page.waitForSelector('h1');
    await browser.close();
  });
});
