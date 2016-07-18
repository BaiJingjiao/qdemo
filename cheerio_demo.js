'use strict';

let cheerio = require('cheerio')
let fs = require("fs");
let html = fs.readFileSync("my.html", "utf-8");

let $ = cheerio.load(html);

let p = $('p').text();
console.log(p);
