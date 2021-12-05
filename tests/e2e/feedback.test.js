const puppeteer = require('puppeteer');
const expect = require('chai').expect;

describe('Feedback test', () => {
  let browser;
  let page;

  before(async () => {
    browser = await puppeteer.launch({
      headless: false,
      slowMo: 20,
      devtools: false,
    });
    page = await browser.newPage();
  });

  after(async () => {
    await browser.close();
  });

  it('Uploads feedback ok', async () => {
    await page.goto('http://zero.webappsecurity.com/index.html');
    await page.waitForSelector('#feedback');
    await page.click('#feedback');
    await page.waitForSelector('#name');
    await page.type('#name', 'margarito');
    await page.type('#email', 'email');
    await page.type('#subject', 'marg');
    await page.type('#comment', 'arg');
    await page.click('input[name="submit"]');
  });

  it('Provides thank you note', async () => {
    await page.waitForSelector('.page-header');
    const text = await page.$eval(
      'div[class="offset3 span6"]',
      (e) => e.textContent
    );
    console.log(text);
    expect(text).to.contain('Thank you');
  });
});
