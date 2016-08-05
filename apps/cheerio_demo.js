'use strict';

let cheerio = require('cheerio')
let fs = require('fs');
let path = require('path');
let parentDir = path.resolve(path.join(__dirname + '/../'));
let html = fs.readFileSync(parentDir + path.sep + '/index.html', 'utf-8');
let $ = cheerio.load(html);

$('#skippedli').text('skipped(100)');
console.log($.html());

let str = $.html();
fs.writeFileSync('my.html', str, 'utf-8', (err) => {
  if(err) throw err;
  console.log('writing my.html end.');
});
