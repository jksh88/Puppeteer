module.exports = {
  click: async (page, selector) => {
    try {
      await page.waitForSelector(selector);
      await page.click(selector);
    } catch (e) {
      throw new Error(`could not click on selector: ${selector}`);
    }
  },
  getText: async (page, selector) => {
    try {
      await page.waitForSelector(selector);
      await page.$eval(selector, (element) => element.innerHTML);
    } catch (e) {
      throw new Error(`could not get text from selector: ${selector}`);
    }
  },
  getCount: async (page, selector) => {
    try {
      await page.waitForSelector(selector);
      await page.$$eval(selector, (elements) => elements.length);
    } catch (e) {
      throw new Error(`could not get length from selector: ${selector}`);
    }
  },
  typeText: async (page, selector, text) => {
    try {
      await page.waitForSelector(selector);
      await page.type(selector, text);
    } catch (e) {
      throw new Error(`could not type into selector: ${selector}`);
    }
  },
  waitForText: async (page, selector, text) => {
    try {
      await page.waitForSelector(selector);
      await page.waitForFunction((selector, text) => {
        document.querySelector(selector).innerText.includes(text),
          {},
          selector,
          text;
      });
    } catch (e) {
      throw new Error(`Text ${text} was not found for selector: ${selector}`);
    }
  },
  shouldNotExist: async (page, selector) => {
    try {
      // await page.waitFor(() => !document.querySelector(selector));
      await page.waitForSelector(selector, { hidden: true });
    } catch (e) {
      throw new Error(`Selector: ${selector} is visible. But is should not be`);
    }
  },
};
