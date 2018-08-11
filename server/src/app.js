const puppeteer = require('puppeteer');
const fs = require('fs');
const configs = require('./config/config');

let options = [];

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(configs.url + '#' + configs.path);

  await page.waitFor(5000);
  const results = await page.evaluate(() => {
    let parentOptions = [];
    const list = document.querySelectorAll('.dtui-treelist-parent .ecdoc-api-tree-text-prop');
    list.forEach((value) => {
      parentOptions.push(value.innerText);
    });
    return parentOptions;
  });


  // console.log(results);

  for (result of results) {
    const option = {
      name: result,
      subOptions: [],
    };
    await page.goto(configs.url + '#' + result);
    // console.log(result);
    await page.waitFor(2000);
    const results2 = await page.evaluate(() => {
      let subOptions = [];
      const names = document.querySelectorAll('.ecdoc-api-doc-line-label strong');
      const types = document.querySelectorAll('.ecdoc-api-doc-line-head .ecdoc-api-doc-line-type');
      names.forEach((value, index) => {
        const subObj = {
          name: value.innerText,
          type: types[index].innerText,
        };
        subOptions.push(subObj);
      });
      return subOptions;
    });

    option.subOptions = results2;
    console.log(option);
    options.push(option);
    console.log(options);
  }

  fs.writeFile('./src/results/result.ts', options, err => {
    console.log(err ? err : 'done');
  });

  await browser.close();
})();