const configs = require('../config/config');

let options = [];

async function getParentOptions (page) {
  // get parent option data
  console.log('begin to crawl the parent option data');
  const parents = await page.evaluate(() => {
    let parentOptions = [];
    const list = document.querySelectorAll('.dtui-treelist-parent .ecdoc-api-tree-text-prop');
    list.forEach((value) => {
      parentOptions.push(value.innerText);
    });
    return parentOptions;
  });

  console.log(parents);
  return parents
}

async function getChildrenOptions (page, parents) {
  // get children option data
  for (result of parents) {
    const option = {
      [result]: [],
    };
    await page.goto(configs.url + '#' + result);
    await page.waitFor(2000);
    console.log(`begin to crawl the ${result} option data.`);
    option[result] = await page.evaluate(() => {
      let subOptions = [];
      const names = document.querySelectorAll('.ecdoc-api-doc-line-label strong');
      const types = document.querySelectorAll('.ecdoc-api-doc-line-head .ecdoc-api-doc-line-type');
      names.forEach((value, index) => {
        let type = types[index].innerText;
        if (types[index].innerText.includes(',')) {
          type = type.replace(/,/g, ' |');
        }
        const subObj = {
          name: value.innerText,
          type: type,
        };
        subOptions.push(subObj);
      });
      return subOptions;
    });

    options.push(option);
  }
  return options;
}

module.exports = {
  getParentOptions,
  getChildrenOptions,
};