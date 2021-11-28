const puppeteer = require('puppeteer');
const expect = require('chai').expect;

const { click, getCount, getText } = require('../lib/utils.js');

describe('first pptr trial', () => {
  let browser;
  let page;
  beforeEach(async () => {
    browser = await puppeteer.launch({
      headless: false,
      devtools: false,
      slowMo: 100,
    });
    page = await browser.newPage();
    page.setDefaultTimeout(10000);
    page.setDefaultTimeout(20000);
  });

  afterEach(async () => await browser.close());

  it('should launch browser', async () => {
    await page.goto('https://example.com', { waitUntil: 'load' });
    await page.waitForXPath('//h1');
    // const title = await page.title();
    // const url = await page.url();
    // console.log('TITLE: ', title);
    // expect(title).to.be.a('string', 'TestCafe Example Page');
    // console.log('URL: ' + url);
    // expect(url).to.include('example');
    // const countP = await page.$$eval('p', (pNodeList) => pNodeList.length);
    const text = await getText(page, 'h1');
    console.log('PAGE:', page);
    console.log('TEXT: ', text);
    const countP = await getCount(page, 'p');
    console.log('P count: ' + countP);
    // expect(countP).to.equal(9);
    // const text = await page.$eval('h1', (el) => el.innerText);
    // console.log('TEXT: ' + text);
    // expect(text).to.be.a('string', 'Example');

    // await page.goto('http://zero.webappsecurity.com/index.html');
    // await page.waitForSelector('#signin_button');
    // await click(page, '#signin_button');
    // await page.waitForTimeout(() => !document.querySelector('#signin_button'));
    // await page.waitForSelector('#signin_button', {
    //   hidden: true,
    //   timeout: 10000,
    // });
  });
});
