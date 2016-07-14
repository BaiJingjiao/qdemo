'use strict';

const readLine = require('lei-stream').readLine;
const writeLine = require('lei-stream').writeLine;

const inputFile_1 = 'input_1.txt';
const outputFile_1 = 'output_1.txt';
const output_1 = writeLine(outputFile_1, { cacheLines: 1000 });

const inputFile_2 = 'input_2.txt';
const outputFile_2 = 'output_2.txt';
const output_2 = writeLine(outputFile_2, { cacheLines: 1000 });

const p1 = new Promise((resolve, reject) => {
	readLine(inputFile_1).go((data, next) => {
		console.log('data1: ' + data);
		output_1.write(data, next);
	}, (err) => {
		if (err) return reject(err);
		console.log('inputFile_1 end.');
		output_1.write('add one line for file_1');
		output_1.end(() => resolve());
	});
});

Promise.all([p1]).then(() => {
	return new Promise((resolve, reject) => {
		readLine(inputFile_2).go((data, next) => {
			console.log('data2: ' + data);
			output_2.write(data, next);
		}, (err) => {
			if (err) return reject(err);
			console.log('inputFile_2 end.');
			output_2.write('add one line for file_2');
			output_1.end(() => resolve());
		});
	});
}).catch(err => console.log('catch ', err));