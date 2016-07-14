var Q = require('q');
var readLine = require('lei-stream').readLine;
var writeLine = require('lei-stream').writeLine;

var inputFile_1 = 'input_1.txt';
var outputFile_1 = 'output_1.txt';
var output_1 = writeLine(outputFile_1, { cacheLines : 1000});

var inputFile_2 = 'input_2.txt';
var outputFile_2 = 'output_2.txt';
var output_2 = writeLine(outputFile_2, { cacheLines : 1000});

var q1 = Q.fcall(function(){
	readLine(inputFile_1).go(function(data, next){
		console.log('data1: ' + data);
		output_1.write(data, next);
	}, function(){
		console.log('inputFile_1 end.');
		output_1.write('add one line for file_1');
		output_1.end(function(){
			process.exit();
		});
	});
});

Q.all([q1]).then(function(){
	readLine(inputFile_2).go(function(data, next){
		console.log('data2: ' + data);
		output_2.write(data, next);
	}, function(){
		console.log('inputFile_2 end.');
		output_2.write('add one line for file_2');
		output_2.end(function(){
			process.exit();
		});
	});
});
