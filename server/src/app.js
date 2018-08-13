const puppeteer = require('puppeteer');
const configs = require('./config/config');
const { getParentOptions, getChildrenOptions } = require('./constrollers/crawller');
const writeToFile = require('./constrollers/writeFile');

async function main() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // go to echarts option page
  await page.goto(configs.url + '#' + configs.path);
  await page.waitFor(5000);
  console.log('on option page now, begin to crawl the page, wait for a moment.');
  const beginTime = Date.now();

  const parents = await getParentOptions(page);

  const options = await getChildrenOptions(page, parents);

  writeToFile(options, parents, beginTime);

  await browser.close();
}

main();