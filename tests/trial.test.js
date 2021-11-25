const puppeteer = require('puppeteer');
const expect = require('chai').expect;

describe('first pptr trial', () => {
  it('should launch browser', async () => {
    const browser = await puppeteer.launch({
      headless: true,
      devtools: false,
      slowMo: 30,
    });
    const page = await browser.newPage();
    await page.setDefaultTimeout(10000);
    await page.setDefaultTimeout(20000);
    await page.goto('https://devexpress.github.io/testcafe/example');
    const title = await page.title();
    const url = await page.url();
    console.log('TITLE: ', title);
    expect(title).to.be.a('string', 'TestCafe Example Page');
    console.log('URL: ' + url);
    expect(url).to.include('example');
    const countP = await page.$$eval('p', (pNodeList) => pNodeList.length);
    console.log('P count: ' + countP);
    expect(countP).to.equal(9);
    const text = await page.$eval('h1', (el) => el.innerText);
    console.log('TEXT: ' + text);
    expect(text).to.be.a('string', 'Example');
    await browser.close();
  });
});
