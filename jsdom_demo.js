/*不工作*/
var jsdom = require("jsdom");
var window = jsdom.jsdom().defaultView;
var fs = require("fs");
var jq = fs.readFileSync("./node_modules/jquery/src/jquery.js", "utf-8");

jsdom.env({
  url: "my.html",
  src: [jq],
  done: function (err, window) {
    var $ = window.$;
    console.log("HN Links");
    $("p").each(function () {
      console.log(" -", $(this).text());
    });
  }
});
