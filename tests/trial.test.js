const puppeteer = require('puppeteer');

describe('first pptr trial', () => {
  it('should launch browser', async () => {
    const browser = await puppeteer.launch({
      headless: false,
      devtools: false,
      slowMo: 300,
    });
    const page = await browser.newPage();
    await page.goto('https://example.com');
    await page.waitForSelector('h1');
    await page.goto('https://www.linkedin.com');
    await page.waitForSelector('h1');
    await page.goBack();
    await page.waitForSelector('h1');
    await page.goForward();
    await page.waitForSelector('h1');
    await browser.close();
  });
});
