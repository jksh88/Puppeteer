const puppeteer = require('puppeteer');

describe('Login test', () => {
  let browser;
  let page;

  before(async () => {
    browser = await puppeteer.launch({
      headless: true,
      slowMo: 30,
      devtools: false,
    });
    page = await browser.newPage();
    page.setDefaultTimeout(10000);
    page.setDefaultNavigationTimeout(20000);
  });

  after(async () => await browser.close());

  it('Login Test - Invalid Credentials', () => {
    // TODO
  });
  it('Login Test - Invalid Credentials', () => {
    //TODO
  });
});
