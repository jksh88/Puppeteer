const puppeteer = require('puppeteer');

describe('first pptr trial', () => {
  it('should launch browser', async () => {
    const browser = await puppeteer.launch({
      headless: false,
      slowMo: 500,
      devtools: false,
    });
    const page = await browser.newPage();
    await page.goto('https://www.hiddenlevers.com');
    await page.waitForTimeout(3000);
    await page.waitForSelector('h1');
    await page.waitForTimeout(3000);
    await page.reload();
    await page.waitForSelector('h2');
    await browser.close();
  });
});
