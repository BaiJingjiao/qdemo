'use strict';

let cheerio = require('cheerio')
let fs = require('fs');
let path = require('path');
let parentDir = path.resolve(path.join(__dirname + '/../'));
console.log(parentDir);
let html = fs.readFileSync(parentDir + path.sep + '/index.html', 'utf-8');
let $ = cheerio.load(html);

let li = $('#skippedli').text();
console.log('li: ' + li);
console.log('html(): ' + $('#skippedli').html());
