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
};
