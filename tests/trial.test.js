const puppeteer = require('puppeteer');

describe('first pptr trial', () => {
  it('should launch browser', async () => {
    const browser = await puppeteer.launch({
      headless: false,
      devtools: false,
      slowMo: 30,
    });
    const page = await browser.newPage();
    await page.goto('https://devexpress.github.io/testcafe/example');
    await page.type('#developer-name', 'Mike', { delay: 2 });
    await page.click('#tried-test-cafe', { clickCount: 1 });
    await page.select('#preferred-interface', 'Command Line');
    await page.waitForTimeout(12000);
    await browser.close();
  });
});
