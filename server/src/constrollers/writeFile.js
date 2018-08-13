const fs = require('fs');

let txtData = '';

module.exports = function (options, parents, beginTime) {
  // prepare for writing file
  txtData = 'const parentOptions = [';
  for (item of parents) {
    txtData += " '" + item + "',";
  }
  txtData += '];\n\n';
  for (let i = 0; i < parents.length; i++) {
    const parentOption = parents[i];
    txtData += 'export interface ' + parentOption + 'Typings {\n';

    for (childOption of options[i][parentOption]) {
      txtData += '  ' + childOption.name + ': ' + childOption.type + ';\n'
    }
    txtData += '}\n\n';
  }

  // write file
  console.log('begin to write file.');
  fs.writeFile('../src/results/result.ts', txtData, err => {
    console.log(err ? err : 'done');
    const second = (Date.now() - beginTime) / 1000;
    console.log(`It costs ${second} s`);
  });
};
