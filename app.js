#!/usr/bin/env node

'use strict';

const colors = require('colors');
const fs = require('fs');
const path = require('path');
const readline = require('readline');

const checks = require('./checks');

//Creates Write Stream and file with timestamp
const date = new Date();
const dDate = date.getDate();
const dMonth = date.getMonth()+1; //getMonth starts at 0
const dYear = date.getFullYear();
const dHour = date.getHours();
const dMinutes = date.getMinutes().toString().padStart(2, '0');
const dateFile = `${dDate}-${dMonth}-${dYear}_${dHour}-${dMinutes}.txt`;

const LOG_DIR = './logs';
//Creates segments of file path
const filepath = path.resolve(LOG_DIR, dateFile);

//Checks if file exists, if not - makes one
if (!fs.existsSync(LOG_DIR)){
	fs.mkdirSync(LOG_DIR);
}

//Creates log file in log folder
const logger = fs.createWriteStream(filepath, {
	flags: 'a' // 'a' means appending (old data will be preserved)
})

//Reads terminal for inputs and outputs
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
})

const FAIL = 'FAIL';
const PASS = 'PASS';

//Instructions
console.log('Welcome to Inlight!\n'.cyan
	+ 'This is a problem solving game where you need to figure out the rules that we\'ve applied that determine whether an input PASSES or FAILS.\n'
 	+ 'We want you to enter different inputs and use your problem solving skills to determine what our rules are to make an input PASS.\n'
 	+ 'Good luck!'.cyan
 )

//https://stackoverflow.com/questions/24464404/how-to-readline-infinitely-in-node-js
function recursiveAsyncReadLine () {
	rl.question('\nPlease type your guess: ', function (guess) {
		if (guess === '') {
			console.log('Please provide an input! :)'.red);
		} else {
			const result = checks(guess);

			if (result) {
				console.log(`Your guess, ${guess} = ` + (PASS).green);	
				//Writes in log file
				logger.write(guess + ', ' + PASS + ', ');
			} else {
				console.log(`Your guess, ${guess} = ` + (FAIL).red);
				//Writes in log file
				logger.write(guess + ', ' + FAIL + ', ');
			}
		}
	    recursiveAsyncReadLine(); //Calling this function again to ask new question
  	})
}

recursiveAsyncReadLine(); //we have to actually start our recursion somehow
