const fs = require('fs')

module.exports.ls = () => {
  fs.readdir('./', (err, files) => {
    const filesToString = files.reduce((acc, file) => {
      return `${acc} ${file} `;
    }, '');

    console.log(filesToString);
  });
};

module.exports.touch = () => {
  // your code here
const filename = 'file.txt';
fs.closeSync(fs.openSync(filename, 'w'));
};

module.exports.mkdir = () => {
  // your code here
  fs.mkdir(process.argv[2], function (err) {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    else {
        console.log('finished!!');
    }
})
};