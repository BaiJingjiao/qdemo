'use strict';

let fs = require('fs');
let path = require('path');
let exec = require('child_process').exec;
let cp = require('child_process');
// let parentDir = path.resolve(path.join(__dirname, '/../'));
// let cmdStr = 'cd ' + parentDir + ';' + 'ls';
//
// exec(cmdStr, (err, stdout, stderr) => {
//   console.log(cmdStr);
//   if(err) {
//     console.log('get err: ' + stderr);
//   } else {
//     console.log(stdout);
//   }
// });

// console.log(process.cwd());
// process.chdir(__dirname + '/../');
// console.log(process.cwd());

// let cmdStr = 'http-server -p 9090';
// exec(cmdStr, (err, stdout, stderr) => {
//   console.log(cmdStr);
//   if(err) {
//     console.log('get err: ' + stderr);
//   } else {
//     console.log(stdout);
//   }
// });

process.chdir(__dirname + '/../');
console.log(process.cwd());
let cmd = process.platform === 'win32' ? 'http-server.cmd' : 'http-server';
console.log('running cmd: ' + cmd);
let server = cp.spawn('http-server', ['-p9999']);

server.stdout.on('data', function (data) {
  console.log('stdout: ' + data);
});

server.stderr.on('data', function (data) {
  console.log('stderr: ' + data);
});

server.on('close', function (code) {
  console.log('child process exited with code ' + code);
});
