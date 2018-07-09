安装 node-v8.11.3-x86.msi

C:\Users\xxx\.npmrc

strict-ssl=false
registry=https://registry.npm.taobao.org/
https-proxy=http://xxx:sqq@2018@proxy1.yyyyyy.com:8080/
proxy=http://xxx:sqq@2018@proxy2.yyyyyy.com:8080/


C:\Users\xxx>npm install -g tiddlywiki
C:\Users\xxx\AppData\Roaming\npm\tiddlywiki -> C:\Users\xxx\AppData\
Roaming\npm\node_modules\tiddlywiki\tiddlywiki.js
+ tiddlywiki@5.1.17
added 1 package in 27.585s


命令安装目录：C:\Users\xxx\AppData\Roaming\npm (添加至Path更方便）

安装highlight.js 插件
Open https://highlightjs.org/download/
Select the language you want and then click download
Unzip the highlight.zip and open the highlight.pack.js in a text editor
Paste the following line as the first line in the text editor
var hljs = require("$:/plugins/tiddlywiki/highlight/highlight.js");

Paste the following line as the last line in the text editor
exports.hljs = hljs;

Open the $:/plugins/tiddlywiki/highlight/highlight.js tiddler in your wiki and click on edit button from text editor
Replace the content of this tiddler with the content of edited highlight.pack.js from text editor
Save tiddler and save wiki
Close and reopen the wiki
Enjoy
