const puppeteer = require('puppeteer');
const expect = require('chai').expect;

const { click, getCount, getText, shouldNotExist } = require('../lib/utils.js');

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
    page.setDefaultNavigationTimeout(20000);
  });

  afterEach(async () => await browser.close());

  it('should launch browser', async () => {
    await page.goto('https://example.com/', { waitUntil: 'load' });
    await page.waitForXPath('//h1');
    const text = await getText(page, 'h1');
    console.log('TEXT: ', text);
    const countP = await getCount(page, 'p');
    console.log('P count: ' + countP);
    await page.waitForTimeout(2000);
    await shouldNotExist(page, 'random_button');
  });
});
