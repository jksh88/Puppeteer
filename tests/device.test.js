const puppeteer = require('puppeteer');

describe('Device emulation', () => {
  let browser;
  let page;

  beforeEach(async () => {
    browser = await puppeteer.launch({
      headless: false,
      solowMo: 30,
      devtools: false,
    });
    page = await browser.newPage();
    page.setDefaultTimeout(10000);
    page.setDefaultNavigationTimeout(40000);
  });

  afterEach(async () => {
    await browser.close();
  });

  it('Desktop device test', async () => {
    await page.setViewport({
      width: 1650,
      height: 1050,
    });
    await page.goto('https://www.hiddenlevers.com');
  });

  it('ipad device test', async () => {
    const ipad = puppeteer.devices['iPad landscape'];
    await page.emulate(ipad);
    await page.goto('https://www.hiddenlevers.com');
    await page.waitForTimeout(5000);
  });

  it('iphone device test', async () => {
    const iphone = puppeteer.devices['iPhone X'];
    console.log('iPHONE: ', iphone);
    await page.emulate(iphone);
    await page.goto('https://www.hiddenlevers.com');
    await page.waitForTimeout(5000);
  });
});
