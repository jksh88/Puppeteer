const puppeteer = require('puppeteer');
const expect = require('chai').expect;

describe('Payment test', () => {
  let browser;
  let page;

  before(async () => {
    browser = await puppeteer.launch({
      headless: false,
      devtools: false,
      slowMo: 20,
      ignoreHTTPSErrors: true,
    });
    page = await browser.newPage();
    page.setDefaultTimeout(800000);
    page.setDefaultNavigationTimeout(800000);
  });

  after(async () => browser.close());

  it('Login ok', async () => {
    await page.goto('http://zero.webappsecurity.com/index.html');
    await page.waitForSelector('#signin_button');
    await page.click('#signin_button');
    await page.waitForSelector('#user_login');
    await page.type('#user_login', 'username');
    await page.type('#user_password', 'password');
    await page.click('#user_remember_me');
    await page.click('input[type="submit"]');
  });

  it('Displays payment tab', async () => {
    const url = await page.url();
    console.log('URL: ', url);
    await page.waitForSelector('#pay_bills_tab');
    await page.click('#pay_bills_tab');
  });

  it('Makes payment', async () => {
    await page.waitForSelector('.form-horizontal');
    await page.select('#sp_payee', 'bofa');
    await page.select('#sp_account', 'Checking');
    await page.type('#sp_amount', '60');
    await page.type('#sp_date', '2021-12-12');
    await page.keyboard.press('Enter');
    await page.type('#sp_description', 'lawn cut');
    await page.click('#pay_saved_payees');
    await page.waitForSelector('#alert_container');
    const alert = await page.$eval(
      '#alert_content > span',
      (e) => e.textContent
    );
    console.log('ALERT: ', alert);
    expect(alert).to.contain('successfully submitted');
  });
});
