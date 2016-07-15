var jsdom = require("jsdom");
var fs = require("fs");
// var jquery = require("jquery");
var jquery = fs.readFileSync("./node_modules/jquery/src/jquery.js", "utf-8");

jsdom.env({
  url: "my.html",
  src: [jquery],
  done: function (err, window) {
    var $ = window.$;
    console.log("HN Links");
    $("p").each(function () {
      console.log(" -", $(this).text());
    });
  }
});