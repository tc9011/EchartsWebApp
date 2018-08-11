const puppeteer = require('puppeteer');
const fs = require('fs');
const configs = require('./config/config');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(configs.url);

  await page.waitFor(10000);
  const result = await page.evaluate(() => {
    let parentOptions = [];
    const list = document.querySelectorAll('.dtui-treelist-parent .ecdoc-api-tree-text-prop');
    list.forEach((value, index, listObj) => {
      parentOptions.push(value.innerText);
    });
    return parentOptions;
  });

  console.log(result);

  await browser.close();
})();