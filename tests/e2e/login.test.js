const puppeteer = require('puppeteer');
const expect = require('chai').expect;

describe('Login test', () => {
  let browser;
  let page;

  before(async () => {
    browser = await puppeteer.launch({
      headless: false,
      slowMo: 30,
      devtools: true,
    });
    page = await browser.newPage();
    page.setDefaultTimeout(10000);
    page.setDefaultNavigationTimeout(20000);
  });

  after(async () => await browser.close());

  it('Login Test - Invalid Credentials', async () => {
    await page.goto('http://zero.webappsecurity.com/index.html');
    await page.waitForSelector('#signin_button');
    await page.click('#signin_button');
    await page.waitForSelector('#user_password');
    await page.type('#user_login', 'wronglogin');
    await page.type('#user_password', 'wrongpw');
    await page.click('#user_remember_me');
  });
  it('Login Test - Valid Credentials', async () => {
    await page.goto('http://zero.webappsecurity.com/index.html');
    await page.waitForSelector('#signin_button');
    await page.click('#signin_button');
    await page.waitForSelector('#user_password');
    await page.type('#user_login', 'username');
    await page.type('#user_password', 'password');
    await page.click('#user_remember_me');
    await page.waitForSelector('#settingsBox');
  });
});
