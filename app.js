#!/usr/bin/env node
'use strict';

//const program = require('commander');
const readline = require('readline');
var colors = require('colors');
var fs = require('fs');

//Instructions
console.log("Welcome to Inlight!\n".cyan
	+ "This is a problem solving game where you need to figure out the 4 rules that we've applied that determine whether an input PASSES or FAILS.\n"
 	+ "We want you to enter different inputs and use your problem solving skills to determine what our rules are to make an input PASS.\n"
 	+ "Good luck!".cyan
 );

var logger = fs.createWriteStream('nodeGameLog.txt', {
  flags: 'a' // 'a' means appending (old data will be preserved)
})

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function checkPalindrome(guess) {
  	return guess == guess.split('').reverse().join('');
};

function checkSumOfDigits(guess) {
	var sum = 0;
	while(guess){
		sum += guess % 10;
		guess = Math.floor(guess / 10);
	};
	return sum;
};

//https://stackoverflow.com/questions/24464404/how-to-readline-infinitely-in-node-js
var recursiveAsyncReadLine = function () {
  rl.question('\nPlease input your guess: ', function (guess) {
  	var result = "PASS".green;

  	//Condition 1 - Fails if it IS NOT a number
    if (isNaN(guess)) 
    {
    	result = "FAIL".red;

    };

	//Condition 2 - Fails if it IS NOT odd
	if (guess % 2 == 0) //remainder is 0 
	{
		result = "FAIL".red;
	};

	//Condition 3 - Fails if it IS NOT a palindrome
	if (checkPalindrome(guess) != true)
	{
		result = "FAIL".red;
	};

	//Condition 4 - Fails if sum of all digits IS GREATER THAN 7
	if (checkSumOfDigits(guess) > 7)
	{
		result = "FAIL".red;
	};

	logger.write(guess + ", ");

    console.log(`Your guess, ${guess} = ` + result);

    recursiveAsyncReadLine(); //Calling this function again to ask new question
  });
};

recursiveAsyncReadLine(); //we have to actually start our recursion somehow
